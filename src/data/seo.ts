import { siteUrl } from '../config/seo.mjs';
import { shop, mapUrl } from './shop';
import { featured } from './featured';

const location = `${shop.postalAddress.addressRegion}${shop.postalAddress.addressLocality}`;
const storeDescription = `${location}の「${shop.name}」。その時々のトレンド雑貨や、キーホルダー・めじるしチャーム用のDIYパーツを販売。ギフトラッピングにも対応しています。営業時間${shop.hours}、定休日は${shop.closed}です。`;

export const seo = {
  title: `${shop.name}｜${location}のトレンド雑貨・DIYパーツ`,
  description: `${location}の「${shop.name}」。トレンド雑貨やキーホルダー・めじるしチャーム用のDIYパーツを販売。${featured.seoSummary}営業時間${shop.hours}、${shop.closed}。駐車場${shop.parking}、${shop.payments}対応。`,
  canonical: siteUrl,
  // 実際に掲載している写真を利用。生成したヒーロー画像は店舗写真にしません。
  socialPhoto: featured.photos[0],
};

export function structuredData(imageUrl: string) {
  const storeId = new URL('#store', siteUrl).href;
  const websiteId = new URL('#website', siteUrl).href;
  const webpageId = new URL('#webpage', siteUrl).href;
  const imageId = new URL('#primaryimage', siteUrl).href;
  const telephone = `+81-${shop.phone.slice(1)}`;
  const instagram = new URL(shop.instagram);
  instagram.search = '';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Store',
        '@id': storeId,
        name: shop.name,
        url: siteUrl,
        description: storeDescription,
        telephone,
        faxNumber: telephone,
        address: { '@type': 'PostalAddress', ...shop.postalAddress },
        image: imageUrl,
        hasMap: mapUrl,
        sameAs: [instagram.href],
        currenciesAccepted: 'JPY',
        paymentAccepted: shop.payments,
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          ...shop.openingTimes,
        }],
        mainEntityOfPage: { '@id': webpageId },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: shop.name,
        inLanguage: 'ja',
        publisher: { '@id': storeId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: siteUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: 'ja',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': storeId },
        primaryImageOfPage: { '@id': imageId },
      },
      {
        '@type': 'ImageObject',
        '@id': imageId,
        url: imageUrl,
        contentUrl: imageUrl,
        width: 1200,
        height: 630,
        caption: seo.socialPhoto.alt,
      },
    ],
  };
}
