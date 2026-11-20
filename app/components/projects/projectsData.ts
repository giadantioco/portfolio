import { SKILLS } from "./skillsData";

export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  url?: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    name: "Jackpot Play",
    description:
      "Company website built in a team with backend developers: responsive layouts, contact form API integration, SEO and accessibility.",
    tags: [SKILLS.next, SKILLS.typescript, SKILLS.tailwind],
    image: "/jackpot.webp",
    url: "https://jackpotplay.fun/",
  },
  {
    id: 2,
    name: "Storyteller",
    description:
      "AI app that writes short stories for young children, tailored by age, in English and Italian, with login and saved stories.",
    tags: [
      SKILLS.figma,
      SKILLS.next,
      SKILLS.typescript,
      SKILLS.gemini,
      SKILLS.supabase,
    ],
    image: "/storyteller.webp",
    github: "https://github.com/giadantioco/ai-story-teller",
    url: "https://storyteller-by-jade.vercel.app/",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "Weather forecast app with location search, rebuilt from vanilla JavaScript to Next.js using Open-Meteo data.",
    tags: [SKILLS.figma, SKILLS.next, SKILLS.typescript, SKILLS.sass],
    image: "/weatherapp.webp",
    github: "https://github.com/giadantioco/weather-app",
    url: "https://weather-by-jade.vercel.app/",
  },
  {
    id: 4,
    name: "CRM",
    description:
      "Product management dashboard with login and full CRUD: browse, create, edit and delete products via the Platzi Fake Store API.",
    tags: [SKILLS.figma, SKILLS.next, SKILLS.typescript, SKILLS.tailwind],
    image: "/crm.png",
    github: "https://github.com/giadantioco/cybernext",
  },
  {
    id: 5,
    name: "Pricing App",
    description: "Lorem ipsum ...", // ← da scrivere quando lo rimetti
    tags: [SKILLS.figma, SKILLS.html, SKILLS.css, SKILLS.javascript],
    image: "/pricingapp.svg",
    github: "#",
    url: "",
  },
  // {
  //   id: 6,
  //   name: "Pricing App",
  //   tags: ["HTML", "CSS", "JS"],
  //   image: "/weatherapp.webp",
  //   github: "#",
  //   url: "",
  // },
];
