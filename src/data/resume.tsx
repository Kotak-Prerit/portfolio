import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prerit Kotak",
  initials: "KP",
  url: "https://prerit.tech",
  location: "Gujarat, India",
  locationLink: "https://www.google.com/maps/place/surat",
  description:
    "Proficient in developing responsive, high-performance web interfaces using modern frontend technologies.",
  summary:
    "A freelance Frontend Engineer actively helping upcoming startups and local businesses to expand in digital world. Hackathons are the perfect playground for me to experiment with new technologies and push the boundaries of what's possible in web development.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "webpack",
    "Tailwind CSS",
    "HTML/CSS",
    "JavaScript",
    "Three.js",
    "GSAP",
    "Framer Motion",
    "REST APIs",
    "Payment Gateway Integration",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "preritdeveloping@gmail.com",
    tel: "+919265058642",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kotak-Prerit",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prerit-kotak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/preritkotak",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:preritdeveloping@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Parul University",
      href: "https://paruluniversity.ac.in",
      degree: "Masters in Computer Applications (MCA)",
      logoUrl:
        "https://res.cloudinary.com/dafqq1jvc/image/upload/v1749895102/parul-logo_pwaswh.png",
      start: "2024",
      end: "2026 (expected)",
    },
    {
      school: "Bhagwan Mahavir University",
      href: "https://www.bmusurat.ac.in/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/bmu.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "SnapGaurd",
      href: "https://snapgaurd.me",
      dates: "February 2025",
      active: true,
      description:
        "SnapGuard is a Real-Time Cyber Threat Assistant (RT-CTA) multimodal, AI-powered application that monitors and detects cybersecurity threats in real time by analyzing multiple data inputs. The application leverages Groq's ultra-fast inference capabilities to process inputs and provide real-time threat detection related response.",
      technologies: [
        "Vite (Build Tool)",
        "Node.js",
        "Typescript",
        "Supabase",
        "zustand",
        "TailwindCSS",
        "groq sdk",
        "google auth",
        "JSON Web Tokens (JWT)",
      ],
      links: [
        {
          type: "Website",
          href: "https://snapgaurd.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kotak-Prerit/SnapGuard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/snapgaurd.mp4",
    },
    {
      title: "Kalaevani",
      href: "https://kalaevani.com",
      dates: "June 2023",
      active: true,
      description:
        "A Clothing Brand that hires Artists and promote their designs on Oversized T-Shirts. Single Handedly developed the whole E-Commerce site with Authentication, Product Management, Order Management, Payment Gateway Integeration & many more...",
      technologies: [
        "React JS",
        "Tailwind CSS",
        "webpack",
        "Razorpay",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "Cloudinary",
        "Axios",
        "Redux Toolkit",
        "Three.js",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://kalaevani.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kotak-Prerit/Kalaevani",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/kalaevani.mp4",
    },
    {
      title: "Drug Trafficking Detection System",
      href: "https://thechiefcoders.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "-> This Drug Trafficking detection project helped us secure 2nd Rank in Vadodara Hackathon 5.0. -> 1200+ teams registered in the Hackathon.-> Whole project was made in a week. -> I Single-handedly built the Frontend Dashboard using using ViteJS (Build Tool), Framer Motion (micro-animations), recharts(Data Visualization through charts), axios (Promise based HTTP client for the browser and node.js)",
      technologies: [
        "ReactJS",
        "Python",
        "Django",
        "axios",
        "Machine Learning",
        "Telegram API",
        "Tailwind CSS",
        "JSON",
        " APIs",
        "PyTorch",
        "Telethon",
        "Recharts",
        "Framer Motion",
        "Data Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://thechiefcoders.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kotak-Prerit/DTDS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/dtds.mp4",
    },
    {
      title: "Dzyen Studio",
      href: "https://dzyenstudio.vercel.app",
      dates: "November 2022",
      active: true,
      description:
        "Designed a breathtaking landing page for an agency which specializes in providing development services. The page showcases their services, portfolio, and contact information, all while maintaining a playful and engaging design that reflects the magic of UI.",
      technologies: [
        "react",
        "lenis",
        "react-icons",
        "react-router-dom",
        "@emailjs",
        "react-toastify",
        "web-vitals",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://dzyenstudio.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kotak-Prerit/DzyenStudio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/dzyenstudio.mp4",
    },
  ],
  hackathons: [
    {
      title: "Bolt - (World's Largest Hackathon)",
      dates: "Present - Ongoing",
      location: "Remote",
      description:
        "Developing a build in public platform for developers to showcase their projects, share progress, and join the hackathons recommended by us, also contribute to open-source repositories that matches their technological skills.",
      image:
        "https://res.cloudinary.com/dafqq1jvc/image/upload/v1749891645/black_circle_360x360_dpzcvm.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/Kotak-Prerit/challenges",
        },
      ],
    },
    {
      title: "HACKHAZARDS '25",
      dates: "April 11th - 27th, 2025",
      location: "India",
      description:
        "Real-Time Cyber Threat Assistant (RT-CTA) multimodal, AI-powered application that monitors and detects cybersecurity threats in real time by analyzing multiple data inputs.",
      image: "https://www.namespacecomm.in/img/logo-white-blackoutline-3x4.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://verification.givemycertificate.com/v/474d8064-a95f-41c5-be1a-e60447898416",
        },
      ],
    },
    {
      title: "Vadodara Hackathon 5.0",
      dates: "September 2024",
      location: "Vadodara, India",
      description:
        "A Telegram user agent gets deployed in potential drug trafficking groups to monitor their activities and detect any suspicious behavior. The user agent uses machine learning algorithms to analyze the messages and detect patterns that indicate drug trafficking activities. If any suspicious activity is detected, The data is being send to dashboard for authorities to take actions.",
      icon: "public",
      image:
        "https://res.cloudinary.com/dafqq1jvc/image/upload/v1749895394/pierc_ejdaah.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dafqq1jvc/image/upload/v1749895464/vadodaraHackathon5_1_f7fizx.jpg",
        },
      ],
    },
  ],
} as const;
