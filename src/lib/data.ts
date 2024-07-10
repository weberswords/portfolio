import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    nameIta: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    nameIta: "Chi sono",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    nameIta: "Progetti",
    hash: "#projects",
  },
  {
    nameEng: "Resources",
    nameIta: "Risorse",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    nameIta: "Contatti",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "title",
    objectives: [],
    audience: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/app-example.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
];
