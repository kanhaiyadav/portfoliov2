import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import { ParallaxLayer } from "@react-spring/parallax";
import SectionHeading from "../SectionHeading";

const Skills = () => {

    return (
        <ParallaxLayer
            speed={0.5}
            offset={2}
            id="skills" className="w-full min-h-screen px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-4 py-4">
            <SectionHeading position="right">
                {`███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
`}
            </SectionHeading>
            <SkillDirectory />
        </ParallaxLayer>
    );
};

export default Skills;
