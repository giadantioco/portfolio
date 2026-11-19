export interface Project {
  id: number;
  name: string;
  tags: string[];
  image: string;
  github?: string;
  url?: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    name: "Jackpot Play",
    tags: ["HTML", "CSS", "JS"],
    image: "/jackpot.png",
    url: "https://jackpotplay.fun/",
  },
  {
    id: 2,
    name: "CRM",
    tags: ["HTML", "CSS", "JS"],
    image: "/weatherapp.png",
    github: "#",
    url: "3",
  },
  {
    id: 3,
    name: "Weather App",
    tags: ["HTML", "CSS", "JS"],
    image: "/weatherapp.svg",
    github: "#",
    url: "",
  },
  {
    id: 4,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    url: "",
  },
  {
    id: 5,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    url: "",
  },
  {
    id: 6,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    url: "",
  },
];
