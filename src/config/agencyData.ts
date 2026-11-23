export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Cloud' | 'Web & Software' | 'E-Commerce & SEO';
  tagline: string;
  badge: string;
  clientType: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  founderContribution: {
    anas?: string;
    adan?: string;
    shared?: string;
  };
  metrics?: { label: string; value: string }[];
  status: string;
  githubUrl?: string; // Editable slot for repo link
  demoUrl?: string;   // Editable slot for live demo link
  accentColor: string;
  highlightStat: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  targetAudience: string;
  iconName: string;
  accent: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  coreSkills: string[];
  featuredProjects: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
  };
}

export const AGENCY_CONFIG = {
  name: "VANTA Studio",
  shortName: "VANTA",
  // USER REQUIREMENT: Leave space empty for these placeholders as currently being finalized
  tagline: "", // [YOUR AGENCY TAGLINE] — placeholder slot
  email: "", // [YOUR AGENCY EMAIL] — placeholder slot
  whatsapp: "", // [YOUR WHATSAPP NUMBER] — placeholder slot
  location: "", // [YOUR AGENCY LOCATION] — placeholder slot
  socials: {
    twitter: "",   // [YOUR TWITTER/X]
    linkedin: "",  // [YOUR LINKEDIN]
    github: "",    // [YOUR GITHUB]
    instagram: "", // [YOUR INSTAGRAM]
  },
  
  // Working positioning
  heroHeadline: "WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.",
  heroSubheadline: "We turn ambitious ideas into powerful digital experiences, intelligent systems, and scalable technology.",
  missionStatement: "We combine creative thinking, engineering, and strategic execution to build digital solutions that solve real business problems.",
  
  statusNotice: "Available for Select Q1 / Q2 Projects",
  officeHours: "Mon – Fri · 09:00 – 18:00 UTC",
};

