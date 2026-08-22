// ==========================================================================
// Portfolio Data Store — Vidd (Piddooow)
// Verified Single Source of Truth
// ==========================================================================

export const profileData = {
  name: "Vidd",
  displayName: "Vidd",
  brandName: "Vidd",
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
  alias: "/ D4vd",
  
  // Main Philosophy Quote
  mainQuote: "It’s going to happen, because I’m going to make it happen.",
  quoteSupporting: "I believe good ideas become valuable when they are executed with consistency, curiosity, and attention to detail.",
  
  // Hero Typography & Positioning
  heroEyebrow: "AI & FULL-STACK SYSTEMS DEVELOPER",
  heroHeading: "Building digital systems that make complex things feel simple.",
  heroSupporting: "I build websites, ERP systems, business applications, and AI-powered products from idea to implementation.",
  
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

export const educationData = {
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

export const experienceData = [
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

// Verified Real Projects (DWDG removed as requested)
export const featuredProject = {
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

export const projectsData = [
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

// Personal Lifestyle & "The other side of Vidd" 10 Real Photos (Ordered 1-10)
export const personalGalleryData = [
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

export const competenciesData = [
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

export const languageData = [
  { name: "Indonesian", level: "Fluent (Native)" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Japanese", level: "Beginner" },
  { name: "Mandarin", level: "Beginner" },
  { name: "German", level: "Beginner" }
];

// Personal Chat Categories & Dynamic WhatsApp Templates
export const personalChatCategories = [
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
