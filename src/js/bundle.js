(function() {
  'use strict';

  // ==========================================================================
  // 1. DATA STORE — Vidd (Piddooow)
  // Single source of truth from CV, GitHub & Google Drive
  // ==========================================================================
  const profileData = {
    name: "Vidd",
    displayName: "Vidd",
    brandName: "Vidd",
    alias: "/ D4vd",
    handle: "Piddooow",
    monogram: "Vidd",
    role: "Information Systems & Management | AI & Full-Stack Systems Developer",
    roleSubtitle: "BINUS University Double Degree (BBA & BSc)",
    status: "Available for selected projects",
    statusSub: "Open to modern websites, business systems, ERP, and AI integrations",
    location: "Indonesia",
    timezone: "GMT+7",
    email: "david.enampatoo@gmail.com",
    phone: "+62 812 4003 9652",
    phoneRaw: "6281240039652",
    linkedinUrl: "https://www.linkedin.com/in/david-antono",
    instagramUrl: "https://www.instagram.com/david.antonoo/",
    githubUrl: "https://github.com/Piddooow",
    githubUsername: "Piddooow",
    resumeUrl: "https://drive.google.com/file/d/17l3k06p1dV9A2U1iuvGd5suaiD5Js79U/view?usp=sharing",
    driveFolderUrl: "https://drive.google.com/drive/folders/1CPCatZsZLaEbcjXnwKj_IrnHQe1mdOXc?usp=sharing",
    
    // Real Photos for Pixel Transition
    childhoodImage: "src/assets/images/personal/vidd-childhood.jpg",
    adultImage: "src/assets/images/personal/vidd-adult-suit.jpg",
    pfpImage: "src/assets/images/personal/vidd-childhood.jpg",
    
    // Main Philosophy Quote
    mainQuote: "It’s going to happen, because I’m going to make it happen.",
    quoteSupporting: "I believe good ideas become valuable when they are executed with consistency, curiosity, and attention to detail.",
    
    heroEyebrow: "AI & FULL-STACK SYSTEMS DEVELOPER",
    heroHeading: "From websites and ERP systems to business applications and AI-powered products.",
    heroHeadingHtml: 'From <span class="hero-highlight">websites</span> and <span class="hero-highlight">ERP systems</span> to <span class="hero-highlight">business applications</span> and <span class="hero-highlight">AI-powered products</span>.',
    heroSupporting: "I design and build digital products across the full spectrum, websites, ERP systems, business applications, and AI-powered tools. My focus is turning ideas into real, working solutions, from the first concept all the way through implementation.",
    heroSupportingHtml: '<span class="text-primary-contrast">I design and build digital products</span> across the full spectrum, websites, ERP systems, business applications, and AI-powered tools. My focus is turning ideas into <span class="text-primary-contrast">real, working solutions</span>, from the first concept all the way through implementation.',
    
    aboutBio: [
      "Business-minded Information Systems and Management student at BINUS University with hands-on experience in operations management, vendor negotiation, and strategic business analysis (SWOT, Porter’s Five Forces, STP).",
      "Skilled at turning market and stakeholder insights into actionable go-to-market strategies and robust system architectures (ERD, use cases, workflows), with a proven track record of driving a ~40% revenue increase and leading cross-functional teams.",
      "Combines analytical rigor with technical craftsmanship in SQL, Figma, UI/UX design, system modeling, and modern web development to engineer software and business systems that actually deliver measurable impact."
    ],

    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/david-antono", icon: "fa-brands fa-linkedin-in", type: "linkedin" },
      { label: "Instagram", href: "https://www.instagram.com/david.antonoo/", icon: "fa-brands fa-instagram", type: "instagram" },
      { label: "GitHub", href: "https://github.com/Piddooow", icon: "fa-brands fa-github", type: "github" },
      { label: "Email", href: "mailto:david.enampatoo@gmail.com", icon: "fa-solid fa-envelope", type: "email" },
      { label: "Resume", href: "https://drive.google.com/file/d/17l3k06p1dV9A2U1iuvGd5suaiD5Js79U/view?usp=sharing", icon: "fa-solid fa-file-lines", type: "resume" }
    ]
  };

  const educationData = {
    institution: "BINUS University",
    degree: "BBA (Management), BSc (Information Systems)",
    status: "Double Degree Program",
    period: "Sep 2023 – Present",
    gpa: "3.66 / 4.00",
    highlights: [
      "Dual qualification bridging strategic enterprise management with information systems engineering.",
      "Specialized coursework in System Analysis & Design, Database Systems, Business Strategy, and Enterprise Architecture."
    ]
  };

  const experienceData = [
    {
      role: "Co-Manager",
      company: "Family Motorcycle Workshop (Private Enterprise)",
      period: "May 2016 – Jul 2023",
      location: "Indonesia",
      bulletPoints: [
        "Led daily operations serving 60–150+ customers per day and supervised a team of 5–8 staff across service and technical functions, driving a ~40% increase in revenue through operational and customer experience improvements.",
        "Negotiated with vendors and sourced new suppliers to resolve supply chain issues, managing 30–80+ inventory items to minimize service downtime.",
        "Grew customer engagement and brand visibility through targeted social media outreach across Instagram, TikTok, and WhatsApp."
      ]
    },
    {
      role: "Media & Creative Team",
      company: "Church Organization (@freedom.nextgen)",
      period: "Sep 2025 – Present",
      location: "Indonesia",
      bulletPoints: [
        "Produce visual content (posters, reels, presentations) for weekly events and manage a community of 300+ active followers.",
        "Contribute to content strategy and creative direction."
      ]
    }
  ];

  const featuredProject = {
    slug: "waena-jaya",
    title: "Bengkel Waena Jaya Motor",
    category: "Website Development & Digital Presence",
    role: "Full-Stack Developer",
    year: "2025",
    summary: "Official production website and digital presence engineered for Bengkel Waena Jaya Motor in Jayapura, Papua (Keeping Waena Moving Since 2007). Features service catalogs, transparent pricing breakdown, emergency booking integration, and responsive mobile architecture.",
    tech: "HTML5 • Tailwind CSS • Modern JavaScript • Mobile-First Responsive",
    techTags: ["Live Production Site", "Service Catalog", "WhatsApp API Booking"],
    image: "src/assets/images/waena-jaya-preview.png",
    liveUrl: "https://waenjayamotor.github.io/waena-jaya-website/"
  };

  const projectsData = [
    {
      slug: "waena-jaya",
      title: "Bengkel Waena Jaya Motor",
      category: "Website Development",
      role: "Full-Stack Developer",
      year: "2025",
      summary: "Production website built for Bengkel Waena Jaya Motor (Jayapura, Papua). Features verified spare parts catalogs, transparent diagnostic workflows, and instant WhatsApp booking.",
      tech: "Production Website • Responsive UI • WhatsApp Integration",
      techTags: ["Live Site", "Digital Presence", "Fast Loading"],
      image: "src/assets/images/waena-jaya-preview.png",
      liveUrl: "https://waenjayamotor.github.io/waena-jaya-website/",
      featured: true
    },
    {
      slug: "szan",
      title: "Szān — Sustainable Fashion E-Commerce",
      category: "System Analysis & UI/UX Design",
      role: "System Analyst & UI/UX Designer",
      year: "May 2025",
      summary: "Collaborated in a team of 4 to design 90+ UI screens and develop formal system models (Use Case, ERD, System Sequence Diagrams) for an e-commerce platform with complex inventory and product-variation logic.",
      tech: "Figma • ERD Modeling • SSD • Team of 4",
      techTags: ["90+ UI Screens", "SSD Modeling", "Complex Inventory"],
      image: "src/assets/images/szan-preview.png",
      featured: true
    },
    {
      slug: "travio",
      title: "Travio — Travel Planning Mobile App",
      category: "System Analysis & UI/UX Design",
      role: "System Analyst & UI/UX Designer",
      year: "Dec 2025",
      summary: "Translated stakeholder requirements into comprehensive system architecture (use cases, ERD, workflows) for a multi-service integration travel platform. Designed 120+ screens & interactive prototypes and led usability testing with 30+ users.",
      tech: "Figma • Visual Paradigm • System Architecture • Usability Testing",
      techTags: ["120+ UI Screens", "ERD & Use Cases", "30+ User Testing"],
      image: "src/assets/images/travio-preview.png",
      featured: true
    },
    {
      slug: "coming-soon",
      title: "Coming Soon",
      category: "Project",
      role: "In Development",
      year: "2026",
      summary: "Coming Soon",
      tech: "Coming Soon",
      techTags: ["Coming Soon"],
      image: "src/assets/images/coming-soon-preview.svg",
      isComingSoon: true,
      featured: true
    }
  ];

  const personalGalleryData = [
    {
      name: "Max Padel Court",
      designation: "Competitive Athletics • Padel Match",
      quote: "Focus, quick reflexes, and teamwork on the court.",
      tag: "Athletics",
      src: "src/assets/images/personal/personal-1-padel.jpg"
    },
    {
      name: "Nature & Exploration",
      designation: "Outdoor Life • Salomon Trail",
      quote: "Exploring fresh perspectives and steady footing off the beaten path.",
      tag: "Outdoor",
      src: "src/assets/images/personal/personal-2-trail.jpg"
    },
    {
      name: "Heavy Deadlift & Power",
      designation: "Physical Discipline • Strength",
      quote: "Discipline under tension — pushing mental and physical thresholds.",
      tag: "Discipline",
      src: "src/assets/images/personal/personal-3-deadlift.png"
    },
    {
      name: "Training & Conditioning",
      designation: "Fitness • Daily Habit",
      quote: "Consistency over motivation — showing up every single day.",
      tag: "Training",
      src: "src/assets/images/personal/personal-4-gym.jpg"
    },
    {
      name: "Precision & Social Focus",
      designation: "Recreation • Billiards",
      quote: "Strategic angles, patience, and memorable moments with great friends.",
      tag: "Recreation",
      src: "src/assets/images/personal/personal-5-billiards.jpg"
    },
    {
      name: "Moments of Clarity",
      designation: "Lifestyle • Reflection",
      quote: "Stepping back from the screen to recharge and reflect on what’s next.",
      tag: "Lifestyle",
      src: "src/assets/images/personal/personal-6-lifestyle-a.jpg"
    },
    {
      name: "Events & Community",
      designation: "Creativity • Community Engagement",
      quote: "Connecting with people, sharing energy, and building shared memories.",
      tag: "Community",
      src: "src/assets/images/personal/personal-7-lifestyle-b.jpg"
    },
    {
      name: "Casual Perspective",
      designation: "Everyday • Balance & Growth",
      quote: "Staying grounded, curious, and open to continuous learning.",
      tag: "Everyday",
      src: "src/assets/images/personal/personal-8-lifestyle-c.jpg"
    },
    {
      name: "Early Beginnings",
      designation: "Roots • Childhood Memory",
      quote: "Every journey starts with childhood curiosity and an open mind.",
      tag: "Roots",
      src: "src/assets/images/personal/personal-9-childhood.jpg"
    },
    {
      name: "Professional & Vision",
      designation: "Identity • Engineering Craft",
      quote: "Building thoughtful digital systems with clarity and high craftsmanship.",
      tag: "Vision",
      src: "src/assets/images/personal/personal-10-portrait.jpg"
    }
  ];

  const competenciesData = [
    {
      category: "Business & Strategy",
      subtitle: "Strategic Rigor & Commercial Insight",
      items: [
        "Business Analysis (SWOT, Porter’s 5 Forces, STP)",
        "Go-to-Market (GTM) Strategy",
        "Vendor Negotiation & Procurement",
        "Operations & Inventory Management",
        "Stakeholder Coordination",
        "Digital Marketing & Growth"
      ]
    },
    {
      category: "Tools & Technical",
      subtitle: "Engineering, Design & Systems Modeling",
      items: [
        "SQL & Relational Databases",
        "Figma & UI/UX Prototyping",
        "Visual Paradigm (Use Cases, ERD, SSD)",
        "Microsoft Excel & Financial Modeling",
        "Modern Web Development (HTML/CSS/JS/React)",
        "MS Office Suite & Business Reporting"
      ]
    }
  ];

  const languageData = [
    { name: "Indonesian", level: "Fluent (Native)" },
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Japanese", level: "Beginner" },
    { name: "Mandarin", level: "Beginner" },
    { name: "German", level: "Beginner" }
  ];

  const personalChatCategories = [
    {
      id: "website",
      label: "Website",
      icon: "fa-solid fa-globe",
      whatsappMessage: "Hi Vidd, I’m interested in discussing a website project. I’d like to share more details about what I need."
    },
    {
      id: "erp",
      label: "ERP / Business System",
      icon: "fa-solid fa-network-wired",
      whatsappMessage: "Hi Vidd, I’d like to discuss an ERP/business system project. I’d like to explain the workflow and requirements."
    },
    {
      id: "business-app",
      label: "Business Application",
      icon: "fa-solid fa-laptop-code",
      whatsappMessage: "Hi Vidd, I’d like to discuss a custom business application project for our operational workflows."
    },
    {
      id: "ai-product",
      label: "AI Product",
      icon: "fa-solid fa-microchip",
      whatsappMessage: "Hi Vidd, I’m interested in building an AI-powered product and would like to discuss the idea with you."
    },
    {
      id: "collaboration",
      label: "Collaboration",
      icon: "fa-solid fa-handshake",
      whatsappMessage: "Hi Vidd, I’d like to discuss a potential collaboration opportunity with you."
    },
    {
      id: "general",
      label: "General Inquiry",
      icon: "fa-solid fa-comment-dots",
      whatsappMessage: "Hi Vidd, I visited your portfolio and would like to connect with you."
    }
  ];

  // ==========================================================================
  // 2. THEME MANAGER
  // ==========================================================================
  const THEME_STORAGE_KEY = 'portfolio_theme';

  function isDark() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function initTheme() {
    const dark = isDark();
    applyTheme(dark);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches);
        updateToggleIcons();
      }
    });
  }

  function toggleTheme(event) {
    const currentIsDark = isDark();
    const nextIsDark = !currentIsDark;

    if (event) {
      const x = event.clientX || window.innerWidth / 2;
      const y = event.clientY || window.innerHeight / 2;
      document.documentElement.style.setProperty('--theme-x', `${x}px`);
      document.documentElement.style.setProperty('--theme-y', `${y}px`);
    }

    const applyChange = () => {
      localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light');
      applyTheme(nextIsDark);
      updateToggleIcons();
    };

    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(() => {
        applyChange();
      });
    } else {
      applyChange();
    }
  }

  function updateToggleIcons() {
    const dark = isDark();
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  // ==========================================================================
  // 3. COMPONENTS
  // ==========================================================================

  // --- Navbar ---
  function renderNavbar(currentPath = '#/') {
    const dark = isDark();
    const navItems = [
      { label: 'Projects', href: '#projects' },
      { label: 'Competencies', href: '#capabilities' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Personal', href: '#other-side' },
      { label: 'Activity', href: '#github-activity' },
      { label: 'Contact', href: '#contact' }
    ];

    function createLetterSwapHtml(label) {
      const lettersHtml = label
        .split('')
        .map((char, i) => {
          const displayChar = char === ' ' ? '&nbsp;' : char;
          return `
            <span aria-hidden="true" class="letter-slot">
              <span class="letter-char letter-${i}">${displayChar}</span>
              <span class="letter-secondary letter-secondary-${i}">${displayChar}</span>
            </span>
          `;
        })
        .join('');

      return `
        <span class="random-letter-swap" aria-label="${label}">
          <span class="sr-only">${label}</span>
          ${lettersHtml}
        </span>
      `;
    }

    const desktopLinksHtml = navItems
      .map((item) => {
        const active = currentPath === item.href ? 'active' : '';
        return `
          <a href="${item.href}" class="nav-link ${active}" data-label="${item.label}">
            ${createLetterSwapHtml(item.label)}
          </a>
        `;
      })
      .join('');

    const mobileLinksHtml = navItems
      .map((item) => {
        const active = currentPath === item.href ? 'active' : '';
        return `
          <a href="${item.href}" class="mobile-nav-link ${active}" data-label="${item.label}">
            <span>${item.label}</span>
          </a>
        `;
      })
      .join('');

    return `
      <header class="site-header" id="site-header">
        <div class="site-container">
          <nav class="nav-container" aria-label="Main Navigation">
            <!-- Monogram Brand Logo (Left) -->
            <a href="#/" class="brand-monogram" title="${profileData.name}">
              <span>${profileData.brandName}</span>
              <span class="brand-slash">/</span>
            </a>

            <!-- Navigation Links & Theme Controls (Right) -->
            <div class="nav-right-wrap" id="nav-right-wrap">
              <!-- Desktop Links (Hidden on mobile < 640px) -->
              <div class="nav-links desktop-nav-links">
                ${desktopLinksHtml}
              </div>

              <div class="desktop-nav-divider" aria-hidden="true"></div>

              <!-- Theme Toggle Button -->
              <button type="button" class="theme-toggle-btn" id="theme-toggle" title="${dark ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="Toggle theme">
                <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/>
                  <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>
                </svg>
                <svg class="theme-icon-moon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              </button>

              <!-- Mobile Hamburger Menu Button (Visible on mobile < 640px) -->
              <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
                <svg class="hamburger-icon" id="hamburger-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg class="hamburger-icon" id="hamburger-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>

        <!-- Mobile Dropdown Drawer -->
        <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
          <div class="site-container">
            <div class="mobile-nav-links">
              ${mobileLinksHtml}
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function initRandomLetterSwapHover() {
    const links = document.querySelectorAll('#nav-right-wrap .nav-link');

    links.forEach((link) => {
      const swapContainer = link.querySelector('.random-letter-swap');
      if (!swapContainer) return;

      const label = link.getAttribute('data-label') || '';
      const length = label.length;
      if (length === 0) return;

      let isBlocked = false;
      let resetTimeout = null;

      link.addEventListener('mouseenter', () => {
        if (isBlocked) return;
        isBlocked = true;

        // Generate randomized order of character indexes
        const shuffled = Array.from({ length }, (_, i) => i).sort(() => Math.random() - 0.5);
        const staggerDuration = 20; // 0.02s per letter
        const animDuration = 700; // ms

        const primaryLetters = swapContainer.querySelectorAll('.letter-char');
        const secondaryLetters = swapContainer.querySelectorAll('.letter-secondary');

        for (let i = 0; i < length; i++) {
          const idx = shuffled[i];
          const delay = i * staggerDuration;

          const p = primaryLetters[idx];
          const s = secondaryLetters[idx];

          if (p && s) {
            p.style.transition = `transform ${animDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;
            s.style.transition = `top ${animDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`;

            p.style.transform = 'translateY(100%)';
            s.style.top = '0%';
          }
        }

        if (resetTimeout) clearTimeout(resetTimeout);

        const totalTime = length * staggerDuration + animDuration + 50;
        resetTimeout = setTimeout(() => {
          primaryLetters.forEach((p) => {
            p.style.transition = 'none';
            p.style.transform = 'translateY(0%)';
          });

          secondaryLetters.forEach((s) => {
            s.style.transition = 'none';
            s.style.top = '-100%';
          });

          // Force browser layout repaint
          void swapContainer.offsetHeight;

          isBlocked = false;
        }, totalTime);
      });
    });
  }

  function initNavbarEvents() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        toggleTheme(e);
      });
    }

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    const iconOpen = document.getElementById('hamburger-icon-open');
    const iconClose = document.getElementById('hamburger-icon-close');

    if (mobileBtn && drawer) {
      let isOpen = false;

      function closeMenu() {
        if (!isOpen) return;
        isOpen = false;
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        mobileBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen) iconOpen.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
      }

      function openMenu() {
        if (isOpen) return;
        isOpen = true;
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        mobileBtn.setAttribute('aria-expanded', 'true');
        if (iconOpen) iconOpen.style.display = 'none';
        if (iconClose) iconClose.style.display = 'block';
      }

      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      const allLinks = document.querySelectorAll('.desktop-nav-links .nav-link, .mobile-nav-drawer .mobile-nav-link');
      allLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href') || '';
          if (href.startsWith('#') && !href.startsWith('#/')) {
            const targetId = href.substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
              e.preventDefault();
              closeMenu();

              allLinks.forEach((l) => l.classList.remove('active'));
              link.classList.add('active');

              try {
                history.pushState(null, '', href);
              } catch (err) {}

              const header = document.getElementById('site-header');
              const headerHeight = header ? header.offsetHeight : 64;
              const targetRect = targetEl.getBoundingClientRect();
              const targetPosition = targetRect.top + window.pageYOffset - headerHeight - 16;

              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            }
          } else {
            closeMenu();
          }
        });
      });

      document.addEventListener('click', (e) => {
        const header = document.getElementById('site-header');
        if (header && !header.contains(e.target)) {
          closeMenu();
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 640 && isOpen) {
          closeMenu();
        }
      });
    }

    initRandomLetterSwapHover();
  }

  // --- Hero (24fps Smooth Pixelated Avatar Transition & / D4vd) ---
  function renderHero() {
    const socialsHtml = profileData.socials
      .map(
        (s) => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-${s.type}" title="${s.label}">
          <i class="${s.icon}"></i>
        </a>
      `
      )
      .join('');

    return `
      <section class="hero-section" id="hero">
        <div class="hero-profile-row">
          <div class="pixelated-image-card" id="pixel-avatar" tabindex="0" role="button" aria-label="Toggle profile avatar transition" title="Hover or tap to reveal">
            <div class="pixelated-image-card__default" id="pixel-avatar-default">
              <img src="${profileData.childhoodImage}" alt="${profileData.name} Childhood" />
            </div>

            <div class="pixelated-image-card__active" id="pixel-avatar-active">
              <img src="${profileData.adultImage}" alt="${profileData.name} Present" />
            </div>

            <div class="pixelated-image-card__pixels" id="pixel-avatar-pixels"></div>
          </div>

          <div class="hero-meta-col">
            <div class="hero-name-badge-row">
              <h1 class="hero-name" style="display: inline-flex; align-items: baseline; gap: 0.35rem; flex-wrap: wrap;">
                <span>${profileData.name}</span>
                <span class="verified-badge" title="Verified Profile" aria-label="Verified" style="align-self: center;">
                  <svg viewBox="0 0 24 24" class="verified-icon" aria-hidden="true">
                    <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                    <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                  </svg>
                </span>
                <span class="hero-name-alias" style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 400; color: var(--text-muted); letter-spacing: 0.02em; margin-left: 0.15rem;">/ D4vd</span>
              </h1>
              <div class="status-beacon">
                <span class="beacon-dot"></span>
                <span>${profileData.status}</span>
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-secondary); margin-top: -0.25rem;">
              ${educationData.institution} — ${educationData.degree} (GPA ${educationData.gpa})
            </div>

            <div class="hero-social-links">
              ${socialsHtml}
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.15rem;">
          <div>
            <span class="eyebrow-mono" style="font-size: 0.72rem; letter-spacing: 0.25em;">${profileData.heroEyebrow}</span>
            <h2 class="hero-headline" style="margin-top: 0.4rem;">
              ${profileData.heroHeadingHtml || profileData.heroHeading}
            </h2>
          </div>

          <p class="hero-bio">
            ${profileData.heroSupportingHtml || profileData.heroSupporting}
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              <span>View Projects</span>
              <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a href="#about" class="btn-secondary">
              <span>Academic Background</span>
            </a>

            <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="gap: 0.4rem;">
              <i class="fa-solid fa-file-lines" style="font-size: 0.75rem;"></i>
              <span>View Resume (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function initHeroAvatarPhysics() {
    const container = document.getElementById('pixel-avatar');
    const activeLayer = document.getElementById('pixel-avatar-active');
    const pixelsContainer = document.getElementById('pixel-avatar-pixels');
    if (!container || !activeLayer || !pixelsContainer) return;

    const gridSize = 8;
    const totalPixels = gridSize * gridSize;
    const stepDuration = 350;
    const fpsInterval = 1000 / 18; // 18fps (~55.5ms)

    pixelsContainer.innerHTML = '';
    const pixelElements = [];

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const el = document.createElement('div');
        el.className = 'pixelated-image-card__pixel';
        const sizePct = 100 / gridSize;
        el.style.width = `${sizePct}%`;
        el.style.height = `${sizePct}%`;
        el.style.left = `${c * sizePct}%`;
        el.style.top = `${r * sizePct}%`;
        pixelsContainer.appendChild(el);
        pixelElements.push(el);
      }
    }

    let isHovered = false;
    let animTimeout = null;
    let frameInterval = null;

    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function clearAllAnimations() {
      if (animTimeout) clearTimeout(animTimeout);
      if (frameInterval) clearInterval(frameInterval);
      animTimeout = null;
      frameInterval = null;
    }

    function runPixelTransition(targetActive) {
      clearAllAnimations();
      isHovered = targetActive;

      const randomizedIndices = shuffle(Array.from({ length: totalPixels }, (_, i) => i));
      const totalFrames = Math.max(6, Math.floor(stepDuration / fpsInterval));
      const pixelsPerFrame = Math.ceil(totalPixels / totalFrames);

      let currentFrame = 0;
      
      frameInterval = setInterval(() => {
        currentFrame++;
        const endIdx = Math.min(totalPixels, currentFrame * pixelsPerFrame);
        for (let i = 0; i < endIdx; i++) {
          const pIdx = randomizedIndices[i];
          pixelElements[pIdx].style.display = 'block';
        }

        if (currentFrame >= totalFrames) {
          clearInterval(frameInterval);
          frameInterval = null;

          activeLayer.style.display = targetActive ? 'block' : 'none';

          const hideIndices = shuffle(Array.from({ length: totalPixels }, (_, i) => i));
          let hideFrame = 0;

          frameInterval = setInterval(() => {
            hideFrame++;
            const hideEndIdx = Math.min(totalPixels, hideFrame * pixelsPerFrame);
            for (let i = 0; i < hideEndIdx; i++) {
              const pIdx = hideIndices[i];
              pixelElements[pIdx].style.display = 'none';
            }

            if (hideFrame >= totalFrames) {
              clearInterval(frameInterval);
              frameInterval = null;
              pixelElements.forEach((p) => (p.style.display = 'none'));
            }
          }, fpsInterval);
        }
      }, fpsInterval);
    }

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      container.addEventListener('click', () => {
        runPixelTransition(!isHovered);
      });
    } else {
      container.addEventListener('mouseenter', () => {
        if (!isHovered) runPixelTransition(true);
      });

      container.addEventListener('mouseleave', () => {
        if (isHovered) runPixelTransition(false);
      });

      container.addEventListener('focus', () => {
        if (!isHovered) runPixelTransition(true);
      });

      container.addEventListener('blur', () => {
        if (isHovered) runPixelTransition(false);
      });
    }
  }

  // --- Philosophy ---
  function renderPhilosophy() {
    return `
      <section class="philosophy-section" id="philosophy" style="padding: 1.75rem 2rem; border-radius: 0.75rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card);">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.2em;">Guiding Principle</span>
          <blockquote style="font-size: 1.25rem; font-style: italic; font-weight: 300; color: var(--text-primary); line-height: 1.45; letter-spacing: -0.02em; margin: 0;">
            “${profileData.mainQuote}”
          </blockquote>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
            ${profileData.quoteSupporting}
          </p>
        </div>
      </section>
    `;
  }

  // --- Featured Project ---
  function renderFeatured() {
    const tagsHtml = featuredProject.techTags
      .map((t) => `<span class="pill-badge" style="font-size: 0.7rem;">${t}</span>`)
      .join('');

    return `
      <section class="featured-card" id="featured-work">
        <div class="featured-img-wrap">
          <a href="${featuredProject.liveUrl}" target="_blank" rel="noopener noreferrer" title="View live website" style="display: block; width: 100%; height: 100%;">
            <img src="${featuredProject.image}" alt="${featuredProject.title} live screenshot" class="featured-img" />
          </a>
        </div>

        <div class="featured-content">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
              <span class="eyebrow-mono" style="font-size: 0.65rem;">Primary Showcase • ${featuredProject.category}</span>
              <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${featuredProject.year}</span>
            </div>
            <h3 class="featured-title" style="margin-top: 0.35rem;">${featuredProject.title}</h3>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${featuredProject.role}</span>
          </div>

          <p style="font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">
            ${featuredProject.summary}
          </p>

          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
            ${featuredProject.tech}
          </div>

          <div class="featured-tags" style="align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${tagsHtml}
            </div>

            <a href="${featuredProject.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.76rem; padding: 0.4rem 0.85rem; gap: 0.35rem;">
              <span>Visit Live Website</span>
              <svg style="width: 0.8rem; height: 0.8rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // --- Verified Projects Grid ---
  function renderProjects() {
    const cardsHtml = projectsData
      .map((p) => {
        const isComingSoon = p.isComingSoon === true;

        const tagsHtml = p.techTags
          .map((t) => `<span class="tag-chip" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">${t}</span>`)
          .join('');

        const liveBtnHtml = p.liveUrl
          ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-live" style="display: inline-flex; align-items: center; gap: 0.3rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-primary); margin-top: 0.5rem; text-decoration: underline; text-underline-offset: 3px;">
              <span>Visit Live Site</span>
              <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          `
          : '';

        return `
          <article class="card-spotlight project-card ${isComingSoon ? 'coming-soon-card' : ''}" data-slug="${p.slug}" style="${isComingSoon ? 'border: 1px dashed var(--border-dashed);' : ''}">
            <div class="project-card-img-wrap">
              <img src="${p.image}" alt="${p.title}" class="project-card-img" />
            </div>

            <div class="project-card-body">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">${p.category}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${p.year}</span>
                </div>
                <h3 class="project-card-title">${p.title}</h3>
                <span style="display: block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.5rem;">${p.role}</span>
                <p class="project-card-desc">${p.summary}</p>
              </div>

              <div>
                <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); font-style: italic; margin-bottom: 0.65rem;">
                  ${p.tech}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                  ${tagsHtml}
                </div>

                ${liveBtnHtml}
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    return `
      <section class="projects-section" id="projects">
        <div class="section-header">
          <div>
            <h2 class="section-title">Verified Projects & Systems</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Real-world web engineering, system architecture, UX prototypes, and upcoming projects.
            </p>
          </div>
        </div>

        <div class="projects-grid">
          ${cardsHtml}
        </div>
      </section>
    `;
  }

  function initSpotlightPhysics() {
    const cards = document.querySelectorAll('.card-spotlight');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // --- Core Competencies ---
  function renderCapabilities() {
    const cardsHtml = competenciesData
      .map((cat) => {
        const itemsListHtml = cat.items
          .map(
            (item) => `
            <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.86rem; color: var(--text-primary); padding: 0.25rem 0;">
              <span style="width: 5px; height: 5px; border-radius: 9999px; background-color: var(--text-muted); flex-shrink: 0;"></span>
              <span>${item}</span>
            </div>
          `
          )
          .join('');

        return `
          <div class="card-spotlight" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <span class="eyebrow-mono" style="font-size: 0.65rem;">${cat.subtitle}</span>
              <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.25rem;">${cat.category}</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; border-top: 1px dashed var(--border-dashed); padding-top: 0.75rem;">
              ${itemsListHtml}
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <section class="capabilities-section" id="capabilities">
        <div class="section-header">
          <div>
            <h2 class="section-title">Core Competencies</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Analytical frameworks, system modeling tools, and execution capabilities.
            </p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
          ${cardsHtml}
        </div>
      </section>
    `;
  }

  // --- About & Education ---
  function renderAbout() {
    const bioParagraphsHtml = profileData.aboutBio
      .map((p) => `<p style="font-size: 0.95rem; line-height: 1.75; color: var(--text-secondary);">${p}</p>`)
      .join('');

    const languagesHtml = languageData
      .map(
        (l) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0; border-bottom: 1px dashed var(--border-dashed); font-size: 0.84rem;">
          <span style="font-weight: 500; color: var(--text-primary);">${l.name}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${l.level}</span>
        </div>
      `
      )
      .join('');

    return `
      <section class="about-section" id="about">
        <div class="section-header">
          <h2 class="section-title">About & Background</h2>
          <span class="eyebrow-mono" style="font-size: 0.65rem;">${profileData.location}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.75rem;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${bioParagraphsHtml}
          </div>

          <div class="card-spotlight" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">Education • ${educationData.status}</span>
                <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.25rem;">${educationData.institution}</h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${educationData.period}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
              <p style="font-size: 0.95rem; font-weight: 500; color: var(--text-primary); margin: 0;">
                ${educationData.degree}
              </p>
              <span class="pill-badge" style="font-size: 0.72rem; background: var(--bg-surface-elevated); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                GPA: ${educationData.gpa}
              </span>
            </div>

            <ul class="exp-desc-list" style="margin-top: 0.5rem;">
              ${educationData.highlights.map((h) => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
            <div class="card-spotlight" style="padding: 1.25rem;">
              <span class="eyebrow-mono" style="font-size: 0.65rem; margin-bottom: 0.5rem; display: block;">Languages</span>
              <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                ${languagesHtml}
              </div>
            </div>

            <div class="card-spotlight" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem; margin-bottom: 0.25rem; display: block;">Official Documents</span>
                <h4 style="font-size: 1rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.35rem;">Verified Personal Record</h4>
                <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
                  All credentials, academic achievements, and project documentation are verified and accessible via Google Drive.
                </p>
              </div>

              <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.78rem; padding: 0.45rem 0.9rem;">
                  <i class="fa-solid fa-file-pdf" style="font-size: 0.8rem;"></i>
                  <span>View CV (PDF)</span>
                </a>
                <a href="${profileData.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.78rem; padding: 0.45rem 0.9rem;">
                  <i class="fa-brands fa-google-drive" style="font-size: 0.8rem;"></i>
                  <span>Drive Folder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // --- Experience & Leadership ---
  function renderExperience() {
    const expItemsHtml = experienceData
      .map(
        (exp) => `
        <div class="experience-item" style="padding-bottom: 1.5rem; border-bottom: 1px dashed var(--border-dashed);">
          <div class="exp-date">${exp.period}</div>
          <div>
            <h3 class="exp-title">${exp.role}</h3>
            <p class="exp-company">${exp.company} • ${exp.location}</p>
            <ul class="exp-desc-list" style="margin-top: 0.6rem;">
              ${exp.bulletPoints.map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>
      `
      )
      .join('');

    return `
      <section class="experience-section" id="experience">
        <div class="section-header">
          <div>
            <h2 class="section-title">Professional Experience & Leadership</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Operational management, revenue growth, and creative direction.
            </p>
          </div>
          <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="section-link" style="gap: 0.4rem;">
            <span>View Resume</span>
            <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>

        <div class="experience-list">
          ${expItemsHtml}
        </div>
      </section>
    `;
  }

  // --- "The other side of Vidd" — Compact Editorial 3D Carousel (10 Photos) ---
  let activeGalleryIndex = 0;
  let autoplayTimer = null;

  function renderOtherSide() {
    const activeItem = personalGalleryData[activeGalleryIndex] || personalGalleryData[0];

    const deckItemsHtml = personalGalleryData
      .map(
        (item, index) => `
        <div class="circular-deck-item" data-index="${index}" id="deck-item-${index}">
          <img src="${item.src}" alt="${item.name} (${item.tag})" class="deck-image" />
          <div class="deck-badge-overlay">
            <span>${item.tag}</span>
          </div>
        </div>
      `
      )
      .join('');

    const dotsHtml = personalGalleryData
      .map(
        (_, i) => `
        <button type="button" class="deck-dot ${i === activeGalleryIndex ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
      `
      )
      .join('');

    return `
      <section class="other-side-section" id="other-side" style="margin-top: 1.5rem;">
        <div class="section-header">
          <div>
            <h2 class="section-title">The other side of Vidd</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Beyond systems and code — moments in sports, discipline, and daily life.
            </p>
          </div>
        </div>

        <div class="circular-carousel-wrapper" id="circular-carousel-wrapper">
          <div class="circular-carousel-grid">
            <div class="circular-image-deck" id="circular-image-deck" tabindex="0" role="region" aria-label="Swipeable photo deck">
              ${deckItemsHtml}
            </div>

            <div class="circular-content-col">
              <div class="circular-text-body" id="circular-text-body">
                <span class="eyebrow-mono" id="deck-tag-text" style="font-size: 0.65rem; color: var(--text-muted);">${activeItem.tag}</span>
                <h3 class="deck-title" id="deck-name-text" style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.2rem; letter-spacing: -0.02em;">
                  ${activeItem.name}
                </h3>
                <p class="deck-designation" id="deck-designation-text" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
                  ${activeItem.designation}
                </p>
                <blockquote class="deck-quote" id="deck-quote-text" style="font-size: 0.9rem; font-style: italic; color: var(--text-primary); line-height: 1.55; margin: 0; min-height: 3.5rem;">
                  “${activeItem.quote}”
                </blockquote>
              </div>

              <div class="circular-controls-row">
                <div class="deck-dots-indicator" id="deck-dots-indicator">
                  ${dotsHtml}
                </div>

                <div class="deck-arrow-buttons">
                  <button type="button" class="deck-nav-btn" id="deck-prev-btn" aria-label="Previous photo" title="Previous (Left Arrow)">
                    <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <button type="button" class="deck-nav-btn" id="deck-next-btn" aria-label="Next photo" title="Next (Right Arrow)">
                    <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function initOtherSideCarousel() {
    const container = document.getElementById('circular-image-deck');
    const wrapper = document.getElementById('circular-carousel-wrapper');
    if (!container || !wrapper) return;

    const total = personalGalleryData.length;
    const prevBtn = document.getElementById('deck-prev-btn');
    const nextBtn = document.getElementById('deck-next-btn');
    const nameEl = document.getElementById('deck-name-text');
    const designationEl = document.getElementById('deck-designation-text');
    const quoteEl = document.getElementById('deck-quote-text');
    const tagEl = document.getElementById('deck-tag-text');
    const dots = document.querySelectorAll('.deck-dot');

    function update3DTransform() {
      const isMobile = window.innerWidth < 640;
      const gap = isMobile ? 28 : 48;

      for (let i = 0; i < total; i++) {
        const el = document.getElementById(`deck-item-${i}`);
        if (!el) continue;

        const isActive = i === activeGalleryIndex;
        const isLeft = (activeGalleryIndex - 1 + total) % total === i;
        const isRight = (activeGalleryIndex + 1) % total === i;

        if (isActive) {
          el.style.zIndex = '3';
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
          el.style.transform = 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)';
        } else if (isLeft) {
          el.style.zIndex = '2';
          el.style.opacity = '0.65';
          el.style.pointerEvents = 'auto';
          el.style.transform = `translateX(-${gap}px) translateY(-6px) scale(0.88) rotateY(14deg)`;
        } else if (isRight) {
          el.style.zIndex = '2';
          el.style.opacity = '0.65';
          el.style.pointerEvents = 'auto';
          el.style.transform = `translateX(${gap}px) translateY(-6px) scale(0.88) rotateY(-14deg)`;
        } else {
          el.style.zIndex = '1';
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          el.style.transform = 'translateX(0px) translateY(14px) scale(0.75) rotateY(0deg)';
        }
      }

      const activeItem = personalGalleryData[activeGalleryIndex];
      if (activeItem) {
        if (nameEl) nameEl.textContent = activeItem.name;
        if (designationEl) designationEl.textContent = activeItem.designation;
        if (quoteEl) quoteEl.textContent = `“${activeItem.quote}”`;
        if (tagEl) tagEl.textContent = activeItem.tag;
      }

      dots.forEach((dot, idx) => {
        if (idx === activeGalleryIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function goToNext() {
      activeGalleryIndex = (activeGalleryIndex + 1) % total;
      update3DTransform();
    }

    function goToPrev() {
      activeGalleryIndex = (activeGalleryIndex - 1 + total) % total;
      update3DTransform();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(goToNext, 5000);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoplay();
        goToNext();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopAutoplay();
        goToPrev();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        stopAutoplay();
        activeGalleryIndex = idx;
        update3DTransform();
      });
    });

    let startX = 0;
    let isDown = false;

    container.addEventListener('touchstart', (e) => {
      stopAutoplay();
      startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (Math.abs(diff) > 35) {
        if (diff < 0) goToNext();
        else goToPrev();
      }
    }, { passive: true });

    container.addEventListener('mousedown', (e) => {
      stopAutoplay();
      isDown = true;
      startX = e.clientX;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDown) return;
      isDown = false;
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 35) {
        if (diff < 0) goToNext();
        else goToPrev();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        stopAutoplay();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        stopAutoplay();
        goToNext();
      }
    });

    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);

    update3DTransform();
    startAutoplay();
  }

  // --- Real-time GitHub Contribution Calendar Table ---
  function renderGitHubActivity() {
    return `
      <section class="github-activity-section" id="github-activity" style="margin-top: 1.5rem;">
        <div class="section-header">
          <div>
            <h2 class="section-title">GitHub Activity</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Real-time contribution calendar for <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); text-decoration: underline; font-weight: 500;">@${profileData.githubUsername}</a>.
            </p>
          </div>

          <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="section-link" style="gap: 0.4rem;">
            <span>View Profile</span>
            <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>

        <div class="github-calendar-box">
          <div class="github-cal-header">
            <span style="font-weight: 500; font-size: 0.88rem;" id="github-total-contributions">
              8 contributions in the last year
            </span>
            <div style="display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
              <span class="beacon-dot" style="width: 0.4rem; height: 0.4rem;"></span>
              <span>Live Sync</span>
            </div>
          </div>

          <div class="github-cal-overflow">
            <div class="github-cal-months">
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
            </div>

            <div class="github-cal-grid-body">
              <div class="github-cal-days-label">
                <span></span>
                <span>Mon</span>
                <span></span>
                <span>Wed</span>
                <span></span>
                <span>Fri</span>
                <span></span>
              </div>

              <div class="github-cal-weeks" id="github-weeks-container">
              </div>
            </div>
          </div>

          <div class="github-cal-footer">
            <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: underline; text-underline-offset: 2px;">
              Learn how we count contributions
            </a>

            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <span>Less</span>
              <span class="github-cal-cell" style="cursor: default;"></span>
              <span class="github-cal-cell" data-level="1" style="cursor: default;"></span>
              <span class="github-cal-cell" data-level="2" style="cursor: default;"></span>
              <span class="github-cal-cell" data-level="3" style="cursor: default;"></span>
              <span class="github-cal-cell" data-level="4" style="cursor: default;"></span>
              <span>More</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function initGitHubActivityEvents() {
    const weeksContainer = document.getElementById('github-weeks-container');
    const totalCountEl = document.getElementById('github-total-contributions');
    if (!weeksContainer) return;

    function renderCalendarGrid(daysArray) {
      weeksContainer.innerHTML = '';
      const columnsCount = Math.ceil(daysArray.length / 7);
      for (let c = 0; c < columnsCount; c++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'github-cal-col';

        for (let r = 0; r < 7; r++) {
          const idx = c * 7 + r;
          if (idx < daysArray.length) {
            const day = daysArray[idx];
            const cell = document.createElement('div');
            cell.className = 'github-cal-cell';
            if (day.level > 0) {
              cell.setAttribute('data-level', day.level.toString());
            }
            cell.title = `${day.count || 0} contributions on ${day.date}`;
            colDiv.appendChild(cell);
          }
        }
        weeksContainer.appendChild(colDiv);
      }
    }

    function generateFallbackDays() {
      const days = [];
      const today = new Date();
      for (let i = 364; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        
        let count = 0;
        let level = 0;

        if (dateStr === '2026-07-28' || dateStr.endsWith('07-28')) {
          count = 1;
          level = 4;
        } else if (dateStr === '2026-08-10' || dateStr.endsWith('08-10')) {
          count = 7;
          level = 4;
        }

        days.push({ date: dateStr, count, level });
      }
      return days;
    }

    renderCalendarGrid(generateFallbackDays());

    fetch(`https://github-contributions-api.jogruber.de/v4/${profileData.githubUsername}?y=last`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions && data.contributions.length > 0) {
          if (totalCountEl && data.total && typeof data.total.lastYear !== 'undefined') {
            totalCountEl.textContent = `${data.total.lastYear} contributions in the last year`;
          }
          renderCalendarGrid(data.contributions);
        }
      })
      .catch((err) => {
        console.warn('Calendar API fallback in effect:', err);
      });
  }

  // --- Contact ---
  function renderContact() {
    return `
      <section class="contact-section" id="contact">
        <div class="section-header">
          <h2 class="section-title">Let’s connect & build.</h2>
        </div>

        <div class="outside-ide-layout" style="align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <p style="font-size: 0.95rem; line-height: 1.75; color: var(--text-secondary); max-width: 28rem;">
              Whether you have a strategic business challenge, an enterprise system or ERP to model, or an AI/web product to build — I’m always open to discussing new opportunities and collaborations.
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
                PHONE / WA: <span style="color: var(--text-primary); font-weight: 500;">${profileData.phone}</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
                EMAIL: <span style="color: var(--text-primary); font-weight: 500;">${profileData.email}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-linkedin" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
              <div style="display: flex; align-items: center; gap: 0.875rem;">
                <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div>
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">LinkedIn</span>
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">linkedin.com/in/david-antono</p>
                </div>
              </div>
              <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>

            <a href="https://wa.me/${profileData.phoneRaw}?text=Hi%20Vidd%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-whatsapp" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
              <div style="display: flex; align-items: center; gap: 0.875rem;">
                <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">WhatsApp</span>
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">${profileData.phone}</p>
                </div>
              </div>
              <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>

            <a href="mailto:${profileData.email}" class="card-spotlight contact-item contact-card-email" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
              <div style="display: flex; align-items: center; gap: 0.875rem;">
                <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">Direct Email</span>
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">${profileData.email}</p>
                </div>
              </div>
              <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>

            <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-instagram" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
              <div style="display: flex; align-items: center; gap: 0.875rem;">
                <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">Instagram</span>
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">@david.antonoo</p>
                </div>
              </div>
              <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>

            <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-github" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
              <div style="display: flex; align-items: center; gap: 0.875rem;">
                <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                  <i class="fa-brands fa-github"></i>
                </div>
                <div>
                  <span class="eyebrow-mono" style="font-size: 0.65rem;">GitHub</span>
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">@Piddooow</p>
                </div>
              </div>
              <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // --- Personal Chat Widget ---
  let isChatOpen = false;
  let selectedCategory = personalChatCategories[0];
  let customMessage = selectedCategory.whatsappMessage;

  function renderChatWidget() {
    const categoryChipsHtml = personalChatCategories
      .map(
        (cat) => `
        <button type="button" class="chat-category-btn ${cat.id === selectedCategory.id ? 'active' : ''}" data-cat-id="${cat.id}">
          <i class="${cat.icon}" style="font-size: 0.75rem;"></i>
          <span>${cat.label}</span>
        </button>
      `
      )
      .join('');

    return `
      <div class="chat-dock" id="chat-dock">
        <div class="chat-window" id="chat-window" style="display: ${isChatOpen ? 'flex' : 'none'};">
          <div class="chat-header">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 2.25rem; height: 2.25rem; border-radius: 9999px; overflow: hidden; border: 1px solid var(--border-subtle); flex-shrink: 0;">
                <img src="${profileData.pfpImage}" alt="${profileData.name}" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <h4 style="font-size: 0.84rem; font-weight: 600; color: var(--text-primary); margin: 0; display: inline-flex; align-items: center; gap: 0.3rem;">
                    <span>${profileData.name}</span>
                    <span class="verified-badge" style="width: 0.95rem; height: 0.95rem;">
                      <svg viewBox="0 0 24 24" class="verified-icon">
                        <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                        <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                      </svg>
                    </span>
                  </h4>
                </div>
                <span style="font-size: 0.68rem; color: var(--text-muted); font-family: var(--font-mono);">Direct WhatsApp & Email Gateway</span>
              </div>
            </div>

            <button type="button" id="close-chat-btn" style="color: var(--text-muted); cursor: pointer; padding: 0.25rem;" aria-label="Close chat">
              <svg style="width: 1.125rem; height: 1.125rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="chat-messages" style="height: auto; max-height: 22rem; gap: 1rem;">
            <div class="chat-bubble chat-bubble-bot">
              Hello! What kind of project or system are you looking to build with Vidd? Select an area below to generate your direct message:
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Select Project Scope</span>
              <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;" id="chat-categories-wrap">
                ${categoryChipsHtml}
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Message Preview (Editable)</span>
              <textarea id="dynamic-whatsapp-text" rows="3" style="width: 100%; font-family: inherit; font-size: 0.82rem; line-height: 1.45; padding: 0.6rem 0.75rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); color: var(--text-primary); border: 1px solid var(--border-subtle); resize: none;">${customMessage}</textarea>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.5rem; padding-top: 0.25rem;">
              <a href="https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(customMessage)}" target="_blank" rel="noopener noreferrer" id="launch-whatsapp-btn" class="btn-primary" style="justify-content: center; background-color: #25D366; color: #ffffff; border-color: #25D366; font-weight: 500;">
                <i class="fa-brands fa-whatsapp" style="font-size: 1rem;"></i>
                <span>Continue on WhatsApp</span>
                <svg style="width: 0.85rem; height: 0.85rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a href="mailto:${profileData.email}?subject=Project%20Inquiry%20from%20Portfolio&body=${encodeURIComponent(customMessage)}" id="launch-email-btn" class="btn-secondary" style="justify-content: center; font-size: 0.78rem;">
                <i class="fa-solid fa-envelope" style="font-size: 0.8rem;"></i>
                <span>Send as Email Instead</span>
              </a>
            </div>
          </div>
        </div>

        <button type="button" class="chat-trigger-btn" id="open-chat-btn" aria-label="Chat with Vidd">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem; color: #25D366;"></i>
          <span>Chat with ${profileData.name}</span>
        </button>
      </div>
    `;
  }

  function initChatEvents() {
    const openBtn = document.getElementById('open-chat-btn');
    const closeBtn = document.getElementById('close-chat-btn');
    const chatWindow = document.getElementById('chat-window');
    const textarea = document.getElementById('dynamic-whatsapp-text');
    const waBtn = document.getElementById('launch-whatsapp-btn');
    const emailBtn = document.getElementById('launch-email-btn');

    function updateLinks(text) {
      if (waBtn) {
        waBtn.href = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(text)}`;
      }
      if (emailBtn) {
        emailBtn.href = `mailto:${profileData.email}?subject=Project%20Inquiry&body=${encodeURIComponent(text)}`;
      }
    }

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        if (chatWindow) chatWindow.style.display = isChatOpen ? 'flex' : 'none';
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        isChatOpen = false;
        if (chatWindow) chatWindow.style.display = 'none';
      });
    }

    if (textarea) {
      textarea.addEventListener('input', (e) => {
        customMessage = e.target.value;
        updateLinks(customMessage);
      });
    }

    const categoryButtons = document.querySelectorAll('.chat-category-btn');
    categoryButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-cat-id');
        const found = personalChatCategories.find((c) => c.id === catId);
        if (found) {
          selectedCategory = found;
          customMessage = found.whatsappMessage;
          if (textarea) textarea.value = customMessage;
          updateLinks(customMessage);

          categoryButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  // --- Footer ---
  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="site-container">
          <div class="footer-content">
            <div>
              <p class="footer-quote">“${profileData.mainQuote}”</p>
              <div class="footer-metadata">
                <span style="font-weight: 500; color: var(--text-primary); display: inline-flex; align-items: center; gap: 0.25rem;">
                  <span>${profileData.name}</span>
                  <span class="verified-badge" style="width: 0.85rem; height: 0.85rem;">
                    <svg viewBox="0 0 24 24" class="verified-icon">
                      <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                    <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                  </svg>
                </span>
              </span>
              <span class="divider">/</span>
              <span>BINUS University (BBA & BSc)</span>
              <span class="divider">/</span>
              <span>${profileData.location}</span>
            </div>
          </div>

          <div class="footer-right">
            <div class="hero-social-links" style="gap: 1rem;">
              <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-linkedin" title="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-instagram" title="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-github" title="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="mailto:${profileData.email}" class="hero-social-link social-email" title="Email">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-resume" title="Resume">
                <i class="fa-solid fa-file-lines"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <button type="button" class="back-to-top-btn" id="back-to-top-btn" title="Back to top" aria-label="Scroll back to top">
      <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `;
  }

  function initBackToTopEvents() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Home Composition ---
  function renderHomePage() {
    return `
      <main class="site-container main-content">
        ${renderHero()}
        ${renderPhilosophy()}
        ${renderFeatured()}
        ${renderProjects()}
        ${renderCapabilities()}
        ${renderAbout()}
        ${renderExperience()}
        ${renderOtherSide()}
        ${renderGitHubActivity()}
        ${renderContact()}
      </main>
    `;
  }

  function initHomePageEvents() {
    initHeroAvatarPhysics();
    initSpotlightPhysics();
    initOtherSideCarousel();
    initGitHubActivityEvents();
  }

  // --- 404 Error Page ---
  function render404Page() {
    return `
      <div class="w-full min-h-screen bg-black overflow-hidden flex justify-center items-center relative m-0 p-0 text-black">
        <!-- 1. Circle Expansion Canvas Layer -->
        <canvas id="circle-canvas" class="w-full h-full absolute inset-0 z-10 block pointer-events-none"></canvas>

        <!-- 2. Stick Figures Flying / Rotating Layer -->
        <div id="characters-container" class="absolute w-[99%] h-[95%] z-20 pointer-events-none overflow-hidden"></div>

        <!-- 3. Message Display Layer -->
        <div id="message-display" class="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-30 pointer-events-none">
          <div id="message-content" class="flex flex-col items-center text-center transition-all duration-700 opacity-0 transform translate-y-2 pointer-events-auto max-w-xl px-4">
            
            <!-- Brand Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 mb-2">
              <img src="src/assets/images/spider-icon.png" alt="Vidd Icon" class="w-4 h-4 object-contain">
              <span class="font-mono text-[11px] font-bold tracking-wider text-black/70 uppercase">VIDD • PORTFOLIO</span>
            </div>

            <!-- Main Title -->
            <h1 class="text-[28px] sm:text-[35px] font-bold text-black m-[1%] tracking-tight leading-tight" style="font-family: 'Outfit', sans-serif;">
              Page Not Found
            </h1>

            <!-- Giant 404 Number -->
            <div class="text-[64px] sm:text-[80px] font-extrabold text-black m-[1%] leading-none tracking-tighter select-none" style="font-family: 'Outfit', sans-serif;">
              404
            </div>

            <!-- Description Subtitle -->
            <p class="text-[14px] sm:text-[15px] max-w-[440px] text-center text-black/80 m-[1%] leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <!-- Action Navigation Buttons -->
            <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <!-- Go Back Button -->
              <button
                type="button"
                id="error-go-back-btn"
                class="text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out px-5 sm:px-6 py-2.5 h-auto text-sm sm:text-base font-semibold rounded-md flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm cursor-pointer group"
                aria-label="Go back to previous page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-transform group-hover:-translate-x-1">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                <span>Go Back</span>
              </button>

              <!-- Go Home Button -->
              <a
                href="#/"
                class="bg-black text-white hover:bg-neutral-800 transition-all duration-300 ease-in-out px-5 sm:px-6 py-2.5 h-auto text-sm sm:text-base font-semibold rounded-md flex items-center gap-2 hover:scale-105 active:scale-95 shadow-md group"
                aria-label="Return to Vidd Portfolio Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-transform group-hover:scale-110">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>Go Home</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  function init404PageEvents() {
    const goBackBtn = document.getElementById('error-go-back-btn');
    if (goBackBtn) {
      goBackBtn.addEventListener('click', () => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.hash = '#/';
        }
      });
    }

    setTimeout(() => {
      const messageContent = document.getElementById('message-content');
      if (messageContent) {
        messageContent.classList.remove('opacity-0', 'translate-y-2');
        messageContent.classList.add('opacity-100', 'translate-y-0');
      }
    }, 1200);

    const container = document.getElementById('characters-container');
    if (container) {
      const stickFigures = [
        {
          top: '0%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
          transform: 'rotateZ(-90deg)',
          speedX: 1500,
        },
        {
          top: '10%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick1.svg',
          speedX: 3000,
          speedRotation: 2000,
        },
        {
          top: '20%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick2.svg',
          speedX: 5000,
          speedRotation: 1000,
        },
        {
          top: '25%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
          speedX: 2500,
          speedRotation: 1500,
        },
        {
          top: '35%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
          speedX: 2000,
          speedRotation: 300,
        },
        {
          bottom: '5%',
          src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick3.svg',
          speedX: 0,
        },
      ];

      function renderSticks() {
        if (!container) return;
        container.innerHTML = '';

        stickFigures.forEach((figure, index) => {
          const stick = document.createElement('img');
          stick.classList.add('characters');
          stick.style.position = 'absolute';
          stick.style.width = '18%';
          stick.style.height = '18%';
          stick.style.maxWidth = '180px';
          stick.style.maxHeight = '180px';

          if (figure.top) stick.style.top = figure.top;
          if (figure.bottom) stick.style.bottom = figure.bottom;

          stick.src = figure.src;
          stick.alt = 'Animated Stick Figure';

          if (figure.transform) stick.style.transform = figure.transform;

          container.appendChild(stick);

          if (index === 5) return;

          if (stick.animate) {
            stick.animate(
              [{ left: '100%' }, { left: '-20%' }],
              { duration: figure.speedX, easing: 'linear', fill: 'forwards' }
            );

            if (index !== 0 && figure.speedRotation) {
              stick.animate(
                [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
                { duration: figure.speedRotation, iterations: Infinity, easing: 'linear' }
              );
            }
          }
        });
      }

      renderSticks();
    }

    const canvas = document.getElementById('circle-canvas');
    if (canvas) {
      let requestId = null;
      let timer = 0;
      let circulos = [];

      function initArr() {
        circulos = [];
        const width = canvas.width;
        const height = canvas.height;

        for (let i = 0; i < 300; i++) {
          const randomX = Math.floor(
            Math.random() * ((width * 3) - (width * 1.2) + 1)
          ) + (width * 1.2);

          const randomY = Math.floor(
            Math.random() * ((height) - (height * -0.2) + 1)
          ) + (height * -0.2);

          const size = width / 1000;

          circulos.push({ x: randomX, y: randomY, size: size });
        }
      }

      function draw() {
        const context = canvas.getContext('2d');
        if (!context) return;

        timer++;
        context.setTransform(1, 0, 0, 1, 0, 0);

        const distanceX = canvas.width / 80;
        const growthRate = canvas.width / 1000;

        context.fillStyle = 'white';
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < circulos.length; i++) {
          const circulo = circulos[i];
          context.beginPath();

          if (timer < 65) {
            circulo.x = circulo.x - distanceX;
            circulo.size = circulo.size + growthRate;
          }

          if (timer >= 65 && timer < 500) {
            circulo.x = circulo.x - (distanceX * 0.02);
            circulo.size = circulo.size + (growthRate * 0.2);
          }

          context.arc(circulo.x, circulo.y, Math.max(0.1, circulo.size), 0, Math.PI * 2);
          context.fill();
        }

        if (timer > 500) {
          if (requestId) {
            cancelAnimationFrame(requestId);
            requestId = null;
          }
          return;
        }

        requestId = requestAnimationFrame(draw);
      }

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        timer = 0;
        if (requestId) {
          cancelAnimationFrame(requestId);
          requestId = null;
        }

        const context = canvas.getContext('2d');
        if (context && context.reset) {
          context.reset();
        }

        initArr();
        draw();
      }

      resize();
      window.addEventListener('resize', resize);
    }
  }

  // ==========================================================================
  // 4. ROUTER & BOOTSTRAP
  // ==========================================================================
  function handleRoute() {
    const route = window.location.hash || '#/';
    const app = document.getElementById('root');
    if (!app) return;

    // Handle in-page anchors when home page is already mounted
    if (route.startsWith('#') && !route.startsWith('#/')) {
      const targetId = route.substring(1);
      const existingTarget = document.getElementById(targetId);
      if (existingTarget) {
        existingTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    let mainHtml = '';
    let initPageEvents = () => {};
    let is404 = false;

    const validAnchors = [
      '#/', '#', '', '#projects', '#capabilities', '#about',
      '#experience', '#other-side', '#github-activity', '#contact'
    ];

    if (validAnchors.includes(route) || route === '' || route === '#' || route === '#/') {
      mainHtml = renderHomePage();
      initPageEvents = initHomePageEvents;
    } else if (route.startsWith('#/projects')) {
      mainHtml = renderProjectsPage();
      initPageEvents = initProjectsPageEvents;
    } else if (route.startsWith('#/experience')) {
      mainHtml = renderExperiencePage();
    } else if (route.startsWith('#/certifications')) {
      mainHtml = renderCertificationsPage();
      initPageEvents = initCertificationsPageEvents;
    } else if (route.startsWith('#/tech-stack')) {
      mainHtml = renderTechPage();
    } else if (route.startsWith('#/events')) {
      mainHtml = renderEventsPage();
      initPageEvents = initEventsPageEvents;
    } else if (route.startsWith('#/keepr')) {
      mainHtml = renderCaseStudyPage('keepr');
    } else if (route.startsWith('#/pawsitivecare')) {
      mainHtml = renderCaseStudyPage('pawsitivecare');
    } else {
      is404 = true;
      mainHtml = render404Page();
      initPageEvents = init404PageEvents;
    }

    if (is404) {
      app.innerHTML = mainHtml;
      init404PageEvents();
      return;
    }

    app.innerHTML = `
      ${renderNavbar(route)}
      <div id="app-main" style="flex: 1; width: 100%;">
        ${mainHtml}
      </div>
      ${renderFooter()}
      ${renderChatWidget()}
    `;

    initNavbarEvents();
    initBackToTopEvents();
    initChatEvents();
    initPageEvents();
  }

  function initApp() {
    initTheme();
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
