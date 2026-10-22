export const site = {
  name: "Luis Garcia",
  credential: "PMP",
  title: "Program Manager",
  location: "Westfield, New Jersey",
  email: "luiscgarcia_pmp@outlook.com",
  linkedin: "https://www.linkedin.com/in/luisgarciamba",
  phone: "956-242-3493",
  tagline:
    "Enterprise delivery with an edge — digital programs that move money, markets, and operating models.",
  summary:
    "Results-driven project and program manager with 15+ years leading diverse teams through waterfall, hybrid, and agile delivery. Strong analytical range, broad technical fluency, and a track record across aerospace and defense, building solutions, financial services, and gaming.",
};

export const stats = [
  { value: "15+", label: "Years in delivery" },
  { value: "$50M", label: "Budget at New York Life" },
  { value: "100+", label: "People in the room" },
  { value: "50+", label: "Revenue partners" },
];

export const industries = [
  "Aerospace & Defense",
  "Insurance",
  "Gaming",
  "E-commerce",
  "Media",
  "Industrial",
];

export const skills = [
  "IT Project Leadership",
  "PMP",
  "SAP",
  "Salesforce",
  "NetSuite",
  "AWS",
  "RPA",
  "Python",
  "SAFe / Agile",
  "Data Governance",
  "ERP Deployment",
  "PMO Design",
];

export const languages = [
  { name: "English", level: "Native / bilingual" },
  { name: "Spanish", level: "Professional working" },
];

export const certifications = [
  "Project Management Professional (PMP)",
  "Foundations of Project Management",
  "Project Planning: Putting It All Together",
  "Turning Data into Strategies",
  "AI-Powered Presentations with ChatGPT and Copilot",
  "Amplify Your Critical Thinking with Generative AI",
];

export const education = [
  {
    school: "Quinnipiac University — School of Business",
    credential: "Master of Business Administration (MBA)",
    field: "Business Administration and Management",
    years: "2011 — 2014",
  },
  {
    school: "Penn State University",
    credential: "Bachelor of Science (B.S.)",
    field: "Management Information Systems",
    years: "2003 — 2007",
  },
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  tenure?: string;
  highlights: string[];
};

