export interface RoleOption {
  id: string;
  title: string;
  blurb: string;
  icon: "code" | "chart" | "cpu" | "target" | "layers" | "users";
  /**
   * Sample questions for this role. Use "{company}" as a token to be
   * interpolated with the candidate's selected target company.
   */
  sampleQuestions: string[];
}

export const roles: RoleOption[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    blurb: "Coding rounds, system design, and architecture deep-dives.",
    icon: "code",
    sampleQuestions: [
      "Design a rate limiter that could sit in front of {company}'s public API.",
      "Given a stream of events, find the top K most frequent items in real time.",
      "Walk me through how you'd scale a service at {company} from 1K to 1M daily users.",
      "Tell me about a time you disagreed with a technical decision on your team.",
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    blurb: "Statistics, modeling, and case-study interviews.",
    icon: "chart",
    sampleQuestions: [
      "How would you design an experiment to test a new feature at {company}?",
      "Explain the bias-variance tradeoff to a non-technical stakeholder.",
      "{company}'s key metric drops 10% overnight — how do you investigate?",
      "Walk me through a modeling project where your results changed a decision.",
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    blurb: "SQL, metrics design, and business-case questions.",
    icon: "chart",
    sampleQuestions: [
      "Write a query to find {company}'s week-over-week active user retention.",
      "How would you define and track success for a new product launch?",
      "A dashboard metric looks wrong to a stakeholder — how do you respond?",
      "Tell me about a time your analysis changed how a team prioritized work.",
    ],
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    blurb: "Pipelines, data modeling, and distributed systems.",
    icon: "layers",
    sampleQuestions: [
      "Design a pipeline to ingest and dedupe {company}'s clickstream data.",
      "How would you handle schema evolution in a data warehouse over time?",
      "Walk me through how you'd debug a pipeline that's silently dropping rows.",
      "Batch vs. streaming — how would you decide for a new data source?",
    ],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    blurb: "ML system design, coding, and applied ML rounds.",
    icon: "cpu",
    sampleQuestions: [
      "Design a recommendation system for {company}'s home feed.",
      "How would you detect and handle model drift in production?",
      "Implement a function to compute cosine similarity efficiently at scale.",
      "Tell me about a time a model underperformed in production and what you did.",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    blurb: "Product sense, execution, and strategy interviews.",
    icon: "target",
    sampleQuestions: [
      "How would you improve {company}'s onboarding flow for new users?",
      "{company} is launching in a new market — what's your 90-day plan?",
      "Walk me through how you'd prioritize a roadmap with limited engineering time.",
      "Tell me about a time you had to say no to a stakeholder's request.",
    ],
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager",
    blurb: "Leadership, org design, and technical judgment.",
    icon: "users",
    sampleQuestions: [
      "How would you structure a team to own a new product area at {company}?",
      "Tell me about a time you had to deliver difficult feedback to a report.",
      "A project is slipping and the team is burned out — what do you do?",
      "How do you balance technical debt against feature velocity?",
    ],
  },
  {
    id: "devops-sre",
    title: "DevOps / SRE",
    blurb: "Infrastructure, incident response, and reliability.",
    icon: "layers",
    sampleQuestions: [
      "Walk me through how you'd design an on-call rotation for {company}.",
      "A production service is returning 500s — walk me through your first 10 minutes.",
      "How would you design a CI/CD pipeline with zero-downtime deploys?",
      "Tell me about the worst incident you've handled and what changed after.",
    ],
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
