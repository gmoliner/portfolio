// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/www.astro-lane.avenuelabs.co/", // Always put "/" at the end of the URL
    author: "Gaël Moliner | Développeur front-end",
    desc: "A personal portfolio landing template for developers and designers. Made by Avenue Labs.",
    title: "Gaël Moliner | Développeur front-end",
    ogImage: "images/astro-lane.png",
    keywords: "portfolio front-end angular nodejs react development",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/gmoliner",
        icon: "ph:github-logo-duotone",
        title: `Consultez mon profil Github !`,
        active: true
    },
    {
        name: "Facebook",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: false
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gaelmoliner/",
        icon: "ph:linkedin-logo-duotone",
        title: `Consultez mon profil Linkedin !`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:gael.moliner@protonmail.com",
        title: `Envoyez-moi un email !`,
        icon: "ph:mail-logo-duotone",
        active: false
    },
    {
        name: "Twitter",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: false
    },
    {
        name: "YouTube",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    },
    {
        name: "Snapchat",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Snapchat`,
        active: false
    },
    {
        name: "CodePen",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on CodePen`,
        active: false
    },
    {
        name: "Discord",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    }
];
