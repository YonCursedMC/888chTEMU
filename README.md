# Overseas Forum Curated Archive (海外掲示板まとめテンプレート)

海外の掲示板（Reddit / Hacker News 風）の話題スレッドをスタイリッシュにまとめた**閲覧専用（Read-Only）のWebテンプレート**です。

長時間の閲覧でも目が疲れない**洗練されたスレートグレー基調**のデザインで、ホームページや複雑なポータルを省き、**スレッドの「会話の流れ」と「写真」**に特化しています。

HTMLを直接編集する必要はなく、**設定ファイル（`config.js`）を書き換えるだけ**で、タイトル、本文、写真、会話（コメント）を自由に変更できます！

---

## 主な特徴

1. **`config.js` による簡単カスタマイズ**
   - HTMLタグを触る必要なし！設定ファイルのテキストや画像URLを書き換えるだけでサイト全体が更新されます。
2. **洗練されたグレーデザイン (Industrial & Slate Grays)**
   - 深みのあるグレー背景（`#121418`, `#1a1d24`）と視認性の高いハイコントラストなタイポグラフィ。
3. **完全閲覧専用（まとめ特化）**
   - コメント入力欄や返信フォームは一切ありません。「Archived / Locked」された静的スレッドとして読書に集中できます。
4. **英語が基本のUI**
   - OP (Original Poster)、Upvotes、MOD PIN、Flairタグ、タイムスタンプなど本場の海外フォーラム仕様。
5. **写真・画像の掲載に対応**
   - スレッド冒頭のメイン写真
   - 複数枚の写真グリッド（ギャラリー）
   - コメント（会話）内のインライン写真
   - クリックで拡大できる**ライトボックス（拡大ビューアー）機能**付き
6. **会話の折りたたみ機能**
   - 各コメントの右上にある `[-]` を押すと、そのコメントおよび返信ツリーをコンパクトに折りたためます。
7. **文字サイズ調整＆リンクコピー機能**
   - ヘッダー右上の「Text Size」ボタンで文字サイズをワンクリック切り替え可能。
8. **GitHub Pages（GitHub Sites）完全対応**
   - ビルド不要の静的HTML/CSS/JS構成。
   - 相対パス設計により、どのリポジトリ名でも即座に動作します。ローカルで `index.html` を直接ダブルクリックしても問題なく動きます。

---

## 📁 ファイル構成

```
.
├── config.js         # ★ここにスレッドの内容・写真・会話を記述する設定ファイル
├── index.html        # スレッド本体HTML
├── css/
│   └── style.css     # スレートグレー基調のCSS
├── js/
│   └── app.js        # config.jsのデータを描画＆ライトボックス・折りたたみ制御
├── .nojekyll         # GitHub Pages用のJekyll除外設定
└── README.md         # ガイドライン（このファイル）
```

---

## 🛠️ `config.js` の設定方法

`config.js` を開くと、以下のように分かりやすい設定項目が並んでいます。必要な部分を書き換えるだけで反映されます。

### 1. スレッド本文と写真の設定 (`thread`)

```javascript
thread: {
  subreddit: "r/RetroHardware",            // カテゴリ名
  flair: "OC • TEARDOWN",                  // タグ
  author: "u/CyberArchivist_89",           // スレッド主のユーザー名
  timeAgo: "14 hours ago",                 // 投稿時間
  score: "4,812",                          // 投票スコア
  commentCount: "184 Curated Comments",    // コメント数表示
  title: "スレッドのタイトル...",

  // 本文（段落ごとに "" で囲んで配列にします）
  bodyParagraphs: [
    "段落1の本文テキスト...",
    "段落2の本文テキスト..."
  ],

  // メイン写真（不要な場合は null にします）
  mainImage: {
    url: "https://images.unsplash.com/... または ./images/myphoto.jpg",
    alt: "画像の説明",
    caption: "Fig 1.1: 写真のキャプション"
  },

  // 引用テキスト（不要な場合は null）
  quote: "引用したい文章...",

  // 複数枚のサブ写真ギャラリー（不要な場合は []）
  galleryImages: [
    {
      url: "画像のURL",
      caption: "Fig 1.2: 写真2のキャプション"
    }
  ],

  // 締めくくりの文章
  conclusion: "まとめの一言など..."
}
```

### 2. 写真の指定方法
- **外部の写真URLを使う場合**: `url: "https://example.com/photo.jpg"`
- **手元の写真ファイルを載せる場合**:
  リポジトリ内に `images/` フォルダを作り、その中に写真（例: `photo1.jpg`）を入れて、`url: "./images/photo1.jpg"` と指定します。

### 3. 会話（コメントツリー）の設定 (`comments`)

`comments` 配列の中に、発言者の情報を並べます。`replies` 配列の中にコメントを入れることで、何階層でも返信ツリーをネストできます。

```javascript
comments: [
  {
    author: "u/HardwareHistorian",
    avatar: "MOD",             // アバターのイニシャル（2〜3文字）
    avatarBg: "#065f46",       // アバターの背景色（省略時は標準グレー）
    role: "mod",               // "mod" | "op" | "" (空文字なら一般ユーザー)
    roleBadgeText: "MOD PIN",  // バッジに表示する文字
    isPinned: true,            // trueにすると緑色枠の注目固定コメントになります
    score: "2,109 pts",
    timeAgo: "13 hours ago",
    content: `
      <p>コメント本文。HTMLタグ（<strong>太字</strong>や<code>コード</code>）も使えます。</p>
    `,
    image: null,               // 写真がない場合は null
    replies: [                 // 返信コメントの配列
      {
        author: "u/CyberArchivist_89",
        avatar: "OP",
        avatarBg: "#1e3a8a",
        role: "op",            // OP（スレッド主）の返信
        roleBadgeText: "OP",
        score: "1,450 pts",
        timeAgo: "12 hours ago",
        content: `<p>返信コメント本文...</p>`,
        // コメントの中に写真を添付する場合:
        image: {
          url: "https://images.unsplash.com/...",
          caption: "写真のキャプション"
        },
        replies: []            // さらに返信があればここに追加
      }
    ]
  }
]
```

---

## 🚀 GitHub Pages への公開手順

1. **変更をコミットしてGitHubにプッシュする**:
   ```bash
   git add .
   git commit -m "Update thread content in config.js"
   git push origin main
   ```
2. **GitHubリポジトリのWebページを開く**:
   - リポジトリの **[Settings]** タブをクリックします。
3. **Pages設定を開く**:
   - 左側メニューの **[Pages]** をクリックします。
4. **公開元を指定する**:
   - **Source**: `Deploy from a branch` を選択。
   - **Branch**: `main`、フォルダは `/ (root)` を選択して **[Save]** をクリック。
5. 数十秒〜1分ほどで `https://<あなたのユーザー名>.github.io/<リポジトリ名>/` にサイトが公開されます！
