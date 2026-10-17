import type { PersonalInfo, SkillGroup, Project, TimelineItem, BlogPost } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Aron A",
  age: 18,
  currentStatus: "Undergraduate Student",
  institution: "RNS Institute of Technology (RNSIT)",
  course: "Computer Science Engineering with Data Science",
  professionalIdentity: "Aspiring Data Analyst",
  longTermGoal: "Transition into the Data Science domain",
  headline: "Turning Data into Insights. Building Toward Intelligence.",
  subheadline: "Computer Science & Data Science Undergraduate • Aspiring Data Analyst",
  professionalSummary: "I am Aron A, an 18-year-old undergraduate student at RNS Institute of Technology (RNSIT), pursuing Computer Science Engineering with Data Science. I have foundational knowledge of Python, MySQL, NumPy, Pandas, and basic Excel. I aspire to become a Data Analyst and eventually transition into the Data Science domain.",
  contacts: {
    email: "aronbestowed711@gmail.com",
    phone: "+91 9900925512",
    linkedin: "https://www.linkedin.com/in/aron-a-858253334",
    github: "https://github.com/AronCodeCraft",
    githubUsername: "AronCodeCraft",
  }
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core programming language utilized for data manipulation, algorithmic logic, and automation.",
    skills: [
      { name: "Python", level: "Known", description: "Data manipulation, scripts, functional syntax, and foundational algorithms." }
    ]
  },
  {
    category: "Data Analysis Libraries",
    description: "Python ecosystem packages for structured data processing, arrays, and exploratory data analysis.",
    skills: [
      { name: "Pandas", level: "Known", description: "DataFrame manipulation, CSV/Excel ingestion, grouping, filtering, and cleaning." },
      { name: "NumPy", level: "Known", description: "Multi-dimensional arrays, mathematical vectorization, and statistical calculations." }
    ]
  },
  {
    category: "Databases & Platforms",
    description: "Relational database systems and cloud database platforms for structured querying and persistent storage.",
    skills: [
      { name: "MySQL", level: "Known", description: "Relational schema design, SQL queries, JOINs, aggregations, and data integrity." },
      { name: "Supabase", level: "Exploring", description: "PostgreSQL-based cloud backend, database tables, and real-time APIs." }
    ]
  },
  {
    category: "Productivity & Developer Tools",
    description: "Standard workflows, spreadsheet tools, and code editors used for day-to-day development.",
    skills: [
      { name: "Microsoft Excel", level: "Basic", description: "Tabular data inspection, formulas, filtering, and summary tables." },
      { name: "Visual Studio Code", level: "Core", description: "Primary IDE for Python scripting, SQL scripts, Git, and extensions." }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "retail-sales-eda",
    title: "Retail Sales Exploratory Data Analysis",
    category: "Exploratory Data Analysis",
    status: "Completed",
    description: "In-depth exploratory data analysis examining retail purchasing trends, revenue distributions, and seasonal performance using Python and Pandas.",
    problemStatement: "Raw transaction data often contains missing values, outliers, and unformatted dates that prevent accurate business revenue reporting.",
    objectives: [
      "Cleanse and normalize raw transactional records with missing customer values.",
      "Calculate descriptive metrics including median order values and variance.",
      "Segment sales by geographical territories and product subcategories."
    ],
    methodology: [
      "Loaded tabular sales data via Pandas and handled null values using imputation strategies.",
      "Computed statistical boundaries using NumPy to isolate price and quantity anomalies.",
      "Summarized seasonal revenue through multi-index grouping and aggregations."
    ],
    keyFindings: [
      "Over 65% of annual revenue is concentrated in top three product categories.",
      "Identified clear seasonal peaks in Q4 requiring targeted inventory adjustments.",
      "Reduced data cleaning processing overhead by 40% via vectorized operations."
    ],
    tools: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
    githubUrl: "https://github.com/AronCodeCraft",
    demoUrl: "https://github.com/AronCodeCraft",
    featured: true
  },
  {
    id: "inventory-order-db",
    title: "Relational Inventory & Order Management Schema",
    category: "SQL & Databases",
    status: "In Progress",
    description: "Normalized relational database design and analytical SQL queries built to track products, suppliers, customer orders, and stock reorder thresholds.",
    problemStatement: "Unstructured inventory logs lead to duplicate entries, stock-outs, and sluggish reporting when cross-referencing sales and warehouse stock.",
    objectives: [
      "Architect a 3rd Normal Form (3NF) relational schema for inventory tracking.",
      "Implement foreign keys, constraints, and index optimizations on frequent query columns.",
      "Write analytical queries for revenue by month, top customers, and critical stock warnings."
    ],
    methodology: [
      "Drafted Entity-Relationship Diagram (ERD) defining 1-to-Many and Many-to-Many relations.",
      "Created tables in MySQL with primary/foreign keys and CHECK constraints.",
      "Constructed multi-table JOINs and window queries to benchmark execution times."
    ],
    keyFindings: [
      "Eliminated data redundancy across order lines and product catalogs.",
      "Automated stock-reorder alerts when inventory counts breach predefined minimums.",
      "Optimized query execution time on order history through targeted index placement."
    ],
    tools: ["MySQL", "SQL Workbench", "Relational Database Design"],
    githubUrl: "https://github.com/AronCodeCraft",
    demoUrl: "https://github.com/AronCodeCraft",
    featured: true
  },
  {
    id: "data-cleaning-pipeline",
    title: "Automated Data Cleaning & Validation Utility",
    category: "Data Analytics",
    status: "In Progress",
    description: "Modular Python utility designed to ingest messy CSV/Excel sheets, validate column schemas, standardize date formats, and export clean datasets.",
    problemStatement: "Manual spreadsheet cleaning in Excel is error-prone, time-consuming, and difficult to repeat across recurring monthly reports.",
    objectives: [
      "Automate repetitive spreadsheet data cleaning tasks into reusable functions.",
      "Detect schema mismatches, trailing whitespace, and corrupted date formats.",
      "Generate a validation audit summary showing modified and dropped records."
    ],
    methodology: [
      "Designed modular Python functions for each cleaning step (trim, parse, fill).",
      "Integrated Pandas type conversions with strict exception handling.",
      "Exported cleaned outputs into standardized CSV format alongside an audit log."
    ],
    keyFindings: [
      "Transformed manual 30-minute spreadsheet cleaning tasks into a 2-second automated script.",
      "Guaranteed consistent date formatting (ISO 8601) across diverse data sources.",
      "Flagged 100% of duplicate transaction IDs prior to ingestion."
    ],
    tools: ["Python", "Pandas", "Microsoft Excel", "VS Code"],
    githubUrl: "https://github.com/AronCodeCraft",
    demoUrl: "https://github.com/AronCodeCraft",
    featured: true
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "rnsit-education",
    period: "2024 — Present",
    title: "B.E. in Computer Science Engineering (Data Science)",
    institutionOrOrg: "RNS Institute of Technology (RNSIT)",
    degreeOrType: "Undergraduate Degree",
    status: "Current",
    type: "education",
    description: "Rigorous undergraduate curriculum concentrating on Computer Science principles, Data Science specializations, mathematics, and database management.",
    highlights: [
      "Core Coursework: Data Structures, Database Management Systems (DBMS), Mathematics for Data Science, Python Programming.",
      "Active participant in technical learning, hands-on lab projects, and analytical problem-solving.",
      "Building a solid academic and practical groundwork toward Data Analytics and Data Science."
    ]
  },
  {
    id: "data-analytics-journey",
    period: "2024 — Present",
    title: "Independent Technical Projects & Applied Learning",
    institutionOrOrg: "Self-Directed Learning / GitHub",
    degreeOrType: "Practical Skill Building",
    status: "Current",
    type: "milestone",
    description: "Applying foundational concepts in Python, NumPy, Pandas, and MySQL through real-world dataset analysis and disciplined learning in public.",
    highlights: [
      "Building practical exploratory data analysis projects and relational database schemas.",
      "Documenting code on GitHub (@AronCodeCraft) and mastering version control with Git.",
      "Expanding proficiency toward advanced data visualization and machine learning."
    ]
  },
  {
    id: "future-internships",
    period: "Future Milestone",
    title: "Data Analyst Internship & Industry Experience",
    institutionOrOrg: "Open for Opportunities",
    degreeOrType: "Professional Growth",
    status: "Upcoming",
    type: "experience",
    description: "Eager to apply data analysis, SQL querying, and Python skills to real business challenges, collaborate with professional teams, and deliver actionable insights.",
    highlights: [
      "Seeking internship roles in Data Analytics, Business Intelligence, and Data Operations.",
      "Committed to rigorous analytical thinking, continuous feedback, and rapid technical onboarding."
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "eda-pandas-numpy",
    title: "Essential Pandas & NumPy Patterns for Exploratory Data Analysis",
    slug: "essential-pandas-numpy-eda",
    category: "Technical Notes",
    date: "October 2026",
    readTime: "4 min read",
    summary: "A practical guide to the core methods I use for inspecting dataset distributions, handling missing data, and avoiding common indexing pitfalls.",
    tags: ["Python", "Pandas", "NumPy", "EDA"],
    keyTakeaways: [
      "Always inspect data types and memory footprints using .info() and .describe().",
      "Vectorized boolean masks outperform Python for-loops by orders of magnitude.",
      "Differentiate between missing completely at random (MCAR) and systematic null values before imputing."
    ],
    content: [
      "When beginning any exploratory data analysis, the temptation is often to jump straight into plotting graphs. However, systematic inspection of data integrity is where true analytical work begins.",
      "In Pandas, chaining methods like .isnull().sum() alongside percentage calculations immediately clarifies where data pipelines may have faltered. Pairing this with NumPy's array operations allows for instant outlier thresholds using interquartile ranges (IQR).",
      "As an undergraduate student, standardizing these exploration checklists has drastically reduced errors in downstream calculations and provided higher confidence in initial analytical conclusions."
    ]
  },
  {
    id: "why-sql-matters",
    title: "Why Relational Databases & SQL Remain Indispensable for Analysts",
    slug: "why-sql-matters-for-analysts",
    category: "Database Concepts",
    date: "October 2026",
    readTime: "3 min read",
    summary: "Reflections on learning MySQL, database normalization (3NF), and why strong SQL fundamentals form the backbone of any data career.",
    tags: ["MySQL", "SQL", "Databases", "Data Architecture"],
    keyTakeaways: [
      "Data in enterprises lives in relational databases; SQL is the primary language to unlock it.",
      "Proper schema normalization prevents data duplication and protects business logic.",
      "Understanding query execution plans is the secret to scaling from small tables to millions of rows."
    ],
    content: [
      "Before data ever reaches a Jupyter Notebook or a dashboard, it almost always resides in a relational database. Learning MySQL and entity-relationship modeling shifted my perspective from seeing data as static flat CSVs to understanding live transactional systems.",
      "Designing a schema in 3rd Normal Form (3NF) requires deep logical thinking about relationships: how an order relates to a customer, how inventory levels decrease, and how constraints prevent negative quantities.",
      "Writing clean SQL with proper JOINs and aggregations is a core superpower that every aspiring Data Analyst must master early."
    ]
  },
  {
    id: "learning-in-public",
    title: "Learning in Public: My Path in Computer Science & Data Science",
    slug: "learning-in-public-data-science",
    category: "Career & Learning",
    date: "October 2026",
    readTime: "3 min read",
    summary: "Why documenting my learning journey at 18 as an RNSIT student creates accountability, builds credibility, and accelerates personal growth.",
    tags: ["Personal Branding", "Learning in Public", "Growth Mindset"],
    keyTakeaways: [
      "Documenting code publicly on GitHub forces you to write cleaner, self-explanatory projects.",
      "Honesty about current skill levels earns far more respect than exaggerated claims.",
      "Consistency in daily practice compounds significantly over an undergraduate degree."
    ],
    content: [
      "Starting an undergraduate degree in Computer Science Engineering (Data Science) can feel overwhelming with the sheer number of technologies available: Python, SQL, Cloud, AI, and Machine Learning.",
      "I decided early on to adopt a 'learning in public' mindset. Instead of waiting until I am an expert to showcase work, I document what I am currently learning: writing clean Python scripts, tackling real datasets, and designing relational tables.",
      "This portfolio is not a static resume—it is a live reflection of my growth. As I master Scikit-Learn, data visualization, and statistical modeling, this space will evolve alongside my career."
    ]
  }
];
