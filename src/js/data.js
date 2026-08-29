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
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  email: "david.enampatoo@gmail.com",
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
  mainQuote: "Don't wish for it, work for it.",
  quoteSupporting: "I believe good ideas become valuable when they are executed with consistency, curiosity, and attention to detail.",
  
  // Hero Typography & Positioning
  heroEyebrow: "Web Developer for Business | Modern Tools & Technology",
  heroHeading: "Web developer for business, delivering functional websites quickly and cost-effectively.",
  heroHeadingHtml: 'Web developer for business, delivering <span class="hero-highlight">functional websites</span> <span class="hero-highlight">quickly and cost-effectively</span>.',
  heroSupporting: "I build websites for businesses that are both practical and effective, leveraging up-to-date tools and technologies to design, refine, and launch faster. My priority is creating solutions that genuinely support daily operations, such as online stores, booking systems, and light automation, without adding unnecessary complexity.",
  heroSupportingHtml: '<span class="text-primary-contrast">I build websites for businesses</span> that are both <span class="hero-highlight">practical and effective</span>, leveraging up-to-date tools and technologies to design, refine, and <span class="text-primary-contrast">launch faster</span>. My priority is creating solutions that genuinely support daily operations, such as <span class="hero-highlight">online stores</span>, <span class="hero-highlight">booking systems</span>, and <span class="hero-highlight">light automation</span>, without adding unnecessary complexity.',
  
  aboutBio: [
    "Business-minded Information Systems and Management student at BINUS University with hands-on experience in operations management, vendor negotiation, and strategic business analysis (SWOT, Porter’s Five Forces, STP). Skilled at turning market and stakeholder insights into actionable go-to-market strategies and robust system architectures (ERD, use cases, workflows), with a proven track record of driving a ~40% revenue increase and leading cross-functional teams.",
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
    order: 1,
    title: "Co-Manager",
    role: "Co-Manager",
    company: "Family Motorcycle Workshop (Private Enterprise)",
    dates: "May 2016 – Jul 2023",
    period: "May 2016 – Jul 2023",
    location: "Indonesia",
    description: [
      "Led daily operations serving 60–150+ customers per day and supervised a team of 5–8 staff across service and technical functions, driving a ~40% increase in revenue through operational and customer experience improvements.",
      "Negotiated with vendors and sourced new suppliers to resolve supply chain issues, managing 30–80+ inventory items to minimize service downtime.",
      "Grew customer engagement and brand visibility through targeted social media outreach across digital platforms."
    ],
    bulletPoints: [
      "Led daily operations serving 60–150+ customers per day and supervised a team of 5–8 staff across service and technical functions, driving a ~40% increase in revenue through operational and customer experience improvements.",
      "Negotiated with vendors and sourced new suppliers to resolve supply chain issues, managing 30–80+ inventory items to minimize service downtime.",
      "Grew customer engagement and brand visibility through targeted social media outreach across digital platforms."
    ],
    tech: ["Operations Management", "Supply Chain", "Vendor Negotiation", "Revenue Growth", "Inventory Control"]
  },
  {
    order: 2,
    title: "Media & Creative Team",
    role: "Media & Creative Team",
    company: "Church Organization (@freedom.nextgen)",
    dates: "Sep 2025 – Present",
    period: "Sep 2025 – Present",
    location: "Indonesia",
    description: [
      "Produce visual content (posters, reels, presentations) for weekly events and manage a community of 300+ active followers.",
      "Contribute to content strategy, creative direction, and brand consistency across digital platforms."
    ],
    bulletPoints: [
      "Produce visual content (posters, reels, presentations) for weekly events and manage a community of 300+ active followers.",
      "Contribute to content strategy, creative direction, and brand consistency across digital platforms."
    ],
    tech: ["Content Strategy", "Visual Design", "Community Management", "Event Media"]
  },
  {
    order: 3,
    title: "Full-Stack Systems Engineer & Analyst",
    role: "Full-Stack Systems Engineer & Analyst",
    company: "Autonomous Venture & Client Engineering",
    dates: "2026 – Present",
    period: "2026 – Present",
    location: "Indonesia • Hybrid",
    description: [
      "Architecting scalable web applications and intelligent enterprise workflow automation platforms.",
      "Developing responsive client-side interfaces, low-latency APIs, and normalized relational schemas for operational data management."
    ],
    bulletPoints: [
      "Architecting scalable web applications and intelligent enterprise workflow automation platforms.",
      "Developing responsive client-side interfaces, low-latency APIs, and normalized relational schemas for operational data management."
    ],
    tech: ["Full-Stack", "System Architecture", "UI/UX", "AI Platforms"],
    status: "Active / Updated"
  }
];

