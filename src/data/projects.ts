export type Project = {
  id: number;
  title: string;
  description: string;
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
    description:
      "A subscription-based book summary platform built with Next.js, TypeScript, Firebase, and Stripe. Features authentication, protected routes, responsive UI, audio playback, and modern component architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/beckysoftwareeng2026",
    demo: "#",
    image: "/images/summarist.png",
    featured: true,
  },

  {
    id: 2,
    title: "Skinstric",
    description:
      "A modern React rebuild of an AI-powered skincare experience featuring reusable components, responsive layouts, API integration, and clean UI design.",
    technologies: [
      "React",
      "TypeScript",
      "API",
      "Tailwind CSS",
    ],
    github: "https://github.com/beckysoftwareeng2026",
    demo: "#",
    image: "/images/skinstric.png",
    featured: true,
  },

  {
    id: 3,
    title: "Moodify",
    description:
      "A music recommendation application that matches playlists to the user's mood. Includes both a CLI version and a modern web application.",
    technologies: [
      "React",
      "Node.js",
      "Spotify API",
      "TypeScript",
    ],
    github: "https://github.com/beckysoftwareeng2026",
    demo: "#",
    image: "/images/moodify.png",
    featured: false,
  },

  {
    id: 4,
    title: "Weatherly",
    description:
      "A clean weather dashboard using live weather APIs with forecasts, responsive design, and polished user experience.",
    technologies: [
      "React",
      "REST API",
      "TypeScript",
    ],
    github: "https://github.com/beckysoftwareeng2026",
    demo: "#",
    image: "/images/weatherly.png",
    featured: false,
  },

  {
    id: 5,
    title: "CustomKin",
    description:
      "My flagship full-stack application currently in development, designed with scalability, authentication, dashboards, APIs, and production-ready architecture in mind.",
    technologies: [
      "React",
      "Node.js",
      "SQL",
      "REST APIs",
    ],
    github: "https://github.com/beckysoftwareeng2026",
    demo: "#",
    image: "/images/customkin.png",
    featured: true,
  },
];