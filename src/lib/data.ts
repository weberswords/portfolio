import { Link, ProjectInfo, Resource } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Lessons",
    hash: "#projects",
  },
  {
    nameEng: "Resources",
    hash: "#resources",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Getting Started with Miro",
    objectives: [
      {type: "standard", text: "Be able to edit, duplicate, and delete sticky notes on a Miro board", standards: ["ISTE 1.6.c Models and Visualizations", "ISTE 1.6.d Customize the message"]}, 
      {type: "standard", text: "Be able to explain what Miro can be used for", standards: ["ISTE 1.6.a Choose platforms or tools"]},
      {type: "stretch", text: "Be able to add a sticky from the toolbar", standards: ["ISTE 1.6.a Choose platforms or tools", "ISTE 1.6.c Models and Visualizations", "ISTE 1.6.d Customize the message"]},
      {type: "stretch", text: "Be able to add tags to a sticky note", standards: ["ISTE 1.6.a Choose platforms or tools", "ISTE 1.6.c Models and Visualizations", "ISTE 1.6.d Customize the message"]}
      ],
    audience: "Adults at an EdTech Company",
    description:
      "During a retrospective, a group of EdTech professionals will be introduced to using Miro, an online whiteboarding tool for the first time.",
    tags: ["Miro", "retro", "edtech", "adult learning"],
    imageUrl: "/miro.png",
    imageAlt: "Black stylized M on a yellow background",
    link: "https://docs.google.com/document/d/1-DaPdQv3gA7mFZ1VibTbxCsJqD1CtXTB6c_ivcRD-eY/edit?usp=sharing",
  },
  {
    title: "Getting Started with AirTable",
    objectives: [
      {type: "standard", text: "Collect, analyze, and display customer feedback data", standards: ["ISTE 1.5.c - Decompose Problems"]},
      {type: "standard", text: "Modify the questions in the feedback form", standards: ["ISTE 1.6.b Original and Remixed Works"]},
      {type: "standard", text: "Share the user feedback form", standards: ["ISTE 1.5.b - Data Sets"]},
      {type: "standard", text: "Add an interface based on the data", standards: ["ISTE 1.5.b - Data Sets"]},
      {type: "stretch", text: "Add a question to the user feedback form", standards: []},
      {type: "stretch", text: "Add a list of respondents who have not been contacted with an NPS score between 5-7", standards: []},
      
    ],
    audience: "Product Owners at an EdTech Company",
    description:
      "One tool product owners can use to capture customer feedback about their products is AirTable. It provides one place to collect, analyze, and create dashboards for data.",
    tags: ["AirTable", "product development", "customer feedback", "edtech", "adult learning"],
    imageUrl: "/airtable.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1LPiuPCMzUA5eBbdRS4ES-tsXRElnw3gZyVpP3J7YHQM/edit?usp=drive_link",
  },
  {
    title: "Getting Started with Password Management",
    objectives: [
      {type: "standard", text: "Modify the questions in the feedback form", standards: ["ISTE 1.6.b Original and Remixed Works"]},
      {type: "standard", text: "Share the user feedback form", standards: []}
    ],
    audience: "Product Owners at an EdTech Company",
    description:
      "An essential part of any person's technical repertoire is the use of a password manager. There are many out there. We'll explore LastPass to get you started.",
    tags: ["LastPass", "security", "password manager"],
    imageUrl: "/lp_icon.svg",
    imageAlt: "",
    link: "https://docs.google.com/document/d/152pYIwDQrk03Uwv81Rlb-kbGOHPIhDxpERT8qzz3HqE/edit?usp=sharing",
  },
];

export const resourcesData: Resource[]= [
  {
    title: "Exercism",
    description:
      "Exercism is a website to learn coding. It allows the user to flexibly engage with the content and reduces extraneous cognitive load through the structure and aesthetics as well as the learning path options.",
    tags: ["coding"],
    imageUrl: "/exercism.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1C9tuPdR9rBwCzhO7iLN2yAx9-AhR5TecSkmCUPQkdo0/edit?usp=drive_link",
  },
  {
    title: "AirTable",
    description:
      "AirTable's documentation and learning resources are useful, however, lacking in aesthetics and effective use of media. The content is relevant and flexible, but would benefit from strategies for reducing extraneous cognitive load.",
    tags: ["data"],
    imageUrl: "/airtable.png",
    imageAlt: "",
    link: "https://docs.google.com/document/d/1fcQrQdHoGWnc8PqoKvjg7qW97jvGCROP64T8GmwqwSk/edit?usp=sharing",
  },
];

export const skillsData = []
