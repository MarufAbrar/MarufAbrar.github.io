import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maruf Abrar",
  initials: "MA",
  url: "https://marufabrar.me",
  location: "Jimma, Oromia, Ethiopia",
  title: "Founder & Backend Developer",
  tagline: "I build backend systems, digital products, and practical software solutions.",
  description:
    "Founder & Backend Developer. I build backend systems, digital products, and practical software solutions.",
  summary:
    "Maruf is a technology entrepreneur, software developer, and founder driven by curiosity, creativity, and purpose. He enjoys turning ideas into meaningful solutions, building things that matter, and creating positive impact through technology and entrepreneurship.",
  avatarUrl: "/me.png",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "maracode1@gmail.com",
    tel: "+251 943 222 253",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MarufAbrar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/maruf-abrar",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:maracode1@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  technicalFocus: [
    {
      label: "Backend",
      items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Alpine.js",
        "Livewire",
        "Inertia.js",
      ],
    },
    {
      label: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      label: "Infrastructure",
      items: ["Docker", "Linux", "DigitalOcean", "GitHub Actions", "CI/CD"],
    },
    {
      label: "Engineering",
      items: [
        "Authentication",
        "Authorization",
        "RBAC",
        "API design",
        "Database design",
        "Business logic",
        "Payment integrations",
        "Third-party integrations",
        "Performance optimization",
        "SaaS architecture",
        "Marketplace architecture",
      ],
    },
    {
      label: "Secondary",
      items: [
        "Python",
        "Java",
        "C++",
        "Rust",
        "WordPress",
        "Elementor",
        "AI data annotation",
        "Multilingual datasets",
      ],
    },
  ],

  work: [
    {
      company: "Scopus Research, Training and Consultancy PLC",
      href: "https://www.scopusethio.com/",
      title: "Technical Lead",
      logoUrl: "/companies/Scopus.png",
      start: "2025",
      end: "Present",
      description:
        "Lead technical development and digital technology initiatives, translating organizational requirements into practical software solutions. Responsible for technical planning, system architecture, development coordination, implementation, and supporting digital products and platforms.",
    },
    {
      company: "Debbal Software Development PLC",
      href: "https://debbal.com/",
      title: "Backend Developer",
      logoUrl: "/companies/debbal.png",
      start: "2021",
      end: "Present",
      description:
        "- Design, develop, and maintain backend systems using PHP and Laravel.\n- Build secure and scalable RESTful APIs and application business logic.\n- Design and optimize database structures.\n- Implement authentication, authorization, and role-based access control.\n- Integrate third-party services and payment systems.\n- Collaborate with frontend developers, designers, and stakeholders.\n- Debug, maintain, and improve production applications.\n- Participate in Agile development and project delivery.",
    },
    {
      company: "Brand Generation College",
      href: "http://brandgenrationcollege.edu.et/",
      title: "Software Engineer",
      logoUrl: "/companies/brandgenrationcollege.jpg",
      start: "April 2024",
      end: "Present",
      description:
        "- Led full-stack development of 6+ web applications serving 6,000+ internal and external users.\n- Architected systems including Research Management, Library Management, and College Grading platforms.\n- Implemented role-based access control and role-specific workflows.\n- Built research proposal, approval, budgeting, and compliance workflows.\n- Built library borrowing, return, overdue reminder, analytics, and fine collection functionality.\n- Built grading, GPA computation, transcript generation, and role-specific dashboards.\n- Integrated payment gateways and RFID systems.\n- Optimized MongoDB queries using aggregation and indexing.\n- Improved frontend performance through lazy loading and memoization.\n- Deployed applications using Docker and Git/GitHub.\n- Managed production infrastructure and critical servers.",
    },
    {
      company: "Sustainable Horizon Organization",
      href: "https://sustainablehorizon.org/",
      title: "Web Developer",
      logoUrl: "/companies/shido.png",
      start: "2023",
      end: "Present",
      description:
        "- WordPress development\n- Elementor\n- Custom WordPress plugins\n- Performance and accessibility\n- SEO\n- Maintenance and technical support",
    },
    {
      company: "Rimas Delivery",
      href: "http://www.rimasdelivery.net/",
      title: "Backend Developer",
      logoUrl: "/companies/rimas.jpg",
      start: "2023",
      end: "2024",
      description:
        "- Backend services\n- REST APIs\n- Order processing\n- Delivery workflows\n- Authentication\n- Database design\n- Performance optimization",
    },
    {
      company: "Debbal Technology Zone",
      href: "http://www.edu.debbal.com/",
      title: "Website Development Trainer",
      logoUrl: "/companies/debbal.png",
      start: "2023",
      end: "2024",
      description: "Delivered website development training.",
    },
    {
      company: "RWS TrainAI — MultiMango Platform",
      href: "https://www.rws.com/",
      title: "Data Annotator / AI Data Contributor",
      logoUrl: "/companies/rws.png",
      start: "6 Months",
      end: "",
      description:
        "AI data annotation and multilingual dataset contribution on the MultiMango Platform.",
    },
    {
      company: "Edelala",
      href: "https://edelala.net/",
      title: "Backend Developer",
      logoUrl: "/companies/edelala.png",
      start: "2020",
      end: "2023",
      description:
        "Developed and maintained backend systems and APIs for Edelala, working on application logic, database operations, authentication, and business workflows. Contributed to building and improving reliable web-based services and platform features.",
    },
  ],

  education: [
    {
      school: "University of the People",
      href: "",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/education/uopeople.png",
      start: "",
      end: "Graduated June 2026",
      certificateUrl: "",
    },
    {
      school: "African Leadership Academy (ALX)",
      href: "",
      degree: "Software Engineering / Backend Development",
      logoUrl: "/education/alx.png",
      start: "April 2022",
      end: "May 2023",
      certificateUrl:
        "https://drive.google.com/file/d/1QEO6l2Gn_IAdvE4rYThyNTXU8afbAIk_/view",
    },
  ],

  volunteering: [
    {
      role: "Web Development Trainer",
      org: "American Embassy Summer Camp",
      location: "Jimma",
      dates: "May – June 2024",
      description:
        "Delivered practical web development training covering HTML, CSS, JavaScript, troubleshooting, code reviews, and project-based learning.",
      certificateUrl:
        "https://drive.google.com/file/d/18iYpBLXKYELeLi_y4SIXSDO1tlaXh1Gi/view",
    },
  ],

  languages: [
    { name: "Amharic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Arabic", level: "Basic speaking; advanced reading and writing" },
  ],

  projects: [
    {
      title: "Ministry of Peace — Youth Peace Volunteers Platform",
      href: "https://yvms.mop.gov.et/",
      category: "National Government Digital Platform",
      description:
        "A national digital platform developed for the Federal Ministry of Peace of Ethiopia to support youth peacebuilding and volunteer engagement.\n\n- Volunteer registration and management\n- Authentication and account management\n- Program information\n- Public communication\n- Impact presentation\n- Digital engagement\n- Scalable web application architecture",
      technologies: [] as string[],
      links: [
        {
          type: "Website",
          href: "https://yvms.mop.gov.et/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web-screenshot/yvms.png",
      video: "",
    },
    {
      title: "HETRIIL — Higher Education, TVET & Research–Industry Innovation Linkage Platform",
      href: "https://hetriil.moe.gov.et/",
      category: "National Education & Innovation Platform",
      description:
        "A national platform developed for the Federal Ministry of Education to connect higher education institutions, TVET institutions, research organizations, industries, and innovation stakeholders.\n\n- Institutional and industry profiles\n- Research calls\n- Internship opportunities\n- Events\n- Innovation showcases\n- Dashboards and analytics\n- Network metrics\n- Structured data management\n- Search and discovery\n- Digital workflows",
      technologies: [] as string[],
      links: [
        {
          type: "Website",
          href: "https://hetriil.moe.gov.et/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web-screenshot/hetriil.png",
      video: "",
    },
    {
      title: "WalkedPath",
      href: "https://walkedpath.co.uk/",
      category: "International Marketplace Platform",
      description:
        "An international marketplace platform connecting customers with professional operators through structured digital consultations and marketplace workflows.\n\n- Multi-user marketplace architecture\n- Customer and operator accounts\n- Authentication and profiles\n- Dashboards\n- Booking workflows\n- Payment integration\n- Backend transaction workflows",
      technologies: [] as string[],
      links: [
        {
          type: "Website",
          href: "https://walkedpath.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web-screenshot/walkedpath.png",
      video: "",
    },
    {
      title: "Dania Financial System",
      href: "",
      category: "SACCO / Financial Management",
      description:
        "A financial management system designed for SACCO operations.\n\n- Member management\n- Financial transaction processing\n- Reporting\n- Backend validation\n- Secure financial operations\n- React-based interfaces",
      technologies: ["PHP", "Laravel", "MySQL", "React.js"],
      links: [],
      image: "/web-screenshot/dania.png",
      video: "",
    },
    {
      title: "Rimas Delivery System",
      href: "",
      category: "Delivery Platform Backend",
      description:
        "Backend system for delivery operations with APIs and business workflows.\n\n- REST APIs\n- Order management\n- Delivery workflows\n- Authentication\n- Role-based access control\n- Payment handling\n- Business logic\n- Database optimization",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Training Management System",
      href: "",
      category: "SaaS Platform",
      description:
        "A multi-user training management platform with administration, dashboards, role-based access control, reporting, and React-based interfaces.",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "React.js"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Firdos Cultural Medical Center",
      href: "https://firdowusmedicalcenter.com/",
      category: "Healthcare Digital Platform",
      description:
        "A healthcare website and digital platform presenting medical services, specialists, departments, patient information, and appointment-related services.",
      technologies: [] as string[],
      links: [
        {
          type: "Website",
          href: "https://firdowusmedicalcenter.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/web-screenshot/firdowusmedicalcenter.png",
      video: "",
    },
    {
      title: "Edelala Room & House Booking System",
      href: "",
      category: "Booking Platform",
      description:
        "Room and house booking system.\n\n- Booking and availability\n- Reservation workflows\n- Dynamic interfaces\n- Administrative controls",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Livewire"],
      links: [],
      image: "/web-screenshot/edelala.png",
      video: "",
    },
    {
      title: "Awra Taxi Pay System",
      href: "",
      category: "Payment / Transportation Backend",
      description:
        "Payment and transportation backend system.\n\n- Payment and transaction APIs\n- Authentication\n- Data validation\n- MongoDB data management",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Sustainable Horizon Website",
      href: "",
      category: "Organizational Website",
      description:
        "Organizational website built with PHP, WordPress, and Elementor.",
      technologies: ["PHP", "WordPress", "Elementor"],
      links: [],
      image: "/web-screenshot/shido.png",
      video: "",
    },
  ],

  startups: [
    {
      name: "Finova",
      href: "",
      description:
        "Finova is an AI-powered skincare platform designed to help people better understand their skin and discover personalized skincare solutions.",
    },
    {
      name: "WalkedPath",
      href: "",
      description:
        "A marketplace platform connecting people with experienced business operators for practical advice and professional guidance.",
    },
    {
      name: "Africomia",
      href: "https://www.africomia.org/",
      description:
        "Africomia is an African-led umbrella for multiple sector-specific initiatives, focused on strengthening community resilience and self-determination. It operates across health, education, food security, data intelligence, and climate resilience.",
    },
    {
      name: "Opportunity.et",
      href: "",
      description:
        "An opportunity discovery platform helping people find scholarships, internships, fellowships, volunteering opportunities, jobs, and grants.",
    },
  ],
} as const;
