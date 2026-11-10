import colorful from '../assets/IMG_1022.JPG';
import pastel from '../assets/IMG_1014.JPG';
import boxes from '../assets/IMG_1020.JPG';

// トレンドが変わったら、このファイルの内容と写真を差し替えます。
// 店舗紹介やページ全体の構成から独立した特集データです。
export const featured = {
  label: '今の注目アイテム',
  seoSummary: '今の注目アイテムは、種類豊富なスクイーズ。',
  english: 'Squeeze!',
  title: ['むぎゅっと、', 'ときめくスクイーズ。'],
  introduction: '今、お店で力を入れているのが、種類豊富なスクイーズ。見た目もさわり心地も、お気に入りを探す時間から楽しめます。',
  detail: '工場から直接仕入れた商品に加え、オリジナルのスクイーズや、開けるまで中身がわからないブラインドボックスも取り扱っています。スクイーズは店内でも製作しています。',
  note: '写真は取り扱い商品の一例です。最新の商品情報はInstagramをご覧ください。',
  photos: [
    { image: colorful, alt: 'お菓子や動物など、さまざまな形のスクイーズが並ぶ様子', caption: '見つける時間も、わくわく。', position: 'center 58%' },
    { image: pastel, alt: 'ピンク、水色、白、ラベンダー色の個包装のスクイーズ', caption: '色も、かたちも、いろいろ。', position: 'center 40%' },
    { image: boxes, alt: 'カラフルなボックス商品が並ぶ店内の棚', caption: '箱を開ける前から、楽しみ。', position: 'center 65%' },
  ],
  items: [
    { number: '01', title: '工場直仕入れ', description: '工場から直接仕入れた、種類豊富なスクイーズ。' },
    { number: '02', title: 'オリジナル', description: 'オリジナルのスクイーズも。店内でも製作しています。' },
    { number: '03', title: 'ブラインドボックス', description: '開けるまで中身はお楽しみ。出会う瞬間もわくわく。' },
  ],
};
