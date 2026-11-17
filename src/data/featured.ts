import colorful from '../assets/IMG_1022.JPG';
import pastel from '../assets/IMG_1014.JPG';
import boxes from '../assets/IMG_1020.JPG';

// トレンドが変わったら、このファイルの内容と写真を差し替えます。
// 店舗紹介やページ全体の構成から独立した特集データです。
export const featured = {
  label: '今の注目アイテム',
  seoSummary: '「世界一のスクイーズが作れる」をテーマに、オリジナルのスクイーズづくりの楽しさをお届けします。',
  english: 'MAKE YOUR OWN SQUEEZE!',
  title: ['世界一の', 'スクイーズが作れる'],
  introduction: '「こんなのが好き！」を、ぎゅっとひとつに。自分だけのとっておきを作る、スクイーズの楽しさを幸町の雑貨屋で。',
  detail: '店内でもスクイーズを製作しています。オリジナルのスクイーズに加えて、工場から直接仕入れた商品や、開けるまで中身がわからないブラインドボックスも。作る楽しさも、見つけるわくわくも、ここにあります。',
  note: '写真は取り扱い商品の一例です。最新の商品情報はInstagramをご覧ください。',
  photos: [
    { image: colorful, alt: 'お菓子や動物など、さまざまな形のスクイーズが並ぶ様子', caption: '見つける時間も、わくわく。', position: 'center 58%' },
    { image: pastel, alt: 'ピンク、水色、白、ラベンダー色の個包装のスクイーズ', caption: '色も、かたちも、いろいろ。', position: 'center 40%' },
    { image: boxes, alt: 'カラフルなボックス商品が並ぶ店内の棚', caption: '箱を開ける前から、楽しみ。', position: 'center 65%' },
  ],
  items: [
    { number: '01', title: '作る、とっておき。', description: '「好き」をかたちにする、オリジナルのスクイーズ。自分だけのお気に入りを。' },
    { number: '02', title: '見つける、わくわく。', description: '工場から直接仕入れた、種類豊富なスクイーズも取りそろえています。' },
    { number: '03', title: 'ブラインドボックス', description: '開けるまで中身はお楽しみ。出会う瞬間もわくわく。' },
  ],
};
