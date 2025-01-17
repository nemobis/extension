import { Category, Store } from '../stores'
import { amazonDevicesStores } from './_amazon-devices'

export const stores: Store[] = [
  ...amazonDevicesStores,
  {
    title: 'betterworldbooks.com',
    url: 'https://www.betterworldbooks.com/search/results?q=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'bookshop.org',
    url: 'https://bookshop.org/books?keywords=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/us/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=en&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'ethicalbooksearch.com',
    url: 'https://www.ethicalbooksearch.com/us?source=amazon-alternatives-extension&query=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS, Category.DIGITAL_TEXT],
  },
  {
    title: 'ebuyer.com',
    url: 'https://www.ebuyer.com/search?q=%1$s',
    categories: [Category.ELECTRONICS, Category.COMPUTERS, Category.APPLE_DEVICES],
  },
  {
    title: 'newegg.com',
    url: 'https://www.newegg.com/p/pl?d=%1$s',
    categories: [
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.SOFTWARE,
      Category.DVD,
      Category.TOYS,
      Category.VIDEOGAMES,
      Category.SOFTWARE,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.SHOES,
      Category.DIY,
      Category.FASHION,
      Category.LUGGAGE,
      Category.WATCHES,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
  {
    title: 'walmart.com',
    url: 'https://www.walmart.com/search/?query=%1$s',
    categories: [
      Category.AUTOMOTIVE,
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.POPULAR,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
      Category.LUGGAGE,
      Category.BEAUTY,
      Category.LUXURY_BEAUTY,
      Category.JEWELRY,
      Category.DIY,
      Category.BABY,
      Category.TOYS,
      Category.OFFICE_PRODUCTS,
      Category.GROCERY,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
  {
    title: 'rakuten.com',
    url: 'https://www.rakuten.com/search/all.htm?query=&position=submit&type=suggest&store_name=%1$s',
    categories: [
      Category.AUTOMOTIVE,
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.POPULAR,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
      Category.LUGGAGE,
      Category.BEAUTY,
      Category.LUXURY_BEAUTY,
      Category.JEWELRY,
      Category.DIY,
      Category.BABY,
      Category.TOYS,
      Category.OFFICE_PRODUCTS,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
  {
    title: 'target.com',
    url: 'https://www.target.com/s?searchTerm=%1$s',
    categories: [
      Category.AUTOMOTIVE,
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.POPULAR,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
      Category.LUGGAGE,
      Category.BEAUTY,
      Category.LUXURY_BEAUTY,
      Category.JEWELRY,
      Category.DIY,
      Category.BABY,
      Category.TOYS,
      Category.OFFICE_PRODUCTS,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
  {
    title: 'macys.com',
    url: 'https://www.macys.com/shop/featured/%1$s',
    categories: [
      Category.AUTOMOTIVE,
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.POPULAR,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
      Category.LUGGAGE,
      Category.BEAUTY,
      Category.LUXURY_BEAUTY,
      Category.JEWELRY,
      Category.DIY,
      Category.BABY,
      Category.TOYS,
      Category.OFFICE_PRODUCTS,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
  {
    title: 'bestbuy.com',
    url: 'https://www.bestbuy.com/site/searchpage.jsp?st=%1$s&_dyncharset=UTF-8&_dynSessConf=&id=pcat17071&type=page&sc=Global&cp=1&nrp=&sp=&qp=&list=n&af=true&iht=y&usc=All+Categories&ks=960&keys=keys',
    categories: [
      Category.AUTOMOTIVE,
      Category.ELECTRONICS,
      Category.COMPUTERS,
      Category.APPLE_DEVICES,
      Category.APPLIANCES,
      Category.KITCHEN,
      Category.POPULAR,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
      Category.LUGGAGE,
      Category.BEAUTY,
      Category.LUXURY_BEAUTY,
      Category.JEWELRY,
      Category.DIY,
      Category.BABY,
      Category.TOYS,
      Category.OFFICE_PRODUCTS,
      Category.GARDEN,
      Category.PHOTO,
      Category.APPAREL,
      Category.CLOTHING,
    ],
  },
]
