// Images
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import lucyImg from '../public/lucy.png';
import portfolioImg from '../public/portfolio.png';
import tradingImg from '../public/trading.png';

import React from "react";

export const typeLinks = [
    {
        name: "Home",
    },
    {
        name: "About",
    },
    {
        name: "Projects",
    },
    {
        name: "Skills",
    },
    {
        name: "Experiences",
    },
    {
        name: "Contact",
    },
    {
        name: "Accueil",
    },
    {
        name: "À propos",
    },
    {
        name: "Projets",
    },
    {
        name: "Compétences",
    },
    {
        name: "Expériences",
    }
] as const;

export const links = {
    en: [
        {
            name: "Home",
            hash: "/",
        },
        {
            name: "About",
            hash: "#about",
        },
        {
            name: "Projects",
            hash: "#projects",
        },
        {
            name: "Skills",
            hash: "#skills",
        },
        {
            name: "Experiences",
            hash: "#experience",
        },
        {
            name: "Contact",
            hash: "#contact",
        }
    ],
    fr: [
        {
            name: "Accueil",
            hash: "/",
        },
        {
            name: "À propos",
            hash: "#about",
        },
        {
            name: "Projets",
            hash: "#projects",
        },
        {
            name: "Compétences",
            hash: "#skills",
        },
        {
            name: "Expériences",
            hash: "#experience",
        },
        {
            name: "Contact",
            hash: "#contact",
        }
    ]
} as const;

export const heroTexts = {
    en: {
        intro: "Hello, ",
        presentation: "I'm Benjamin FONTAINE. ",
        work: "I'm a Fullstack Developer with 2 years experiences. ",
        description: "I love innovating and creating new apps. ",
        focus: "I work with React (Next.js).",
        contact: "Contact me",
        resume: "Download my resume"
    },
    fr: {
        intro: "Bonjour, ",
        presentation: "Je suis Benjamin FONTAINE. ",
        work: "Je suis Développeur Fullstack depuis 2 ans. ",
        description: "J'adore innover et créer de nouvelle applis. ",
        focus: "Je travaille avec React (Next.js).",
        contact: "Contactez-moi",
        resume: "Téléchargez mon CV"
    }
} as const;

export const aboutTexts = {
    en: {
        title: "About Me",
        0: "I'm a passionate web creator juggling lines of code to breathe life into captivating digital experiences. 🚀 ",
        1: "I discovered my passion by diving into the world of web development, and since then, I've been totally hooked",
        2: "My thing? Turning ideas into slick interfaces that pack a punch. I learned the ropes from scratch at my formation, and now, I'm comfortable with technologies like **Next.js**, **React**, and **Node.js**.",
        3: "But here's the best part: I'm a sucker for learning new things, so you can bet I'm always ready to sink my teeth into fresh challenges.",
        4: "It's the blend of creativity and code that gets me going. I transform concepts into eye-catching interfaces and solve tech puzzles like a pro. 🎨💡 ",
        5: "When I'm not glued to my screen, you'll probably find me watching movies. I love the idea that every line of code can be a game-changer, and I'm super stoked to see where ",
        6: "my next tech adventure takes me."
    },
    fr: {
        title: "À propos",
        0: " Je suis un créateur web passionné qui jongle avec des lignes de code pour donner vie à des expériences numériques captivantes. 🚀",
        1: "J'ai découvert ma passion en plongeant dans le monde du développement web, et depuis, je suis totalement accro.",
        2: "Mon truc ? Transformer des idées en interfaces sympas qui ont du punch. J'ai tout appris de la base en formation, et maintenant, je suis à l'aise avec des technologies comme **Next.js**, **React** et **Node.js**.",
        3: "Mais voici la meilleure partie : j'adore apprendre de nouvelles choses, alors vous pouvez parier que je suis toujours prêt à mordre dans de nouveaux défis.",
        4: "C'est l'équilibre entre la créativité et le code qui me fait vibrer. Je transforme des idées en interfaces sympas et je résous des énigmes tech comme un pro. 🎨💡 ",
        5: "Quand je ne suis pas devant mon écran, vous me trouverez probablement en train de regarder un film. J'aime l'idée que chaque ligne de code peut changer le jeu, et je suis super excité de voir où ",
        6: "ma prochaine aventure tech me mènera."
    }
} as const;

