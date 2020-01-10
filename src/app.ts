const Honeybadger = require('honeybadger-js')
import { getStores, Category, Website } from './helpers/stores'
import { getTranslations } from './helpers/i18n'

Honeybadger.configure({ apiKey: '06240932' })

window['browser'] = (function() {
  return (window as any).msBrowser || (window as any).browser || (window as any).chrome
})()

function main() {
  const category = document?.querySelector('#nav-subnav')?.getAttribute('data-category') as Category
  const { search, isBook } = getSearch(category)
  const stores = getStores(category, search)
  if (stores.length === 0) {
    console.log('not store found, exiting...')
    return
  }

  attachStores(stores, isBook)

  window['browser'].runtime.sendMessage({ url: stores[0].url })
}

function getSearch(category: Category): SearchResult {
  let search

  if ([Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS].includes(category)) {
    const nodes = Array.from(document.querySelectorAll('.content li'))
    const isbnNode = nodes.find(node => node.textContent?.includes('ISBN-13'))
    if (!isbnNode) {
      return { search: '', isBook: false }
    }

    search = isbnNode.textContent
      ?.split(': ')[1]
      .replace('-', '')
      .trim()

    return {
      search: search || '',
      isBook: true,
    }
  }

  search = document
    ?.querySelector('[id$="roductTitle"] ')
    ?.textContent?.trim()
    .replace('-', '')
    .split(' ')
    .slice(0, 4)
    .join(' ')
    .trim()

  return {
    search: search || '',
    isBook: false,
  }
}

function attachStores(stores: Website[], isBook: boolean) {
  const translations = getTranslations(isBook)
  const storeLinks = stores.map(store => `<li><a href="${store.url}" target="_blank">${store.title}</a></li>`)
  const startNode = getStartNode()
  if (!startNode) {
    return
  }

  setStyle(startNode, translations)

  const parentNode = startNode?.parentNode?.parentNode?.parentNode
  const divNode = document.createElement('div')
  divNode.id = 'uak-button'
  divNode.classList.add('a-button-stack')
  divNode.innerHTML = `
      <span class="a-button a-spacing-small a-button-primary a-button-icon">
        <span class="a-button-inner">
        <i class="a-icon a-icon-1click"></i>
          <span class="a-button-text" aria-hidden="true">${translations.button}</span>
        </span>
      </span>

      <div id="uak-stores-modal" style="z-index: 1000">
        <ul>${storeLinks.join(' ')}</ul>
      </div>
  `

  parentNode?.parentNode?.insertBefore(divNode, parentNode)
}

function getStartNode(): HTMLElement | null {
  let startNode = document.getElementById('add-to-cart-button')

  if (!startNode) {
    startNode = document.getElementById('buybox-see-all-buying-choices-announce')
  }

  if (!startNode) {
    startNode = document.getElementById('one-click-button')
  }

  return startNode
}

function setStyle(startNode, translations) {
  startNode.style.cursor = 'help'

  const buyButton = startNode?.parentNode?.parentNode as HTMLElement
  buyButton.classList.remove('a-button-primary', 'a-button-oneclick')
  buyButton.addEventListener(
    'click',
    (e: Event) => {
      if (window.confirm(translations.confirm) === false) {
        e.preventDefault()
        return
      }
    },
    false,
  )

  const buyNow = document.getElementById('buyNow')
  if (buyNow) {
    buyNow.remove()
  }
}

main()

interface SearchResult {
  search: string
  isBook: boolean
}
