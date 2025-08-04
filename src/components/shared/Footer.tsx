import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export const navItems = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Achievements",
        href: "#achievements",
    },
    {
        name: "Education",
        href: "#education",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Contact me",
        href: "#contact",
    },
];

const Footer = () => {
    return (
        <section id="footer"
            className="w-full border-none shadow-none mt-[50px] md:mt-0">
            <svg
                id="visual"
                className="w-full"
                viewBox="0 0 960 150"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
            >
                <path
                    d="M0 100L12.3 96.8C24.7 93.7 49.3 87.3 74 75.8C98.7 64.3 123.3 47.7 148 49.2C172.7 50.7 197.3 70.3 221.8 79.8C246.3 89.3 270.7 88.7 295.2 81.5C319.7 74.3 344.3 60.7 369 53.5C393.7 46.3 418.3 45.7 443 55.3C467.7 65 492.3 85 517 86.5C541.7 88 566.3 71 591 60.2C615.7 49.3 640.3 44.7 664.8 49.8C689.3 55 713.7 70 738.2 77.8C762.7 85.7 787.3 86.3 812 82.7C836.7 79 861.3 71 886 65.3C910.7 59.7 935.3 56.3 947.7 54.7L960 53L960 151L947.7 151C935.3 151 910.7 151 886 151C861.3 151 836.7 151 812 151C787.3 151 762.7 151 738.2 151C713.7 151 689.3 151 664.8 151C640.3 151 615.7 151 591 151C566.3 151 541.7 151 517 151C492.3 151 467.7 151 443 151C418.3 151 393.7 151 369 151C344.3 151 319.7 151 295.2 151C270.7 151 246.3 151 221.8 151C197.3 151 172.7 151 148 151C123.3 151 98.7 151 74 151C49.3 151 24.7 151 12.3 151L0 151Z"
                    className="fill-primary/30"
                ></path>
                <path
                    d="M0 116L12.3 114.8C24.7 113.7 49.3 111.3 74 111.3C98.7 111.3 123.3 113.7 148 112C172.7 110.3 197.3 104.7 221.8 99.7C246.3 94.7 270.7 90.3 295.2 89.3C319.7 88.3 344.3 90.7 369 92.5C393.7 94.3 418.3 95.7 443 99.3C467.7 103 492.3 109 517 106.3C541.7 103.7 566.3 92.3 591 89.5C615.7 86.7 640.3 92.3 664.8 89.3C689.3 86.3 713.7 74.7 738.2 68.2C762.7 61.7 787.3 60.3 812 66.7C836.7 73 861.3 87 886 92.8C910.7 98.7 935.3 96.3 947.7 95.2L960 94L960 151L947.7 151C935.3 151 910.7 151 886 151C861.3 151 836.7 151 812 151C787.3 151 762.7 151 738.2 151C713.7 151 689.3 151 664.8 151C640.3 151 615.7 151 591 151C566.3 151 541.7 151 517 151C492.3 151 467.7 151 443 151C418.3 151 393.7 151 369 151C344.3 151 319.7 151 295.2 151C270.7 151 246.3 151 221.8 151C197.3 151 172.7 151 148 151C123.3 151 98.7 151 74 151C49.3 151 24.7 151 12.3 151L0 151Z"
                    className="fill-primary/30"
                ></path>
                <path
                    d="M0 102L12.3 105.7C24.7 109.3 49.3 116.7 74 114.5C98.7 112.3 123.3 100.7 148 99C172.7 97.3 197.3 105.7 221.8 110.2C246.3 114.7 270.7 115.3 295.2 113C319.7 110.7 344.3 105.3 369 108.8C393.7 112.3 418.3 124.7 443 129C467.7 133.3 492.3 129.7 517 123.3C541.7 117 566.3 108 591 105C615.7 102 640.3 105 664.8 103C689.3 101 713.7 94 738.2 92.2C762.7 90.3 787.3 93.7 812 101.5C836.7 109.3 861.3 121.7 886 124C910.7 126.3 935.3 118.7 947.7 114.8L960 111L960 151L947.7 151C935.3 151 910.7 151 886 151C861.3 151 836.7 151 812 151C787.3 151 762.7 151 738.2 151C713.7 151 689.3 151 664.8 151C640.3 151 615.7 151 591 151C566.3 151 541.7 151 517 151C492.3 151 467.7 151 443 151C418.3 151 393.7 151 369 151C344.3 151 319.7 151 295.2 151C270.7 151 246.3 151 221.8 151C197.3 151 172.7 151 148 151C123.3 151 98.7 151 74 151C49.3 151 24.7 151 12.3 151L0 151Z"
                    className="fill-primary/30"
                ></path>
            </svg>
            <div className="flex flex-col gap-2 justify-center items-center h-48 bg-primary/65 text-gray-300 font-light">
                <div className="flex flex-wrap gap-4 mb-4">
                    <a
                        href="https://www.linkedin.com/in/kanhaiyadav/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61563497158287"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a
                        href="https://github.com/kanhaiyadav"
                        target="_blank"
                        aria-label="Github"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://x.com/Kanhaiyadav04"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <RiTwitterXLine className="text-2xl" />
                    </a>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-sm md:text-lg hover:underline whitespace-nowrap"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <p className="flex gap-1">
                    <span className="text-xs xs:text-sm sm:text-xl">
                        Check out previous version of my portfolio
                    </span>{" "}
                    <a
                        href="https://kanhaiyadav.netlify.app"
                        className="flex items-center font-bold hover:underline text-xs xs:text-sm sm:text-lg"
                    >
                        <span>here</span>
                        <FiExternalLink />
                    </a>
                </p>
                <p className="text-xs xs:text-sm sm:text-lg">
                    ©2025 Kanhaiya Yadav &nbsp;|&nbsp; All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
