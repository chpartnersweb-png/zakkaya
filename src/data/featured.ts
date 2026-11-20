import colorful from '../assets/IMG_1022.JPG';
import pastel from '../assets/IMG_1014.JPG';
import boxes from '../assets/IMG_1020.JPG';
import mellojoyPhoto from '../assets/93042.jpg';

// トレンドが変わったら、このファイルの内容と写真を差し替えます。
// 店舗紹介やページ全体の構成から独立した特集データです。
export const featured = {
  seoSummary: '手作りスクイーズ体験や、幸町の雑貨屋のオリジナルスクイーズ、メロジョイを紹介しています。',
  handmade: {
    lead: '「好き」をぎゅっと、じぶんだけの一個に。',
    introduction: '幸町の雑貨屋では、スクイーズづくりを体験できます。「こんなのが好き！」という気持ちをかたちにして、自分だけのスクイーズを作ってみませんか？',
    photo: { image: pastel, alt: 'ピンク、水色、白、ラベンダー色の個包装のスクイーズ' },
  },
  original: {
    introduction: '幸町の雑貨屋のオリジナルブランドのスクイーズです。気になる形を手に取って、ぎゅっと握ったときのやわらかな感触をお楽しみください。',
  },
  mellojoy: {
    introduction: 'メロジョイ（Mellojoy）のスクイーズをご紹介します。お寿司をモチーフにした「極み・鮨」や「BUBBLE BUDDIES」など、シリーズごとに異なるデザインも魅力です。',
    photo: { image: mellojoyPhoto, alt: '店頭に並ぶメロジョイの「極み・鮨」と「BUBBLE BUDDIES」のパッケージ' },
  },
  photos: [
    { image: colorful, alt: 'お菓子や動物など、さまざまな形のスクイーズが並ぶ様子', caption: '見つける時間も、わくわく。', position: 'center 58%' },
    { image: boxes, alt: 'カラフルなボックス商品が並ぶ店内の棚', caption: '箱を開ける前から、楽しみ。', position: 'center 65%' },
  ],
};
