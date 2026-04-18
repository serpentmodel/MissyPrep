export type CompanyCategory =
  | 'FAANG+'
  | 'AI & ML'
  | 'Cloud & Infrastructure'
  | 'Fintech'
  | 'Enterprise Tech'
  | 'Cybersecurity'
  | 'Developer Tools'
  | 'Gaming & Entertainment'
  | 'E-commerce & Marketplace'
  | 'Hardware & Semiconductors'
  | 'Consulting & Services'
  | 'Social & Communication';

export type Difficulty = 'Moderate' | 'Hard' | 'Very Hard';
export type CompanySize = 'Startup' | 'Mid-size' | 'Large' | 'Enterprise';

export interface InterviewStage {
  name: string;
  duration: string;
  description: string;
  tips: string[];
}

export interface Role {
  title: string;
  levels: string[];
  description: string;
  keySkills: string[];
  interviewFocus: string[];
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: CompanyCategory;
  description: string;
  size: CompanySize;
  difficulty: Difficulty;
  headquarters: string;
  founded: number;
  techStack: string[];
  roles: Role[];
  interviewProcess: InterviewStage[];
  topicsToStudy: string[];
  behavioralFramework: string;
  tips: string[];
  avgTimeToHire: string;
  glassdoorRating: number;
  notablePerks: string[];
}
