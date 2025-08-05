import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harsh Sharma",
  initials: "HS",
  url: "https://sharmaji.me",
  location: "Kanpur Nagar",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer,Transforming ideas into smart, scalable solutions — across web, mobile, and intelligent systems using AI/ML and Agentic AI.",
  summary:
    "I’m a Software Developer who turns raw ideas into powerful, real-world products. Whether it's crafting scalable backend systems, designing intuitive frontend interfaces, or building seamless mobile experiences — I bring clean code and clear thinking to every line I write.My playground stretches from web to mobile, with a deep focus on system design, APIs, and performance-first development. I’m passionate about AI/ML and the exciting future of Agentic AI, exploring how intelligent systems can act autonomously and make smart decisions.",
  avatarUrl: "/me.png",
  skills: [
    "React js",
    "Next.js",
    "Javascript",
    "Typescript",
    "Python",
    "Node.js",
    "Express js",
    "MongoDB",
    "SQL",
    "Postgres Sql",
    "Docker",
    "C++",
    "GSAP",
    "Framer Motion",
    "Tailwind CSS",
    "React Native(with EXPO)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harsh639284@gmail.com",
    tel: "6392847684",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/Harsh-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/Harsh-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/Harsh-X",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hindustan Aeronautics Limited",
      href: "https://www.hal-india.co.in/",
      badges: [],
      location: "HAL Korwa",
      title: "Summer Intern",
      logoUrl: "/hal.jpg",
      start: "June 2025",
      end: "July 2025",
      description:
        "During my time at Hindustan Aeronautics Limited (HAL), Korwa, I got the opportunity to work in the A&T Russian Department, specifically in the Unmanned Aerial Vehicle (UAV) Shop,Where I gained practical insights into advanced aerospace systems, avionics, and defense technology,",
    },
    {
      company: "GSSOC'24",
      badges: [],
      href: "https://gssoc.girlscript.tech/",
      location: "Remote",
      title: "Open Souce Contributor",
      logoUrl: "/gssoc.jpg",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "",
    },
    {
      company: "IneuBytes",
      badges: [],
      href: "https://ineubytes.com/",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/ineubyte.png",
      start: "Aug 2023",
      end: "Oct 2023",
      description:
        "As web Developer I worked on real projects where I developed the landing page of the company and many different projects.",
    },
    {
      company: "Freelancer",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: " Helping Founders Build Fast, Scalable & Stunning Web + Mobile Apps",
      logoUrl: "",
      start: " Sep 2024",
      end: "Present",
      description:
        "I'm not just a developer — I’m your tech partner. I work with founders, startups, and businesses to transform their ideas into fully functional web and mobile apps that are fast, scalable, and user-loved.  ",
    },
  ],
  education: [
    {
      school: "Kamla Nehru Institute Of Technology Sultanpur",
      href: "https://knit.ac.in/en",
      degree: "Bachelor of Technology in Electronics Engineering",
      logoUrl: "/knit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Vidyut Parishad Inter College Panki Power House, Kanpur Nagar",
      href: "https://uwaterloo.ca",
      degree: "Higher Secondary",
      logoUrl: "/vpic.jpg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Disposable",
      href: "https://luxidevilott.com",
      dates: "Junly 2025 - Present",
      active: true,
      description:
        "Disposable Email Service.",
      technologies: [
        "React js",
        "Typescript",
        "TailwindCSS",
        "Node js",
        "Express js",
        "Google API",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://luxidevilott.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Harsh22428/disposable_email_ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "TrueFeedback",
      href: "",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
      ],
    },
   
  ],
} as const;
