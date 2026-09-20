/**
 * ============================================================================
 * OVERTHREAD - Thread Configuration File
 * CreepyMinecraft Investigation Archive
 * ============================================================================
 */

const THREAD_CONFIG = {
  // サイト全体の基本設定
  site: {
    pageTitle: "[Archive] I found a cursed bootleg of Minecraft on a fake 'TEMU' site : r/CreepyMinecraft",
    archiveBadge: "CURATED ARCHIVE",
    threadId: "thread/283",
    subTitle: "English Forum Digest • Investigation Log",
    noticeBanner: "This thread is locked & archived. Replies and inputs are disabled.",
    footerStatus: "Thread status: Archived • Read-Only",
    footerSub: "r/CreepyMinecraft Curated Investigation Archive • Built with static HTML/CSS/JS for GitHub Pages."
  },

  // スレッド主（OP: Original Poster）の投稿データ
  thread: {
    subreddit: "r/CreepyMinecraft",
    flair: "INVESTIGATION &bull; MALWARE / ARG",
    author: "u/renai",
    timeAgo: "16 hours ago",
    score: "3,842",
    commentCount: "14 Screenshots &bull; Investigation Thread",
    title: "I found a strange bootleg version of Minecraft called \"TEMU Edition\" on a clone site. Here is what happened when I actually booted it up...",

    // 本文
    bodyParagraphs: [
      "I was browsing weird knockoff game sites late last night and came across a Chinese landing page mimicking TEMU. It advertised a \"full version of Minecraft\" completely free for $0.",
      "Out of pure curiosity, I downloaded the archive inside a sandboxed environment. The launcher branding and textures were completely off from the start..."
    ],

    // メイン写真
    mainImage: {
      url: "image/2026-09-20_10.23.12.png",
      alt: "TEMU Minecraft Title & Launcher Screen",
      caption: "Fig 1.1: The custom boot splash & launcher interface titled 'Minecraft TEMU Edition'."
    },

    quote: "WARNING: Do NOT run unknown jar/exe files from untrusted download pages without proper VM isolation.",

    galleryImages: [],

    conclusion: "Has anyone seen this specific bootleg distribution before? Is this an elaborate ARG, or something far worse? Check out the discussion and screenshots below."
  },

  // コメント・会話ストリーム（親コメントで話題を分け、自然な2〜3階層の会話ツリーに整理）
  comments: [
    // ------------------------------------------------------------------------
    // TOPIC 1: サイトの検証と偽ドメインのツッコミ
    // ------------------------------------------------------------------------
    {
      author: "u/HakUreI_ReImu",
      avatar: "HR",
      avatarBg: "#831843",
      role: "mod",
      roleBadgeText: "MOD WARNING",
      isPinned: true,
      score: "1,240 pts",
      timeAgo: "15 hours ago",
      content: `
        <p><strong>Moderator Warning:</strong> Distributing unauthorized builds or modified client binaries violates Mojang's EULA. More importantly, bootlegs like this frequently contain remote access trojans (RATs).</p>
        <p>Does anyone have the actual domain link so we can run a WHOIS and virustotal scan?</p>
      `,
      image: null,
      replies: [
        {
          author: "u/Marisansan",
          avatar: "MS",
          avatarBg: "#854d0e",
          role: "",
          score: "2,410 pts",
          timeAgo: "15 hours ago",
          content: `
            <p>Wait, is it this site right here...?</p>
            <p><a href="https://yoncursedmc.github.io/Minecraft_Temu/" target="_blank" rel="noopener">https://yoncursedmc.github.io/Minecraft_Temu/</a></p>
            <p>Bro, that's not even real TEMU 💀 It's hosted on a GitHub Pages domain disguised with TEMU banner assets. How did anyone fall for this? lol</p>
          `,
          image: null,
          replies: [
            {
              author: "u/fulllllllan",
              avatar: "FL",
              avatarBg: "#1e3a8a",
              role: "",
              score: "890 pts",
              timeAgo: "14 hours ago",
              content: `
                <p>Look at the landing page. It's completely in Japanese with broken machine translations.</p>
              `,
              image: {
                url: "image/2026-09-20 10.32.49.png",
                alt: "Fake TEMU Minecraft download page",
                caption: "Fig 1.2: The cloned download portal claiming to give away free Minecraft."
              },
              replies: [
                {
                  author: "u/renai",
                  avatar: "OP",
                  avatarBg: "#166534",
                  role: "op",
                  roleBadgeText: "OP",
                  score: "650 pts",
                  timeAgo: "14 hours ago",
                  content: `
                    <p>There was no English option at all. The entire checkout screen was hardcoded in Japanese, but the site was pretending to be an international discount portal.</p>
                  `,
                  image: {
                    url: "image/2026-09-20 10.36.00.png",
                    alt: "Japanese localized cart and pricing",
                    caption: "Fig 1.3: $0 checkout dialogue with Japanese text."
                  },
                  replies: []
                }
              ]
            }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------------
    // TOPIC 2: 起動検証と異様なゲーム内挙動
    // ------------------------------------------------------------------------
    {
      author: "u/Long-legged_Steve",
      avatar: "LS",
      avatarBg: "#0e7490",
      role: "",
      score: "3,120 pts",
      timeAgo: "14 hours ago",
      content: `
        <p>Curiosity got the better of me so I grabbed the archive on a burner laptop.</p>
        <p>It actually launches through a custom PrismLauncher instance, but the moment the title screen appears, there's this eerie distorted Chinese traditional music playing in a continuous loop. You can't even change the language or access normal options.</p>
      `,
      image: {
        url: "image/2026-09-20_10.47.25.png",
        alt: "PrismLauncher instance booting the modified client",
        caption: "Fig 2.1: The custom instance launching under PrismLauncher."
      },
      replies: [
        {
          author: "u/renai",
          avatar: "OP",
          avatarBg: "#166534",
          role: "op",
          roleBadgeText: "OP",
          score: "1,180 pts",
          timeAgo: "13 hours ago",
          content: `
            <p>Wait, you got music? When I spawned in, I heard a faint whispered voice in English coming through the left audio channel...</p>
          `,
          image: {
            url: "image/2026-09-20_10.53.39.png",
            alt: "In-game screenshot with dark atmosphere",
            caption: "Fig 2.2: World loading with abnormal atmospheric sounds."
          },
          replies: [
            {
              author: "u/Long-legged_Steve",
              avatar: "LS",
              avatarBg: "#0e7490",
              role: "",
              score: "780 pts",
              timeAgo: "13 hours ago",
              content: `
                <p>Check the settings screen. Half the buttons do nothing, and the options menu has completely nonsensical sliders.</p>
              `,
              image: {
                url: "image/2026-09-20_10.49.44.png",
                alt: "Glitched options menu",
                caption: "Fig 2.3: Glitched options configuration with corrupted Japanese strings."
              },
              replies: [
                {
                  author: "u/Long-legged_Steve",
                  avatar: "LS",
                  avatarBg: "#0e7490",
                  role: "",
                  score: "640 pts",
                  timeAgo: "13 hours ago",
                  content: `
                    <p>Also look at the video settings page. None of the render distances work properly:</p>
                  `,
                  image: {
                    url: "image/2026-09-20_10.51.06.png",
                    alt: "Distorted video settings interface",
                    caption: "Fig 2.4: Video settings interface with disabled toggle controls."
                  },
                  replies: []
                }
              ]
            }
          ]
        },
        {
          author: "u/renai",
          avatar: "OP",
          avatarBg: "#166534",
          role: "op",
          roleBadgeText: "OP",
          score: "920 pts",
          timeAgo: "13 hours ago",
          content: `
            <p>I finally got into an actual singleplayer world. At first glance it looks like a normal plains biome, but the TEMU watermark icon keeps drifting across the screen like a DVD screensaver. Plus the player sprint speed is noticeably too fast.</p>
          `,
          image: {
            url: "image/2026-09-20_10.52.36.png",
            alt: "In-game plains view with floating TEMU logo watermark",
            caption: "Fig 2.5: In-game world with a drifting TEMU logo overlay."
          },
          replies: [
            {
              author: "u/Long-legged_Steve",
              avatar: "LS",
              avatarBg: "#0e7490",
              role: "",
              score: "850 pts",
              timeAgo: "12 hours ago",
              content: `
                <p>When I opened the F3 debug screen, it showed hardware telemetry straight from my system... it literally printed out my Intel ARC B570 GPU in the overlay. What kind of modpack reads raw hardware IDs like that?!</p>
              `,
              image: {
                url: "image/2026-09-20_10.55.50.png",
                alt: "F3 debug screen revealing Intel Arc B570",
                caption: "Fig 2.6: F3 overlay showing detailed hardware telemetry."
              },
              replies: []
            }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------------
    // TOPIC 3: 怪異（エンティティ）の出現と画面の崩壊
    // ------------------------------------------------------------------------
    {
      author: "u/renai",
      avatar: "OP",
      avatarBg: "#166534",
      role: "op",
      roleBadgeText: "OP",
      score: "4,210 pts",
      timeAgo: "12 hours ago",
      content: `
        <p><strong>UPDATE: SOMETHING JUST SPAWNED.</strong></p>
        <p>I was walking towards a birch forest and this one-eyed Steve entity suddenly appeared right in front of me! The moment I got close, my inventory opened automatically and items started getting swapped around.</p>
      `,
      image: {
        url: "image/2026-09-20_11.02.56.png",
        alt: "One-eyed Steve entity encounter in birch forest",
        caption: "Fig 3.1: The one-eyed entity appearing directly in front of the player."
      },
      replies: [
        {
          author: "u/renai",
          avatar: "OP",
          avatarBg: "#166534",
          role: "op",
          roleBadgeText: "OP",
          score: "2,980 pts",
          timeAgo: "12 hours ago",
          content: `
            <p>Then two seconds later, this full-screen prompt hijacked my display... look at this:</p>
          `,
          image: {
            url: "image/2026-09-20_11.05.10.png",
            alt: "Advertisement popup overlay over game window",
            caption: "Fig 3.2: Fullscreen ad banner hijacking the game viewport."
          },
          replies: [
            {
              author: "u/Marisansan",
              avatar: "MS",
              avatarBg: "#854d0e",
              role: "",
              score: "1,560 pts",
              timeAgo: "11 hours ago",
              content: `
                <blockquote class="quote-reply">> Advertisement popup overlay</blockquote>
                <p>It's invoking an embedded Chromium / CEF browser window inside the game process! It's literally pushing live ad banners and tracker redirects while you play.</p>
              `,
              image: null,
              replies: []
            }
          ]
        },
        {
          author: "u/Long-legged_Steve",
          avatar: "LS",
          avatarBg: "#0e7490",
          role: "",
          score: "3,340 pts",
          timeAgo: "12 hours ago",
          content: `
            <p>Dude... the exact same thing happened on my end, but with a cursed cow mob. It approached me, made a glitched audio screech, and forced an item into my hotbar.</p>
          `,
          image: {
            url: "image/2026-09-20_11.07.20.png",
            alt: "Deformed cow entity approaching player",
            caption: "Fig 3.3: Deformed entity approaching player near water."
          },
          replies: [
            {
              author: "u/renai",
              avatar: "OP",
              avatarBg: "#166534",
              role: "op",
              roleBadgeText: "OP",
              score: "2,190 pts",
              timeAgo: "11 hours ago",
              content: `
                <p>Holy sh*t... my entire screen just artifacted into corrupted green and blue noise. This isn't just an ad mod. It's actively glitching out the graphics buffer!</p>
              `,
              image: {
                url: "image/image.png",
                alt: "Corrupted display artifacts and graphics glitch",
                caption: "Fig 3.4: Complete graphical corruption of the game viewport."
              },
              replies: [
                {
                  author: "u/renai",
                  avatar: "OP",
                  avatarBg: "#166534",
                  role: "op",
                  roleBadgeText: "OP",
                  score: "1,870 pts",
                  timeAgo: "11 hours ago",
                  content: `
                    <p>What the actual hell is this???</p>
                  `,
                  image: {
                    url: "image/image0.png",
                    alt: "Distorted entity closeup and glitched overlay",
                    caption: "Fig 3.5: Distorted camera view after entity interaction."
                  },
                  replies: []
                }
              ]
            }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------------
    // TOPIC 4: サポート詐欺画面と緊急シャットダウン
    // ------------------------------------------------------------------------
    {
      author: "u/Long-legged_Steve",
      avatar: "LS",
      avatarBg: "#0e7490",
      role: "",
      score: "4,620 pts",
      timeAgo: "11 hours ago",
      content: `
        <p><strong>STOP RUNNING IT IMMEDIATELY.</strong></p>
        <p>My desktop just got completely locked out by a fake Microsoft Security / Support scam overlay. It triggered external PowerShell commands in the background to hijack the browser window.</p>
      `,
      image: {
        url: "image/2026-09-20_11.10.06.png",
        alt: "Fake Microsoft support security alert scam popup",
        caption: "Fig 4.1: The fake tech support lockout screen triggered after the game crashes."
      },
      replies: [
        {
          author: "u/Marisansan",
          avatar: "MS",
          avatarBg: "#854d0e",
          role: "",
          score: "2,840 pts",
          timeAgo: "10 hours ago",
          content: `
            <p>A classic tech support scam ransomware payload! The "TEMU Minecraft" was just a trojan horse to bypass smartscreen and lure kids or creepypasta hunters into running unsigned Java binaries.</p>
            <p><strong>DO NOT call the phone number on that screen!</strong> Kill the task via Task Manager or hard reboot into safe mode immediately.</p>
          `,
          image: null,
          replies: []
        },
        {
          author: "u/renai",
          avatar: "OP",
          avatarBg: "#166534",
          role: "op",
          roleBadgeText: "OP",
          score: "2,150 pts",
          timeAgo: "10 hours ago",
          content: `
            <p>I just killed the process tree via terminal and deleted the virtual machine container. That was genuinely terrifying.</p>
            <p>Consider this thread a PSA: <strong>Do NOT download Minecraft from random clone sites, no matter how curious you are.</strong></p>
          `,
          image: null,
          replies: [
            {
              author: "u/fulllllllan",
              avatar: "FL",
              avatarBg: "#1e3a8a",
              role: "",
              score: "1,120 pts",
              timeAgo: "9 hours ago",
              content: `
                <p>Bro thought he was playing a cool creepypasta ARG and ended up getting a full tech support scam trojan lmao. Glad you ran it in a sandbox OP.</p>
              `,
              image: null,
              replies: []
            }
          ]
        }
      ]
    }
  ]
};

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.THREAD_CONFIG = THREAD_CONFIG;
}
