export const bio = {
  name: "Amit Patil",
  tagline: "AI-Full Stack Developer",
  summary:
    "B.Tech graduate in AI & Data Science with strong full‑stack expertise. I build scalable applications, integrate APIs, and ship AI‑driven solutions that solve real problems.",
  location: "Sangli, Maharashtra, India",
};

export const strengths = [
  {
    title: "AI",
    description: "LLMs, embeddings, RAG, vector search, prompt engineering, agents.",
  },
  {
    title: "Full Stack",
    description: "Next.js, React, Node, Edge, serverless, design systems, DX.",
  },
  {
    title: "Data Engineering",
    description: "Pipelines, warehousing, analytics, ETL/ELT, orchestration.",
  },
];

export const quickFacts = [
  { label: "LeetCode", value: "400+ problems" },
  { label: "B.Tech CGPA", value: "8.20" },
  { label: "Diploma %", value: "88.60%" },
];

export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[]; // 0..100
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "C/C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "Python", level: 78 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Web & Frameworks",
    items: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 86 },
      { name: "Node.js", level: 82 },
      { name: "Flask", level: 76 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 76 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    category: "ML & Data Science",
    items: [
      { name: "TensorFlow", level: 70 },
      { name: "scikit-learn", level: 74 },
      { name: "Pandas/NumPy", level: 78 },
      { name: "OpenAI API", level: 76 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git/GitHub", level: 86 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Android Studio", level: 65 },
      { name: "pnpm", level: 75 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Faculty Monitoring Dashboard (2024)",
    description:
      "Analyzes faculty performance using sentiment analysis with automated report generation and rich dashboards.",
    image: "/window.svg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Drizzle ORM",
      "PostgreSQL",
      "Neon",
      "Tremor",
      "Recharts",
      "Zod",
    ],
    live: "https://fpms-smoky.vercel.app/",
    code: "#",
  },
  {
    title: "Energy Consumption Forecasting Portal (2024)",
    description:
      "Forecasts energy usage trends using ML models; interactive visualizations built with Plotly.",
    image: "/globe.svg",
    stack: ["Python", "Flask", "scikit-learn", "TensorFlow", "Streamlit", "Plotly"],
    live: "#",
    code: "#",
  },
  {
    title: "Product Recommendation System Using AI (2025)",
    description:
      "Hybrid collaborative and content-based recommendations with OpenAI integration; tested and deployed on Vercel.",
    image: "/file.svg",
    stack: ["React", "Node.js", "Flask", "OpenAI API", "Jest", "Vercel"],
    live: "https://recommendation-system-rho-seven.vercel.app/",
    code: "#",
  },
];

export const timeline = [
  {
    type: "experience",
    title: "Full Stack Developer Intern",
    org: "Kali-Byte Solutions",
    period: "—",
    details:
      "Built full-stack apps (React, Node, SQL/NoSQL), developed REST APIs, contributed in agile with Git & CI/CD, and delivered responsive UIs with Tailwind.",
  },
  {
    type: "education",
    title: "B.Tech in AI & Data Science",
    org: "DKTE Society’s Textile & Engineering Institute, Ichalkaranji",
    period: "2022 — 2025",
    details: "CGPA: 8.20",
  },
  {
    type: "education",
    title: "Diploma in Computer Science & Engineering",
    org: "Government Polytechnic, Miraj",
    period: "2019 — 2022",
    details: "Percentage: 88.60%",
  },
];

export type Testimonial = { quote: string; by: string };

export const testimonials: Testimonial[] = [];

export const socials = {
  github: "https://github.com/AmitJPatil13",
  linkedin: "https://linkedin.com/in/amitpatil13",
  email: "mailto:amitjpatil13@gmail.com",
  emailAddress: "amitjpatil13@gmail.com",
  leetcode: "https://leetcode.com/u/amitpatil07",
  resume: "/Updated_Resume_AP.pdf",
};


