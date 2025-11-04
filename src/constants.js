import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/react.png';
import nodejsLogo from './assets/node.png';
import expressjsLogo from './assets/express.jpeg';
import mysqlLogo from './assets/sql.png';
import mongodbLogo from './assets/mongo.png';
import cppLogo from './assets/cpp.png';
import pythonLogo from './assets/python.jpg';
import phpLogo from './assets/php.png';
import vueLogo from './assets/vue.png';
import githubLogo from './assets/github.png';
import gitlabLogo from './assets/gitlab.png';
import vscodeLogo from './assets/vs.png';
import figmaLogo from './assets/figma.png';

import gsocLogo from './assets/gsoc.png';
import apolloLogo from './assets/apollo.png';
import lfxLogo from './assets/lfx.png';
import nitkLogo from './assets/nitk.jpg';
import jnvLogo from './assets/jnv.jpg';

// --------------------- SKILLS ---------------------
export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Vue JS', logo: vueLogo },
            { name: 'Tailwind CSS', logo: cssLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C++', logo: cppLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'PHP', logo: phpLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Figma', logo: figmaLogo },
            { name: 'Postman', logo: vscodeLogo },
        ],
    },
];

// --------------------- EXPERIENCE ---------------------
export const experiences = [
    {
        id: 0,
        img: gsocLogo,
        role: "Google Summer of Code 2025 Contributor",
        company: "Drupal Association",
        date: "June 2025 - September 2025",
        desc: "Built the Entity Display Manager module in Drupal using PHP, Symfony, and Twig for customizable entity display management. Improved site builder workflows by simplifying field rendering.",
        skills: ["Drupal", "PHP", "Symfony", "Twig", "Open Source"],
    },
    {
        id: 1,
        img: apolloLogo,
        role: "Summer Analyst - Technology",
        company: "Apollo Global Management",
        date: "May 2025 - July 2025",
        desc: "Designed a Vue.js reporting tool for the Olympus Platform, replacing static Excel sheets with real-time fund reporting. Built an AI-powered support bot automating 40% of fund manager queries.",
        skills: ["Vue.js", "Python", "Automation", "NLP", "Data Visualization"],
    },
    {
        id: 2,
        img: lfxLogo,
        role: "LFX Mentee",
        company: "Linux Foundation - Hyperledger Fabric",
        date: "June 2024 - November 2024",
        desc: "Developed a VS Code extension to debug Hyperledger Fabric chaincode. Enabled step-through execution and runtime analysis of smart contracts for blockchain developers.",
        skills: ["Hyperledger Fabric", "Go", "JavaScript", "VS Code API", "Blockchain"],
    },
];

// --------------------- EDUCATION ---------------------
export const education = [
    {
        id: 0,
        img: nitkLogo,
        school: "National Institute of Technology Karnataka (NITK)",
        date: "2022 - 2026",
        grade: "GPA: 7.94",
        desc: "Final-year B.Tech student in Information Technology. Active in open-source, entrepreneurship, and leadership activities like E-Summit, NCC, and Inter NIT Chess.",
        degree: "Bachelor of Technology - Information Technology",
    },
    {
        id: 1,
        img: jnvLogo,
        school: "Jawahar Navodaya Vidyalaya, Hassan",
        date: "2019 - 2021",
        grade: "XII: 87.8% | X: 91%",
        desc: "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics.",
        degree: "CBSE (XII) - PCM",
    },
];

// --------------------- PROJECTS ---------------------
export const projects = [
    {
        id: 0,
        title: "Entity Display Manager - Drupal",
        description:
            "Module built under Google Summer of Code 2025 for Drupal Association. Allows custom entity display configuration using PHP, Symfony, and Twig.",
        image: gitlabLogo,
        tags: ["Drupal", "PHP", "Twig", "Symfony", "Open Source"],
        github: "https://git.drupalcode.org/project/entity_display_module",
        webapp: "",
    },
    {
        id: 1,
        title: "Smart Finance AI",
        description:
            "AI-driven financial assistant that predicts expenses, provides insights, and automates goal tracking. Built using the MERN stack and integrated with OpenAI APIs.",
        image: githubLogo,
        tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
        github: "https://github.com/urgetolearn/smart-finance-ai",
        webapp: "https://smart-finance-ai-syhs-atr5kxzdh-chinmayis-projects-33acb529.vercel.app/",
    },
    {
        id: 2,
        title: "Chaincode Debugger for Hyperledger Fabric",
        description:
            "VS Code extension for debugging Hyperledger Fabric chaincode, enabling developers to test and invoke smart contracts in real-time.",
        image: githubLogo,
        tags: ["Go", "JavaScript", "VS Code API", "Hyperledger Fabric"],
        github: "https://github.com/urgetolearn/fabric-debugger",
        webapp: "",
    },
    {
        id: 3,
        title: "NITK Summer of Code Portal",
        description:
            "Full-stack open-source contribution portal for managing mentor-mentee pairings, submissions, and evaluations at NITK.",
        image: githubLogo,
        tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
        github: "https://github.com/urgetolearn/nitk-soc-portal",
        webapp: "",
    },
];

// --------------------- EXTRAS ---------------------
export const extras = [
    {
        title: "Speaker at Girls Leading Tech",
        description:
            "Invited to speak on open-source journeys, mentorship, and community building as a student contributor in tech.",
    },
];
