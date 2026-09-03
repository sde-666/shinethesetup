import { ServiceItem, PricingPlan, PortfolioItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'lms',
    title: 'LMS Website',
    tagline: 'Core Learning Platform',
    description: 'Turn your study material and teaching process into a structured, branded online learning platform with student dashboards and progress tracking. Check our live production client portal at skilldotpy.com.',
    iconName: 'GraduationCap',
    category: 'platform',
    previewUrl: 'https://skilldotpy.com',
    features: [
      'Student registration & secure authentication',
      'Course, chapter & curriculum management',
      'Encrypted video lessons & digital lecture notes (PDFs)',
      'Online tests, timed mock exams & MCQ quizzes',
      'Student individual analytics & progress reports',
      'Automated branded completion certificates'
    ],
    deliverables: [
      'Custom Student & Admin Portal',
      'Live Reference: skilldotpy.com',
      'Video Hosting & DRM Protection Integration',
      'MCQ Exam Engine with Instant Results',
      'Course Progress Tracking Bar',
      'Certificate PDF Generator'
    ],
    techStack: ['React / Next.js', 'Node.js', 'PostgreSQL / Mongo', 'AWS S3 Cloudflare'],
    idealFor: 'Computer institutes, coaching academies, and educators seeking structured pedagogy.',
    timeline: '10–14 days'
  },
  {
    id: 'website',
    title: 'Institute Website',
    tagline: 'Digital Identity & Trust',
    description: 'A professional online identity that answers prospective student questions, showcases your faculty, and consistently generates verified admission inquiries.',
    iconName: 'Globe',
    category: 'identity',
    features: [
      'Modern, high-conversion homepage & brand layout',
      'Detailed course catalogs & faculty profile showcases',
      'Photo gallery, facilities, campus tour & achievements',
      'Instant admission inquiry capture & notification forms',
      'Interactive location map, directions & direct contact',
      '100% mobile-responsive, lightning-fast SEO layout'
    ],
    deliverables: [
      'Custom Domain & Fast Cloud Hosting Setup (1 Year)',
      'Lead Generation & Inquiry Routing System',
      'Notice Board & Exam Schedule Management',
      'Google Maps & Local SEO Setup'
    ],
    techStack: ['Modern Web Architecture', 'Tailwind CSS', 'Vercel / Cloud Run', 'SEO Meta Suite'],
    idealFor: 'Institutes needing a credible web footprint that drives local admissions.',
    timeline: '5–7 days'
  },
  {
    id: 'app',
    title: 'Institute Mobile App',
    tagline: 'Student Mobile Experience',
    description: 'Put your institute, recorded lectures, study notes, notices, and student community right onto their smartphones with an institute-branded Android app.',
    iconName: 'Smartphone',
    category: 'mobile',
    features: [
      'Secure student login with OTP / password',
      'Structured on-the-go video lectures & syllabus',
      'Downloadable notes, formulas & question banks',
      'Interactive mock tests with detailed performance breakdown',
      'Instant push notifications for batch timings & urgent notices',
      'Full institute brand logo, theme & customized icon'
    ],
    deliverables: [
      'Production-ready Android APK & Play Store Build',
      'Push Notification Admin Broadcast System',
      'Offline Reading / Video Access Mode',
      'Student Doubt Portal'
    ],
    techStack: ['React Native / Kotlin', 'Firebase Cloud Messaging', 'Secure Local Cache'],
    idealFor: 'Institutes wanting high daily engagement and direct push notifications to students.',
    timeline: '14–20 days'
  },
  {
    id: 'courses',
    title: 'Sell Courses Online',
    tagline: 'Monetization & Enrollments',
    description: 'Create an automated course-selling storefront where learners discover courses, pay seamlessly via UPI / cards, and get immediate access.',
    iconName: 'ShoppingCart',
    category: 'monetization',
    features: [
      'High-converting course catalog & preview pages',
      'Seamless Indian payment gateway (Razorpay / Cashfree UPI / Cards)',
      'Automated instant batch enrollment & access gating',
      'Time-based access control & validity limits',
      'Discount coupon codes & early-bird promotion engines',
      'Financial ledger, invoice generation & student purchase records'
    ],
    deliverables: [
      'Self-serve Course Checkout Experience',
      'Integrated Payment Gateway with Webhooks',
      'Automated Invoicing & GST Receipt System',
      'Sales Dashboard with Real-time Conversion Analytics'
    ],
    techStack: ['Payment Webhooks', 'Secure Token Authorization', 'Automated Mailers'],
    idealFor: 'Educators ready to monetize their recorded courses across state and national audiences.',
    timeline: '7–12 days'
  },
  {
    id: 'youtube',
    title: 'Complete YouTube Setup',
    tagline: 'Educational Content Brand',
    description: 'Turn your pedagogical mastery into a polished, authoritative educational YouTube channel with high-click packaging and retention structure.',
    iconName: 'Youtube',
    category: 'content',
    features: [
      'Channel branding: high-definition banner & profile avatar',
      'Intro & outro bumper animation templates',
      'Pedagogical content structure & lesson scripting framework',
      'Click-worthy educational thumbnail templates in Figma/Canva',
      'Keyword research & title/description SEO guidelines',
      'Systematic YouTube to Institute admissions conversion funnel'
    ],
    deliverables: [
      'Full Channel Visual Kit (Banner, Avatar, Watermark)',
      'Thumbnail Design PSD / Figma Component Library',
      'Video Publishing & SEO Checklist',
      'Lead-Magnet Description Templates'
    ],
    techStack: ['Figma Brand Kit', 'YouTube Studio SEO Tools', 'Custom Motion Graphics'],
    idealFor: 'Teachers and institute directors wanting an organic inbound student pipeline.',
    timeline: '4–6 days'
  },
  {
    id: 'complete',
    title: 'Complete Digital Setup',
    tagline: 'All-in-One Educational Ecosystem',
    description: 'Website + LMS + Android App + Course Selling + YouTube channel architecture — planned, engineered, and launched as one cohesive digital brand.',
    iconName: 'Sparkles',
    category: 'ecosystem',
    features: [
      'Single centralized database sync between Web & App',
      'Unified student identity & single sign-on (SSO)',
      'Synchronized course catalog across Web and Mobile App',
      'Admission inquiries and course sales synced in one dashboard',
      'Complete brand kit deployed across all digital touchpoints',
      'VIP Priority onboarding, training & launch support'
    ],
    deliverables: [
      'Web Portal + LMS Engine + Android Mobile App',
      'Central Management Admin Console',
      'Payment Gateway + SMS / Email Gateway Setup',
      'Dedicated 30-Day Go-Live Tech Assistance'
    ],
    techStack: ['Full Unified Stack', 'Cloud Database', 'Centralized Admin API'],
    idealFor: 'Established offline institutes making a decisive, competitive leap to digital dominance.',
    timeline: '21–28 days'
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'website',
    name: 'Institute Website',
    tagline: 'Basic Features + Hosting + 1 Year Domain',
    worthPrice: 16000,
    ourPrice: 12000,
    saveAmount: 4000,
    timeline: '5–7 Business Days',
    features: [
      'Custom Responsive Design (Mobile & Desktop)',
      'Fast Cloud Hosting Included',
      '1 Year .com / .in / .org Domain Included',
      'Courses, Faculty, Gallery & About Pages',
      'Admission Inquiry Form with Instant Notifications',
      'Google Maps & WhatsApp Quick Chat Button',
      'Basic SEO & Fast Page Load Optimization'
    ],
    scopeNote: 'Complete turnkey setup. Ready for student admissions from day one.'
  },
  {
    id: 'lms',
    name: 'Online Course Selling Website',
    tagline: 'LMS Platform — Development & Deployment',
    worthPrice: 50000,
    ourPrice: 40000,
    saveAmount: 10000,
    popular: true,
    timeline: '10–14 Business Days',
    features: [
      'Full LMS Architecture with Modern Stack',
      'Secure Student Registration & Dashboard',
      'Course, Chapter & Video Lecture Organization',
      'Integrated Online Tests, Quizzes & MCQs',
      'Indian Payment Gateway Integration (UPI / Cards)',
      'Coupon Codes, Offers & Student Access Management',
      'Student Progress Tracking & Course Certificates'
    ],
    scopeNote: 'MERN / Modern Stack. Complete source code and deployment handover.'
  },
  {
    id: 'app',
    name: 'Institute Mobile App',
    tagline: 'Android App — Institute Branded Experience',
    worthPrice: 75000,
    ourPrice: 50000,
    saveAmount: 25000,
    timeline: '14–20 Business Days',
    features: [
      'Custom Android App with Your Institute Branding',
      'Student Authentication & Personal Profile',
      'Course Video Player & Chapter Notes (PDFs)',
      'Online Practice Tests with Instant Scoring',
      'Push Notifications for Batch Timings & Alerts',
      'Offline Study Material Cache Support',
      'Play Store Production Release Build Preparation'
    ],
    scopeNote: 'Android App development only. Store submission guidance included.'
  },
  {
    id: 'youtube',
    name: 'YouTube Setup',
    tagline: 'Professional Educational YouTube Architecture',
    worthPrice: 10000,
    ourPrice: 6000,
    saveAmount: 4000,
    timeline: '4–6 Business Days',
    features: [
      'High-Resolution Channel Art & Profile Avatar',
      'Educational Playlist & Section Organization',
      '5 High-CTR Thumbnail Design Templates',
      'Channel Description & Tag SEO Keyword Research',
      'Video Intro & Outro Screen Design',
      'Lead Magnet Linking & Student Funnel Strategy'
    ],
    scopeNote: 'Design assets, channel optimization & growth roadmap.'
  },
  {
    id: 'complete',
    name: 'Complete Digital Setup',
    tagline: 'All-in-One Digital Transformation Ecosystem',
    worthPrice: 100000,
    ourPrice: 80000,
    saveAmount: 20000,
    featured: true,
    timeline: '21–28 Business Days',
    features: [
      'Complete Institute Website + Free Domain & Hosting',
      'Full-Featured Online Course Selling LMS Platform',
      'Institute-Branded Android Mobile App',
      'Complete Educational YouTube Channel Setup',
      'Single Centralized Database Sync for Web & Mobile',
      'Payment Gateway Integration (UPI, QR, Cards, NetBanking)',
      'Admin Master Dashboard for Inquiries, Students & Sales',
      'Priority 1-on-1 Zoom Training & 60-Day Tech Support'
    ],
    scopeNote: 'The ultimate package for institutes wanting total digital leadership.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Skill.py — NIELIT O Level & CCC Educational Platform',
    tag: 'INSTITUTE LMS & WEB PORTAL',
    category: 'LMS',
    summary: 'Full-featured educational LMS web portal offering free Hindi PDF notes, video lectures, online CBT tests, and AI doubt solving for computer students.',
    challenge: 'Students needed organized chapter-wise study materials, syllabus breakdowns, and exam practice tests for NIELIT O-Level & CCC certification.',
    solution: 'Designed and deployed Skill.py with an intuitive Hindi interface, 4 distinct study streams (PDF Notes, Videos, CBT Tests, Practice Sets), and an AI doubt solver.',
    features: ['Chapter-wise PDF downloads', 'Topic-wise practice sets', '100+ CBT online mock questions', 'Integrated AI 24/7 doubt tutor'],
    impactStats: [
      { label: 'Student Pass Rate', value: '100%' },
      { label: 'Modules Covered', value: 'M1 to M4' },
      { label: 'Active Learners', value: '500+' }
    ],
    accentColor: 'blue',
    liveUrl: 'https://skilldotpy.com'
  },
  {
    id: 'p2',
    title: 'Skill.py — Student Android Mobile App',
    tag: 'ANDROID APP',
    category: 'App',
    summary: 'Custom-built Android mobile app putting courses, test series, and notifications directly into student pockets.',
    challenge: 'Learners required on-the-go access to watch Python & CCC lectures, download notes, and receive instant batch announcements on smartphones.',
    solution: 'Engineered the native Android application featuring student profile dashboards, continue learning resume triggers, and offline study support.',
    features: ['Personalized student dashboard', 'Push announcement broadcast', 'In-app course enrollment (₹99)', 'Offline study material cache'],
    impactStats: [
      { label: 'Active Students', value: '100+' },
      { label: 'Play Store Rating', value: '4.9 ★' },
      { label: 'Daily Engagement', value: '94%' }
    ],
    accentColor: 'emerald'
  },
  {
    id: 'p3',
    title: 'IntelliExam — Online MCQ Examination Portal',
    tag: 'CBT EXAM ENGINE',
    category: 'LMS',
    summary: 'Automated computer-based test portal for timed online exams with instant scoring and security controls.',
    challenge: 'Institutes were spending hours printing, supervising, and grading physical MCQ sheets for Python and Web Development batches.',
    solution: 'Built IntelliExam with timed test sets (Python Set-1, Python Set-2, Web Development), automated timers, and real-time score grading.',
    features: ['50-question 60-minute timed tests', 'Instant scorecard generation', 'Cheating prevention controls', 'Detailed question review'],
    impactStats: [
      { label: 'Grading Time', value: 'Instant' },
      { label: 'Time Saved / Test', value: '95%' },
      { label: 'Student Feedback', value: '4.9/5' }
    ],
    accentColor: 'indigo'
  },
  {
    id: 'p4',
    title: 'Karamraji Institute of Computer Science & IT (KICS&IT)',
    tag: 'INSTITUTE LEARNING PORTAL',
    category: 'LMS',
    summary: 'Dedicated digital learning portal for Sultanpur institute providing direct access to NIELIT curriculum courses.',
    challenge: 'The institute needed a professional online portal to organize M1-R5.1, M2-R5.1, and M3-R5.1 course materials for enrolled students.',
    solution: 'Created an institute-branded learning portal with official insignia, structured course cards, and secure student module access.',
    features: ['Official KICS&IT branding', 'M1, M2, M3 course tracks', 'Direct student lesson access', 'Optimized for mobile & desktop'],
    impactStats: [
      { label: 'Curriculum', value: 'NIELIT R5.1' },
      { label: 'Sultanpur Batches', value: '100% Online' },
      { label: 'Admissions Uplift', value: '+65%' }
    ],
    accentColor: 'purple'
  },
  {
    id: 'p5',
    title: 'Educational YouTube Studio & Video Kit',
    tag: 'YOUTUBE SETUP',
    category: 'YouTube',
    summary: 'High-converting channel brand identity, video lecture thumbnails, and admission lead funnel for computer educators.',
    challenge: 'High quality teaching content went unnoticed due to cluttered amateur thumbnails and lack of organized video playlists.',
    solution: 'Designed a high-CTR thumbnail component library, educational playlist taxonomy, and admission description links.',
    features: ['Custom banner & avatar kit', 'High-CTR thumbnail system', 'Structured course playlists', 'Search-optimized tags & titles'],
    impactStats: [
      { label: 'CTR Increase', value: '4.2% → 11.8%' },
      { label: 'Channel Subs', value: '35K+' },
      { label: 'Inbound Inquiries', value: '40+ / mo' }
    ],
    accentColor: 'rose'
  },
  {
    id: 'p6',
    title: 'Complete Offline-to-Digital Campus Transformation',
    tag: 'FULL ECOSYSTEM',
    category: 'Complete',
    summary: 'A unified digital setup integrating Web, LMS, Android App, and Exam Engine into one seamless institute brand.',
    challenge: 'Established computer institutes needed to transition from fragmented offline operations into an authoritative digital powerhouse.',
    solution: 'Delivered an integrated ecosystem: website + Android app + online exam engine + course selling with single administration.',
    features: ['Unified database across Web & App', 'Central inquiry dashboard', 'Automated student enrollment', 'Full source code ownership'],
    impactStats: [
      { label: 'Revenue Growth', value: '+140%' },
      { label: 'Delivery Time', value: '14-21 Days' },
      { label: 'Student Reach', value: '3.5x' }
    ],
    accentColor: 'indigo'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Deep dive into your pedagogy & student model',
    description: 'We analyze your current offline operations, teaching formats (recorded vs live), fee structures, student count, and growth milestones.',
    deliverable: 'Custom Digital Architecture Blueprint'
  },
  {
    step: '02',
    title: 'Build',
    subtitle: 'High-performance engineering & branding',
    description: 'We design and develop your website, LMS, mobile app, or YouTube kit using modern, scalable technologies tailored to your visual identity.',
    deliverable: 'Interactive Staging Preview for Your Approval'
  },
  {
    step: '03',
    title: 'Launch',
    subtitle: 'Domain, database & store deployment',
    description: 'We connect your domain, configure payment gateways, seed initial courses/chapters, and roll out the student portal with zero downtime.',
    deliverable: 'Live Production URL + Staff Walkthrough'
  },
  {
    step: '04',
    title: 'Grow',
    subtitle: 'Scale reach & automate operations',
    description: 'Use your new digital infrastructure to enroll students from outside your city, sell recorded courses, and build an enduring education brand.',
    deliverable: 'Continuous Technical Support & Guidance'
  }
];

export const AUDIENCE_LIST = [
  { title: 'Computer Institutes', desc: 'DCA, PGDCA, Tally, Coding & Hardware training centers' },
  { title: 'Coaching Institutes', desc: 'Competitive exam prep, NEET, JEE, SSC, Banking & Board tuitions' },
  { title: 'Individual Educators', desc: 'Subject experts, tutors & teachers building their personal brand' },
  { title: 'Course Creators', desc: 'Professionals selling recorded skill courses & cohort programs' },
  { title: 'YouTube Educators', desc: 'Content creators converting views into paying enrolled learners' },
  { title: 'Training Centers', desc: 'Vocational academies, language schools & skill development hubs' }
];
