import { education } from "../../../constants/global";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ParallaxLayer } from "@react-spring/parallax";
import SectionHeading from "./SectionHeading";

const Education2 = () => {
    return (
        <ParallaxLayer
            offset={4}
            id="education"
            className="container min-h-screen w-full mx-auto mt-[100px]"
        >
            <SectionHeading position="center">
                {`███████╗██████╗ ██╗   ██╗ ██████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
█████╗  ██║  ██║██║   ██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║
██╔══╝  ██║  ██║██║   ██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
███████╗██████╔╝╚██████╔╝╚██████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
            </SectionHeading>
            {/* <ul id="cards" className="w-[95vw] pb-[130px] list-none pl-0">
                {education.map((institute, index) => {
                    const paddingValue = `calc(${index + 1} * 2.5em)`;

                    return (
                        <li
                            key={index}
                            className="card min-w-[70%] sticky top-[10px] m-auto"
                            id={`card${index + 1}`}
                            style={{
                                paddingTop: paddingValue,
                            }}
                        >
                            <div
                                className={`flex flex-col justify-between items-center box-border rounded-[8px] h-[var(--cardHeight)] w-full bg-contain bg-center`}
                                style={{
                                    background: `url(${institute.bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="relative w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col rounded-[8px] p-[15px] sm:p-[20px]">
                                    <div className="flex-1" aria-hidden></div>
                                    <div className="flex items-center gap-4 w-full">
                                        <img
                                            src={institute.icon}
                                            alt=""
                                            className="w-[70px] rounded-full absolute sm:static top-4 left-2"
                                        />
                                        <div className="w-full">
                                            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-primary whitespace-nowrap">
                                                {institute.name}
                                            </h2>
                                            <p className="text-xs xs:text-sm sm:text-lg">
                                                {institute.location}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-1 md:gap-8 mt-1 overflow-hidden">
                                                {institute.officialWebsite && (
                                                    <a
                                                        href={
                                                            institute.officialWebsite
                                                        }
                                                        className="flex-center gap-1 hover:underline whitespace-nowrap text-xs xs:text-sm md:text-md cursor-pointer text-primary"
                                                    >
                                                        Official Website{" "}
                                                        <HiOutlineExternalLink />
                                                    </a>
                                                )}

                                                <span className="flex-center gap-1 hover:underline whitespace-nowrap text-xs xs:text-sm md:text-md">
                                                    <span className="text-primary font-medium">
                                                        Score:
                                                    </span>{" "}
                                                    {institute.score}
                                                </span>
                                                <p className="flex-center gap-1 hover:underline text-xs xs:text-sm md:text-md ">
                                                    <span className="text-primary font-medium">
                                                        Degree/Standard:
                                                    </span>{" "}
                                                    <span>
                                                        {institute.degree}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul> */}
        </ParallaxLayer>
    );
};

export default Education2;
