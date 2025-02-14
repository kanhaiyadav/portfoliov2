import { ImHome } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";

export const navItems = [
    {
        name: "Home",
        href: "#home",
        icon: <ImHome />,
    },
    {
        name: "Achievements",
        href: "#achievements",
        icon: <GrAchievement />,
    },
    {
        name: "Education",
        href: "#education",
        icon: <FaGraduationCap />,
    },
    {
        name: "Skills",
        href: "#skills",
        icon: <BsTools />,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: <GrProjects />,
    },
    {
        name: "Contact me",
        href: "#contact",
        icon: <RiSendPlaneFill />,
    },
];