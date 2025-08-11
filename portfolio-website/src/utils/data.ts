import type { Project, SkillCategory, Education, SocialLink } from "@/types";

export const portfolioData = {
  name: "Your Name",
  role: "Data Engineer",
  bio: "Passionate Data Engineer with 3+ years of experience building scalable data pipelines, designing ETL processes, and implementing data analytics solutions. Specialized in cloud-based data platforms and real-time data processing.",
  email: "your.email@example.com",
  location: "City, Country",
  phone: "+1 (555) 123-4567"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Ingestion",
    skills: [
      { name: "Apache Kafka", level: 5 },
      { name: "Apache Airflow", level: 4 },
      { name: "AWS Kinesis", level: 4 },
      { name: "REST/GraphQL APIs", level: 5 },
      { name: "Apache NiFi", level: 3 },
    ]
  },
  {
    title: "Data Processing",
    skills: [
      { name: "Apache Spark", level: 5 },
      { name: "Python", level: 5 },
      { name: "SQL", level: 5 },
      { name: "Pandas", level: 4 },
      { name: "Apache Beam", level: 3 },
      { name: "Scala", level: 3 },
    ]
  },
  {
    title: "Data Storage",
    skills: [
      { name: "PostgreSQL", level: 5 },
      { name: "MongoDB", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Apache Cassandra", level: 3 },
      { name: "InfluxDB", level: 3 },
      { name: "Elasticsearch", level: 4 },
    ]
  },
  {
    title: "Orchestration",
    skills: [
      { name: "Apache Airflow", level: 5 },
      { name: "Prefect", level: 4 },
      { name: "Kubernetes", level: 4 },
      { name: "Docker", level: 5 },
      { name: "Jenkins", level: 3 },
      { name: "GitHub Actions", level: 4 },
    ]
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", level: 5 },
      { name: "GCP", level: 4 },
      { name: "Azure", level: 3 },
      { name: "Terraform", level: 4 },
      { name: "dbt", level: 4 },
      { name: "Apache Superset", level: 3 },
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Real-time Data Pipeline",
    description: "Built a scalable real-time data pipeline processing 1M+ events/hour using Kafka, Spark Streaming, and AWS infrastructure for e-commerce analytics.",
    techStack: ["Apache Kafka", "Apache Spark", "AWS", "Python", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/realtime-pipeline",
    featured: true
  },
  {
    id: "2",
    title: "ETL Automation Framework",
    description: "Developed a reusable ETL framework with Airflow for automated data ingestion from multiple sources, reducing manual processing time by 80%.",
    techStack: ["Apache Airflow", "Python", "SQL", "AWS S3", "Redshift", "dbt"],
    githubUrl: "https://github.com/yourusername/etl-framework",
    featured: true
  },
  {
    id: "3",
    title: "Customer Analytics Dashboard",
    description: "Created an interactive analytics dashboard processing customer behavior data with real-time insights and predictive analytics capabilities.",
    techStack: ["Python", "Streamlit", "Pandas", "Plotly", "PostgreSQL", "Scikit-learn"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://analytics-dashboard.vercel.app",
    featured: true
  },
  {
    id: "4",
    title: "Data Lake Architecture",
    description: "Designed and implemented a cloud-native data lake architecture on AWS handling petabyte-scale data with automated governance and cataloging.",
    techStack: ["AWS", "Apache Spark", "AWS Glue", "S3", "Athena", "Terraform"],
    githubUrl: "https://github.com/yourusername/data-lake"
  },
  {
    id: "5",
    title: "ML Feature Store",
    description: "Built a centralized feature store for ML models with automated feature engineering, versioning, and serving capabilities.",
    techStack: ["Python", "MLflow", "Apache Airflow", "PostgreSQL", "Redis", "FastAPI"],
    githubUrl: "https://github.com/yourusername/feature-store"
  },
  {
    id: "6",
    title: "Log Analytics Platform",
    description: "Developed a log analytics platform using ELK stack for real-time monitoring and alerting across microservices infrastructure.",
    techStack: ["Elasticsearch", "Logstash", "Kibana", "Python", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/yourusername/log-analytics"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2018",
    endDate: "2022",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for 3 semesters",
      "Data Science Capstone Project - Best Project Award",
      "Member of Computer Science Honor Society"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail"
  }
];