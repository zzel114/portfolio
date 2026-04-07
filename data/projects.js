/**
 * PORTFOLIO DATA
 * ──────────────
 * To add / edit a project, just update this array.
 * Each object supports:
 *   title       – project name (required)
 *   category    – used for filter tabs (e.g. "AutoCad", "Mobile", "Design")
 *   description – short summary shown on the card
 *   details     – longer description shown in the modal (supports \n for line breaks)
 *   image       – cover image path (shown on the card)
 *   images      – array of image paths shown in the modal gallery (falls back to [image])
 *   tags        – array of tech/skill labels
 *   link        – live URL (optional, set "" to hide)
 *   repo        – GitHub repo URL (optional, set "" to hide)
 */
const PROJECTS = [
  {
    title: "Project One",
    category: "AutoCad",
    description: "A brief description of what this project does and the problem it solves.",
    details: "This is a more detailed explanation of the project.\n\nDescribe the challenge you faced, how you approached it, and what the outcome was. You can write multiple paragraphs here. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/images/tes_image.png",
    images: [
      "assets/images/tes_image.png",
      "assets/images/placeholder.svg"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    link: "",
    repo: ""
  },
  {
    title: "Project Two",
    category: "Mobile",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Two.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["React Native", "Firebase"],
    link: "",
    repo: ""
  },
  {
    title: "Project Three",
    category: "Design",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Three.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["Figma", "UI/UX"],
    link: "",
    repo: ""
  },
  {
    title: "Project Four",
    category: "AutoCad",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Four.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["Vue.js", "Node.js", "MongoDB"],
    link: "",
    repo: ""
  },
  {
    title: "Project Five",
    category: "AutoCad",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Five.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["React", "Tailwind", "REST API"],
    link: "",
    repo: ""
  },
  {
    title: "Project Six",
    category: "AutoCad",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Six.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["Flutter", "Dart"],
    link: "",
    repo: ""
  },
  {
    title: "Project Six",
    category: "AutoCad",
    description: "A brief description of what this project does and the problem it solves.",
    details: "Detailed write-up about Project Six.\n\nExplain the problem, solution, and results here.",
    image: "assets/images/placeholder.svg",
    images: ["assets/images/placeholder.svg"],
    tags: ["Flutter", "Dart"],
    link: "",
    repo: ""
  }
];

/**
 * PERSONAL INFO
 * Update these fields with your real details.
 */
const PROFILE = {
  name: "Muhammad Zelot Zoha",
  title: "Instrument Engineer | Problem Solver",
  tagline: "Engineering solutions to real problems",
  about: `I apply engineering principles to solve real, practical problems, ranging from control and instrumentation systems to data-driven optimization. My experience includes working with sensors, control logic, system modeling, hands-on implementation, and telemetry. I focus on building solutions that are technically sound, measurable, and actually work in real-world conditions.`,
  avatar: "assets/images/foto_zelot.jpg",   // set "" to hide
  email: "muhammadzelot@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/muhammad-zelot-zoha-a097a9254/",
  twitter: ""                            // set "" to hide
};

// Expose to global scope so main.js can read them
window.PROJECTS = PROJECTS;
window.PROFILE  = PROFILE;