// Verified Real Projects
export const featuredProject = {
  slug: "waena-jaya",
  title: "Bengkel Waena Jaya Motor",
  category: "Website Development & Digital Presence",
  role: "Full-Stack Developer",
  status: "Production",
  year: "2025",
  summary: "Official production website and digital presence engineered for Bengkel Waena Jaya Motor in Jayapura, Papua (Keeping Waena Moving Since 2007). Features service catalogs, transparent pricing breakdown, emergency booking integration, and responsive mobile architecture.",
  tech: "HTML5 • Tailwind CSS • Modern JavaScript • Mobile-First Responsive",
  techTags: ["Live Production Site", "Service Catalog", "Online Booking"],
  techIcons: [
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" }
  ],
  image: "src/assets/images/waena-jaya-preview.png",
  liveUrl: "https://waenjayamotor.github.io/waena-jaya-website/"
};

export const projectsData = [
  {
    order: 1,
    slug: "szan",
    title: "Szān — Sustainable Fashion E-Commerce",
    category: "System Analysis & UI/UX Design",
    role: "System Analyst & UI/UX Designer",
    status: "Completed",
    year: "May 2025",
    summary: "Collaborated in a team of 4 to design 90+ UI screens and develop formal system models (Use Case, ERD, System Sequence Diagrams) for an e-commerce platform with complex inventory and product-variation logic.",
    overview: "Comprehensive end-to-end e-commerce system architecture and design system engineered for an eco-conscious fashion marketplace. Designed in a collaborative team of 4.",
    challenge: "Managing complex multi-attribute inventory matrices (size, color, sustainable material certifications) while keeping checkout friction under 3 taps.",
    solution: "Designed normalized 3NF Relational ERD models, 15+ System Sequence Diagrams (SSD), and a 90+ screen design system with interactive Figma component states.",
    features: [
      { title: "90+ High-Fidelity UI Screens", text: "Comprehensive design system covering discovery, filtering, cart, checkout, and order tracking." },
      { title: "3NF Relational ERD Architecture", text: "Normalized data models supporting complex product variants, stock alerts, and vendor payouts." },
      { title: "System Sequence Diagrams (SSD)", text: "Formal UML flowcharts mapping client-server interactions across authentication and payment." },
      { title: "Interactive Figma Prototyping", text: "Validated through click-through micro-interactions and responsive desktop/mobile layouts." }
    ],
    tech: "Figma • ERD Modeling • SSD • Team of 4",
    techTags: ["90+ UI Screens", "SSD Modeling", "Complex Inventory", "Figma Design System", "Visual Paradigm"],
    techIcons: [
      { name: "Figma", icon: "fa-brands fa-figma", color: "#F24E1E" },
      { name: "Relational DB", icon: "fa-solid fa-database", color: "#336791" },
      { name: "System Modeling", icon: "fa-solid fa-diagram-project", color: "#6366F1" }
    ],
    image: "src/assets/images/szan-preview.png",
    featured: true
  },
  {
    order: 2,
    slug: "travio",
    title: "Travio — Travel Planning Mobile App",
    category: "System Analysis & UI/UX Design",
    role: "System Analyst & UI/UX Designer",
    status: "SUS 86.4",
    year: "Dec 2025",
    summary: "Translated stakeholder requirements into comprehensive system architecture (use cases, ERD, workflows) for a multi-service integration travel platform. Designed 120+ screens & interactive prototypes and led usability testing with 30+ users.",
    overview: "All-in-one travel planning, itinerary management, and multi-vendor booking ecosystem tailored for Southeast Asian travelers.",
    challenge: "Consolidating flight, accommodation, attraction, and transit bookings into a unified timeline without overwhelming user cognitive load.",
    solution: "Architected intuitive multi-tiered UX flows with 120+ screens, validated through rigorous usability testing with 30+ participants (System Usability Scale score: 86.4).",
    features: [
      { title: "120+ Screen Mobile Architecture", text: "End-to-end user journeys for multi-city itinerary building, booking, and offline voucher access." },
      { title: "Usability Testing (SUS: 86.4)", text: "Conducted structured testing sessions with 30+ users to refine navigation and booking clarity." },
      { title: "Unified Travel Timeline", text: "Dynamic itinerary view grouping flights, hotels, and attractions into chronologically sorted cards." },
      { title: "Enterprise System Specifications", text: "Complete Use Case specifications, Activity Diagrams, and Data Dictionaries." }
    ],
    tech: "Figma • Visual Paradigm • System Architecture • Usability Testing",
    techTags: ["120+ UI Screens", "ERD & Use Cases", "30+ User Testing", "SUS 86.4 Score", "Mobile Prototyping"],
    techIcons: [
      { name: "Figma", icon: "fa-brands fa-figma", color: "#F24E1E" },
      { name: "Mobile UI", icon: "fa-solid fa-mobile-screen", color: "#10B981" },
      { name: "Architecture", icon: "fa-solid fa-network-wired", color: "#8B5CF6" }
    ],
    image: "src/assets/images/travio-preview.png",
    featured: true
  },
  {
    order: 3,
    slug: "waena-jaya",
    title: "Bengkel Waena Jaya Motor",
    category: "Website Development & Digital Presence",
    role: "Full-Stack Developer",
    status: "Production",
    year: "2025",
    summary: "Production website built for Bengkel Waena Jaya Motor (Jayapura, Papua). Features verified spare parts catalogs, transparent diagnostic workflows, and instant online booking.",
    overview: "Official production website and digital presence engineered for Bengkel Waena Jaya Motor in Jayapura, Papua (Keeping Waena Moving Since 2007). Built to streamline workshop service discovery, provide transparent pricing breakdowns, and enable direct online emergency booking.",
    challenge: "Customers struggled with opaque repair pricing and lack of verifiable parts catalog for local motorcycle models, leading to prolonged consultation times and lost bookings.",
    solution: "Engineered a lightning-fast, mobile-first responsive web portal with real-time service catalogs, interactive price estimates, and 1-tap direct booking integration.",
    features: [
      { title: "Direct Online Booking", text: "Instant connection to workshop technicians with pre-filled service diagnostics." },
      { title: "Service & Parts Catalog", text: "Transparent pricing breakdown for genuine spare parts and labor costs." },
      { title: "Mobile-First Optimization", text: "Fast load times (<0.8s) even on low-bandwidth 3G/4G cellular networks in Papua." },
      { title: "Local Trust Signaling", text: "Verified location data, operating hours, and customer service guarantees." }
    ],
    tech: "Production Website • Responsive UI • Fast Performance",
    techTags: ["Live Production Site", "Digital Presence", "Fast Loading", "Tailwind CSS"],
    techIcons: [
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" }
    ],
    image: "src/assets/images/waena-jaya-preview.png",
    liveUrl: "https://waenjayamotor.github.io/waena-jaya-website/",
    featured: true
  },
  {
    order: 4,
    slug: "aura-ops",
    title: "Aura — Intelligent Operations & Workflow Engine",
    category: "Enterprise System & AI Integration",
    role: "Systems Architect & Developer",
    status: "Coming Soon",
    year: "2026",
    summary: "An event-driven operational nervous system engineered for real-time inventory telemetry, automated procurement triggers, and adaptive decision pipelines.",
    overview: "A new chapter in enterprise operational efficiency taking shape. Aura unifies distributed supply-chain data, eliminates manual reconciliation friction, and orchestrates reactive business automations in real time.",
    challenge: "Traditional operational tools trap businesses in fragmented spreadsheets and manual data entry, creating latency between physical floor movements and high-stakes executive decisions.",
    solution: "Engineering a low-latency event-driven micro-architecture paired with automated inventory threshold rules, predictive stock triggers, and high-density telemetry dashboards.",
    features: [
      { title: "Event-Driven Ledger", text: "Zero-latency audit logging for mission-critical physical asset transitions and supply changes." },
      { title: "Adaptive Flow Rules", text: "Configurable workflow triggers connecting real-time floor stock to automated supplier procurement." },
      { title: "Operational Telemetry Cockpit", text: "High-contrast dark-mode interface built for instant tactical triage and KPI monitoring." },
      { title: "Stealth Architecture Preview", text: "Full specifications and private benchmark testing currently underway for 2026 release." }
    ],
    tech: "Event Architecture • Reactive UI • TypeScript • Cloud APIs",
    techTags: ["Stealth Architecture", "Event-Driven", "Operational Intelligence", "Coming Soon 2026"],
    techIcons: [
      { name: "TypeScript", icon: "fa-brands fa-js", color: "#3178C6" },
      { name: "Architecture", icon: "fa-solid fa-network-wired", color: "#8B5CF6" },
      { name: "Cloud Engine", icon: "fa-solid fa-cloud", color: "#38BDF8" }
    ],
    image: "src/assets/images/coming-soon-preview.svg",
    isComingSoon: true,
    featured: true
  },
  {
    order: 5,
    slug: "vektor-bi",
    title: "Vektor — High-Density Business Intelligence & Analytics",
    category: "Business Analytics & Systems Modeling",
    role: "Lead Analyst & Interface Engineer",
    status: "Coming Soon",
    year: "2026",
    summary: "Translating complex enterprise transactional datasets into clean, actionable visual models with sub-second query latency and scenario forecasting.",
    overview: "An exploratory decision-support platform designed to transform multi-source relational databases and unstructured logs into lucid financial models and operational forecasts.",
    challenge: "Key business performance indicators are frequently buried across disconnected silos, making strategic decision-making and forecasting slow and prone to errors.",
    solution: "Architecting normalized analytical data pipelines paired with lightweight canvas-accelerated charting and instant multi-variable scenario simulation.",
    features: [
      { title: "Sub-Second Query Pipeline", text: "Normalized in-memory aggregation for multi-year fiscal records and transaction streams." },
      { title: "Dynamic Scenario Simulator", text: "Interactive sensitivity modeling studio with instant parametric cost-benefit adjustments." },
      { title: "Automated Executive Briefs", text: "Intelligent scheduled reports highlighting margin variances and supply bottlenecks." },
      { title: "Active Development", text: "Architecture and design validation in progress for public unveiling later this year." }
    ],
    tech: "Data Modeling • Canvas Visuals • Analytical Engines • SQL",
    techTags: ["Decision Support", "Financial Modeling", "Sub-Second Queries", "Coming Soon 2026"],
    techIcons: [
      { name: "Relational DB", icon: "fa-solid fa-database", color: "#336791" },
      { name: "Analytics", icon: "fa-solid fa-chart-simple", color: "#10B981" },
      { name: "System Modeling", icon: "fa-solid fa-diagram-project", color: "#6366F1" }
    ],
    image: "src/assets/images/coming-soon-preview.svg",
    isComingSoon: true,
    featured: true
  }
];

