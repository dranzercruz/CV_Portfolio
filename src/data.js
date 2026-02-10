const data = {
  name: "Thirumaran Eniyavan",
  email: "eniyavanthirumaran@gmail.com",
  github: "eniyvan",
  linkedin: "eniThiru",
  title: "Computer Engineering Undergraduate | Aspiring Software Engineer",
  tagline:
    "Building full-stack applications with React, Spring Boot, and AWS. Passionate about problem-solving and eager to contribute to real-world software systems.",
  about: `Aspiring Software Engineer with a strong focus on web technologies and cloud infrastructure. Experienced in building full-stack applications using React, Spring Boot, and AWS through academic and team-based projects. Passionate about problem-solving and eager to contribute to real-world software systems.`,
  education: [
    {
      institution: "University of Peradeniya",
      degree: "B.Sc. Eng. (Hons) in Computer Engineering",
      details: "CGPA: 3.60/4.00",
    },
    {
      institution: "Jaffna Hindu College",
      degree: "G.C.E. A/L",
      details: "2A, B",
    },
  ],
  skills: {
    languages: ["Java", "JavaScript", "SQL", "Python", "C++"],
    frontend: ["React.js", "React Native", "HTML5", "CSS3"],
    backend: ["Spring Boot", "REST APIs", "GraphQL"],
    databases: ["MySQL", "PostgreSQL"],
    cloudDevOps: ["AWS (EC2, S3, IoT Core, RDS)", "Git"],
    mlAi: ["TensorFlow", "Keras", "CNNs", "scikit-learn"],
    tools: ["IntelliJ IDEA", "VS Code", "Postman", "Cursor"],
  },
  projects: [
    {
      id: 1,
      title: "Green Tech: Greenhouse Automation",
      duration: "Nov 2024 – Jul 2025",
      description:
        "IoT-based autonomous greenhouse system with web and mobile apps.",
      highlights: [
        "ESP32 hardware design",
        "AWS IoT Core integration",
        "MQTT, JWT auth, WebSockets",
        "React Native mobile app",
        "Spring Boot backend",
        "Automation rules",
      ],
      technologies: [
        "Spring Boot",
        "React Native",
        "React.js",
        "MySQL",
        "JWT",
        "AWS (IoT Core, EC2, RDS)",
        "ESP32",
        "C++",
        "Git",
      ],
      githubUrl: "https://github.com/cepdnaclk/e20-3yp-Green-House-Automation",
    },
    {
      id: 2,
      title: "MIS for Non-Academic Establishment Division",
      duration: "Apr 2024 – Nov 2024",
      description: "Web-based MIS for automating staff leave handling.",
      highlights: [
        "Dynamic forms",
        "Multi-level approval workflows",
        "RBAC",
        "Dashboards",
      ],
      technologies: ["Spring Boot", "Java", "MySQL", "REST APIs", "JavaScript"],
      githubUrl: "https://github.com/dranzercruz/Non-academic-staff-master",
    },
    {
      id: 3,
      title: "Sign Language Recognition Platform",
      duration: "Dec 2023 – Feb 2024",
      description:
        "Web-based sign language learning platform using CNNs with 90%+ accuracy on custom dataset.",
      highlights: [
        "CNN-based sign language recognition",
        "90%+ accuracy on custom dataset",
        "React.js frontend + Flask backend + OpenCV",
      ],
      technologies: [
        "TensorFlow",
        "Keras",
        "React.js",
        "Flask",
        "OpenCV",
        "Python",
      ],
      githubUrl: "https://github.com/dranzercruz/Sign-Language-Recognition/tree/master",
    },
  ],
  research: {
    title: "A Hierarchical Hybrid Framework for Intrusion Detection",
    focus: "Model performance, real-time prediction",
    techniques: ["CNNs", "Traffic analysis", "Feature extraction"],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Wireshark",
    ],
  },
  certifications: [
    "AWS Cloud Practitioner Essentials (2024)",
    "Introduction to Machine Learning — Coursera (2023)",
    "Full-Stack Web Development with React — Meta (2023)",
    "Data Structures and Algorithms in Java — Udemy (2022)",
  ],
};

export default data;
