export interface RoleOption {
  id: string;
  title: string;
  blurb: string;
  icon: "code" | "chart" | "cpu" | "target" | "layers" | "users";
  /** What interviewers are actually evaluating for this role. */
  focusAreas: string[];
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
    focusAreas: [
      "Data structures & algorithms under time pressure",
      "System design and tradeoff reasoning at scale",
      "Debugging and code quality in a live setting",
    ],
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
    focusAreas: [
      "Statistical reasoning and experiment design",
      "Translating ambiguous business questions into analysis",
      "Communicating modeling tradeoffs to non-technical stakeholders",
    ],
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
    focusAreas: [
      "SQL fluency and query performance",
      "Defining and defending metrics",
      "Turning data into a recommendation, not just a chart",
    ],
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
    focusAreas: [
      "Pipeline design for scale and reliability",
      "Data modeling and schema tradeoffs",
      "Debugging data quality issues in production",
    ],
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
    focusAreas: [
      "ML system design end-to-end, from data to serving",
      "Applied ML coding and algorithm fundamentals",
      "Model monitoring and handling drift in production",
    ],
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
    focusAreas: [
      "Product sense and user empathy",
      "Prioritization under real constraints",
      "Structured execution and cross-functional influence",
    ],
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
    focusAreas: [
      "People leadership and difficult conversations",
      "Org and team design for a growing scope",
      "Technical judgment without writing the code yourself",
    ],
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
    focusAreas: [
      "Incident response and on-call judgment",
      "Infrastructure and deployment design",
      "Reliability tradeoffs (SLOs, error budgets)",
    ],
    sampleQuestions: [
      "Walk me through how you'd design an on-call rotation for {company}.",
      "A production service is returning 500s — walk me through your first 10 minutes.",
      "How would you design a CI/CD pipeline with zero-downtime deploys?",
      "Tell me about the worst incident you've handled and what changed after.",
    ],
  },
];

export function getSampleQuestions(role: RoleOption, companyName: string): string[] {
  return role.sampleQuestions.map((q) => q.replaceAll("{company}", companyName));
}

export type CompanyDifficulty = "Moderate" | "Hard" | "Very Hard";

export interface CompanyOption {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: CompanyDifficulty;
}

export const companies: CompanyOption[] = [
  {
    id: "google",
    name: "Google",
    category: "FAANG+",
    description: "Algorithm-heavy loops with a strong emphasis on Googleyness and leadership.",
    difficulty: "Very Hard",
  },
  {
    id: "amazon",
    name: "Amazon",
    category: "FAANG+",
    description: "Every round is scored against the 16 Leadership Principles, technical or not.",
    difficulty: "Hard",
  },
  {
    id: "meta",
    name: "Meta",
    category: "FAANG+",
    description: "Fast-paced loops that reward speed, execution, and moving with urgency.",
    difficulty: "Hard",
  },
  {
    id: "apple",
    name: "Apple",
    category: "FAANG+",
    description: "Deep, team-specific interviews with a bar for craft and attention to detail.",
    difficulty: "Hard",
  },
  {
    id: "netflix",
    name: "Netflix",
    category: "FAANG+",
    description: "Culture-first interviews that probe judgment and comfort with high autonomy.",
    difficulty: "Very Hard",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    category: "FAANG+",
    description: "Broad loops mixing coding, design, and a dedicated \"As Appropriate\" culture round.",
    difficulty: "Moderate",
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI & ML",
    description: "Research-grade technical bar with a focus on ML fundamentals and shipping speed.",
    difficulty: "Very Hard",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    category: "AI & ML",
    description: "Mission-driven loops that weigh technical depth alongside safety-minded judgment.",
    difficulty: "Very Hard",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "AI & ML",
    description: "Systems and hardware-aware engineering with deep technical panel rounds.",
    difficulty: "Hard",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Fintech",
    description: "Writing-heavy, detail-oriented loops with a high bar for engineering rigor.",
    difficulty: "Very Hard",
  },
  {
    id: "square",
    name: "Block (Square)",
    category: "Fintech",
    description: "Practical, project-based interviews focused on real-world tradeoffs.",
    difficulty: "Hard",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    category: "Fintech",
    description: "Values-driven loops layered on top of a solid technical and case bar.",
    difficulty: "Hard",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "Enterprise Tech",
    description: "Enterprise-scale system design paired with a strong culture-fit round.",
    difficulty: "Moderate",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "Enterprise Tech",
    description: "Distributed systems depth with an emphasis on data platform fundamentals.",
    difficulty: "Hard",
  },
  {
    id: "databricks",
    name: "Databricks",
    category: "Enterprise Tech",
    description: "High technical bar around distributed data systems and applied ML.",
    difficulty: "Very Hard",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    category: "E-commerce & Marketplace",
    description: "Design-minded loops that weigh craft, product sense, and core values equally.",
    difficulty: "Hard",
  },
  {
    id: "uber",
    name: "Uber",
    category: "E-commerce & Marketplace",
    description: "Marketplace-scale system design with a fast-moving, metrics-driven culture round.",
    difficulty: "Hard",
  },
  {
    id: "doordash",
    name: "DoorDash",
    category: "E-commerce & Marketplace",
    description: "Practical, logistics-flavored system design with a strong bias-for-action bar.",
    difficulty: "Moderate",
  },
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
