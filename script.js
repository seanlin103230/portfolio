document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const currentYearEl = document.getElementById('currentYear');
  const heroOrb = document.getElementById('heroOrb');

  // 完整作品集資料庫（100% 對應林杉 2023–2026 設計作品集 PDF 圖文）
  const projectDetails = {
    xunguang: {
      category: '01 ｜ 刊物與裝幀設計 Editorial & Book Design (p.06–13)',
      title: '竹嶺校刊 56 期《巡光》',
      tags: ['#裝幀設計', '#編輯統籌', '#雙冊合一', '#銀色油墨'],
      images: [
        'img-003.jpg',
        'img-004.jpg',
        'img-011.jpg',
        'img-014.jpg',
        'img-019.jpg'
      ],
      paragraphs: [
        '【主題概念】以「巡光」為題，探索日常中多層次的感知與體察。章節依循光譜概念編排，隨閱讀動線推進，內容由幽微漸趨明朗，引領讀者於暗影中溯尋光的痕跡。',
        '【設計手法】封面設計靈感來自日本攝影師水谷吉法《Voices of Flowers》系列作品，運用失焦手法呈現明亮柔和的光暈效果。裝幀上採用膠裝與裸背線裝雙冊合一設計，前冊與後冊宛如光與影的共生體，彼此對立卻又相互依存。此外，首次於校刊內頁運用銀色油墨，凸顯印刷在不同光源、環境下的視覺變化。',
        '《巡光》試圖以裝幀與印刷技術打造獨特的閱讀可能性，重新找回實體刊物所承載的情感與溫度，讓閱讀成為一場巡光之旅！'
      ],
      highlights: [
        '• 裝幀工藝：膠裝與裸背線裝「雙冊合一」共生結構',
        '• 特殊印刷：內頁導入特別色「銀色油墨」，隨光線角度產生視覺變化',
        '• 章節構成：1 影中尋光 → 2 微光絮語 → 3 微光螢閃 → 4 一點一點亮 → 5 截光 → 6 與日照相擁'
      ]
    },
    express: {
      category: '01 ｜ 刊物與裝幀設計 Editorial & Book Design (p.14–15)',
      title: '新竹高中 102 週年校慶運動會快報、特報',
      tags: ['#編輯策劃', '#延伸應用', '#六小時極速發刊', '#小誌Zine'],
      images: [
        'img-025.jpg',
        'img-026.jpg',
        'img-028.jpg',
        'img-029.jpg',
        'img-030.jpg'
      ],
      paragraphs: [
        '【校慶快報】快報在校刊社團隊合作與攝影社、圖書館的支援下，六小時內完成了訪問、攝影、排版，成功在校慶當日下午發刊，記錄沐嶺儀隊專訪與竹中越野等熱血現場。',
        '【運動會特報】特報首次以「小誌」的形式發刊，希望以輕鬆的閱讀形式，呈現校慶運動會的不同面向。設計上，延伸校慶視覺元素，除了豐富特報版面，也連貫校慶氛圍。'
      ],
      highlights: [
        '• 執行挑戰：校慶當日 6 小時內完成採訪、攝影、排版與印刷發刊',
        '• 視覺連貫：將 102 週年校慶橘綠緞帶視覺延伸至特報與成績快報版面'
      ]
    },
    zhujian: {
      category: '01 ｜ 刊物與裝幀設計 Editorial & Book Design (p.16–19)',
      title: '竹嶺新生刊第三期《竹劍》',
      tags: ['#刊物編輯', '#版面設計', '#新生領航刊物'],
      images: [
        'img-037.jpg',
        'img-041.jpg',
        'img-042.jpg',
        'img-043.jpg'
      ],
      paragraphs: [
        '【刊物介紹】《竹劍》作為幫助新生更了解竹中的刊物，裡頭飽含了校刊社學長在竹中生活一學年的體悟，以及學弟妹們不可不知的竹中字彙。本刊新增「竹中生的一天」單元，以日記小說的形式，讓讀者身歷其境體驗竹中生活。',
        '【設計特色】設計上一改往期具象插圖，以趣味色塊與線條呈現竹中在日治時期曾推廣過的劍道。日記小說延續此風格，使用不規則色塊，搭配寫實文字，詼諧地描述竹中生真實的一天生活。'
      ],
      highlights: [
        '• 視覺轉譯：以幾何色塊與線條詮釋日治時期竹中劍道傳統',
        '• 內容企劃：收錄竹中校園指南地圖、「竹中生的一天」時間軸日記小說'
      ]
    },
    anniv102: {
      category: '02 ｜ 視覺識別設計 Visual Identity Design (p.22–27)',
      title: '新竹高中 102 週年校慶主視覺',
      tags: ['#標準字', '#海報手冊', '#周邊商品', '#跨處室串連'],
      images: [
        'img-044.jpg',
        'img-046.jpg',
        'img-047.jpg',
        'img-048.jpg',
        'img-049.jpg',
        'img-055.jpg'
      ],
      paragraphs: [
        '【設計理念】自受邀參與設計之初便不斷思考「竹中走過百年，如何呈現創新又足以代表這座學校的標誌？」設計回歸竹中最核心的意涵，以「新竹風」做為視覺動線，並運用校徽中的橘與綠，構築出屬於竹中的自由線條。在文字設計上，參考校徽「中」字方正的特點，呈現既穩重踏實卻又不失動態活力的視覺。',
        '【延伸效益】此次視覺識別系統串連了學務處、圖書館、家長會、班聯會、校刊社等單位，應用範疇延伸至運動會秩序冊、快報、音樂會節目冊、邀請函及販售周邊（毛巾、老帽、T-shirt、徽章、彈珠汽水）。除了校內師生迴響外，社群平台更超過五萬人次瀏覽。'
      ],
      highlights: [
        '• 核心符號：「新竹風」動態線條 × 校徽橘綠雙色 × 102 方正標準字',
        '• 宣傳統籌：串連校內五大單位，社群觸及突破 50,000+ 人次瀏覽'
      ]
    },
    german: {
      category: '02 ｜ 視覺識別設計 Visual Identity Design (p.28–31)',
      title: '德國文化日活動主視覺 (German Culture Day)',
      tags: ['#標準字', '#摺頁', '#海報', '#工作證', '#包浩斯'],
      images: [
        'img-066.jpg',
        'img-062.jpg',
        'img-069.jpg',
        'img-070.jpg'
      ],
      paragraphs: [
        '【緣起】2024 年 7 月竹中師生赴德國巴登符騰堡邦的維蘭德高中參訪；同年 10 月底維蘭德高中回訪本校，特別召募學生藝人將歐洲街頭藝人表演文化帶進校園。',
        '【形狀與色彩】以瓦西里・康丁斯基 (Wassily Kandinsky) 著名的理論——「內在必然性決定了每個形狀的顏色」為基礎，即藍色對應圓形、紅色對應方形、黃色對應三角形。於海報版面採以大色塊做為亮點，延伸應用於工作證、表演證及活動摺頁。',
        '【標準字】參考自赫伯特拜爾 (Herbert Bayer) 設計的經典字體 Universal Bayer，取其圓弧筆畫轉化為中文字「口」形結構的連筆，並簡化部分筆畫以圓形跳色取代，為包浩斯的簡約調性增添歡樂氛圍。'
      ],
      highlights: [
        '• 色彩理論：康丁斯基三原色與幾何造形對應（藍圓、紅方、黃三角）',
        '• 字體設計：致敬包浩斯 Herbert Bayer Universal 字體之中英標準字設計'
      ]
    },
    literary36: {
      category: '02 ｜ 視覺識別設計 Visual Identity Design (p.32–33)',
      title: '第 36 屆竹中竹女聯合文藝獎主視覺',
      tags: ['#邀請卡', '#決審海報', '#書寫概念'],
      images: [
        'img-073.jpg',
        'img-075.jpg',
        'img-074.jpg'
      ],
      paragraphs: [
        '【專案背景】竹中竹女聯合文藝獎為兩校難得的共同競賽，每年邀請業界知名作家（新詩、散文、小說）擔任決審評審，讓同學在現場與作家深度交流。',
        '【視覺概念】本屆文藝獎以「書寫」為靈感，在人工智慧當道的此刻，試圖帶領參與者回歸創作起點，重拾平凡卻充滿力量的鉛筆，在稿紙上創作屬於高中生的青春作品。'
      ],
      highlights: [
        '• 設計項目：決審大型海報、作家評審邀請卡與時程表',
        '• 視覺焦點：3D 寫實鉛筆與橡皮擦跨越平面稿紙格線的張力構圖'
      ]
    },
    hcca: {
      category: '02 ｜ 視覺識別設計 Visual Identity Design (p.34–39)',
      title: '竹嶺班聯組織視覺識別系統 (HCCA)',
      tags: ['#標誌', '#標準字', '#識別規範手冊', '#延伸應用物'],
      images: [
        'img-076.jpg',
        'img-077.jpg',
        'img-092.jpg',
        'img-093.jpg',
        'img-094.jpg',
        'img-095.jpg'
      ],
      paragraphs: [
        '【標誌設計】打破校徽既有框架，靈感源自觀察校園平面圖，多棟建築地基呈現「L」字形，象徵竹嶺班聯根基於竹中校園；彎曲線條則呈現新竹高中地勢起伏的校地特徵，並將英文縮寫「HCCA」與校舍特色結合。',
        '【標準字與色彩】標準字以黑體為骨架，竹、嶺、聯三字主筆皆自左下向右上延伸，隱含校地由低至高的地勢特徵與自然連筆節奏。色彩根據前導問卷調查，使用信任穩定的「深藍」與象徵創新的「活力黃」。'
      ],
      highlights: [
        '• 完整系統：編撰《新竹高中班聯會視覺識別系統規範手冊》（基本系統、應用物規範、管理辦法）',
        '• 實務延伸：組織會旗、會服 T-shirt、IG 公告與幹部介紹模組化版型'
      ]
    },
    class202: {
      category: '02 ｜ 視覺識別設計 Visual Identity Design (p.40–41)',
      title: '新竹高中 79 屆二班視覺識別 (202 Made in HCHS)',
      tags: ['#班服設計', '#特優班旗', '#條碼與洗標概念'],
      images: [
        'img-109.jpg',
        'img-110.jpg',
        'img-111.jpg',
        'img-114.jpg'
      ],
      paragraphs: [
        '【設計理念】設計之初，想做一件「不像班服」的班服，甚至是穿在路上也不尷尬的流行 T-shirt。將「文組畢業去刷條碼」的負面標籤，轉化成為我們顯而易見的班級標誌，班服背面左下角刻意設計像忘記撕的標籤。',
        '【共創班旗】班旗製作先以電腦設計後印出，再放置於旗幟底下，並邀請班上同學共同描圖繪製完成，最終獲得班旗競賽特優。'
      ],
      highlights: [
        '• 幽默轉譯：條碼 + QR Code +「(新竹高中79th) → (文)」洗標視覺',
        '• 榮譽紀錄：榮獲全校班旗競賽「特優」'
      ]
    },
    'social-posts': {
      category: '03 ｜ 社群與數位媒介設計 Social & Digital Media (p.44–47)',
      title: '竹嶺校刊幹部介紹、獲獎海報、《線徑》縮圖與《巡光》貼文',
      tags: ['#IG九宮格排版', '#電子海報', '#影片縮圖', '#社群行銷'],
      images: [
        'img-116.jpg',
        'img-117.jpg',
        'img-119.jpg',
        'img-120.jpg',
        'img-121.jpg'
      ],
      paragraphs: [
        '【社群與數位傳播】針對 Instagram 與 YouTube 等不同數位媒介特性，規劃高辨識度的社群視覺：包含竹嶺校刊幹部介紹與社博倒數九宮格拼貼海報、竹嶺校刊 Vol.55《時光洄導 Loop》榮獲全國高中校刊競賽金質獎／美編獎與紀州庵冠軍之慶賀電子海報。',
        '【影音與刊物宣傳】為《線徑》（金屬線能用來編織？黃裕智與線、鉤針的故事）設計宣傳影片縮圖，並延伸《巡光》失焦光暈視覺製作 IG 三連圖宣傳貼文。'
      ],
      highlights: [
        '• 跨格式整合：IG 九宮格連圖、橫式影音縮圖、慶賀海報系統'
      ]
    },
    'xunguang-ig': {
      category: '03 ｜ 社群與數位媒介設計 Social & Digital Media (p.46–47)',
      title: '竹嶺校刊《巡光》宣傳貼文',
      tags: ['#社群貼文', '#光暈漸層', '#竹嶺校刊56期'],
      images: [
        'img-119.jpg',
        'img-120.jpg',
        'img-121.jpg'
      ],
      paragraphs: [
        '延伸《竹嶺校刊 56 期：巡光》實體書封面的柔和失焦光暈與纖細標準字，於 Instagram 打造橫跨三格的無縫光譜視覺貼文，完整呈現七大章節架構。'
      ],
      highlights: [
        '• 視覺延伸：將實體裝幀的光譜體驗轉譯為社群滑動閱讀體驗'
      ]
    },
    'bookclub-slides': {
      category: '03 ｜ 社群與數位媒介設計 Social & Digital Media (p.48–49)',
      title: '雜誌讀書會簡報 &「未來」讀書會簡報',
      tags: ['#活動策劃', '#簡報設計', '#字體拼貼'],
      images: [
        'img-125.jpg',
        'img-126.jpg'
      ],
      paragraphs: [
        '【雜誌讀書會簡報】以大膽的紅、黑、黃色塊與解構的「雜誌」字體排印，帶領同學探討 Book、Magazine 與 Mook 的差異，並賞析《新活水》、《地味手帖》等刊物的材質與排版特色。',
        '【「未來」讀書會簡報】以數位像素與終端機風格設計班級讀書會簡報，清楚規劃尋書任務、分組時間與發表流程。'
      ],
      highlights: [
        '• 策劃與設計合一：由活動時間分配、討論提綱到視覺風格全程獨立完成'
      ]
    },
    'course-slides': {
      category: '03 ｜ 社群與數位媒介設計 Social & Digital Media (p.50–51)',
      title: '校刊社美編課程簡報',
      tags: ['#社團課程', '#簡報設計', '#網格系統教學'],
      images: [
        'img-127.jpg',
        'img-128.jpg'
      ],
      paragraphs: [
        '【課程規劃】我負責校刊社美編課程的教學，第一週偏向基礎概念與名詞講解，第二週進入 InDesign 軟體實作教學。',
        '【設計手法】此為第一週簡報，以「網格」作為視覺基底呈現編輯過程。課程分為六個章節（字體、版面、色彩、印刷、裝幀、靈感搜集），介紹設計常見的專有名詞與基礎知識，並分享自身設計經驗與心法。'
      ],
      highlights: [
        '• 六大教學模組：字體（宋／黑／楷／圓與 Noto 字型計畫）→ 版面（國際主義網格系統）→ 色彩（CMYK）→ 印刷（合版／獨立版／數位）→ 裝幀 → 靈感搜集'
      ]
    }
  };

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 1. 封面藍色光暈微互動
  if (heroOrb) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;
      heroOrb.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }

  // 2. 深淺色主題切換
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });

  // 3. 手機版選單
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // 4. 滾動進度條與導覽列高亮
  const sections = document.querySelectorAll('main section[id]');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;

    if (scrollTop > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      if (scrollTop >= top) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navItems.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentSectionId);
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 5. 滾動進場動畫
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // 6. 作品集分類篩選
  const applyFilter = (filter) => {
    filterBtns.forEach((b) => {
      const active = b.dataset.filter === filter;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });

    workCards.forEach((card) => {
      const category = card.dataset.category;
      const match = filter === 'all' || category === filter;
      if (match) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  document.querySelectorAll('[data-jump-filter]').forEach((link) => {
    link.addEventListener('click', () => {
      applyFilter(link.dataset.jumpFilter);
    });
  });

  // 7. 多圖畫廊彈窗 Modal
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalThumbs = document.getElementById('modalThumbs');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalTags = document.getElementById('modalTags');
  const modalBody = document.getElementById('modalBody');
  const modalHighlights = document.getElementById('modalHighlights');

  const openModal = (key) => {
    const data = projectDetails[key];
    if (!data) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalTags.innerHTML = data.tags.map((t) => `<span>${t}</span>`).join('');
    modalBody.innerHTML = data.paragraphs.map((p) => `<p>${p}</p>`).join('');
    modalHighlights.innerHTML = data.highlights.map((item) => `<div>${item}</div>`).join('');

    const imgs = data.images || [];
    if (imgs.length > 0) {
      modalMainImg.src = imgs[0];
      modalMainImg.alt = data.title;
      modalThumbs.innerHTML = imgs
        .map(
          (src, idx) => `
          <button class="modal-thumb ${idx === 0 ? 'active' : ''}" data-src="${src}" aria-label="預覽圖片 ${idx + 1}">
            <img src="${src}" alt="${data.title} 圖 ${idx + 1}" />
          </button>
        `
        )
        .join('');

      modalThumbs.querySelectorAll('.modal-thumb').forEach((thumbBtn) => {
        thumbBtn.addEventListener('click', () => {
          modalMainImg.src = thumbBtn.dataset.src;
          modalThumbs.querySelectorAll('.modal-thumb').forEach((b) => b.classList.toggle('active', b === thumbBtn));
        });
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  workCards.forEach((card) => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });

  document.querySelectorAll('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.openProject));
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // 8. 聯絡表單互動回饋
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.elements['name'].value.trim();
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = '傳送中...';

      setTimeout(() => {
        formFeedback.textContent = `謝謝您，${name}！訊息已記錄，您也可以直接寄信至 seanlin103230@gmail.com 或私訊 IG @seanlin_03。`;
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = '寄送訊息給林杉';
      }, 450);
    });
  }
});
