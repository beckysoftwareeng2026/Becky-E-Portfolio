export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  learned: string[];
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Summarist",
    subtitle: "Subscription-based book summary platform",
    description:
      "A polished book summary application with authentication, protected routes, audio playback, subscription flow, and responsive dashboard UI.",
    challenge:
      "Build a premium reading platform that supports authenticated users, protected content, subscription-based access, and an intuitive reading and listening experience.",
    solution:
      "Developed a responsive application using Next.js, TypeScript, Firebase Authentication, Stripe, reusable React components, and clean route-based architecture.",
    learned: [
      "Authentication",
      "Protected Routes",
      "Stripe Flow",
      "Responsive UI",
      "Component Architecture",
    ],
    technologies: ["Next.js", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"],
    github:
      "https://github.com/beckysoftwareeng2026/becky-virtual-internship-next",
    demo: "https://summarist.vercel.app/for-you",
    image: "/images/summarist.png",
    featured: true,
  },
  {
    id: 2,
    title: "Skinstric",
    subtitle: "AI-powered skincare analysis experience",
    description:
      "A modern React rebuild of an AI skincare experience with reusable components, responsive layouts, API integration, and polished visual design.",
    challenge:
      "Rebuild a visually polished skincare application while improving structure, responsiveness, and maintainability.",
    solution:
      "Created a React and TypeScript frontend with reusable components, clean layout systems, responsive styling, and API-ready architecture.",
    learned: [
      "React Components",
      "Responsive Layout",
      "UI Polish",
      "API Integration",
    ],
    technologies: ["React", "TypeScript", "API", "Tailwind CSS"],
    github: "https://github.com/beckysoftwareeng2026/skinstric",
    demo: "https://skinstric-olive.vercel.app/",
    image: "/images/skinstric.png",
    featured: true,
  },
  {
    id: 3,
    title: "Moodify",
    subtitle: "Mood-based music recommendation app",
    description:
      "A music recommendation application that matches playlists to the user's mood, planned as both a CLI tool and web application.",
    challenge:
      "Create a tool that turns user mood input into personalized music recommendations.",
    solution:
      "Planned as a Node.js CLI and React web app using API integration, clean input handling, and user-focused recommendation flows.",
    learned: ["Node.js", "CLI Tools", "API Integration", "React UI"],
    technologies: ["React", "Node.js", "Spotify API", "TypeScript"],
    github: "",
    demo: "",
    image: "/images/moodify.png",
    featured: false,
  },
  {
    id: 4,
    title: "Weatherly",
    subtitle: "Live weather dashboard",
    description:
      "A clean weather dashboard using live weather APIs with forecasts, responsive design, loading states, and error handling.",
    challenge:
      "Build a responsive weather app that presents real-time API data clearly across devices.",
    solution:
      "Designed a clean React interface with REST API integration, async data fetching, loading states, and mobile-friendly layouts.",
    learned: ["REST APIs", "Async Data", "Loading States", "Error Handling"],
    technologies: ["React", "REST API", "TypeScript"],
    github: "",
    demo: "",
    image: "/images/weatherly.png",
    featured: false,
  },
  {
    id: 5,
    title: "CustomKin",
    subtitle: "Flagship full-stack application",
    description:
      "A flagship full-stack application currently in development, designed around authentication, dashboards, APIs, SQL data, and production-ready architecture.",
    challenge:
      "Design a portfolio-level flagship application that demonstrates full-stack thinking, scalability, and real product architecture.",
    solution:
      "Planned with React, Node.js, SQL, REST APIs, authentication, reusable UI patterns, and a dashboard-focused user experience.",
    learned: ["Full-Stack Planning", "SQL Design", "Authentication", "Dashboards"],
    technologies: ["React", "Node.js", "SQL", "REST APIs"],
    github: "",
    demo: "",
    image: "/images/customkin.png",
    featured: true,
  },
];