// Events & Moments Outside the IDE (Matching renlenon.vercel.app events gallery)
export const eventsGalleryData = [
  {
    id: "1",
    title: "Competitive Padel Match",
    date: "2025",
    location: "Max Padel Court, Indonesia",
    category: "Athletics",
    desc: "Speed, quick reflexes, strategy, and seamless teamwork on the padel court.",
    img: "src/assets/images/personal/personal-1-padel.jpg",
    height: 420
  },
  {
    id: "2",
    title: "Salomon Trail Exploration",
    date: "2025",
    location: "Nature Trail, Indonesia",
    category: "Outdoor",
    desc: "Exploring fresh perspectives, elevation, and steady footing off the beaten path.",
    img: "src/assets/images/personal/personal-2-trail.jpg",
    height: 300
  },
  {
    id: "3",
    title: "Heavy Deadlift Training",
    date: "2025",
    location: "Fitness Center",
    category: "Discipline",
    desc: "Physical discipline and mental resilience under heavy tension.",
    img: "src/assets/images/personal/personal-3-deadlift.png",
    height: 520
  },
  {
    id: "4",
    title: "Strength & Conditioning Routine",
    date: "2025",
    location: "Training Facility",
    category: "Training",
    desc: "Consistency over motivation — building long-term stamina and physical clarity.",
    img: "src/assets/images/personal/personal-4-gym.jpg",
    height: 360
  },
  {
    id: "5",
    title: "Precision Billiards Match",
    date: "2025",
    location: "Jakarta, Indonesia",
    category: "Recreation",
    desc: "Strategic geometric angles, patience, and memorable social moments.",
    img: "src/assets/images/personal/personal-5-billiards.jpg",
    height: 480
  },
  {
    id: "6",
    title: "Moments of Clarity & Focus",
    date: "2025",
    location: "Urban Lifestyle",
    category: "Lifestyle",
    desc: "Stepping away from the IDE to recharge, synthesize ideas, and plan ahead.",
    img: "src/assets/images/personal/personal-6-lifestyle-a.jpg",
    height: 340
  },
  {
    id: "7",
    title: "Youth Community Engagement",
    date: "2025",
    location: "Community Center",
    category: "Community",
    desc: "Creative collaboration, live media production, and community connection.",
    img: "src/assets/images/personal/personal-7-lifestyle-b.jpg",
    height: 400
  },
  {
    id: "8",
    title: "Everyday Balance & Growth",
    date: "2025",
    location: "Lifestyle",
    category: "Everyday",
    desc: "Staying grounded, curious, and committed to continuous learning.",
    img: "src/assets/images/personal/personal-8-lifestyle-c.jpg",
    height: 460
  },
  {
    id: "9",
    title: "Early Beginnings & Childhood",
    date: "Roots",
    location: "Indonesia",
    category: "Roots",
    desc: "Every journey begins with childhood wonder, experimentation, and curiosity.",
    img: "src/assets/images/personal/personal-9-childhood.jpg",
    height: 320
  },
  {
    id: "10",
    title: "Professional Craft & Vision",
    date: "2025",
    location: "Jakarta, Indonesia",
    category: "Vision",
    desc: "Crafting digital systems with clarity, performance, and commercial purpose.",
    img: "src/assets/images/personal/personal-10-portrait.jpg",
    height: 500
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

// Personal Inquiry Categories & Dynamic Email Templates
export const personalChatCategories = [
  {
    id: "website",
    label: "Website",
    icon: "fa-solid fa-globe",
    subject: "Website Development Inquiry",
    defaultMessage: "Hi Vidd, I’m interested in discussing a website project. I’d like to share more details about our requirements and timeline."
  },
  {
    id: "erp",
    label: "ERP / Business System",
    icon: "fa-solid fa-network-wired",
    subject: "ERP & Business System Inquiry",
    defaultMessage: "Hi Vidd, I’d like to discuss an ERP/business system project. I’d like to explain our workflow and architectural requirements."
  },
  {
    id: "business-app",
    label: "Business Application",
    icon: "fa-solid fa-laptop-code",
    subject: "Custom Application Project Inquiry",
    defaultMessage: "Hi Vidd, I’d like to discuss a custom business application project for our operational workflows."
  },
  {
    id: "ai-product",
    label: "AI Product",
    icon: "fa-solid fa-microchip",
    subject: "AI Product & Integration Inquiry",
    defaultMessage: "Hi Vidd, I’m interested in building an AI-powered product and would like to explore technical possibilities with you."
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: "fa-solid fa-handshake",
    subject: "Collaboration Opportunity",
    defaultMessage: "Hi Vidd, I’d like to discuss a potential collaboration or engineering opportunity with you."
  },
  {
    id: "general",
    label: "General Inquiry",
    icon: "fa-solid fa-comment-dots",
    subject: "Connecting from Portfolio",
    defaultMessage: "Hi Vidd, I visited your portfolio and would like to connect with you regarding upcoming initiatives."
  }
];

export const certificationsData = [];
export const categorizedTechStack = {};
export const techMarqueeData = [];
export const outsideTheIdeData = personalGalleryData;
export const caseStudies = {};

