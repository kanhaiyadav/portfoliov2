import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import Title from "../Title";

const Skills = () => {

    return (
        <section
            id="skills" className="w-full h-dvh px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-4 py-4">
            <div className="m-auto flex mb-4">
                <SectionHeading position="right">
                    {`███████╗ ██╗  ██╗ ██╗ ██╗      ██╗      ███████╗
██╔════╝ ██║ ██╔╝ ██║ ██║      ██║      ██╔════╝
███████╗ █████╔╝  ██║ ██║      ██║      ███████╗
╚════██║ ██╔═██╗  ██║ ██║      ██║      ╚════██║
███████║ ██║  ██╗ ██║ ███████╗ ███████╗ ███████║
╚══════╝ ╚═╝  ╚═╝ ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝
`}
                </SectionHeading>
                <span className="text-[80px] leading-[70px] sm:text-[150px] sm:leading-[100px] md:text-[180px] md:leading-[70px] font-stylish text-secondary">
                    &
                </span>
                <SectionHeading position="right">
                    {`███████╗ ████████╗  █████╗  ████████╗ ███████╗
██╔════╝ ╚══██╔══╝ ██╔══██╗ ╚══██╔══╝ ██╔════╝
███████╗    ██║    ███████║    ██║    ███████╗
╚════██║    ██║    ██╔══██║    ██║    ╚════██║
███████║    ██║    ██║  ██║    ██║    ███████║
╚══════╝    ╚═╝    ╚═╝  ╚═╝    ╚═╝    ╚══════╝
`}
                </SectionHeading>
            </div>
            <SkillDirectory />
            <div className='flex flex-col items-center gap-4'>
                {/* <Title title='My Github & Leetcode stats' big className='mt-[250px] ' /> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="glass mx-auto w-full p-4"
                >
                    <img
                        src="https://github-profile-trophy.vercel.app/?username=kanhaiyadav&theme=onedark&no-frame=true&no-bg=true"
                        alt="GitHub Trophy"
                        className="w-full h-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'
                >
                    <div className="glass flex-1 p-1 w-full">
                        <img src="https://github-readme-stats.vercel.app/api?username=kanhaiyadav&show_icons=true&text_color=ffffff&icon_color=ff3c44&bg_color=00000000&hide_border=true&theme=monokai&title_color=01fea1" className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                    <div className="glass flex-1 h-full flex items-center justify-center w-full">
                        <img src="https://streak-stats.demolab.com/?user=kanhaiyadav&theme=dark&background=00000000&hide_border=true&stroke=01fea1&currStreakLabel=01fea1&ring=01fea1&fire=ff3c44&sideLabels=01fea1"  className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'
                >
                    <div className="glass flex-1 h-full w-full">
                        <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.languages.indepth.svg" className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                    <div className="glass flex-1 p-1 w-full">
                        <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.lines.svg"  className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'
                >
                    <div className="glass flex-1 p-2 w-full">
                        <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics-habits.svg" className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                    <div className="glass flex-1 p-4 w-full">
                        <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.leetcode.svg"  className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-none lg:w-auto"/>
                    </div>
                </motion.div>

                <div className='flex items-center justify-center glass w-full'>
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics-isocalendar.svg" className="p-4  md:h-[350px]"/>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='glass w-full p-2 sm:p-4 flex items-center justify-center'
                >
                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=kanhaiyadav&bg_color=00000000&color=01fea1&line=ff3c44&hide_border=true"/>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
