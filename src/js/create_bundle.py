import os

bundle_code = '''(function() {
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
    mainQuote: "It’s going to happen because, I’m going to make it happen.",
    quoteSupporting: "I believe good ideas become valuable when they are executed with consistency, curiosity, and attention to detail.",
    
    heroEyebrow: "Web Developer for Business | Modern Tools & Technology",
    heroHeading: "Web developer for business, delivering functional websites quickly and cost-effectively.",
    heroHeadingHtml: 'Web developer for business, delivering <span class="hero-highlight">functional websites</span> <span class="hero-highlight">quickly and cost-effectively</span>.',
    heroSupporting: "I build websites for businesses that are both practical and effective, leveraging up-to-date tools and technologies to design, refine, and launch faster. My priority is creating solutions that genuinely support daily operations, such as online stores, booking systems, and light automation, without adding unnecessary complexity.",
    heroSupportingHtml: '<span class="text-primary-contrast">I build websites for businesses</span> that are both <span class="hero-highlight">practical and effective</span>, leveraging up-to-date tools and technologies to design, refine, and <span class="text-primary-contrast">launch faster</span>. My priority is creating solutions that genuinely support daily operations, such as <span class="hero-highlight">online stores</span>, <span class="hero-highlight">booking systems</span>, and <span class="hero-highlight">light automation</span>, without adding unnecessary complexity.',
    
    aboutBio: [
      "Business-minded Information Systems and Management student at BINUS University with hands-on experience in operations management, vendor negotiation, and strategic business analysis (SWOT, Porter’s Five Forces, STP).",
      "Skilled at turning market and stakeholder insights into actionable go-to-market strategies and robust system architectures (ERD, use cases, workflows), with a proven track record of driving a ~40% revenue increase and leading cross-functional teams.",
      "Combines analytical rigor with technical craftsmanship in SQL, Figma, UI/UX design, system modeling, and modern web development to engineer software and business systems that actually deliver measurable impact."
    ],

    socials: [
      { label: "David Antono", href: "https://www.linkedin.com/in/david-antono", icon: "fa-brands fa-linkedin-in", type: "linkedin" },
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
      .map((item, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        const active = currentPath === item.href ? 'active' : '';
        return `
          <a href="${item.href}" class="mobile-nav-link ${active}" data-label="${item.label}" style="--item-index: ${idx};">
            <span class="mobile-nav-link-num">${num}</span>
            <span class="mobile-nav-link-text">${item.label}</span>
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

              <!-- React Bits StaggeredMenu Hamburger Button (Visible on mobile < 640px) -->
              <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
                <span class="toggle-line line-1"></span>
                <span class="toggle-line line-2"></span>
                <span class="toggle-line line-3"></span>
              </button>
            </div>
          </nav>
        </div>

        <!-- React Bits StaggeredMenu Dropdown Drawer -->
        <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
          <div class="site-container">
            <div class="mobile-nav-links" style="--total-items: ${navItems.length};">
              ${mobileLinksHtml}

              <div class="mobile-nav-social-wrap">
                <span class="mobile-nav-social-label">Connect</span>
                <div class="mobile-nav-social-links">
                  <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">GitHub</a>
                  <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">David Antono (LinkedIn)</a>
                  <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="mobile-nav-social-link">Instagram</a>
                  <a href="mailto:${profileData.email}" class="mobile-nav-social-link">Email</a>
                </div>
              </div>
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

    // Mobile Drawer Toggle (React Bits StaggeredMenu effect)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-nav-drawer');

    if (mobileBtn && drawer) {
      let isOpen = false;

      function closeMenu() {
        if (!isOpen) return;
        isOpen = false;
        drawer.classList.remove('open');
        mobileBtn.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }

      function openMenu() {
        if (isOpen) return;
        isOpen = true;
        drawer.classList.add('open');
        mobileBtn.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        mobileBtn.setAttribute('aria-expanded', 'true');
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
                <span class="shiny-text">${profileData.name}</span>
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
              <span class="shiny-text">${educationData.institution} — ${educationData.degree} (GPA ${educationData.gpa})</span>
            </div>

            <div class="hero-social-links">
              ${socialsHtml}
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.15rem;">
          <div>
            <span class="eyebrow-mono shiny-text" style="font-size: 0.72rem; letter-spacing: 0.25em;">${profileData.heroEyebrow}</span>
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

  // --- Universal ScrollReveal System ---
  function initScrollRevealObserver() {
    const targetSelectors = [
      '.hero-section',
      '.philosophy-section',
      '.logo-loop-section',
      '.projects-section',
      '.capabilities-section',
      '.about-section',
      '.experience-section',
      '.outside-ide-section',
      '.github-section',
      '.contact-section',
      '.project-card',
      '.capability-card',
      '.about-profile-card',
      '.experience-card',
      '.contact-item',
      '.github-card'
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));
    if (!elements.length) return;

    const parents = new Set();
    elements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      if (el.parentElement) {
        parents.add(el.parentElement);
      }
    });

    parents.forEach((parent) => {
      const children = parent.querySelectorAll('.reveal-on-scroll');
      if (children.length > 1) {
        children.forEach((child, idx) => {
          child.style.setProperty('--reveal-delay', (idx * 0.06).toFixed(2));
        });
      }
    });

    function updateReveals() {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Top elements past the viewport or elements within viewport stay/become revealed
        if (rect.top < windowHeight - 24) {
          el.classList.add('is-revealed');
        } else {
          // Elements below the viewport exit transition
          el.classList.remove('is-revealed');
        }
      });
    }

    let ticking = false;
    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateReveals();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    updateReveals();
  }

  // --- Philosophy ---
  function renderPhilosophy() {
    return `
      <section class="philosophy-section" id="philosophy" style="padding: 1.75rem 2rem; border-radius: 0.75rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card);">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.2em;">Guiding Principle</span>
          <blockquote style="font-size: 1.25rem; font-style: italic; font-weight: 700; opacity: 0.85; color: var(--text-primary); line-height: 1.45; letter-spacing: -0.02em; margin: 0;">
            “${profileData.mainQuote}”
          </blockquote>
          <p style="font-size: 0.875rem; color: var(--text-secondary); opacity: 0.78; line-height: 1.6; margin: 0;">
            ${profileData.quoteSupporting}
          </p>
        </div>
      </section>
    `;
  }

  // --- React Bits LogoLoop Tech Stack (3-Category Directional Stream with Dashed Border) ---
  function renderLogoLoop() {
    const category1Languages = [
      { title: "JavaScript", icon: "fa-brands fa-js", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
      { title: "TypeScript", icon: "fa-solid fa-code", href: "https://www.typescriptlang.org", color: "#3178C6" },
      { title: "Python", icon: "fa-brands fa-python", href: "https://www.python.org", color: "#3776AB" },
      { title: "PHP", icon: "fa-brands fa-php", href: "https://www.php.net", color: "#777BB4" },
      { title: "HTML5", icon: "fa-brands fa-html5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", color: "#E34F26" },
      { title: "CSS3", icon: "fa-brands fa-css3-alt", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6" },
      { title: "SQL", icon: "fa-solid fa-table-cells", href: "#capabilities", color: "#336791" },
      { title: "Bash / Shell", icon: "fa-solid fa-terminal", href: "https://www.gnu.org/software/bash/", color: "#4EAA25" }
    ];

    const category2Frameworks = [
      { title: "React", icon: "fa-brands fa-react", href: "https://react.dev", color: "#61DAFB" },
      { title: "Next.js", icon: "fa-solid fa-n", href: "https://nextjs.org", color: "#E2E8F0" },
      { title: "Node.js", icon: "fa-brands fa-node-js", href: "https://nodejs.org", color: "#339933" },
      { title: "Tailwind CSS", icon: "fa-solid fa-wind", href: "https://tailwindcss.com", color: "#38BDF8" },
      { title: "Figma", icon: "fa-brands fa-figma", href: "https://www.figma.com", color: "#F24E1E" },
      { title: "Express.js", icon: "fa-solid fa-server", href: "https://expressjs.com", color: "#A1A1AA" },
      { title: "REST APIs", icon: "fa-solid fa-network-wired", href: "#capabilities", color: "#009688" },
      { title: "Bootstrap", icon: "fa-brands fa-bootstrap", href: "https://getbootstrap.com", color: "#7952B3" }
    ];

    const category3DatabasesSystems = [
      { title: "PostgreSQL", icon: "fa-solid fa-database", href: "https://www.postgresql.org", color: "#4169E1" },
      { title: "MySQL", icon: "fa-solid fa-server", href: "https://www.mysql.com", color: "#4479A1" },
      { title: "Docker", icon: "fa-brands fa-docker", href: "https://www.docker.com", color: "#2496ED" },
      { title: "Git & GitHub", icon: "fa-brands fa-github", href: "https://github.com/Piddooow", color: "#F05032" },
      { title: "Visual Paradigm", icon: "fa-solid fa-diagram-project", href: "#capabilities", color: "#0080FF" },
      { title: "Postman", icon: "fa-solid fa-paper-plane", href: "https://www.postman.com", color: "#FF6C37" },
      { title: "ERD & Use Cases", icon: "fa-solid fa-sitemap", href: "#capabilities", color: "#A855F7" },
      { title: "Vercel", icon: "fa-solid fa-triangle", href: "https://vercel.com", color: "#E2E8F0" }
    ];

    const renderTrackGroup = (logos) =>
      logos
        .map(
          (logo) => `
        <div class="logo-loop-item">
          <a href="${logo.href}" target="_blank" rel="noopener noreferrer" class="logo-loop-link" title="${logo.title}" style="--brand-color: ${logo.color}; --brand-glow: ${logo.color}33;">
            <i class="${logo.icon}"></i>
            <span class="logo-loop-title">${logo.title}</span>
          </a>
        </div>
      `
        )
        .join('');

    const row1Html = renderTrackGroup(category1Languages);
    const row2Html = renderTrackGroup(category2Frameworks);
    const row3Html = renderTrackGroup(category3DatabasesSystems);

    return `
      <section class="logo-loop-section" id="tech-loop" style="margin-top: 1.5rem;">
        <div class="tech-stack-dashed-wrapper" style="padding: 1.5rem 1.25rem; border-radius: 0.85rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card); position: relative; overflow: hidden;">
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding: 0 0.25rem;">
            <div style="display: flex; flex-direction: column; gap: 0.2rem;">
              <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.18em;">Core Engineering & Tech Stack</span>
              <span style="font-size: 0.84rem; color: var(--text-secondary);">Languages • Frameworks • Systems & DevOps</span>
            </div>
            <span class="pill-badge" style="font-family: var(--font-mono); font-size: 0.65rem; padding: 0.25rem 0.6rem; border: 1px dashed var(--border-dashed);">
              3 Categories
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            
            <!-- Category 1: Languages & Core (Right to Left stream / Kanan ke Kiri) -->
            <div class="tech-stream-row">
              <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 34s;">
                <div class="logo-loop-track left scale-on-hover">
                  <div class="logo-loop-group">
                    ${row1Html}
                  </div>
                  <div class="logo-loop-group" aria-hidden="true">
                    ${row1Html}
                  </div>
                </div>
              </div>
            </div>

            <!-- Category 2: Frameworks & UI/UX (Left to Right stream / Kiri ke Kanan) -->
            <div class="tech-stream-row">
              <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 32s;">
                <div class="logo-loop-track right scale-on-hover">
                  <div class="logo-loop-group">
                    ${row2Html}
                  </div>
                  <div class="logo-loop-group" aria-hidden="true">
                    ${row2Html}
                  </div>
                </div>
              </div>
            </div>

            <!-- Category 3: Databases & Systems (Left to Right stream / Kiri ke Kanan) -->
            <div class="tech-stream-row">
              <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 36s;">
                <div class="logo-loop-track right scale-on-hover">
                  <div class="logo-loop-group">
                    ${row3Html}
                  </div>
                  <div class="logo-loop-group" aria-hidden="true">
                    ${row3Html}
                  </div>
                </div>
              </div>
            </div>

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
            <span class="edge-light"></span>
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
    const elements = document.querySelectorAll(
      '.card-spotlight, .border-glow-card, .featured-card, .resume-item, .edu-item, .philosophy-card, .react-bits-stack-wrapper, .contact-item, .tech-grid-card, .github-calendar-box, .btn-primary, .btn-secondary, .pill-badge, .deck-nav-btn'
    );

    elements.forEach((el) => {
      let ticking = false;
      let lastEvent = null;

      function updatePhysics() {
        if (!lastEvent) return;
        const rect = el.getBoundingClientRect();
        const x = lastEvent.clientX - rect.left;
        const y = lastEvent.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = x - cx;
        const dy = y - cy;

        let kx = Infinity;
        let ky = Infinity;
        if (dx !== 0) kx = cx / Math.abs(dx);
        if (dy !== 0) ky = cy / Math.abs(dy);
        const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);

        let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        if (degrees < 0) degrees += 360;

        el.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
        el.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
        el.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(2)}`);
        el.style.setProperty('--cursor-angle', `${degrees.toFixed(2)}deg`);
        ticking = false;
      }

      el.addEventListener('pointermove', (e) => {
        lastEvent = e;
        if (!ticking) {
          window.requestAnimationFrame(updatePhysics);
          ticking = true;
        }
      }, { passive: true });

      el.addEventListener('pointerenter', (e) => {
        lastEvent = e;
        updatePhysics();
      }, { passive: true });

      el.addEventListener('pointerleave', () => {
        lastEvent = null;
        el.style.setProperty('--edge-proximity', '0');
      }, { passive: true });
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
  function renderOtherSide() {
    const total = personalGalleryData.length;
    const initialTopIndex = total - 1;
    const activeItem = personalGalleryData[initialTopIndex] || personalGalleryData[0];

    return `
      <section class="other-side-section" id="other-side" style="margin-top: 1.5rem;">
        <div class="section-header">
          <div>
            <h2 class="section-title">The other side of Vidd</h2>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Beyond systems and code — moments in sports, discipline, recreation, and daily life.
            </p>
          </div>
        </div>

        <!-- React Bits Stack Interactive Container (Unbounded Drag / Overflow Visible) -->
        <div class="react-bits-stack-wrapper card-spotlight" id="react-bits-stack-wrapper">
          <div class="react-bits-stack-grid">
            
            <!-- Column 1 (Left): Active Card Details & Story -->
            <div class="stack-info-col">
              <div class="stack-info-card" id="stack-info-card">
                <div class="stack-info-header">
                  <span class="eyebrow-mono" id="stack-tag-text" style="font-size: 0.65rem; color: var(--text-muted);">${activeItem.tag}</span>
                  <span class="stack-counter-badge" id="stack-counter-badge">1 / ${total}</span>
                </div>

                <h3 class="stack-title" id="stack-name-text" style="font-size: 1.35rem; font-weight: 500; color: var(--text-primary); margin-top: 0.35rem; letter-spacing: -0.02em;">
                  ${activeItem.name}
                </h3>
                
                <p class="stack-designation" id="stack-designation-text" style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
                  ${activeItem.designation}
                </p>

                <blockquote class="stack-quote" id="stack-quote-text" style="font-size: 0.925rem; font-style: italic; color: var(--text-primary); line-height: 1.6; margin: 0; min-height: 4rem;">
                  “${activeItem.quote}”
                </blockquote>

                <!-- Stack Navigation Controls -->
                <div class="stack-controls-row">
                  <div class="stack-dots-indicator" id="stack-dots-indicator">
                    ${personalGalleryData
                      .map(
                        (_, i) => `
                        <button type="button" class="stack-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View card ${i + 1}"></button>
                      `
                      )
                      .join('')}
                  </div>

                  <div class="stack-arrow-buttons">
                    <button type="button" class="deck-nav-btn" id="stack-prev-btn" aria-label="Previous card in stack" title="Previous Card">
                      <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button type="button" class="deck-nav-btn" id="stack-next-btn" aria-label="Next card in stack" title="Next Card">
                      <svg style="width: 0.9rem; height: 0.9rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 2 (Right): Interactive 3D Stack Stage -->
            <div class="stack-stage-col">
              <div class="stack-outer-box" id="stack-outer-box">
                <div class="stack-container" id="react-bits-stack-deck" role="region" aria-label="Interactive draggable photo stack">
                  ${personalGalleryData
                    .map((item, index) => {
                      return `
                        <div class="card-rotate" data-index="${index}" id="stack-card-${index}">
                          <div class="card stack-card-inner">
                            <img src="${item.src}" alt="${item.name}" class="card-image" loading="lazy" />
                            <div class="stack-card-badge">
                              <span>${item.tag}</span>
                            </div>
                          </div>
                        </div>
                      `;
                    })
                    .join('')}
                </div>
              </div>
              <div class="stack-drag-hint">
                <i class="fa-solid fa-hand-pointer" style="font-size: 0.75rem;"></i>
                <span>Drag anywhere or tap to shuffle</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  function initOtherSideCarousel() {
    const deck = document.getElementById('react-bits-stack-deck');
    const total = personalGalleryData.length;
    const sensitivity = 100;
    const randomRotation = true;
    const randomRotations = personalGalleryData.map(() => (Math.random() * 8 - 4));

    function shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    let stack = shuffleArray(personalGalleryData.map((_, i) => i));
    let currentPage = 1;
    let isPaused = false;
    let autoplayTimer = null;

    const tagEl = document.getElementById('stack-tag-text');
    const nameEl = document.getElementById('stack-name-text');
    const designationEl = document.getElementById('stack-designation-text');
    const quoteEl = document.getElementById('stack-quote-text');
    const counterEl = document.getElementById('stack-counter-badge');
    const dots = document.querySelectorAll('#stack-dots-indicator .stack-dot');
    const prevBtn = document.getElementById('stack-prev-btn');
    const nextBtn = document.getElementById('stack-next-btn');

    function updateInfo() {
      const topIdx = stack[stack.length - 1];
      const item = personalGalleryData[topIdx];
      if (!item) return;

      if (tagEl) tagEl.textContent = item.tag;
      if (nameEl) nameEl.textContent = item.name;
      if (designationEl) designationEl.textContent = item.designation;
      if (quoteEl) quoteEl.textContent = `“${item.quote}”`;
      if (counterEl) counterEl.textContent = `${currentPage} / ${total}`;

      dots.forEach((dot, idx) => {
        if (idx === currentPage - 1) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function renderStackPositions(animate = true) {
      stack.forEach((cardIdx, positionIndex) => {
        const cardEl = document.getElementById(`stack-card-${cardIdx}`);
        if (!cardEl) return;

        const inner = cardEl.querySelector('.stack-card-inner');
        const randomRotate = randomRotation ? randomRotations[cardIdx] : 0;
        
        const stackOffset = stack.length - positionIndex - 1;
        const rotateZ = stackOffset * -2.8 + randomRotate * 0.65;
        const scale = 1 + positionIndex * 0.035 - stack.length * 0.035;
        const translateY = stackOffset * -5;
        const zIndex = positionIndex + 10;

        cardEl.style.zIndex = zIndex;

        if (inner) {
          inner.style.transition = animate ? 'transform 0.48s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.3s ease, opacity 0.3s ease' : 'none';
          inner.style.transformOrigin = '85% 85%';
          inner.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateZ(${rotateZ}deg)`;
        }
      });

      updateInfo();
    }

    function sendToBack(directionX = 140, directionY = -30) {
      if (stack.length <= 1) return;
      const topCardIdx = stack[stack.length - 1];
      const topCardEl = document.getElementById(`stack-card-${topCardIdx}`);

      currentPage = (currentPage % total) + 1;

      if (topCardEl) {
        const inner = topCardEl.querySelector('.stack-card-inner');
        if (inner) {
          inner.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
          inner.style.transform = `translate3d(${directionX * 1.2}px, ${directionY * 1.2}px, 0) rotate(${directionX > 0 ? 14 : -14}deg) scale(0.92)`;
          inner.style.opacity = '0';
        }
      }

      setTimeout(() => {
        const top = stack.pop();
        stack.unshift(top);

        if (topCardEl) {
          const inner = topCardEl.querySelector('.stack-card-inner');
          if (inner) {
            inner.style.opacity = '1';
          }
        }

        renderStackPositions(true);
      }, 220);
    }

    function bringToFront() {
      if (stack.length <= 1) return;
      currentPage = currentPage === 1 ? total : currentPage - 1;
      const bottom = stack.shift();
      stack.push(bottom);
      renderStackPositions(true);
    }

    personalGalleryData.forEach((_, cardIdx) => {
      const cardEl = document.getElementById(`stack-card-${cardIdx}`);
      if (!cardEl) return;

      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let currentX = 0;
      let currentY = 0;
      let hasMoved = false;

      function onPointerDown(e) {
        if (stack[stack.length - 1] !== cardIdx) return;

        isDragging = true;
        hasMoved = false;
        startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

        const inner = cardEl.querySelector('.stack-card-inner');
        if (inner) {
          inner.style.transition = 'none';
          inner.style.cursor = 'grabbing';
        }
      }

      function onPointerMove(e) {
        if (!isDragging) return;

        const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

        currentX = clientX - startX;
        currentY = clientY - startY;

        if (Math.abs(currentX) > 4 || Math.abs(currentY) > 4) {
          hasMoved = true;
        }

        const inner = cardEl.querySelector('.stack-card-inner');
        if (inner) {
          const rotateZ = currentX * 0.08;
          inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateZ(${rotateZ}deg) scale(1.03)`;
        }
      }

      function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;

        const inner = cardEl.querySelector('.stack-card-inner');
        if (inner) {
          inner.style.cursor = 'grab';
        }

        if (Math.hypot(currentX, currentY) > sensitivity) {
          sendToBack(currentX, currentY);
        } else {
          renderStackPositions(true);
        }

        currentX = 0;
        currentY = 0;
      }

      cardEl.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);

      cardEl.addEventListener('touchstart', onPointerDown, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', onPointerUp);

      cardEl.addEventListener('click', (e) => {
        if (!hasMoved && stack[stack.length - 1] === cardIdx) {
          sendToBack(120, -30);
        }
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sendToBack(140, -40);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        bringToFront();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetPage = parseInt(dot.getAttribute('data-index') || '0', 10) + 1;
        while (currentPage !== targetPage) {
          const top = stack.pop();
          stack.unshift(top);
          currentPage = (currentPage % total) + 1;
        }
        renderStackPositions(true);
      });
    });

    renderStackPositions(false);
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
                  <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">David Antono</p>
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
              <p class="footer-quote shiny-text">“${profileData.mainQuote}”</p>
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
              <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-linkedin" title="David Antono (LinkedIn)">
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
        ${renderLogoLoop()}
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
    initScrollRevealObserver();
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

  // --- Warp Twister React Bits Pro Distortion Background Engine ---
  function initWarpTwister() {
    let canvas = document.getElementById('warp-twister-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'warp-twister-canvas';
      canvas.className = 'warp-twister-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '-1';
      canvas.style.transition = 'opacity 0.6s ease';
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      mouseX = width / 2;
      mouseY = height / 2;
      targetMouseX = mouseX;
      targetMouseY = mouseY;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    window.addEventListener(
      'mousemove',
      (e) => {
        targetMouseX = e.clientX;
        targetMouseY = e.clientY;
      },
      { passive: true }
    );

    function draw() {
      time += 0.007;

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      
      const strokeStyleA = isDark ? 'rgba(168, 85, 247, 0.45)' : 'rgba(124, 58, 237, 0.35)';
      const strokeStyleB = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(59, 130, 246, 0.30)';
      const strokeStyleC = isDark ? 'rgba(232, 121, 249, 0.25)' : 'rgba(168, 85, 247, 0.20)';

      const centerX = width * 0.5 + (mouseX - width * 0.5) * 0.25;
      const centerY = height * 0.45 + (mouseY - height * 0.45) * 0.25;

      const rings = window.innerWidth < 768 ? 14 : 22;
      const pointsPerRing = window.innerWidth < 768 ? 36 : 56;
      const maxRadius = Math.hypot(width, height) * 0.65;

      for (let r = 1; r <= rings; r++) {
        const radiusProgress = r / rings;
        const baseRadius = radiusProgress * maxRadius;
        
        if (r % 3 === 0) ctx.strokeStyle = strokeStyleA;
        else if (r % 3 === 1) ctx.strokeStyle = strokeStyleB;
        else ctx.strokeStyle = strokeStyleC;

        ctx.lineWidth = 1 + (1 - radiusProgress) * 0.8;
        ctx.beginPath();

        for (let p = 0; p <= pointsPerRing; p++) {
          const angle = (p / pointsPerRing) * Math.PI * 2;

          const twist = Math.sin(time * 0.8 + radiusProgress * 3.5) * 0.65;
          const waveA = Math.sin(angle * 4 + time * 1.5 + r * 0.3) * (18 * radiusProgress);
          const waveB = Math.cos(angle * 3 - time * 1.2 + r * 0.2) * (14 * radiusProgress);

          const currentAngle = angle + twist * (1 - radiusProgress * 0.5);
          const currentRadius = baseRadius + waveA + waveB;

          const x = centerX + Math.cos(currentAngle) * currentRadius;
          const y = centerY + Math.sin(currentAngle) * (currentRadius * 0.62);

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  // --- ClickSpark Particle Burst Engine ---
  function initClickSpark() {
    let canvas = document.getElementById('click-spark-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'click-spark-canvas';
      canvas.className = 'click-spark-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999999';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    let sparks = [];
    let animId = null;
    let lastFrameTime = 0;
    const frameInterval = 1000 / 60;

    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    function getSparkColor() {
      const isDark = document.documentElement.classList.contains('dark');
      return isDark ? '#ffffff' : '#09090b';
    }

    function loop(timestamp) {
      if (timestamp - lastFrameTime < frameInterval) {
        animId = requestAnimationFrame(loop);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      sparks = sparks.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= 400) return false;

        const progress = elapsed / 400;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const distance = easeOut * 15;
        const currentLength = Math.max(1, 10 * (1 - progress));

        const x1 = spark.x + Math.cos(spark.angle) * distance;
        const y1 = spark.y + Math.sin(spark.angle) * distance;
        const x2 = spark.x + Math.cos(spark.angle) * (distance + currentLength);
        const y2 = spark.y + Math.sin(spark.angle) * (distance + currentLength);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = spark.color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.globalAlpha = Math.max(0, 1 - progress);
        if (spark.color === '#ffffff') {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
          ctx.shadowBlur = 4;
        }
        ctx.stroke();
        ctx.restore();

        return true;
      });

      if (sparks.length > 0) {
        animId = requestAnimationFrame(loop);
      } else {
        animId = null;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    }

    function triggerSpark(x, y) {
      const now = performance.now();
      const color = getSparkColor();

      for (let i = 0; i < 8; i++) {
        sparks.push({
          x,
          y,
          angle: (2 * Math.PI * i) / 8,
          color,
          startTime: now
        });
      }

      if (!animId) {
        lastFrameTime = performance.now();
        animId = requestAnimationFrame(loop);
      }
    }

    window.addEventListener(
      'pointerdown',
      (e) => {
        if (e.clientX >= window.innerWidth - 8) return;
        triggerSpark(e.clientX, e.clientY);
      },
      { passive: true }
    );
  }

  // --- UserCursor Physics Engine (100% Real-Time Instant Custom Cursor) ---
  function initUserCursor(options = {}) {
    const { name = 'Jhon Doe' } = options;

    if (window.matchMedia('(pointer: coarse)').matches) return;

    let container = document.getElementById('user-cursor-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'user-cursor-container';
      container.className = 'user-cursor-container';
      container.setAttribute('aria-hidden', 'true');
      container.innerHTML = `
        <svg class="user-cursor-pointer" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V16.8L4.6 12.3L11.8 12.3L0 0Z" class="user-cursor-svg-path" />
        </svg>
        <div class="user-cursor-badge">
          <span class="user-cursor-name">${name}</span>
        </div>
      `;
      document.body.appendChild(container);
    }

    let isVisible = false;

    function onMouseMove(e) {
      // Direct 1-to-1 zero-lag tracking
      container.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      if (!isVisible) {
        isVisible = true;
        container.classList.add('visible');
      }

      const target = e.target;
      if (target && target.closest('a, button, input, textarea, select, [role="button"], .btn-primary, .btn-secondary, .card-action-btn, .deck-nav-btn, .tag-chip, .logo-loop-link, .interactive')) {
        container.classList.add('is-pointer');
      } else {
        container.classList.remove('is-pointer');
      }
    }

    function onMouseEnter() {
      isVisible = true;
      container.classList.add('visible');
    }

    function onMouseLeave() {
      isVisible = false;
      container.classList.remove('visible');
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
  }

  function initApp() {
    initTheme();
    initWarpTwister();
    initClickSpark();
    initUserCursor({ name: 'Jhon Doe' });
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
'''

with open('/Users/piddooow/Documents/web-portfolio/src/js/bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle_code)

print("Compiled bundle.js successfully with / D4vd moniker, updated quote with comma, 24fps smooth pixel transition, and responsive mobile optimization!")
