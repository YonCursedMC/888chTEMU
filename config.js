/**
 * ============================================================================
 * OVERTHREAD - Thread Configuration File (スレッド設定ファイル)
 * ============================================================================
 * このファイルを編集するだけで、タイトル、本文、写真、会話（コメント）を
 * 簡単にカスタマイズできます。HTMLを直接触る必要はありません。
 * 
 * ※ ローカルで index.html を直接ダブルクリックして開いても、
 *   GitHub Pages にアップロードしても、どちらでも正常に動作します。
 */

const THREAD_CONFIG = {
  // サイト全体の基本設定
  site: {
    pageTitle: "[Archive] I found a version of Minecraft called TEMU! : r/CreepyMinecraft",
    archiveBadge: "CURATED ARCHIVE",
    threadId: "thread/283",
    subTitle: "English Forum Digest",
    noticeBanner: "This thread is locked & curated. Replies and inputs are disabled.",
    footerStatus: "Thread status: Archived • Read-Only",
    footerSub: "Curated Forum Archive Template • Built with static HTML/CSS/JS for GitHub Pages."
  },

  // スレッド主（OP: Original Poster）の投稿データ
  thread: {
    subreddit: "r/CreepyMinecraft",
    flair: "OC • TEARDOWN",
    author: "u/renai",
    timeAgo: "14 hours ago",
    score: "888",
    commentCount: "5 Curated Comments",
    title: "I found a version of Minecraft called TEMU!",

    // 本文（段落ごとに配列で指定）
    bodyParagraphs: [
      "I was browsing a Chinese website called TEMU and found this version of Minecraft for sale, so I bought it for $0! ​​It's this one..."
    ],

    // メイン写真（不要な場合は null に設定可能）
    mainImage: {
      url: "image/2026-09-20_10.23.12.png",
      alt: "TEMU Minecraft",
      caption: "TEMU Minecraft"
    },

    // 引用テキスト（不要な場合は null または空文字）
    quote: null,

    // サブ写真ギャラリー（複数枚並べる画像。不要な場合は空配列 []）
    galleryImages: [],

    // 本文の締めくくり段落
    conclusion: "Could someone look into this version further?"
  },

  // コメント・会話ストリーム（再帰的に何階層でも返信 replies をネストできます）
  comments: [
    {
      author: "u/HakUreI ReImu",
      avatar: "Hello",
      avatarBg: "#ff0000ff",
      role: "", // "mod" | "op" | ""
      roleBadgeText: "MOD PIN",
      isPinned: true,
      score: "-10 pts",
      timeAgo: "13 hours ago",
      content: `
        <p>Um, isn't that against the rules? Isn't it against Minecraft's terms of service to distribute it that way?<br>
        First, let me see the website.</p>
      `,
      image: null,
      replies: [
        {
          author: "u/Marisansan",
          avatar: "OP",
          avatarBg: "#eeff00ff",
          role: "op",
          roleBadgeText: "OP",
          score: "456484545844894156841584152849 pts",
          timeAgo: "15 hours ago",
          content: `
            <p>Um, is it this site...?<br>
            This site doesn't look like the real TEMU...<br>
            <a href="https://yoncursedmc.github.io/Minecraft_Temu/">https://yoncursedmc.github.io/Minecraft_Temu/</a><br>
            Can't you even tell the difference between the real thing and the fake???</p>
          `,
          // コメント内のインライン写真
          image: null,
          replies: [
            {
              author: "u/fulllllllan",
              avatar: "RF",
              avatarBg: "",
              role: "",
              score: "270 pts",
              timeAgo: "10 hours ago",
              content: `
                <p>Isn't this not TEMU?<br>
                I can't believe you'd think of buying it from a site like this.<br>
                It's free though. lol </p>
              `,
              image: {
                url: "image/2026-09-20 10.32.49.png"
              },
              replies: [
                {
                  author: "u/renai",
                  avatar: "OP",
                  avatarBg: "#00ff0dff",
                  role: "op",
                  roleBadgeText: "OP",
                  score: "-954 pts",
                  timeAgo: "11 hours ago",
                  content: `
                    <p>Is there no English version?<br>
                    Why is it only available in Japanese?<br>
                    Are they trying to deceive Japanese people?</p>
                  `,
                  image: {
                    url: "image/2026-09-20 10.36.00.png"
                  },
                  replies: [
                    {
                      author: "u/Long-legged Steve",
                      avatar: "L",
                      avatarBg: "#00e1ffff",
                      role: "",
                      roleBadgeText: "",
                      score: "99999999999999999999999999999899999999999999999999999 pts",
                      timeAgo: "16 hours ago",
                      content: `
                        <p>I downloaded it.<br>
                        Did everyone else download it?<br>
                        Actually, this site looks like a download site disguised as TEMU.<br>
                        Isn't the person who made this crazy?</p>
                      `,
                      replies: [
                        {
                          author: "u/renai",
                          avatar: "OP",
                          avatarBg: "#00ff0dff",
                          role: "op",
                          roleBadgeText: "OP",
                          score: "-953 pts",
                          timeAgo: "15 hours ago",
                          content: `
                            <p>It started up successfully.<br>
                            Apparently, it launches using PrismLauncher.
                            There's some weird music playing.<br>
                            Why is there Chinese music in a Japanese game?<br>
                            I can't change the language.</p>
                          `,
                          image: {
                            url: "image/2026-09-20_10.23.12.png"
                          },
                          replies: [
                            {
                              author: "u/renai",
                              avatar: "OP",
                              avatarBg: "#00ff0dff",
                              role: "op",
                              roleBadgeText: "OP",
                              score: "-953 pts",
                              timeAgo: "15 hours ago",
                              content: `
                                <p>I hear some kind of voice...<br>
                                It's in English...</p>
                              `,
                              image: {
                                url: "image/2026-09-20_10.47.25.png"
                              },
                              replies: [
                                {
                                  author: "u/Long-legged Steve",
                                  avatar: "L",
                                  avatarBg: "#00e1ffff",
                                  role: "",
                                  roleBadgeText: "",
                                  score: "999999999999999999999999999998999999999999999999999910 pts",
                                  timeAgo: "15 hours ago",
                                  content: `
                                        <p>I don't understand Japanese.</p>
                                      `,
                                  image: {
                                    url: "image/2026-09-20_10.49.44.png"
                                  },
                                  replies: [
                                    {
                                      author: "u/Long-legged Steve",
                                      avatar: "L",
                                      avatarBg: "#00e1ffff",
                                      role: "",
                                      roleBadgeText: "",
                                      score: "999999999999999999999999999998999999999999999999999910 pts",
                                      timeAgo: "15 hours ago",
                                      content: `
                                            <p>Doesn't this setting seem pointless?</p>
                                          `,
                                      image: {
                                        url: "image/2026-09-20_10.51.06.png"
                                      },
                                      replies: [
                                        {
                                          author: "u/renai",
                                          avatar: "OP",
                                          avatarBg: "#00ff0dff",
                                          role: "op",
                                          roleBadgeText: "OP",
                                          score: "-953 pts",
                                          timeAgo: "15 hours ago",
                                          content: `
                                                <p>It looks like a normal world, but that logo has been moving around and it's really annoying me.<br>
                                                Also, it seems to move a little too fast.</p>
                                              `,
                                          image: {
                                            url: "image/2026-09-20_10.52.36.png"
                                          },
                                          replies: [
                                            {
                                              author: "u/Long-legged Steve",
                                              avatar: "L",
                                              avatarBg: "#00e1ffff",
                                              role: "",
                                              roleBadgeText: "",
                                              score: "999999999999999999999999999998999999999999999999999910 pts",
                                              timeAgo: "15 hours ago",
                                              content: `
                                                    <p>It's unusual to see GPU information displayed.<br>
                                                    I wonder what the base model is.<br>
                                                    It'll reveal that I'm using an ARC B570.</p>
                                                  `,
                                              image: {
                                                url: "image/2026-09-20_10.55.50.png"
                                              },
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      author: "u/fulllllllan",
      avatar: "RF",
      avatarBg: "",
      role: "",
      score: "270 pts",
      timeAgo: "10 hours ago",
      content: `
            <p>The replies are getting a bit long, so I'll split it up here.<br>
            By the way, I've been wondering, are Long Legged Steve and renai the same person...?</p>
          `,
      replies: [
        {
          author: "u/renai",
          avatar: "OP",
          avatarBg: "#00ff0dff",
          role: "op",
          roleBadgeText: "OP",
          score: "-953 pts",
          timeAgo: "15 hours ago",
          content: `
                <p>Oops, that's enough.<br>
                ...Wait...?</p>
              `,
          replies: [
            {
              author: "u/Long-legged Steve",
              avatar: "L",
              avatarBg: "#00e1ffff",
              role: "",
              roleBadgeText: "",
              score: "999999999999999999999999999998999999999999999999999910 pts",
              timeAgo: "15 hours ago",
              content: `
                    <p>...Wait...?</p>
                  `,
              replies: [
                {
                  author: "u/renai",
                  avatar: "OP",
                  avatarBg: "#00ff0dff",
                  role: "op",
                  roleBadgeText: "OP",
                  score: "-953 pts",
                  timeAgo: "15 hours ago",
                  content: `
                        <p>More importantly, a one-eyed Steve just appeared, and something came out!</p>
                      `,
                  image: {
                    url: "image/2026-09-20_11.02.56.png"
                  },
                  replies: [
                    {
                      author: "u/renai",
                      avatar: "OP",
                      avatarBg: "#00ff0dff",
                      role: "op",
                      roleBadgeText: "OP",
                      score: "-953 pts",
                      timeAgo: "15 hours ago",
                      content: `
                            <p>Wow, what is this?</p>
                          `,
                      image: {
                        url: "image/2026-09-20_11.05.10.png"
                      },
                      replies: [
                        {
                          author: "u/Marisansan",
                          avatar: "M",
                          avatarBg: "#e5ff00ff",
                          role: "",
                          roleBadgeText: "",
                          score: "-953 pts",
                          timeAgo: "15 hours ago",
                          content: `
                                <p>This is an advertisement.<br>You can see for yourself.</p>
                              `,
                          replies: [
                            {
                              author: "u/long_legged_Steve",
                              avatar: "L",
                              avatarBg: "#00e1ffff",
                              role: "",
                              roleBadgeText: "",
                              score: "999999999999999999999999999998999999999999999999999910 pts",
                              timeAgo: "15 hours ago",
                              content: `
                                    <p>A strange cow appeared and I got something, what is this?</p>
                                  `,
                              image: {
                                url: "image/2026-09-20_11.07.20.png"
                              },
                              replies: [
                                {
                                  author: "u/renai",
                                  avatar: "OP",
                                  avatarBg: "#00ff0dff",
                                  role: "op",
                                  roleBadgeText: "OP",
                                  score: "-952 pts",
                                  timeAgo: "15 hours ago",
                                  content: `
                                        <p>Whoa... this is bad...</p>
                                        <p>Would TEMU really do something like that...?</p>
                                      `,
                                  image: {
                                    url: "image/image.png"
                                  },
                                  replies: [
                                    {
                                      author: "u/renai",
                                      avatar: "OP",
                                      avatarBg: "#00ff0dff",
                                      role: "op",
                                      roleBadgeText: "OP",
                                      score: "-952 pts",
                                      timeAgo: "15 hours ago",
                                      content: `
                                            <p>???</p>
                                          `,
                                      image: {
                                        url: "image/image0.png"
                                      },
                                      replies: [
                                        {
                                          author: "u/fulllllllan",
                                          avatar: "RF",
                                          avatarBg: "",
                                          role: "",
                                          score: "270 pts",
                                          timeAgo: "10 hours ago",
                                          content: `
                                                <p>That's great!</p>
                                              `,
                                          replies: [
                                            {
                                              author: "u/renai",
                                              avatar: "OP",
                                              avatarBg: "#00ff0dff",
                                              role: "op",
                                              roleBadgeText: "OP",
                                              score: "-952 pts",
                                              timeAgo: "15 hours ago",
                                              content: `
                                                    <p>Huh?</p>
                                                  `
                                            },
                                            {
                                              author: "u/Long_legged_Steve",
                                              avatar: "L",
                                              avatarBg: "#00e1ffff",
                                              role: "",
                                              roleBadgeText: "",
                                              score: "999999999999999999999999999989999999999999999999999910 pts",
                                              timeAgo: "15 hours ago",
                                              content: `
                                                    <p>Huh?</p>
                                                  `,
                                              replies: [
                                                {
                                                  author: "u/HakUreI ReImu",
                                                  avatar: "OP",
                                                  avatarBg: "#00ff0dff",
                                                  role: "op",
                                                  roleBadgeText: "OP",
                                                  score: "-952 pts",
                                                  timeAgo: "15 hours ago",
                                                  content: `
                                                        <p>Huh?</p>
                                                      `
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      author: "u/Long-Legged-Steve",
                                      avatar: "L",
                                      avatarBg: "#00e1ffff",
                                      role: "",
                                      roleBadgeText: "",
                                      score: "999999999999999999999999999989999999999999999999999910 pts",
                                      timeAgo: "15 hours ago",
                                      content: `
                                            <p>This is bad.</p>
                                          `,
                                      image: {
                                        url: "image/2026-09-20_11.10.06.png"
                                      },
                                      replies: [
                                        {
                                          author: "u/Marisansan",
                                          avatar: "M",
                                          avatarBg: "#ff0000ff",
                                          role: "",
                                          roleBadgeText: "",
                                          score: "99999999999999999999999999999 pts",
                                          timeAgo: "15 hours ago",
                                          content: `
                                                <p>Are they going to try to scam us with support?</p>
                                              `
                                        },
                                        {
                                          author: "u/Renai",
                                          avatar: "R",
                                          avatarBg: "#c20000ff",
                                          role: "",
                                          roleBadgeText: "",
                                          score: "-10000 pts",
                                          timeAgo: "15 hours ago",
                                          content: `
                                                <p>I should probably stop doing this...</p>
                                              `
                                        },
                                        {
                                          author: "u/Long-Legged-Steve",
                                          avatar: "L",
                                          avatarBg: "#00e1ffff",
                                          role: "",
                                          roleBadgeText: "",
                                          score: "-10000 pts",
                                          timeAgo: "15 hours ago",
                                          content: `
                                                <p>I'd like others to verify this as well.</p>
                                              `
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.THREAD_CONFIG = THREAD_CONFIG;
}
