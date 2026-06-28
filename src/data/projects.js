const projects = [
  {
    id: 1,
    title: "GST Invoice Generator",
    image: "/gst.png",

    description:
      "A full-stack GST Invoice Generator with customer management, invoice creation, PDF generation, dashboard analytics, and secure JWT authentication.",

    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Cloudinary",
    ],

    frontend: "https://github.com/md-mustaqeem/gst-generator-frontend",

    backend: "https://github.com/md-mustaqeem/gst-generator-backend",

    demo: "https://gst-generator-frontend.vercel.app/",
  },

  {
    id: 2,
    title: "Life Replay AI",
    image: "/lifereplay1.png",

    description:
      "An AI-powered personal memory platform that enables users to securely store, search, organize, summarize, and analyze life events using JWT authentication, Spring Boot, React, and OpenAI integration.",

    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "OpenAI API",
      "REST API",
    ],

    github: "https://github.com/md-mustaqeem/Life-Replay-AI",

    demo: "https://lifereplay-frontend-i2i7.vercel.app/",
  },

  {
    id: 3,
    title: "ThinkTube",
    image: "/thinktube.jpg",

    description:
      "An AI-powered video learning platform where users can upload videos, generate transcripts using Whisper AI, create quizzes with Gemini AI, and manage content through a secure authentication system.",

    tech: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Gemini AI",
      "Whisper AI",
      "REST API",
    ],

    github:
      "https://github.com/md-mustaqeem/ThinkTube-AI-powered-Video-Platform",
    demo: "#",
  },
];

export default projects;