export const FOUNDERS: FounderProfile[] = [
  {
    name: "Anas Ali",
    role: "Co-Founder · Systems, Web & Cloud Engineering",
    tagline: "Bridging full-stack development, cloud infrastructure, and technical growth.",
    bio: "Focuses on scalable web applications, robust cloud environments, CI/CD pipelines, and technical SEO architecture. Experienced in delivering containerized backends and production-grade client platforms.",
    coreSkills: [
      "HTML / CSS / JavaScript",
      "PHP & MySQL",
      "Python & C#",
      "Docker & Kubernetes",
      "Linux / Ubuntu Administration",
      "CI/CD & GitHub Actions",
      "Technical & On-Page SEO",
      "FastAPI & AI Integration"
    ],
    featuredProjects: ["LogLens AI", "ResponseBurst", "Haji Latif MN"],
    socialLinks: {
      linkedin: "", // Placeholder ready for founder profile
      github: ""    // Placeholder ready for founder profile
    }
  },
  {
    name: "Adan Faisal",
    role: "Co-Founder · AI Architecture & Software Engineering",
    tagline: "Architecting intelligent algorithms, data pipelines, and custom software systems.",
    bio: "Specializes in high-performance computing, Python and C++ software engineering, machine learning integrations, and backend algorithm design. Dedicated to engineering maintainable, high-throughput systems.",
    coreSkills: [
      "Python Software Systems",
      "C++ Architecture",
      "Machine Learning & AI Integration",
      "Algorithm Optimization",
      "Backend API Engineering",
      "Data Processing Pipelines",
      "System Architecture Review",
      "Quality Assurance & Testing"
    ],
    featuredProjects: ["LogLens AI", "TaskFlow", "Fantasy Arena"],
    socialLinks: {
      linkedin: "", // Placeholder ready for founder profile
      github: ""    // Placeholder ready for founder profile
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    slug: "web-development",
    shortDesc: "High-performance bespoke web applications, interactive portals, and modern digital platforms built with precision.",
    fullDesc: "We design and develop custom websites and full-stack web applications tailored to your business model. From blazing-fast marketing sites to complex web portals, we ensure responsive execution, clean architecture, and conversion-centered UX.",
    capabilities: [
      "Website Design & Development",
      "Frontend Engineering (React / Next.js / TypeScript)",
      "Backend Development & Secure APIs",
      "Custom Web Applications & SaaS Portals",
      "Modern E-commerce Development",
      "Website Maintenance & Performance Optimization"
    ],
    deliverables: [
      "Responsive Production Codebase",
      "Content Management Integration",
      "Lighthouse 95+ Performance Tuning",
      "Security Hardening & SSL Setup",
      "Documentation & Handover Guide"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PHP", "PostgreSQL"],
    targetAudience: "Startups, scale-ups, and established brands seeking distinct online authority.",
    iconName: "Globe",
    accent: "#D4F728"
  },
  {
    id: "software-dev",
    number: "02",
    title: "Software & App Development",
    slug: "software-app-development",
    shortDesc: "Engineered desktop software, custom backend services, cross-platform apps, and enterprise-grade APIs.",
    fullDesc: "We build reliable, scalable custom software solutions designed to solve intricate operational bottlenecks. Whether desktop tools, internal management systems, or scalable microservices, our software is engineered for longevity.",
    capabilities: [
      "Custom Software Engineering",
      "Desktop Application Development (C# / Python)",
      "Mobile App Development",
      "Python Development & Automation Scripting",
      "API Development, Webhooks & Third-Party Integration",
      "Database Architecture & Optimization (SQL / NoSQL)"
    ],
    deliverables: [
      "Compiled Application Binaries & Source",
      "RESTful / GraphQL API Endpoints",
      "Database Schemas & Migration Scripts",
      "Automated Unit & Integration Tests",
      "Technical Architecture Specifications"
    ],
    technologies: ["Python", "C#", "C++", "FastAPI", "PostgreSQL", "SQLite", "Docker"],
    targetAudience: "Companies requiring bespoke workflow tools, high-reliability software, or automated internal systems.",
    iconName: "Code2",
    accent: "#00F0FF"
  },
  {
    id: "data-analytics",
    number: "03",
    title: "Data Analytics & Visualization",
    slug: "data-analytics-visualization",
    shortDesc: "Transform raw datasets into actionable executive intelligence, interactive dashboards, and automated pipelines.",
    fullDesc: "Data is useless without clarity. We clean, normalize, analyze, and visualize complex data streams to uncover key operational metrics, trends, and growth opportunities through intuitive visual dashboards.",
    capabilities: [
      "Python Fundamentals & Scientific Computing",
      "Pandas & NumPy Pipeline Processing",
      "Data Cleaning, Wrangling & Normalization",
      "Exploratory Data Analysis (EDA)",
      "Interactive Data Visualization & Dashboards"
    ],
    deliverables: [
      "Automated Data ETL Scripts",
      "Interactive Visual Reporting Dashboards",
      "Structured Clean Datasets",
      "Statistical Insights Summary Briefs",
      "Exportable Data Connectors"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib / Seaborn", "Streamlit", "SQL"],
    targetAudience: "Organizations looking to make data-backed operational decisions and monitor key KPIs.",
    iconName: "BarChart3",
    accent: "#FF8A00"
  },
  {
    id: "seo-growth",
    number: "04",
    title: "SEO & Digital Growth",
    slug: "seo-digital-growth",
    shortDesc: "Data-driven organic search strategy, technical SEO audits, architecture restructuring, and content frameworks.",
    fullDesc: "We build digital platforms that search engines and human audiences love. By combining rigorous technical SEO, semantic schema markup, and keyword search intent research, we build organic discovery flywheels that convert.",
    capabilities: [
      "Technical SEO Audits & Core Web Vitals",
      "On-Page Optimization & Semantic HTML Structure",
      "Off-Page SEO & Authority Analysis",
      "In-Depth Keyword Research & Intent Mapping",
      "SEO Growth Strategy & Competitor Benchmarking"
    ],
    deliverables: [
      "Comprehensive SEO Audit Report",
      "Keyword Gap & Opportunity Matrix",
      "Core Web Vitals Remediation",
      "Metadata, Schema & Sitemap Implementation",
      "Quarterly Growth & Performance Dashboard"
    ],
    technologies: ["Google Search Console", "Semrush", "Screaming Frog", "Schema.org", "PageSpeed Insights"],
    targetAudience: "Businesses wanting to dominate organic search results and drive qualified inbound leads.",
    iconName: "TrendingUp",
    accent: "#38EF7D"
  },
  {
    id: "cloud-devops",
    number: "05",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    shortDesc: "Automated CI/CD deployment pipelines, containerized environments, Linux server management, and cloud architecture.",
    fullDesc: "Eliminate downtime and deployment friction. We set up automated delivery workflows, containerize applications with Docker, and configure cloud environments to ensure your systems run securely, reliably, and automatically.",
    capabilities: [
      "Docker & Multi-Stage Containerization",
      "Kubernetes & Orchestration Fundamentals",
      "CI/CD Pipeline Setup (GitHub Actions / GitLab CI)",
      "Cloud Deployment (AWS / VPS / Cloudflare / Vercel)",
      "Linux Server Administration & Infrastructure Management"
    ],
    deliverables: [
      "Production-Ready Dockerfiles & Compose Stacks",
      "Automated GitHub Actions CI/CD Workflows",
      "Server Hardening & Firewall Setup",
      "SSL, Reverse Proxy (Nginx) & DNS Configuration",
      "Backup & Disaster Recovery Procedures"
    ],
    technologies: ["Docker", "Docker Compose", "Kubernetes", "Linux / Ubuntu", "GitHub Actions", "Nginx"],
    targetAudience: "Engineering teams and startups seeking dependable, zero-downtime deployment pipelines.",
    iconName: "Cloud",
    accent: "#00C2FF"
  },
  {
    id: "wordpress-cms",
    number: "06",
    title: "WordPress & CMS Development",
    slug: "wordpress-cms-development",
    shortDesc: "Tailored WordPress experiences, lightweight custom themes, WooCommerce stores, and speed-optimized CMS platforms.",
    fullDesc: "We elevate CMS platforms beyond slow, bloated templates. We engineer lightweight, bespoke WordPress themes, configure clean plugin architectures, and build headless or hybrid setups that empower marketing teams without compromising speed.",
    capabilities: [
      "Custom WordPress Theme Engineering",
      "WordPress Website Development",
      "Lean Plugin Selection & Secure Configuration",
      "WooCommerce E-commerce Stores",
      "Speed Optimization, Caching & Maintenance"
    ],
    deliverables: [
      "Custom Coded Theme (No Bloatware Builders)",
      "WooCommerce Store Configuration",
      "Advanced Caching & CDN Setup",
      "Security Hardening & Anti-Spam Protection",
      "CMS Editor Guide for Internal Staff"
    ],
    technologies: ["WordPress", "PHP", "WooCommerce", "MySQL", "ACF Pro", "Tailwind CSS"],
    targetAudience: "Publishers, DTC brands, and SMBs requiring autonomous content publishing with high performance.",
    iconName: "Layers",
    accent: "#9D4EDD"
  }
];

// Cross-service standout capability
export const AI_CAPABILITY = {
  badge: "CROSS-SERVICE MULTIPLIER",
  title: "AI Automation & Intelligent Workflows",
  tagline: "We seamlessly weave practical artificial intelligence and automated business logic into every layer of your digital stack.",
  description: "AI is not an isolated gimmick; it is an operational engine. We design custom agentic workflows, LLM integrations, and automated decision loops that eliminate manual chores, optimize response times, and scale your throughput without proportional headcount.",
  pillars: [
    {
      title: "Workflow Automation",
      desc: "Connect disparate APIs, webhooks, CRMs, and internal databases to run uninterrupted 24/7 background processes."
    },
    {
      title: "AI-Powered Business Automation",
      desc: "Deploy autonomous LLM pipelines for customer inquiry triaging, ticket categorization, and automated summaries."
    },
    {
      title: "AI Tool & API Integration",
      desc: "Integrate OpenAI, Claude, Gemini, or open-source local models into your existing web, desktop, or mobile applications."
    },
    {
      title: "Automated Data Processing",
      desc: "Intelligent document parsing, scheduled data extraction, automated report generation, and structured outputs."
    }
  ],
  stack: ["FastAPI", "Python", "LangChain / LLM APIs", "Docker", "Webhooks", "PostgreSQL", "Streamlit"]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "loglens-ai",
    title: "LogLens AI",
    category: "AI & Cloud",
    tagline: "AI-Assisted DevOps Incident & Log Intelligence Platform",
    badge: "Featured Demonstration Project",
    clientType: "Collaborative Hackathon Project",
    overview: "An automated observability assistant that parses chaotic server logs, identifies crash patterns, and generates actionable root-cause remediation steps in plain English.",
    challenge: "Engineers spend hours combing through tens of thousands of lines of unstructured error logs during high-severity production outages, leading to costly prolonged downtime and cognitive fatigue.",
    solution: "Engineered a containerized microservice pipeline using FastAPI and Streamlit that ingests raw log files, processes them through an LLM intelligence engine, and provides real-time incident explanation with immediate remediation commands.",
    deliverables: [
      "Streamlit Interactive Analyst Dashboard",
      "FastAPI Backend Service with Async Ingestion",
      "Multi-stage Dockerized Deployment Pipeline",
      "Automated GitHub Actions Testing Workflow",
      "LLM Prompt Engineering & Context Window Optimization"
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "Docker", "GitHub Actions", "OpenAI / LLM API", "Linux"],
    founderContribution: {
      anas: "Engineered infrastructure, containerized deployment (Docker), GitHub Actions CI/CD pipeline, and application integration.",
      adan: "Collaborated on Python software architecture, model prompting strategy, and log anomaly parsing algorithms."
    },
    metrics: [
      { label: "Incident Triage Time", value: "-75% Reduction" },
      { label: "Deployment Pipeline", value: "Dockerized CI/CD" },
      { label: "Parsing Throughput", value: "Real-Time Streaming" }
    ],
    status: "Proof of Concept / Live Hackathon Deployment",
    githubUrl: "", // [YOUR GITHUB REPO PLACEHOLDER - LINK LATER]
    demoUrl: "",   // [LIVE DEMO PLACEHOLDER]
    accentColor: "#D4F728",
    highlightStat: "AI / DevOps Incident Explainer"
  },
  {
    id: "taskflow-saas",
    title: "TaskFlow Platform",
    category: "Web & Software",
    tagline: "Modern High-Velocity Collaborative Workflow & Task Engine",
    badge: "Sample Case Study",
    clientType: "Software Engineering Project",
    overview: "A lightweight, distraction-free workflow platform engineered for agile engineering squads requiring instantaneous task transitions, Kanban boards, and milestone tracking.",
    challenge: "Existing enterprise project management tools are sluggish, overburdened with unnecessary features, and hinder developer flow through complicated UI friction.",
    solution: "Built a responsive, zero-latency web application using React, TypeScript, and a normalized relational database schema with optimistic UI updates and real-time board sync.",
    deliverables: [
      "Interactive Drag-and-Drop Task Board",
      "Role-Based Access Control (RBAC) System",
      "RESTful API Architecture with Documented Swagger Specs",
      "Responsive Dark/Light Theme System",
      "Performance-Tuned State Management"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "REST APIs"],
    founderContribution: {
      anas: "Architected frontend component hierarchy, responsive UI states, and API consumption logic.",
      adan: "Engineered data schema models, validation routines, and backend business logic."
    },
    metrics: [
      { label: "Interaction Latency", value: "<16ms UI response" },
      { label: "Architecture", value: "Component-Driven" },
      { label: "Database Layer", value: "Relational SQL" }
    ],
    status: "Demo Project / Repository Prepared for Linking",
    githubUrl: "", // [YOUR GITHUB REPO PLACEHOLDER - LINK LATER]
    demoUrl: "",
    accentColor: "#00F0FF",
    highlightStat: "Agile Collaborative Task Engine"
  },
  {
    id: "responseburst",
    title: "ResponseBurst",
    category: "E-Commerce & SEO",
    tagline: "Data-Driven SEO Intelligence & Content Strategy Platform",
    badge: "Sample Case Study",
    clientType: "Digital Growth & Content System",
    overview: "An automated keyword gap analysis and technical SEO monitoring tool built to help content publishers identify high-intent, low-competition commercial search phrases.",
    challenge: "Marketing teams waste thousands on broad keywords with exorbitant difficulty while missing lucrative long-tail search intent that actually converts customers.",
    solution: "Developed an automated analysis framework combining Semrush data feeds, Google Search Console metrics, and on-page semantic auditing to pinpoint actionable editorial opportunities.",
    deliverables: [
      "Keyword Opportunity Scoring Engine",
      "Automated On-Page Technical Audit Checklist",
      "Competitor SERP Overlap Matrix",
      "Structured Schema Generation Utilities",
      "Content Outline Recommendation Generator"
    ],
    technologies: ["Python", "Search Console API", "Semrush Data", "Technical SEO", "HTML5 Semantics"],
    founderContribution: {
      anas: "Conducted keyword intent research, competitor analysis, technical SEO implementation, and site audits.",
      adan: "Developed data processing scripts for automated keyword clustering and filtering."
    },
    metrics: [
      { label: "Audit Accuracy", value: "100% Core Web Vitals" },
      { label: "Strategy Focus", value: "Commercial & Informational" },
      { label: "Data Pipeline", value: "Automated Filtering" }
    ],
    status: "Verified SEO Case Framework",
    githubUrl: "", // [YOUR GITHUB REPO PLACEHOLDER - LINK LATER]
    demoUrl: "",
    accentColor: "#FF8A00",
    highlightStat: "Keyword & SERP Optimization Engine"
  },
  {
    id: "haji-latif-mn",
    title: "Haji Latif MN",
    category: "E-Commerce & SEO",
    tagline: "High-Performance Bespoke E-Commerce Brand Storefront",
    badge: "Sample Client Case Study",
    clientType: "Client E-Commerce Website",
    overview: "A refined, mobile-first commercial retail platform designed for optimal catalog browsing, friction-free product exploration, and rapid order inquiries.",
    challenge: "The previous digital presence struggled with sluggish load speeds, cluttered mobile UX, and poor search engine indexability, causing visitor drop-off before reaching the checkout.",
    solution: "Designed and implemented a custom-crafted e-commerce storefront with optimized image delivery, structured product schemas, and a streamlined mobile purchasing experience.",
    deliverables: [
      "Custom Responsive E-Commerce Layout",
      "Optimized Product Catalog & Filtering Flow",
      "Direct WhatsApp / Order Inquiry Integration",
      "Sub-second Page Load Speed Tuning",
      "Structured Product Schema Markup for SEO"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "Custom CSS", "Technical SEO", "Mobile UX"],
    founderContribution: {
      anas: "Delivered responsive frontend design, WooCommerce product structuring, and speed optimization.",
      adan: "Collaborated on requirement gathering, testing, and deployment review."
    },
    metrics: [
      { label: "Mobile Speed Score", value: "94+ Google PageSpeed" },
      { label: "Checkout Friction", value: "Streamlined Flow" },
      { label: "Search Visibility", value: "Full Rich Snippet Markup" }
    ],
    status: "Live Client Deployment",
    githubUrl: "", // [YOUR GITHUB REPO PLACEHOLDER - LINK LATER]
    demoUrl: "",
    accentColor: "#38EF7D",
    highlightStat: "Mobile-First Commerce Architecture"
  },
  {
    id: "fantasy-arena",
    title: "Fantasy Arena",
    category: "Web & Software",
    tagline: "Tactical Turn-Based Combat Simulation & OOP Battle Engine",
    badge: "Demonstration Project",
    clientType: "Software Engineering & OOP Project",
    overview: "A desktop strategy simulation demonstrating object-oriented architecture, modular state machines, dynamic combat calculations, and interactive GUI mechanics.",
    challenge: "Building a scalable combat system requires decoupled software architecture where abilities, character classes, and turn orders operate without tight coupling or memory leaks.",
    solution: "Engineered a robust C# Windows desktop application employing strict OOP patterns (inheritance, polymorphism, encapsulation) with reactive UI bindings and combat event logs.",
    deliverables: [
      "Modular Character Class Hierarchy (Warrior, Mage, Rogue)",
      "Dynamic Combat Calculation Engine (Damage, Criticals, Buffs)",
      "Turn-Based State Management Logic",
      "Interactive Graphical User Interface",
      "Comprehensive Code Documentation"
    ],
    technologies: ["C#", ".NET", "Windows Forms / WPF", "OOP Principles", "State Machine Logic"],
    founderContribution: {
      anas: "Developed GUI layout components, asset management, and user interaction handlers.",
      adan: "Architected class hierarchies, polymorphic combat calculations, and turn-order event loops."
    },
    metrics: [
      { label: "Architecture", value: "Strict OOP Design" },
      { label: "Engine Logic", value: "Decoupled Event Loop" },
      { label: "Code Coverage", value: "Exemplary Clean Code" }
    ],
    status: "Software Demonstration Project",
    githubUrl: "", // [YOUR GITHUB REPO PLACEHOLDER - LINK LATER]
    demoUrl: "",
    accentColor: "#9D4EDD",
    highlightStat: "Polymorphic OOP Battle Simulator"
  }
];

export const PROCESS_STAGES = [
  {
    step: "01",
    name: "Discover",
    tagline: "Uncovering Core Business Objectives & Boundaries",
    description: "We begin by conducting an unvarnished audit of your business model, audience pain points, technical constraints, and measurable success criteria. No assumptions, only clarity.",
    deliverables: ["Project Discovery Document", "Technical Scope & Boundaries", "Success Metric Definition"],
    duration: "Week 1"
  },
  {
    step: "02",
    name: "Strategize",
    tagline: "Architecting the Solution Blueprint",
    description: "We map out the system architecture, choose the optimal technology stack, define user journeys, and establish the creative design direction before a single line of code is written.",
    deliverables: ["System Architecture Diagram", "Technical Stack Selection", "Interactive Wireframes"],
    duration: "Week 1–2"
  },
  {
    step: "03",
    name: "Design",
    tagline: "Crafting Intuitive, High-Impact Visuals",
    description: "We craft distinctive, modern visual identities and UI components that command respect. Every screen balances editorial beauty with frictionless conversion paths.",
    deliverables: ["High-Fidelity Component Designs", "Design System & Tokens", "Interactive Prototype"],
    duration: "Week 2–3"
  },
  {
    step: "04",
    name: "Develop",
    tagline: "Engineering Clean, Scalable Codebases",
    description: "We build your platform using modular, maintainable architectures, modern frameworks, and secure API structures. Code is thoroughly tested, documented, and built to scale.",
    deliverables: ["Version-Controlled Codebase", "API Integration & Database Setup", "Staging Environment Previews"],
    duration: "Week 3–5"
  },
  {
    step: "05",
    name: "Launch",
    tagline: "Rigorous QA, Deployment & Go-Live",
    description: "We subject the system to rigorous cross-device testing, performance audits, security checks, and SEO verification before executing zero-downtime production deployment.",
    deliverables: ["Production Cloud Deployment", "Core Web Vitals Verification", "DNS & SSL Configuration"],
    duration: "Week 5–6"
  },
  {
    step: "06",
    name: "Improve",
    tagline: "Monitoring, Iteration & Growth Support",
    description: "Launch is only day one. We monitor real-world performance, track conversion analytics, provide technical maintenance, and advise on future feature iterations.",
    deliverables: ["Analytics Health Monitoring", "Technical Support & Patches", "Iterative Growth Recommendations"],
    duration: "Ongoing Partnership"
  }
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "Dual Creative & Technical Brainpower",
    desc: "We don't separate aesthetics from engineering. Designers talk code; engineers care deeply about typography, motion, and conversion UX."
  },
  {
    number: "02",
    title: "Pragmatic Business Focus",
    desc: "We prioritize solutions that generate revenue, cut operational waste, or reduce manual hours—not vanity code that gathers digital dust."
  },
  {
    number: "03",
    title: "Modern, Battle-Tested Stack",
    desc: "From React, TypeScript, and Python to Docker and Kubernetes, we build with tools that scale smoothly from prototype to enterprise load."
  },
  {
    number: "04",
    title: "Direct Founder Access",
    desc: "No middlemen or unaccountable account managers. You collaborate directly with the engineers and strategists building your product."
  },
  {
    number: "05",
    title: "Documented Delivery & Clean Handover",
    desc: "Every repository comes with comprehensive READMEs, environment variables, schema documentation, and reproducible deployment guides."
  },
  {
    number: "06",
    title: "Obsession with Performance & Reliability",
    desc: "Fast load times, responsive interfaces, secure endpoints, and automated tests are standard deliverables, never paid add-ons."
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does VANTA Studio price its projects?",
    a: "We work primarily on transparent fixed-scope milestone engagements for distinct builds, or on focused monthly retainers for ongoing engineering and technical growth. All deliverables and boundaries are defined upfront."
  },
  {
    q: "Who actually builds our software?",
    a: "Every project is directly architected and developed by our founders Anas Ali and Adan Faisal. You get genuine senior-level engineering attention without junior handoffs."
  },
  {
    q: "How do you handle project communication?",
    a: "We maintain a single dedicated point of contact with weekly video syncs, asynchronous updates via shared workspaces, and direct staging preview deployments."
  },
  {
    q: "Can you take over or modernize an existing codebase?",
    a: "Yes. We frequently conduct code audits, refactor legacy backends, containerize systems into Docker, and modernize legacy frontends into responsive modern stacks."
  }
];
