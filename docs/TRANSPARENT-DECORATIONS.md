# 透過装飾素材（2026年11月17日）

ユーザー添付の IMG_1121.JPG / IMG_1116.JPG はデザイン参考として使用しました。添付画像そのものをページ背景に貼り付けず、雑貨を模した透過装飾を新しく生成しています。

- 生成方法：内蔵 ImageGen（CLI/APIフォールバック未使用）
- 生成指定：transparent_background: true
- 保存先：`src/assets/decorations/charm-garland.png`、`src/assets/decorations/charm-cluster.png`
- 共通表示：`src/components/Decoration.astro`。Astro ImageでWebP化する構成です。
- 配置：ヒーロー、お店紹介、スクイーズ特集、サービス、Instagram案内
- ガーランド：紫のスマイルフラワー、ピンクと青の金具、虹色ビーズ、ハート、星、透明ポーチ
- チャームクラスター：白黒のスマイルフラワー、紫のリボン、ピンクのハート、金具、水色のくま
- 生成素材は装飾用です。実在の在庫や店内写真として扱いません。スクイーズ特集には既存の商品写真を継続使用します。
- 背景の白黒チェック、文字の縁取り、カードの枠線や影はCSSで作成しています。

## 最終プロンプト：charm-garland.png

```text
Use case: product-mockup
Asset type: transparent decorative PNG collage for a colorful Japanese variety shop website.
Primary request: Make one lavish horizontal garland collage of shiny, tactile cute DIY keychain charms arranged in an organic curving band. Photorealistic studio flat-lay cutout. Include a large purple six-petal smiling flower charm with a sunny yellow face, hot pink and electric blue chunky plastic snap hooks, a short rainbow bead loop, a silver keyring, translucent pink and purple hearts, neon yellow and lime rings, a tiny clear zipper pouch containing pink and aqua gummy bear shaped beads, orange flower ring, and shiny star charms.
Composition: wide landscape, all objects fully visible with generous transparent margin, occupying the lower two thirds with a loose arch; playful varied sizes and overlapping clusters, no rigid rows. Real transparent background including all gaps between objects. This is only the objects, without any surface or background; no checkerboard, no text.
Style: highly realistic glossy acrylic and translucent resin, saturated Y2K Japanese candy shop colors, soft studio highlights, crisp clean cutout edges. No logos, no brand names, no lettering, no watermarks, no people. Objects can have subtle attached shadows but no ground plane. Save as a transparent image.
```

## 最終プロンプト：charm-cluster.png

```text
Use case: product-mockup
Asset type: transparent decorative PNG collage for a colorful Japanese variety shop website.
Primary request: One compact diagonal cluster of charming glossy small goods, including a white and black spotted six-petal flower keychain with yellow smiling face, a shiny hot pink plastic snap hook and silver chain, a translucent lavender bow, two translucent candy pink hearts, one turquoise gummy bear charm and a bright yellow ring. Fun realistic acrylic DIY parts.
Composition: square, diagonal from lower left to upper right, asymmetrical and loose with open space around all outer edges, objects grouped attractively, entirely visible. Genuine transparent background including all internal gaps, isolated objects only, no tabletop, no checkerboard, no backdrop.
Style: photorealistic studio cutout product collage, vibrant candy colors, glossy tactile acrylic surfaces, silver reflections, clear sharp edges. No text, no lettering, no logos, no watermarks, no people. Save as a transparent image.
```

ユーザーの指示により、実装後のビルド、型チェック、ブラウザー表示・動作確認は実施しません。

