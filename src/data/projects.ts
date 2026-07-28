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
  category: "frontend" | "backend";
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/beckysoftwareeng2026/becky-virtual-internship-next",
    demo: "https://summarist.vercel.app/for-you",
    image: "/images/summarist.png",
    featured: true,
    category: "frontend",
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
    category: "frontend",
  },
  {
    id: 3,
    title: "Moodify",
    subtitle: "Full-stack Node.js mood recommendation app",
    description:
      "Built from scratch to learn backend fundamentals without Express. Moodify evolved from a command-line Node application into a deployed full-stack web application using Node's native HTTP module.",
    challenge:
      "Build a browser-based application without relying on Express while manually handling routing, static files, POST requests, JSON parsing, and backend communication.",
    solution:
      "Created a modular Node.js application with a native HTTP server, responsive frontend, Fetch API integration, JSON communication, and file-based mood history persistence.",
    learned: [
      "Built a web server using Node's native HTTP module",
      "Implemented GET and POST routes without Express",
      "Parsed JSON request bodies manually",
      "Connected the frontend and backend using the Fetch API",
      "Persisted mood history using Node's File System module",
      "Deployed a Node application to Render",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "HTTP",
      "Fetch API",
      "JSON",
      "File System",
      "Git",
      "GitHub",
      "Render",
    ],
    github: "https://github.com/beckysoftwareeng2026/Moodify",
    demo: "https://moodify-1wh4.onrender.com",
    image: "/images/moodify.png",
    featured: false,
    category: "frontend",
  },
  {
    id: 4,
    title: "Weatherly",
    subtitle: "Node.js CLI weather application",
    description:
      "A command-line weather application built with Node.js that fetches live weather data from the OpenWeather API. It demonstrates asynchronous JavaScript, REST API integration, environment variables, and clean CLI design.",
    challenge:
      "Build a Node.js application capable of consuming a third-party REST API while securely managing API keys and displaying formatted weather information from the command line.",
    solution:
      "Developed a CLI application using Node.js, async/await, fetch, dotenv, and the OpenWeather API to retrieve live weather conditions with clean formatting and robust error handling.",
    learned: [
      "Node.js",
      "Async/Await",
      "REST APIs",
      "Environment Variables",
      "JSON Parsing",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "OpenWeather API",
      "dotenv",
    ],
    github: "https://github.com/beckysoftwareeng2026/weatherly",
    demo: "",
    image: "/images/weatherly.png",
    featured: false,
    category: "backend",
  },
  {
    id: 5,
    title: "PetPat API",
    subtitle: "RESTful pet management API",
    description:
      "A RESTful API built with Express.js for managing pet profiles using full CRUD operations and in-memory data storage.",
    challenge:
      "Build a complete backend API from scratch that supports creating, reading, updating, and deleting pet records while following RESTful design principles.",
    solution:
      "Developed an Express.js API with full CRUD endpoints, route parameters, request body handling, proper HTTP status codes, and comprehensive testing using Postman.",
    learned: [
      "Built a RESTful API with Express.js",
      "Implemented CRUD operations",
      "Worked with req.params and req.body",
      "Used appropriate HTTP status codes",
      "Tested endpoints with Postman",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST API",
      "CRUD",
      "Postman",
    ],
    github: "https://github.com/beckysoftwareeng2026/PetPat-",
    demo: "",
    image: "/images/petpat.png",
    featured: false,
    category: "backend",
  },
  {
    id: 6,
    title: "My Restaurant API",
    subtitle: "Restaurant menu management REST API",
    description:
      "A RESTful restaurant menu API built with Express.js featuring full CRUD operations, category and availability filtering, pagination, request validation, and organized routing.",
    challenge:
      "Build a more advanced backend API that supports query parameters, filtering, pagination, reusable validation middleware, and reliable error responses.",
    solution:
      "Created an organized Express.js application with separate routes, middleware, and data modules. Added full CRUD functionality, combined filters, pagination metadata, ID validation, and testing through Postman.",
    learned: [
      "Implemented query parameter filtering",
      "Built pagination with page and limit controls",
      "Created reusable validation middleware",
      "Organized routes and data into separate modules",
      "Validated route parameters and request bodies",
      "Tested successful and unsuccessful requests with Postman",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST API",
      "CRUD",
      "Postman",
    ],
    github:
      "https://github.com/beckysoftwareeng2026/my-restaurant-api",
    demo: "",
    image: "/images/my-restaurant-api.png",
    featured: false,
    category: "backend",
  },
  {
    id: 7,
    title: "My Shop API",
    subtitle: "Full e-commerce backend API — Coming Soon",
    description:
      "An e-commerce backend currently in development that will manage products, shopping carts, stock levels, and customer orders across multiple Express resources.",
    challenge:
      "Build a production-style backend with multiple related resources, shared application state, inventory validation, cart calculations, and order processing.",
    solution:
      "Planned as a modular Express.js API with dedicated product, cart, and order routers, reusable middleware, business logic, and a structure ready for future database integration.",
    learned: [
      "Multiple Express routers",
      "Shared application state",
      "Inventory and stock validation",
      "Shopping cart calculations",
      "Order processing",
      "Global error middleware",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "REST API",
      "Postman",
    ],
    github: "",
    demo: "",
    image: "/images/my-shop-api.png",
    featured: false,
    category: "backend",
  },
  {
    id: 8,
    title: "CustomKin",
    subtitle: "Flagship full-stack application",
    description:
      "A flagship full-stack application currently in development, designed around authentication, dashboards, APIs, SQL data, and production-ready architecture.",
    challenge:
      "Design a portfolio-level flagship application that demonstrates full-stack thinking, scalability, and real product architecture.",
    solution:
      "Planned with React, Node.js, SQL, REST APIs, authentication, reusable UI patterns, and a dashboard-focused user experience.",
    learned: [
      "Full-Stack Planning",
      "SQL Design",
      "Authentication",
      "Dashboards",
    ],
    technologies: ["React", "Node.js", "SQL", "REST APIs"],
    github: "",
    demo: "",
    image: "/images/customkin.png",
    featured: true,
    category: "frontend",
  },
];