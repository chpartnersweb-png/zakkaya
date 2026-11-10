# 幸町の雑貨屋 SEO設定

## 公開URLとタイトル

- 正規URL：`https://zakkaya.pages.dev/`
- ページタイトル：`幸町の雑貨屋｜茨城県筑西市のトレンド雑貨・DIYパーツ`
- 言語：日本語（`html lang="ja"`、`og:locale="ja_JP"`）

「筑西市の雑貨店」「トレンド雑貨」「キーホルダー・めじるしチャーム用DIYパーツ」という実際の所在地・取扱内容を自然に伝える構成です。スクイーズは差し替え可能な特集として説明文に含め、店舗名や恒久的なタイトルをスクイーズ専門店に変えていません。ヒーローのデザイン・コピー・アニメーションは維持しています。

## 実装内容

- `astro.config.mjs` に `site` と静的出力を設定
- canonicalを上記のHTTPS正規URLで出力
- タイトル・meta descriptionを店舗情報と特集データから生成
- OGPにサイト名・タイトル・説明・URL・共有画像・画像のサイズ・代替テキストを設定
- Xカードを `summary_large_image` で出力
- 現在の特集の先頭写真から、1200×630pxのJPEG共有画像をAstroでビルド時生成
- `Store`、`WebSite`、`WebPage`、`ImageObject`をJSON-LDで出力し、`@id`で関連付け
- 店舗の住所・電話・FAX・通常営業時間・支払い方法・公式Instagram・地図リンクを構造化データへ反映
- `robots.txt` でクロールを許可し、サイトマップの絶対URLを記載
- `sitemap.xml` に実在するトップページの正規URLだけを記載

本文はAstroの静的HTMLとして出力する構成を維持しています。JavaScriptを実行しないと店舗情報や商品説明が存在しない構成にはしていません。

口コミ評価、レビュー数、価格帯、緯度経度、個別商品の価格・在庫、確定していないイベントの日程は追加していません。サイトマップにも裏付けのない更新日、ページ内アンカー、`priority`、`changefreq`は追加していません。

## 更新するファイル

| 内容 | 更新先 |
| --- | --- |
| 公開ドメイン | `src/config/seo.mjs` の `siteUrl` |
| SEOタイトル・説明文の方針 | `src/data/seo.ts` |
| 住所・電話・営業時間・支払い方法・Instagram | `src/data/shop.ts` |
| 注目アイテムの紹介 | `src/data/featured.ts` の `seoSummary` |
| SNS共有写真 | `src/data/featured.ts` の `photos[0]`（先頭写真） |
| metaタグ・画像出力形式 | `src/components/Seo.astro` |

住所・通常営業時間は共通データから画面と構造化データの両方へ反映されます。不定休の具体的な日付が決まったときは、正確な案内を本文にも掲載したうえで、必要に応じて特別営業時間を追加してください。

## 公開後の作業

今回の作業はローカルソースへの実装です。Cloudflare Pagesへの再デプロイ、Search Consoleでの所有権確認、サイトマップ送信、インデックス登録リクエストは実施していません。

1. 通常の公開手順で、変更をCloudflare Pagesへ再デプロイします。
2. 公開後、正規URLのページソースと `robots.txt`、`sitemap.xml` が反映されているか確認します。
3. Google Search Consoleで `https://zakkaya.pages.dev/` のURLプレフィックスプロパティを登録・所有権確認します。確認用タグを使う場合はSearch Consoleが実際に発行した値を設定してください。
4. `https://zakkaya.pages.dev/sitemap.xml` をサイトマップとして送信します。
5. URL検査でトップページの公開状態・インデックス状況を確認し、必要に応じてインデックス登録をリクエストします。
6. 構造化データはGoogleのリッチリザルトテストで確認します。

構造化データやサイトマップの追加だけで、検索掲載・検索順位・リッチリザルト表示が保証されるわけではありません。検索での実際の表示は公開後に確認する必要があります。

## 検証状況

ユーザーの指示に従い、実装後のビルド・型チェック・ブラウザー表示確認は実施していません。公開URLの事前取得はWebツール側で失敗したため、現時点の公開HTML・HTTPヘッダー・検索インデックス状態も確認できていません。この取得失敗だけで、公開サイトの障害や検索エンジンからのアクセス不可とは判断していません。

## 参照した公式ドキュメント

- [Google：ローカルビジネスの構造化データ](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google：正規URLの指定](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google：サイトマップの作成と送信](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Astro：Routing](https://docs.astro.build/en/guides/routing/)
- [Astro：Image and Assets API](https://docs.astro.build/en/reference/modules/astro-assets/)
