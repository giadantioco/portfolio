export interface Project {
  id: number;
  name: string;
  tags: string[];
  image: string;
  github: string;
  vercel?: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    vercel: "",
  },
  {
    id: 2,
    name: "CRM",
    tags: ["HTML", "CSS", "JS"],
    image: "/crmapp.svg",
    github: "#",
    vercel: "",
  },
  {
    id: 3,
    name: "Weather App",
    tags: ["HTML", "CSS", "JS"],
    image: "/weatherapp.svg",
    github: "#",
    vercel: "",
  },
  {
    id: 4,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    vercel: "",
  },
  {
    id: 5,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    vercel: "",
  },
  {
    id: 6,
    name: "Pricing App",
    tags: ["HTML", "CSS", "JS"],
    image: "/pricingapp.svg",
    github: "#",
    vercel: "",
  },
];
