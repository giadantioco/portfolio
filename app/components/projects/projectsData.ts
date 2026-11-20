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
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed sed excepteur, duis laborum. Aliquip ipsum pariatur sit voluptate exercitation, irure nisi sed ut officia sint consectetur.",
    tags: ["Next.js", "Typescript", "Tailwind"],
    image: "/jackpot.png",
    url: "https://jackpotplay.fun/",
  },
  {
    id: 2,
    name: "Storyteller",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed sed excepteur, duis laborum. Aliquip ipsum pariatur sit voluptate exercitation, irure nisi sed ut officia sint consectetur.",
    tags: ["Next.js", "Typescript", "Tailwind", "Gemini API"],
    image: "/storyteller.png",
    github: "https://github.com/giadantioco/ai-story-teller",
    url: "https://storyteller-by-jade.vercel.app/",
  },
  {
    id: 3,
    name: "Weather App",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed sed excepteur, duis laborum. Aliquip ipsum pariatur sit voluptate exercitation, irure nisi sed ut officia sint consectetur.",
    tags: ["Next.js", "Typescript", "SCSS"],
    image: "/weatherapp.svg",
    github: "https://github.com/giadantioco/weather-app",
    url: "https://weather-by-jade.vercel.app/",
  },
  {
    id: 4,
    name: "CRM",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed sed excepteur, duis laborum. Aliquip ipsum pariatur sit voluptate exercitation, irure nisi sed ut officia sint consectetur.",
    tags: ["Next.js", "Typescript", "Tailwind"],
    image: "/crm.png",
    github: "https://github.com/giadantioco/cybernext",
  },
  // {
  //   id: 5,
  //   name: "Pricing App",
  //   tags: ["HTML", "CSS", "JS"],
  //   image: "/pricingapp.svg",
  //   github: "#",
  //   url: "",
  // },
  // {
  //   id: 6,
  //   name: "Pricing App",
  //   tags: ["HTML", "CSS", "JS"],
  //   image: "/hmp.png",
  //   github: "#",
  //   url: "",
  // },
];
