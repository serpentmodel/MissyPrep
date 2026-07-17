export interface RoleOption {
  id: string;
  title: string;
  blurb: string;
  icon: "code" | "chart" | "cpu" | "target" | "layers" | "users";
}

export const roles: RoleOption[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    blurb: "Coding rounds, system design, and architecture deep-dives.",
    icon: "code",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    blurb: "Statistics, modeling, and case-study interviews.",
    icon: "chart",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    blurb: "SQL, metrics design, and business-case questions.",
    icon: "chart",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    blurb: "Pipelines, data modeling, and distributed systems.",
    icon: "layers",
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    blurb: "ML system design, coding, and applied ML rounds.",
    icon: "cpu",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    blurb: "Product sense, execution, and strategy interviews.",
    icon: "target",
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    blurb: "Leadership, org design, and technical judgment.",
    icon: "users",
  },
  {
    id: "devops-sre",
    title: "DevOps / SRE",
    blurb: "Infrastructure, incident response, and reliability.",
    icon: "layers",
  },
];

export interface CompanyOption {
  id: string;
  name: string;
  category: string;
}

export const companies: CompanyOption[] = [
  { id: "google", name: "Google", category: "FAANG+" },
  { id: "amazon", name: "Amazon", category: "FAANG+" },
  { id: "meta", name: "Meta", category: "FAANG+" },
  { id: "apple", name: "Apple", category: "FAANG+" },
  { id: "netflix", name: "Netflix", category: "FAANG+" },
  { id: "microsoft", name: "Microsoft", category: "FAANG+" },
  { id: "openai", name: "OpenAI", category: "AI & ML" },
  { id: "anthropic", name: "Anthropic", category: "AI & ML" },
  { id: "nvidia", name: "NVIDIA", category: "AI & ML" },
  { id: "stripe", name: "Stripe", category: "Fintech" },
  { id: "square", name: "Block (Square)", category: "Fintech" },
  { id: "coinbase", name: "Coinbase", category: "Fintech" },
  { id: "salesforce", name: "Salesforce", category: "Enterprise Tech" },
  { id: "snowflake", name: "Snowflake", category: "Enterprise Tech" },
  { id: "databricks", name: "Databricks", category: "Enterprise Tech" },
  { id: "airbnb", name: "Airbnb", category: "E-commerce & Marketplace" },
  { id: "uber", name: "Uber", category: "E-commerce & Marketplace" },
  { id: "doordash", name: "DoorDash", category: "E-commerce & Marketplace" },
];

export const stats = [
  { value: "1,200+", label: "Real interview questions" },
  { value: "60+", label: "Companies covered" },
  { value: "12", label: "Roles supported" },
  { value: "4.9/5", label: "Avg. candidate rating" },
];

export const features = [
  {
    title: "Personalized prep plan",
    description:
      "Tell us your role and target company. We map out exactly what to study and in what order, based on that company's real interview process.",
    icon: "target",
  },
  {
    title: "Real interview questions",
    description:
      "Practice with questions sourced from actual candidates, organized by company, role, and interview stage.",
    icon: "chart",
  },
  {
    title: "Mock interviews",
    description:
      "Rehearse with peers or experts in a live setting, then get structured feedback you can act on before the real thing.",
    icon: "users",
  },
  {
    title: "Company playbooks",
    description:
      "Every company page breaks down the process, difficulty, tech stack, and what interviewers are actually looking for.",
    icon: "layers",
  },
];

export const testimonials = [
  {
    quote:
      "I went from freezing up in system design rounds to walking in with a plan. The personalized track made all the difference.",
    name: "Priya S.",
    role: "Software Engineer, hired at Amazon",
  },
  {
    quote:
      "Dataford told me exactly which questions to expect at each round for my target company. It felt like having an insider.",
    name: "Marcus T.",
    role: "Data Scientist, hired at Stripe",
  },
  {
    quote:
      "The mock interviews were the closest thing to the real panel I could find anywhere. Worth it for the feedback alone.",
    name: "Elena R.",
    role: "Product Manager, hired at Google",
  },
];
