export const shop = {
  name: '幸町の雑貨屋',
  postalCode: '308-0848',
  address: '茨城県筑西市幸町1-26-10',
  phone: '0296-45-7718',
  phoneHref: 'tel:0296457718',
  hours: '10:00〜18:00',
  closed: '不定休',
  parking: '3〜4台',
  payments: '現金・PayPay',
  stations: '玉戸駅・大田郷駅からそれぞれ徒歩約20分',
  instagram: 'https://www.instagram.com/zakkaya1?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==',
  instagramLabel: 'Instagramで新商品・イベント情報を見る',
};

export const mapQuery = encodeURIComponent(`${shop.name} ${shop.address}`);
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(shop.address)}&z=16&output=embed&hl=ja`;

export const services = [
  { number: '01', icon: 'gift', en: 'Gift wrapping', title: '贈る気持ちも、かわいく。', name: 'ギフトラッピング', text: 'プレゼント用のギフトラッピングを承ります。ちょっとした贈りものにも、ぜひ。' },
  { number: '02', icon: 'card', en: 'Point card', title: '集める楽しみ、もうひとつ。', name: 'ポイントカード', text: 'ポイントを貯めるとプレゼントあり。お買いものの楽しみに、プラスのうれしさを。' },
  { number: '03', icon: 'truck', en: 'Delivery', title: 'お気に入りを、お届け。', name: '配送サービス', text: '佐川急便での発送に対応しています。配送については、お店へお問い合わせください。' },
] as const;

// 開催日や内容が決まり次第、この配列に追加してください。
export const events: { date: string; title: string; description: string }[] = [];
