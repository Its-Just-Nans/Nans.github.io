import { writable } from "svelte/store";
import GithubIcon from "./GithubIcon.svelte";

export const menus = [
    [
        {
            ico: "👨‍💻",
            link: "/lab/css-editor",
            title: "CSS Editor",
            subtitle: null,
        },
        {
            ico: "🎒",
            link: "/lab/pack-your-bag",
            title: "Pack your bag",
            subtitle: null,
        },
        {
            ico: "🎨",
            link: "/lab/notpaint",
            title: "NotPaint",
            subtitle: null,
        },
        {
            ico: "📺",
            link: "/lab/time-based-animation",
            title: "Time based animation",
            subtitle: null,
        },
        //     {
        //         ico: null,
        //         link: "/lab/Waldo",
        //         title: "Waldo",
        //         subtitle: null,
        //     },
    ],
    [
        {
            ico: "🧮",
            link: "https://its-just-nans.github.io/function-viewer/",
            title: "Function viewer",
            subtitle: null,
        },
        {
            ico: "🌐",
            link: "https://its-just-nans.github.io/domains/",
            title: "Domains",
            subtitle: null,
        },
    ],
    [
        {
            ico: "📊",
            link: "/lab/stats",
            title: "Stats",
            subtitle: null,
        },
        {
            ico: "📦",
            link: "/lab/packages",
            title: "Packages",
            subtitle: null,
        },
        {
            ico: GithubIcon,
            link: "https://github.com/Its-Just-Nans",
            title: "Its-Just-Nans",
            subtitle: "",
        },
    ],
];

export const showMenu = writable(false);