export const journey: Role[] = [
  {
    company: "Vector Media",
    title: "Program Manager",
    dates: "Jan 2026 — Present",
    location: "New York",
    highlights: [
      "Lead end-to-end delivery and lifecycle management for Salesforce and NetSuite, keeping operations stable and aligned to the business.",
      "Launched a customer-facing Payment Portal that streamlined invoicing and improved on-time payment rates.",
    ],
  },
  {
    company: "Amazon",
    title: "Project Manager",
    dates: "Jul 2024 — Dec 2025",
    location: "New York",
    highlights: [
      "Refined criteria for fast and free shipping badges — protecting Prime value while driving supplier revenue through sharper decisioning.",
      "Deployed a unified marketplace UX strategy that improved usability metrics, conversion, and customer satisfaction.",
    ],
  },
  {
    company: "Take-Two Interactive Software",
    title: "Technical Program Manager",
    dates: "Oct 2021 — Mar 2024",
    location: "New York",
    highlights: [
      "Led a multi-year digital transformation to automate Sales and Ad Revenue retrieval from 50+ digital partners using AWS, RPA, and Python.",
      "Built standardized systems and tools that raised data governance, visibility, and usability across the organization.",
    ],
  },
  {
    company: "New York Life Insurance Company",
    title: "Information Technology Program Manager",
    dates: "Oct 2018 — Oct 2021",
    location: "New York City Metropolitan Area",
    tenure: "6 years 1 month across three roles",
    highlights: [
      "Owned a $50M budget for technology initiatives across the Service Organization.",
      "Ran IT programs for Marketing, Service, and Illustration with 10 direct reports.",
      "Rolled out Agile tools used by 200+ people for transparency and predictability.",
      "Led quarterly planning that aligned business and technology, surfaced dependencies, and enabled faster decisions.",
    ],
  },
  {
    company: "New York Life Insurance Company",
    title: "IT Program Manager",
    dates: "Jan 2017 — Sep 2018",
    location: "New York City Metropolitan Area",
    highlights: [
      "Managed implementation of Retail Life Insurance and Annuity products.",
      "Implemented SAFe for a 100+ person organization under strict regulatory constraints.",
      "Ran quarterly big-room planning and multi-year product deployments across domains.",
      "Stood up Scrum across three teams.",
    ],
  },
  {
    company: "New York Life Insurance Company",
    title: "IT Project Manager",
    dates: "Oct 2015 — Dec 2016",
    highlights: [
      "Led a multidisciplinary team on retail variable annuity programs with an estimated $3M yearly budget.",
    ],
  },
  {
    company: "UTC Building and Industrial Systems",
    title: "IT Project Manager",
    dates: "Sep 2014 — Oct 2015",
    location: "Farmington, CT",
    highlights: [
      "Led the European PMO — standards for project management across EMEA entities.",
      "Partnered with CIOs and IT directors to align roadmaps with strategy.",
      "Built a PMO SharePoint with dashboards, metrics, templates, and a single documentation repository.",
      "Oversaw ERP deployment across four Spanish entities with offshore delivery in India.",
      "Coordinated a new product rollout with IT leaders in every European country.",
      "Helped shape a 3+ year roadmap for Mobility, CRM, and ERP across EMEA.",
    ],
  },
  {
    company: "Sikorsky Aircraft",
    title: "IT Project Manager, Communications, Marketing & Sales",
    dates: "Nov 2012 — Sep 2014",
    location: "Stratford, CT",
    tenure: "4 years across two roles",
    highlights: [
      "Owned hardware, software, and IT solutions for Marketing, Sales, Proposal, and Communications.",
      "Advised senior executives on needs, vendor strategy, and status.",
      "Deployed Windows 8 devices and supported Salesforce for pursuit management.",
      "Coordinated a $2.5M RFP for an integrated mobile sales tool.",
      "Shipped SharePoint content systems and an interactive proposal application that cut turnaround time.",
    ],
  },
  {
    company: "Sikorsky Aircraft",
    title: "IT Project Manager",
    dates: "Oct 2010 — Nov 2012",
    location: "Stratford, CT",
    highlights: [
      "Built an earned value system for Product Center CFOs — CPI/SPI, ACWP, BCWP, BCWS.",
      "Delivered an indented bill of materials for transfer-cost valuation.",
      "Launched the Enterprise Intelligence SharePoint portal for market and competitive data.",
      "Implemented an SDLC project map for the PMO.",
    ],
  },
  {
    company: "UTC Fire & Security",
    title: "IT Project Manager",
    dates: "Jan 2010 — Sep 2010",
    location: "Farmington, CT",
    highlights: [
      "Re-launched service dashboards tracking customer equipment servicing.",
    ],
  },
  {
    company: "United Technologies",
    title: "IT Project Manager",
    dates: "Apr 2009 — Dec 2009",
    location: "Greater Hartford",
    highlights: [
      "Delivered Phase 2 and 3 of a global media distribution platform so leadership could send targeted video across the enterprise.",
    ],
  },
  {
    company: "Sikorsky Aircraft",
    title: "IT Project Manager",
    dates: "Feb 2008 — Mar 2009",
    location: "Stratford, CT",
    highlights: [
      "Built a 24/7 web system to contact application owners on job or application failure.",
      "Created a web path to enter invoices directly into SAP, accelerating payment processing.",
      "Automated HR recertification visibility, data feeds to an external HR system, and exit-interview workflows.",
    ],
  },
  {
    company: "Carrier Corporation",
    title: "Co-op",
    dates: "Jan 2007 — Aug 2007",
    location: "Farmington, CT",
    highlights: [
      "Led inventory parts data migration during SAP go-live — 50,000+ materials from legacy systems and 500+ test deliveries, invoices, and shipments.",
    ],
  },
];

export type PortfolioItem = {
  code: string;
  title: string;
  sector: string;
  year: string;
  blurb: string;
  status: "featured" | "coming";
};

export const portfolio: PortfolioItem[] = [
  {
    code: "01",
    title: "Payment Portal",
    sector: "Media / Finance Ops",
    year: "2026",
    blurb:
      "Customer-facing invoicing and collections experience on Salesforce and NetSuite. Case study forthcoming.",
    status: "coming",
  },
  {
    code: "02",
    title: "Marketplace UX Unification",
    sector: "E-commerce",
    year: "2024—25",
    blurb:
      "One customer journey across diverse marketplaces — conversion, usability, and badge integrity. Case study forthcoming.",
    status: "coming",
  },
  {
    code: "03",
    title: "Digital Revenue Fabric",
    sector: "Gaming",
    year: "2021—24",
    blurb:
      "Automated sales and ad revenue from 50+ partners with AWS, RPA, and Python. Case study forthcoming.",
    status: "coming",
  },
  {
    code: "04",
    title: "Agile at Regulated Scale",
    sector: "Insurance",
    year: "2017—21",
    blurb:
      "SAFe for 100+ people, $50M service-org programs, and planning rituals used by 200+. Case study forthcoming.",
    status: "coming",
  },
  {
    code: "05",
    title: "EMEA Program Office",
    sector: "Industrial",
    year: "2014—15",
    blurb:
      "PMO standards, ERP across Spain, and a 3-year Mobility / CRM / ERP roadmap. Case study forthcoming.",
    status: "coming",
  },
  {
    code: "06",
    title: "Mobile Sales System",
    sector: "Aerospace",
    year: "2012—14",
    blurb:
      "$2.5M integrated mobile sales tool, Salesforce, and proposal acceleration at Sikorsky. Case study forthcoming.",
    status: "coming",
  },
];

export const nav = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/twin", label: "Twin" },
  { href: "/contact", label: "Contact" },
];
