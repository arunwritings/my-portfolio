// ─── EDIT THIS FILE TO UPDATE YOUR PORTFOLIO ────────────────────────────────

export const personal = {
  name: "ARUN KUMAR H R",
  title: "Software Engineer",
  summary:
    "Passionate Software Engineer with 3+ years of experience building scalable web applications and distributed systems. I enjoy turning complex problems into clean, maintainable solutions and collaborating with cross-functional teams to ship great products.",
  email: "hrark99@gmail.com",
  mobile: "+91 8618648204",
  location: "Bengaluru, India",
  links: {
    github: "https://github.com/arunwritings",
    linkedin: "https://www.linkedin.com/in/arunkumarhr11/",
    leetcode: "https://leetcode.com/u/arunkumarhr99/",
    resume: "https://drive.google.com/file/d/1c76qjJaHggIB4yyB23_bbw3PmqdgTkpQ/view?usp=drive_link",
  },
};

export const skills = {
  "Languages & Frameworks": [
    "Java 17", "Core Java / J2EE (OOPs)", "Data Structures & Algorithms",
    "Spring Boot", "Spring MVC", "Spring Data", "Hibernate / JPA",
    "HTML", "CSS", "JavaScript", "ReactJS",
  ],
  "Architecture & Resilience": [
    "Microservices", "RESTful & Event-Driven APIs", "Low-Level Design",
    "Saga Pattern", "Circuit Breaker", "Resilience4j",
    "Performance Optimization", "Design Patterns",
  ],
  "Cloud & Messaging": [
    "AWS EC2", "S3", "Lambda", "DynamoDB", "SQS", "SNS", "ECS", "EKS",
    "RDS", "CloudWatch", "Apache Kafka", "AWS OpenSearch", "Redis",
  ],
  "Databases": [
    "MySQL", "PostgreSQL", "DynamoDB", "Couchbase",
    "Query Optimization", "SQL Tuning",
  ],
  "DevOps & CI/CD": [
    "Jenkins", "GitLab CI", "GitHub Actions", "Docker",
    "Kubernetes (AWS EKS)", "ECS", "Maven", "Gradle", "Git / GitLab", "Terraform",
  ],
  "Testing & Observability": [
    "JUnit", "Mockito", "BDD", "Unit & Integration Testing",
    "Test Automation", "TDD", "Code Reviews", "SonarQube", "SpotBugs",
    "ELK Stack", "Grafana", "Splunk", "Distributed Tracing",
  ],
  "AI & Other Tools": [
    "Claude", "Copilot", "Jira", "Confluence",
  ],
};

export const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Seabed2crest Technologies",
    location: "Bengaluru, India",
    period: "Feb 2023 – Apr 2026",
    description: [
      "Design, develop, and deploy scalable, reliable backend microservices and RESTful APIs in Java and Spring Boot, integrating Apache Kafka for asynchronous, event-driven communication.",
      "Contribute to low-level design and design reviews with architects and business analysts, applying patterns (Saga, Circuit Breaker, Resilience4j) to deliver complex, high-quality features rapidly.",
      "Own services end-to-end: design, coding, code reviews, testing, deployment, and operations, building Maven-based CI/CD pipelines on Jenkins with Git source control within a permanent Agile feature team.",
      "Troubleshoot and resolve critical production performance issues under high concurrent load; containerize microservices with Docker and deploy on AWS EKS (Kubernetes) to strengthen availability and scalability.",
      "Advocate for engineering best practices, unit/integration testing and test automation (JUnit, Mockito, BDD) and code reviews (SonarQube, SpotBugs), growing test coverage to 85% to maintain code quality.",
      "Monitor and optimize system health and performance via ELK stack and Grafana with distributed request tracing, driving root-cause analysis that cut production incidents by 40% YoY.",
    ],
  },
];

export const projects = [
  {
    title: "Money Transfer Orchestration Service",
    description:
      "Mission-critical payment orchestration platform using Java 17, Spring Boot microservices, and Kafka for event-driven communication. Applied Saga and Circuit Breaker patterns with Resilience4j for resilient, high-availability transaction processing under high concurrent load.",
    tech: ["Java 17", "Spring Boot", "Apache Kafka", "Resilience4j", "Docker", "AWS EKS", "ELK Stack", "Grafana", "JUnit"],
    github: null,
    live: null,
    featured: true,
    period: "Sep 2024 – Apr 2026",
  },
  {
    title: "Sportswear Retail Order Management System",
    description:
      "Scalable RESTful APIs and microservices for a high-traffic e-commerce platform on AWS. Reduced API response times by 50% to sub-500ms via query optimization and SQL tuning, and cut search latency by 40% with AWS OpenSearch integration. Grew test coverage to 85%.",
    tech: ["Java", "Spring Boot", "Hibernate / JPA", "AWS", "AWS OpenSearch", "Jenkins", "Splunk", "JUnit", "Mockito", "SonarQube"],
    github: null,
    live: null,
    featured: true,
    period: "Mar 2023 – May 2024",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Telecommunications Engineering",
    institution: "CMR Institute of Technology",
    location: "Bengaluru, India",
    period: "Jul 2018 – Aug 2022",
    grade: "CGPA: 7.2 / 10",
    highlights: [],
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [
  // Add your certifications here, e.g.:
  // { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024" },
];


