import type PagesType from "~/types/pages";
import AboutIcon from "~/assets/svg/AboutIcon";
import BlogIcon from "~/assets/svg/BlogIcon";
import ProjectsIcon from "~/assets/svg/ProjectsIcon";
import ServiceIcon from "~/assets/svg/ServiceIcon";

const pages : PagesType[] = [
    {
        name: "about",
        icon: AboutIcon
    },
    {
        name: "service",
        icon: ServiceIcon
    },
    {
        name: "projects",
        icon: ProjectsIcon
    },
    {
        name: "blog",
        icon: BlogIcon
    },
]

export { pages }