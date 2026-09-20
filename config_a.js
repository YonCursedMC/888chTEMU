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
    pageTitle: "[Archive] I restored a 1989 prototype portable terminal found in storage : r/RetroHardware",
    archiveBadge: "CURATED ARCHIVE",
    threadId: "thread/888",
    subTitle: "English Forum Digest",
    noticeBanner: "This thread is locked & curated. Replies and inputs are disabled.",
    footerStatus: "Thread status: Archived • Read-Only",
    footerSub: "Curated Forum Archive Template • Built with static HTML/CSS/JS for GitHub Pages."
  },

  // スレッド主（OP: Original Poster）の投稿データ
  thread: {
    subreddit: "r/RetroHardware",
    flair: "OC • TEARDOWN",
    author: "u/CyberArchivist_89",
    timeAgo: "14 hours ago",
    score: "4,812",
    commentCount: "184 Curated Comments",
    title: "I restored a 1989 prototype portable terminal found in an abandoned industrial warehouse. Here are the teardown photos, custom PCB layout, and boot screen.",
    
    // 本文（段落ごとに配列で指定）
    bodyParagraphs: [
      "Two months ago, I managed to acquire a lot of surplus electronics from an auction in Bristol. Inside a flight case labeled <em>\"SPEC-X ARCHIVAL / FIELD EXP\"</em>, I stumbled upon this unbranded portable workstation.",
      "The chassis is milled aluminum with dual mechanical toggle locks. It runs an early 68000-compatible architecture, wired with an amber plasma-style matrix display. After carefully rebuilding the power supply capacitors (two of them had leaked over the daughterboard), it finally booted to an unknown OS prompt."
    ],

    // メイン写真（不要な場合は null に設定可能）
    mainImage: {
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      alt: "Main prototype terminal powered on with amber glowing display",
      caption: "Fig 1.1: Prototype unit on workbench after initial recap and 12V DC conversion."
    },

    // 引用テキスト（不要な場合は null または空文字）
    quote: "The ROM chips bear handwritten ceramic tags: 'V2.14-ENG / BUILD-89'. The memory expansion board utilizes 16-pin gold-plated DIP chips with proprietary bus arbitration.",

    // サブ写真ギャラリー（複数枚並べる画像。不要な場合は空配列 []）
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        alt: "Main logic board and microchip traces",
        caption: "Fig 1.2: Motherboard logic traces"
      },
      {
        url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80",
        alt: "Custom mechanical keyboard switches closeup",
        caption: "Fig 1.3: Alps-style mechanical switch array"
      }
    ],

    // 本文の締めくくり段落
    conclusion: "Has anyone seen this specific serial prefix <code>SN: 888-CH-ENG-09</code> before? Let me know what you think this was originally manufactured for."
  },

  // コメント・会話ストリーム（再帰的に何階層でも返信 replies をネストできます）
  comments: [
    {
      author: "u/HardwareHistorian",
      avatar: "MOD",
      avatarBg: "#065f46",
      role: "mod", // "mod" | "op" | ""
      roleBadgeText: "MOD PIN",
      isPinned: true,
      score: "2,109 pts",
      timeAgo: "13 hours ago",
      content: `
        <p><strong>Archivist Note:</strong> We have cross-referenced the serial format <code>888-CH-*</code> with UK Ministry of Transport telecommunications archives from 1988–1991. This appears to be a field diagnostic terminal developed under contract for subterranean fiber and coaxial relay testing.</p>
        <p>Please keep replies focused on hardware verification and schematic preservation. High-resolution photos are expanded upon click.</p>
      `,
      image: null,
      replies: [
        {
          author: "u/CyberArchivist_89",
          avatar: "OP",
          avatarBg: "#1e3a8a",
          role: "op",
          roleBadgeText: "OP",
          score: "1,450 pts",
          timeAgo: "12 hours ago",
          content: `
            <p>Thank you for the confirmation! That explains why there is a BNC coax jack covered by a screw-on waterproof cap on the rear left corner.</p>
            <p>Here is a macro shot of that connector port and the military-spec rubber seal:</p>
          `,
          // コメント内のインライン写真
          image: {
            url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            alt: "Macro view of ruggedized coaxial terminal connectors",
            caption: "Detail: Ruggedized rear diagnostic port with gold plating"
          },
          replies: [
            {
              author: "u/WaveguideEngineer",
              avatar: "RF",
              avatarBg: "",
              role: "",
              score: "623 pts",
              timeAgo: "10 hours ago",
              content: `
                <blockquote class="quote-reply">> That explains why there is a BNC coax jack covered by a screw-on waterproof cap</blockquote>
                <p>That is definitely an Amphenol milspec connector! The threading matches the Mil-DTL-38999 standard. Those connectors alone cost a small fortune in 1989. You have an absolute museum piece here. Whatever you do, please do not use modern harsh flux when desoldering anything on that board.</p>
              `,
              image: null,
              replies: []
            }
          ]
        }
      ]
    },
    {
      author: "u/VaxEnthusiast",
      avatar: "VX",
      avatarBg: "",
      role: "",
      score: "1,840 pts",
      timeAgo: "11 hours ago",
      content: `
        <p>Look at the keyboard in Fig 1.3. Those aren't standard Cherry MX switches. Those are <strong>green tactile Alps switches</strong> with integrated amber LEDs in each keycap stem.</p>
        <p>Can you dump the contents of the EPROM? If you have an inexpensive TL866II programmer, you can read those ceramic chips without damaging them. The ROM likely contains a Forth interpreter or a proprietary real-time kernel (like OS-9 or pSOS).</p>
      `,
      image: null,
      replies: [
        {
          author: "u/CyberArchivist_89",
          avatar: "OP",
          avatarBg: "#1e3a8a",
          role: "op",
          roleBadgeText: "OP",
          score: "982 pts",
          timeAgo: "8 hours ago",
          content: `
            <p>Spot on! I hooked up my reader to the two 27C512 chips last night. Here is the ASCII header found at offset <code>0x000040</code>:</p>
            <pre><code>000040:  46 4F 52 54 48 2D 38 33  20 56 45 52 53 49 4F 4E  FORTH-83 VERSION\n000050:  28 43 29 20 31 39 38 38  20 54 45 4C 45 43 4F 4D  (C) 1988 TELECOM\n000060:  53 59 53 54 45 4D 53 20  4C 54 44 2E 20 52 54 43  SYSTEMS LTD. RTC</code></pre>
            <p>It really is running a custom Forth-83 system! Typing <code>WORDS</code> at the prompt produces a whole dictionary of telecommunication testing routines.</p>
          `,
          image: null,
          replies: [
            {
              author: "u/ChuckMooreFan",
              avatar: "CK",
              avatarBg: "",
              role: "",
              score: "419 pts",
              timeAgo: "6 hours ago",
              content: `<p>Pure beauty. Forth on a custom 68000 portable rig in 1989 is the pinnacle of engineering elegance. Everything compiles directly to threaded code, zero operating system bloat.</p>`,
              image: null,
              replies: []
            }
          ]
        },
        {
          author: "u/SolderReflow",
          avatar: "SR",
          avatarBg: "",
          role: "",
          score: "324 pts",
          timeAgo: "7 hours ago",
          content: `<p>Please consider submitting the ROM dump to the Internet Archive or MAME team! Devices like this frequently get lost to capacitor rot or corrosion when batteries degrade. Preserving the bitstream is invaluable for computing history.</p>`,
          image: null,
          replies: []
        }
      ]
    },
    {
      author: "u/Telecom_Retiree",
      avatar: "TR",
      avatarBg: "",
      role: "",
      score: "1,120 pts",
      timeAgo: "5 hours ago",
      content: `
        <p>I worked at British Telecom's Martlesham Heath research labs during the late 80s. We used devices that looked almost identical to this when commissioning early SDH transmission equipment in underground bunkers.</p>
        <p>If this is the unit I think it is, pressing <code>Ctrl + Shift + F8</code> during the power-on self-test will trigger an internal loopback diagnosis that illuminates all LED indicators sequentially.</p>
      `,
      image: null,
      replies: [
        {
          author: "u/CyberArchivist_89",
          avatar: "OP",
          avatarBg: "#1e3a8a",
          role: "op",
          roleBadgeText: "OP",
          score: "780 pts",
          timeAgo: "3 hours ago",
          content: `
            <p><strong>Update: IT WORKED!</strong> I just held <code>Ctrl + Shift + F8</code> on reboot and every single amber status LED lit up in a wave sequence across the top row! The screen printed <code>MARTLESHAM REPEAT-TEST [PASS]</code>.</p>
            <p>The Internet is truly incredible. You just solved a 35-year-old mystery with a single comment.</p>
          `,
          image: null,
          replies: []
        }
      ]
    }
  ]
};

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.THREAD_CONFIG = THREAD_CONFIG;
}
