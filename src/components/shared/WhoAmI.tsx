import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import Title from './Title'

const WhoAmI = () => {
    return (
        <>
            {/* <div className="w-full h-[200px] bg-background absolute top-0 left-0 translate-y-[-97.5%]"></div> */}
            <div className="flex items-end mt-[100px]">
                <SectionHeading position="center">
                    {`██╗    ██╗ ██╗  ██╗  ██████╗       █████╗  ███╗   ███╗     ██╗
██║    ██║ ██║  ██║ ██╔═══██╗     ██╔══██╗ ████╗ ████║     ██║
██║ █╗ ██║ ███████║ ██║   ██║     ███████║ ██╔████╔██║     ██║
██║███╗██║ ██╔══██║ ██║   ██║     ██╔══██║ ██║╚██╔╝██║     ██║
╚███╔███╔╝ ██║  ██║ ╚██████╔╝     ██║  ██║ ██║ ╚═╝ ██║     ██║
 ╚══╝╚══╝  ╚═╝  ╚═╝  ╚═════╝      ╚═╝  ╚═╝ ╚═╝     ╚═╝     ╚═╝
`}
                </SectionHeading>
                <span className="text-[180px] leading-[180px] font-sans text-secondary">
                    ?
                </span>
            </div>
            <div className="flex-1 px-[200px] py-[50px] text-3xl text-center">
                <p>Just your friendly neighborhood developer, <span className="text-[#ffff00]">Kanhaiya Yadav</span></p>
                <p>Student at <a href="https://heritageit.edu/" target="_blank" className="text-[#ffe100] hover:underline underline-offset-2">Heritage Institute of Technology</a>, pursuing bachelor's degree in Computer Science with specialization in Data Science.</p>
                <p>Web development is my playground, JavaScript is my frenemy, and chess is my forever obsession.</p>

                <Title title='My Github & Leetcode stats' big className='mt-[250px] ' />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    src="https://github-profile-trophy.vercel.app/?username=kanhaiyadav&theme=onedark&no-frame=true&no-bg=true"
                    className="glass mt-[50px] mx-auto p-4"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex gap-[50px] items-center justify-center mt-[50px]'
                >
                    <img src="https://github-readme-stats.vercel.app/api?username=kanhaiyadav&show_icons=true&text_color=ffffff&icon_color=ff3c44&bg_color=00000000&hide_border=true&theme=monokai&title_color=01fea1" className="glass" />
                    <img src="https://streak-stats.demolab.com/?user=kanhaiyadav&theme=dark&background=00000000&hide_border=true&stroke=01fea1&currStreakLabel=01fea1&ring=01fea1&fire=ff3c44&sideLabels=01fea1" className="glass" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex gap-[50px] items-center justify-center mt-[50px]'
                >
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.languages.indepth.svg" className="glass p-4" />
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.lines.svg" className="glass p-3" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='flex gap-[50px] items-center justify-center mt-[50px]'
                >
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics-habits.svg" className="glass p-5" />
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics.plugin.leetcode.svg" className="glass p-3" />
                </motion.div>

                <div className='flex items-center justify-center mt-[50px] glass'>
                    <img src="https://raw.githubusercontent.com/kanhaiyadav/kanhaiyadav/main/metrics-isocalendar.svg" className="p-4  h-[350px]" />
                </div>
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    src="https://github-readme-activity-graph.vercel.app/graph?username=kanhaiyadav&bg_color=00000000&color=01fea1&line=ff3c44&hide_border=true"
                    className="glass mt-[50px]"
                />
            </div>
        </>
    )
}

export default WhoAmI