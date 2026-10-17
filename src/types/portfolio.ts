export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Python' | 'SQL & Databases' | 'Exploratory Data Analysis';
  status: ProjectStatus;
  description: string;
  problemStatement: string;
  objectives: string[];
  methodology: string[];
  keyFindings: string[];
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: 'Core' | 'Known' | 'Basic' | 'Exploring';
  description?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institutionOrOrg: string;
  degreeOrType: string;
  status: 'Current' | 'Completed' | 'Upcoming';
  type: 'education' | 'milestone' | 'experience';
  description: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  keyTakeaways: string[];
  content: string[];
}

export interface PersonalInfo {
  name: string;
  age: number;
  currentStatus: string;
  institution: string;
  course: string;
  professionalIdentity: string;
  longTermGoal: string;
  professionalSummary: string;
  headline: string;
  subheadline: string;
  contacts: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    githubUsername: string;
  };
}