export const projectsData = {
    en: [
        {
            title: "My Resume",
            description:
                "I worked on my portfolio to have a version that suited me. I include it in my projects because it was a valuable experience.",
            tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer"],
            imageUrl: portfolioImg,
            alt: "Portfolio",
            href: ""
        },
        {
            title: "The Lucy Project",
            description:
                "Here's a website I created, while I was working at a Start-Up. It was developed as part of a convention to promote the product.",
            tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
            imageUrl: lucyImg,
            alt: "Lucy",
            href: "https://www.lucy-project.com/"
        },
        {
            title: "MKS-Trading",
            description:
                "A website for which I had to create an algorithm to determine a trader's profile. It assists them in analyzing their needs and understanding their weaknesses.",
            tags: ["React", "JavaScript", "Next.js", "Tailwind", "Redux"],
            imageUrl: tradingImg,
            alt: "Trading",
            href: "https://mks-trading.fr/"
        }
    ],
    fr: [
        {
            title: "Mon Portfolio",
            description:
                "J'ai travaillé sur mon Portfolio pour avoir une version qui me convenait. Je l'inclus dans mes projets car c'était une bonne expérience.",
            tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer"],
            imageUrl: portfolioImg,
            alt: "Portfolio",
            href: ""
        },
        {
            title: "Le Projet Lucy",
            description:
                "Voici un site que j'ai crée lorsque je travaillais en Start-Up. Il a été réaliser dans le cadre dans d'une convention pour faire connaître le produit.",
            tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
            imageUrl: lucyImg,
            alt: "Lucy",
            href: "https://www.lucy-project.com/"
        },
        {
            title: "MKS-Trading",
            description:
                "Un site pour lequel j'ai du créer un algorithme pour déterminer le profil d'un trader. Il l'aide à analyser ses besoins et à comprendre ses faiblesses.",
            tags: ["React", "JavaScript", "Next.js", "Tailwind", "Redux"],
            imageUrl: tradingImg,
            alt: "Trading",
            href: "https://mks-trading.fr/"
        }
    ]
} as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "Sequelize",
    "MongoDB",
    "Redux",
    "Express",
    "MySQL",
    "Framer Motion",
] as const;

export const experiencesData = {
    en: [
        {
            title: "Web Application Development Internship",
            location: "Paris, 16th arrondissement",
            description: "I worked as an intern at Scor SE. I was able to create an application template for the company.",
            icon: React.createElement(CgWorkAlt),
            date: "2022"
        },
        {
            title: "Full-Stack Developer",
            location: "Chartres",
            description: "I worked as a Full-Stack developer at Mayak, focusing on JavaScript technologies.",
            icon: React.createElement(CgWorkAlt),
            date: "2022 - 2023"
        },
        {
            title: "CSI Dev-Ops Diploma",
            location: "Chartres",
            description: "I obtained my diploma during that year.",
            icon: React.createElement(LuGraduationCap),
            date: "2023"
        }
    ],
    fr: [
        {
            title: "Stage de développement web applicatif",
            location: "Paris, 16ème",
            description:
                "J'ai travaillé en tant que stagiaire chez Scor SE. J'ai pu créer un template d'application pour la société.",
            icon: React.createElement(CgWorkAlt),
            date: "2022",
        },
        {
            title: "Développeur Full-Stack",
            location: "Chartres",
            description:
                "J'ai travaillé en tant que développeur FullStack chez Mayak, en me concentrant sur les technologies JavaScript.",
            icon: React.createElement(CgWorkAlt),
            date: "2022 - 2023",
        },
        {
            title: "Diplôme CSI Dev-Ops",
            location: "Chartres",
            description: "J'ai obtenu mon diplôme cette année-là.",
            icon: React.createElement(LuGraduationCap),
            date: "2023"
        },
    ]
} as const;

export const contactTexts = {
    en: {
        title: "Contact me",
        description1: "Please contact me directly at",
        description2: "or through this form.",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        buttonText: "Submit",
        toastSuccess: "Email sent successfully!",
    },
    fr: {
        title: "Contactez-moi",
        description1: "Veuillez me contacter directement à",
        description2: "ou via ce formulaire.",
        emailPlaceholder: "Votre adresse e-mail",
        messagePlaceholder: "Votre message",
        buttonText: "Envoyer",
        toastSuccess: "E-mail envoyé avec succès !",
    }
} as const;

export const footerTexts = {
    en: {
        small: "2024 Benjamin. All rights reserved.",
        about: "About this website:",
        detail: "built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting."
    },
    fr: {
        small: "2024 Benjamin. Tous droits réservés.",
        about: "À propos de ce site web :",
        detail: "réalisé avec React & Next.js, (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hébergé sur Vercel."
    }
} as const;
