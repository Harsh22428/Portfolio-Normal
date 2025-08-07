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
      location: "Remote",
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
      href: "",
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
      dates: "July 2025 - Present",
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
        "TrueFeedback is a platform where users can provide anonymous feedback to individuals or organizations without revealing their identity. Since anonymous feedback is often the most honest, TrueFeedback helps create a space for genuine, constructive, and unfiltered insights.key points to highlight.",
      technologies: [
        "Next.js",
        "Next-Auth",
        "Typescript",
        "MongoDB",
        "Resend Mail",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Harsh22428/my-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Job-Portal",
      href: "https://www.sharmaji.codes",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "A full-stack platform where [students] can apply for jobs and recruiters can post openings. Implemented secure authentication (JWT), resume uploads, job filtering, and dashboards for both users. Enabled real-time application tracking and admin job/user management",
      technologies: [
        "React js",
        "Javascript",
        "MongoDB",
        "Node js",
        "Express js",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sharmaji.codes",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Harsh22428/Jobportal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "ICEVET'24",
      href: "https://icevet.sharmaji.codes",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        " It is International Conference Departmental website. The main goal of this site is to make a suttle and focused platform so that the participating researchers could easily upload their papers and may even get the support from our side as possible.",
      technologies: [
        "React js",
        "Javascript",
        "Framer Motion",
        "TailwindCSS",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://icevet.sharmaji.codes",
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
      title: "HackTU",
      dates: "Feb 8th - 9th, 2025",
      location: "Thapar Institute of Engineering and Technology , Patiala(Punjab)",
      description:
        " Our team hackquick developed plateform called Infilend , which acts as a bridge between Loan seeker and government .It also helps government to monitor on Loan Providers and seekers.",
      image:
        "/hacktu.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Harsh22428/hackquick",
        },
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/harsh-sharma-6b9824253_experienced-the-thrill-of-hacktu-60-activity-7299801984528728064-2O3r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6XkO0BIJSSt5ouztJMs9FSnZ4h2XtoypE",
        },
      ],
    },
    {
      title: "Smart India Hackathon(SIH)",
      dates: "August 23th - 30th, 2024",
      location: "KNIT Sultanpur",
      description:
        " MEDGUARD project, a comprehensive web application for the Smart India Hackathon 2024. The project aims to streamline hospital operations, enhance patient care, and reduce administrative burdens",
      image:
        "/sih.png",
      win: "Internal hackathon winner",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1LDLt0mAtP2eb-Vna2A91jirnqhClTnhk/view",
        },
      ],
    },
   
  ],
} as const;
