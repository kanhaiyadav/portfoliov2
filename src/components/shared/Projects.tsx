import { motion } from "framer-motion";
import { projects, technologies } from "../../../constants/global";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projects[0].title);
    const [page, setPage] = useState(1);
    const nofPorojects = projects.length;
    const pages = Math.ceil(nofPorojects / 9);
    const [project, setProject] = useState(projects[0]);

    const pathVariants = {
        hidden: {
            strokeDasharray: 1200, // Total length of the motion.path
            strokeDashoffset: 1200, // Initially hidden
            fill: "rgba(0,0,0,0)", // Transparent fill
        },
        visible: {
            strokeDashoffset: 0, // Fully drawn
            transition: {
                strokeDashoffset: {
                    duration: 3, // Animation duration
                    ease: "easeInOut",
                },
                fill: {
                    delay: 2, // Delays fill animation until stroke is completed
                    duration: 0.5, // Fill transition duration
                    ease: "easeInOut",
                },
            },
            fill: "hsl(var(--primary))", // Final fill color
        },
    };

    return (
        <section
            id="projects"
            className="w-full mt-[50px] min-h-screen md:min-h-min md:h-screen  px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-4 py-4"
        >
            <motion.div
                className="flex gap-8 items-center m-auto md:m-0"
                initial={{ x: -100, opacity: 0 }} // Start off-screen to the left and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate to its original position and fully visible
                viewport={{ once: true }} // Trigger animation only once when it comes into view
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }} // Smooth tween transition over 0.8 seconds
            >
                <hr className="w-[150px] border-2 border-primary hidden md:block" />
                <motion.svg
                    className={`w-[210px] sm:w-[240px] md:w-[350px] xl:w-[400px] my-4 md:my-6 xl:my-6`}
                    width="754"
                    viewBox="0 0 754 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.path
                        d="M679.029 97.2969V98.0632L679.65 98.5123C685.02 102.396 690.671 105.284 696.599 107.164C702.516 109.04 708.669 109.977 715.052 109.977C722.478 109.977 729 108.755 734.576 106.261C740.179 103.776 744.58 100.31 747.711 95.8368L747.715 95.8304C750.852 91.2992 752.412 86.1226 752.412 80.3516C752.412 72.254 749.454 65.4118 743.573 59.9232C737.787 54.4339 729.361 50.3846 718.44 47.6777C712.731 46.2387 708.222 44.7221 704.877 43.1415C701.603 41.5253 699.359 39.7268 698.005 37.8031C696.697 35.8774 696.021 33.6036 696.021 30.9219C696.021 27.8089 696.795 25.1813 698.293 22.9756C699.811 20.7414 701.929 18.9903 704.703 17.7335L704.712 17.7295L704.72 17.7254C707.487 16.4285 710.732 15.7578 714.49 15.7578C719.021 15.7578 722.728 16.3084 725.656 17.3574C728.448 18.3575 730.77 19.5725 732.648 20.9852L734.876 35.0241L735.076 36.2891H736.357H747.115H748.615V34.7891V14.3281V13.6441L748.099 13.1956C744.379 9.96546 739.675 7.26116 734.026 5.05835C728.332 2.77228 721.811 1.64844 714.49 1.64844C707.559 1.64844 701.423 2.90022 696.121 5.45319C690.845 7.99344 686.67 11.4876 683.647 15.9475L683.647 15.9475L683.64 15.957C680.654 20.4358 679.17 25.5098 679.17 31.1328C679.17 36.4529 680.479 41.2353 683.128 45.4332L683.133 45.4421L683.139 45.4508C685.823 49.5769 689.696 53.0582 694.69 55.9188L694.697 55.923L694.705 55.9272C699.732 58.7307 705.824 60.9534 712.954 62.617L712.961 62.6186C718.849 63.9632 723.393 65.5204 726.65 67.2605L726.661 67.2663L726.672 67.2719C729.988 68.9749 732.228 70.9014 733.54 72.9925C734.873 75.1179 735.56 77.6008 735.56 80.4922C735.56 83.5961 734.768 86.247 733.221 88.5037C731.67 90.7676 729.401 92.5949 726.333 93.9545C723.339 95.2552 719.596 95.9375 715.052 95.9375C711.053 95.9375 707.351 95.4377 703.938 94.4498C700.733 93.522 697.752 92.2427 694.99 90.6136L692.772 75.2157L692.586 73.9297H691.287H680.529H679.029V75.4297V97.2969Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M599.826 107V108.5H601.326H638.1H639.6V107V98.1406V96.8763L638.354 96.6623L628.139 94.9076V16.6016H648.548L650.468 29.525L650.658 30.8047H651.951H662.217H663.717V29.3047V4.625V3.125H662.217H577.139H575.639V4.625V29.3047V30.8047H577.139H587.545H588.845L589.03 29.5178L590.884 16.6016H611.287V94.9076L601.072 96.6623L599.826 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M502.877 102.98L502.881 102.982C510.07 107.677 518.951 109.977 529.436 109.977C535.225 109.977 540.853 109.307 546.317 107.965L546.329 107.962C551.791 106.572 556.533 104.644 560.533 102.157L561.241 101.716V100.883V78.6641V77.1641H559.741H548.912H547.566L547.421 78.5024L545.956 92.025C544.154 93.0307 541.909 93.888 539.192 94.5773C536.173 95.3432 533.087 95.7266 529.928 95.7266C523.129 95.7266 517.45 94.1882 512.817 91.1881C508.224 88.1843 504.678 83.8179 502.201 78.0118C499.767 72.1475 498.522 65.0199 498.522 56.5859V54.9688C498.522 47.1956 499.695 40.4047 502.003 34.5671C504.304 28.7475 507.659 24.2541 512.045 21.0198L512.045 21.0198L512.053 21.014C516.395 17.7684 521.738 16.1094 528.17 16.1094C530.861 16.1094 533.325 16.3147 535.569 16.7185L535.574 16.7194C537.874 17.1253 539.923 17.7072 541.729 18.4559L541.729 18.456L541.74 18.4607C543.37 19.1205 544.812 19.9094 546.073 20.8221L547.489 36.3317L547.613 37.6953H548.983H560.022H561.522V36.1953V14.1172V13.4407L561.015 12.9929C557.243 9.66163 552.528 6.95138 546.909 4.83819C541.236 2.70462 535.007 1.64844 528.241 1.64844C518.617 1.64844 510.254 3.96168 503.221 8.65036C496.226 13.3136 490.87 19.6985 487.152 27.7612C483.438 35.7706 481.6 44.8975 481.6 55.1094V56.5859C481.6 66.6968 483.341 75.7892 486.858 83.8352L486.861 83.8421C490.441 91.9209 495.782 98.3143 502.877 102.98Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M385.522 107V108.5H387.022H464.999H466.499V107V82.4609V80.9609H464.999H453.96H452.615L452.469 82.2977L451.068 95.0938H413.835V61.0391H450.093H451.593V59.5391V48.6406V47.1406H450.093H413.835V16.8125H448.82L450.219 29.4L450.367 30.7344H451.71H462.819H464.319V29.2344V4.625V3.125H462.819H387.022H385.522V4.625V13.5547V14.819L386.768 15.033L396.983 16.7877V94.9076L386.768 96.6623L385.522 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M313.98 106.449L313.985 106.451C318.85 108.81 324.233 109.977 330.108 109.977C336.948 109.977 342.796 108.676 347.576 105.989C352.379 103.314 356.014 99.5324 358.447 94.6687C360.915 89.8299 362.124 84.2466 362.124 77.9609V16.7877L372.339 15.033L373.585 14.819V13.5547V4.625V3.125H372.085H333.132H331.632V4.625V13.6953V15.0077L332.933 15.182L345.272 16.8358V77.9609C345.272 81.5978 344.689 84.7729 343.558 87.5137L343.553 87.525C342.489 90.1647 340.848 92.2179 338.625 93.7302C336.452 95.1626 333.579 95.9375 329.897 95.9375C324.673 95.9375 320.852 94.4217 318.205 91.5703C315.602 88.7175 314.072 84.081 313.889 77.3576L313.849 75.8984H312.39H299.101H298.019L297.678 76.9241L297.537 77.346L297.45 77.607L297.461 77.8819C297.75 84.9084 299.319 90.8682 302.249 95.6858L302.255 95.6953C305.209 100.471 309.121 104.069 313.98 106.449Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M210.423 94.9205L210.428 94.9271L210.433 94.9336C214.274 99.6983 218.926 103.402 224.379 106.031C229.858 108.672 236.015 109.977 242.82 109.977C249.986 109.977 256.355 108.677 261.888 106.033C267.394 103.402 272.009 99.6919 275.716 94.9118C279.455 90.104 282.254 84.4439 284.128 77.9554C286.001 71.4723 286.929 64.3455 286.929 56.5859V55.1094C286.929 47.3969 286.001 40.2946 284.129 33.8131C282.255 27.2791 279.457 21.5949 275.717 16.7858C272.011 11.959 267.396 8.22393 261.888 5.59191C256.355 2.94754 249.986 1.64844 242.82 1.64844C236.015 1.64844 229.858 2.95256 224.379 5.59416C218.923 8.22497 214.269 11.9545 210.428 16.7675L210.428 16.7675L210.423 16.7748C206.639 21.5778 203.746 27.2554 201.73 33.784L201.73 33.7839L201.728 33.7907C199.758 40.2792 198.781 47.3894 198.781 55.1094V56.5859C198.781 64.3518 199.757 71.4856 201.728 77.975L201.731 77.9847C203.748 84.4667 206.64 90.1194 210.423 94.9205ZM258.336 90.7115L258.329 90.7166C254.489 93.8234 249.367 95.4453 242.82 95.4453C236.973 95.4453 232.111 93.846 228.145 90.7094C224.131 87.4883 221.043 83.0008 218.918 77.169C216.786 71.2716 215.703 64.419 215.703 56.5859V54.9688C215.703 47.1826 216.786 40.4031 218.915 34.603L218.917 34.5994C221.043 28.7642 224.133 24.2747 228.149 21.0529C232.116 17.8708 236.976 16.25 242.82 16.25C249.262 16.25 254.364 17.8897 258.258 21.0478L258.258 21.0478L258.265 21.0541C262.218 24.2158 265.163 28.6612 267.057 34.48L267.057 34.48L267.062 34.4933C269.014 40.3054 270.007 47.1222 270.007 54.9688V56.5859C270.007 64.4812 269.037 71.3736 267.128 77.2856C265.233 83.1044 262.288 87.5498 258.336 90.7115Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M97.7809 107V108.5H99.2809H136.054H137.554V107V98.1406V96.8763L136.308 96.6623L126.093 94.9076V62.7695L145.339 62.4153L165.481 107.611L165.878 108.5H166.851H183.937H185.437V107V97.9297V96.6734L184.2 96.453L177.869 95.3246L161.652 60.237C162.853 59.8581 164.011 59.4285 165.125 58.9477L165.136 58.9427C170.164 56.7245 174.084 53.4446 176.834 49.0965C179.646 44.7254 181.008 39.3893 181.008 33.1719C181.008 26.8568 179.621 21.4075 176.767 16.9005C173.914 12.3966 169.751 9.00133 164.355 6.69423C159.004 4.33949 152.505 3.19531 144.914 3.19531H99.2809H97.7809V4.69531V13.5547V14.819L99.027 15.033L109.242 16.7877V94.9076L99.027 96.6623L97.7809 96.8763V98.1406V107ZM143.508 48.8984H126.093V17.0234H144.914C151.809 17.0234 156.591 18.5585 159.572 21.3325C162.59 24.1408 164.156 27.9802 164.156 33.0312C164.156 38.3738 162.516 42.218 159.418 44.8202C156.304 47.4358 151.111 48.8984 143.508 48.8984Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M2.19531 107V108.5H3.69531H40.4688H41.9688V107V98.1406V96.8763L40.7227 96.6623L30.5078 94.9076V67.4375H50.7344C58.2154 67.4375 64.6882 66.1431 70.0985 63.4871C75.4961 60.8374 79.6619 57.0815 82.5409 52.2171C85.417 47.3574 86.8281 41.6942 86.8281 35.2812C86.8281 28.9129 85.416 23.2737 82.5409 18.4157C79.6628 13.5528 75.4986 9.7977 70.1035 7.14812C64.6916 4.44334 58.2167 3.125 50.7344 3.125H15.1562H3.69531H2.19531V4.625V13.5547V14.819L3.44136 15.033L13.6562 16.7877V94.9076L3.44136 96.6623L2.19531 96.8763V98.1406V107ZM65.1723 48.5361L65.1718 48.5367C62.1281 51.8306 57.4162 53.6094 50.7344 53.6094H30.5078V17.0234H50.7344C57.4054 17.0234 62.1129 18.8428 65.1592 22.223L65.1592 22.223L65.166 22.2305C68.3554 25.7216 69.9766 30.0827 69.9766 35.4219C69.9766 40.7612 68.3555 45.0948 65.1723 48.5361Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                </motion.svg>
            </motion.div>
            <div className="h-full w-full flex flex-col lg:flex-row gap-4 pb-[10px]">
                <div className=" bg-primary/5 rounded-xl border overflow-hidden flex-col-between py-4 w-full lg:w-[75%]">
                    <div className="flex gap-2 lg:gap-4 flex-wrap p-2 md:p-4 justify-evenly h-[300px] md:h-auto sm:max-h-screen overflow-auto">
                        {projects
                            .slice((page - 1) * 9, page * 9)
                            .map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    active={project.title === activeProject}
                                    setActiveIndex={setActiveProject}
                                    setProject={setProject}
                                />
                            ))}
                    </div>
                    <div className="mt-4">
                        {pages > 1 &&
                            Array.from({ length: pages }, (_, i) => (
                                <button
                                    key={i}
                                    className={`px-2 py-1 sm:px-4 sm:py-2 text-sm mx-1 rounded-sm outline-primary outline outline-2 ${
                                        page === i + 1
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-primary/10 text-primary hover:bg-primary/30"
                                    }`}
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                    </div>
                </div>
                <Card className="overflow-hidden no-scrollbar h-full border rounded-xl bg-primary/5 relative">
                    <div className="h-full aspect-[2/3]">
                        <svg
                            id="visual"
                            className="h-full rounded-xl"
                            viewBox="0 0 600 900"
                            // width="600"
                            // height="900"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <path className="dark:fill-primary/60 fill-primary/15">
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
            M0 650L12.5 663.2C25 676.3 50 702.7 75 708.3C100 714 125 699 150 699.8C175 700.7 200 717.3 225 707.8C250 698.3 275 662.7 300 650.8C325 639 350 651 375 667.7C400 684.3 425 705.7 450 706.2C475 706.7 500 686.3 525 686C550 685.7 575 705.3 587.5 715.2L600 725L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 724L12.5 712.3C25 700.7 50 677.3 75 660C100 642.7 125 631.3 150 632.2C175 633 200 646 225 663.7C250 681.3 275 703.7 300 698.7C325 693.7 350 661.3 375 646.2C400 631 425 633 450 641.2C475 649.3 500 663.7 525 668.2C550 672.7 575 667.3 587.5 664.7L600 662L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 676L12.5 682.7C25 689.3 50 702.7 75 698.8C100 695 125 674 150 671.5C175 669 200 685 225 691.3C250 697.7 275 694.3 300 687C325 679.7 350 668.3 375 656.3C400 644.3 425 631.7 450 640.8C475 650 500 681 525 680.2C550 679.3 575 646.7 587.5 630.3L600 614L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 650L12.5 663.2C25 676.3 50 702.7 75 708.3C100 714 125 699 150 699.8C175 700.7 200 717.3 225 707.8C250 698.3 275 662.7 300 650.8C325 639 350 651 375 667.7C400 684.3 425 705.7 450 706.2C475 706.7 500 686.3 525 686C550 685.7 575 705.3 587.5 715.2L600 725L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
        "
                                ></animate>
                            </path>
                            <path className=" dark:fill-black/10 fill-primary/20">
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
            M0 685L12.5 699.2C25 713.3 50 741.7 75 740.8C100 740 125 710 150 694.2C175 678.3 200 676.7 225 689.8C250 703 275 731 300 729.2C325 727.3 350 695.7 375 688.2C400 680.7 425 697.3 450 714C475 730.7 500 747.3 525 742C550 736.7 575 709.3 587.5 695.7L600 682L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 662L12.5 679.3C25 696.7 50 731.3 75 736.5C100 741.7 125 717.3 150 717.7C175 718 200 743 225 745.7C250 748.3 275 728.7 300 712C325 695.3 350 681.7 375 684.5C400 687.3 425 706.7 450 712C475 717.3 500 708.7 525 704C550 699.3 575 698.7 587.5 698.3L600 698L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 658L12.5 672.3C25 686.7 50 715.3 75 729.5C100 743.7 125 743.3 150 736.2C175 729 200 715 225 703.5C250 692 275 683 300 677.5C325 672 350 670 375 679.5C400 689 425 710 450 715.8C475 721.7 500 712.3 525 705.2C550 698 575 693 587.5 690.5L600 688L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 685L12.5 699.2C25 713.3 50 741.7 75 740.8C100 740 125 710 150 694.2C175 678.3 200 676.7 225 689.8C250 703 275 731 300 729.2C325 727.3 350 695.7 375 688.2C400 680.7 425 697.3 450 714C475 730.7 500 747.3 525 742C550 736.7 575 709.3 587.5 695.7L600 682L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
        "
                                ></animate>
                            </path>
                            <path className=" dark:fill-black/10 fill-primary/25">
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
            M0 719L12.5 717.3C25 715.7 50 712.3 75 724.2C100 736 125 763 150 766.5C175 770 200 750 225 746.2C250 742.3 275 754.7 300 754C325 753.3 350 739.7 375 734.7C400 729.7 425 733.3 450 730.8C475 728.3 500 719.7 525 727.2C550 734.7 575 758.3 587.5 770.2L600 782L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 723L12.5 725.5C25 728 50 733 75 745.8C100 758.7 125 779.3 150 780.5C175 781.7 200 763.3 225 763C250 762.7 275 780.3 300 776.8C325 773.3 350 748.7 375 740C400 731.3 425 738.7 450 747.2C475 755.7 500 765.3 525 768.7C550 772 575 769 587.5 767.5L600 766L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 801L12.5 790.7C25 780.3 50 759.7 75 755.8C100 752 125 765 150 770.3C175 775.7 200 773.3 225 769.3C250 765.3 275 759.7 300 764.7C325 769.7 350 785.3 375 781C400 776.7 425 752.3 450 747.3C475 742.3 500 756.7 525 766.8C550 777 575 783 587.5 786L600 789L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 719L12.5 717.3C25 715.7 50 712.3 75 724.2C100 736 125 763 150 766.5C175 770 200 750 225 746.2C250 742.3 275 754.7 300 754C325 753.3 350 739.7 375 734.7C400 729.7 425 733.3 450 730.8C475 728.3 500 719.7 525 727.2C550 734.7 575 758.3 587.5 770.2L600 782L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
        "
                                ></animate>
                            </path>
                            <path className=" dark:fill-black/15 fill-primary/25">
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
            M0 759L12.5 759.7C25 760.3 50 761.7 75 769C100 776.3 125 789.7 150 801.3C175 813 200 823 225 820C250 817 275 801 300 797.5C325 794 350 803 375 801.3C400 799.7 425 787.3 450 781.3C475 775.3 500 775.7 525 774.7C550 773.7 575 771.3 587.5 770.2L600 769L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 799L12.5 801.7C25 804.3 50 809.7 75 805.7C100 801.7 125 788.3 150 780.2C175 772 200 769 225 776.8C250 784.7 275 803.3 300 805.7C325 808 350 794 375 789C400 784 425 788 450 794.3C475 800.7 500 809.3 525 803.8C550 798.3 575 778.7 587.5 768.8L600 759L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 806L12.5 798C25 790 50 774 75 776.8C100 779.7 125 801.3 150 801.5C175 801.7 200 780.3 225 775.3C250 770.3 275 781.7 300 782.5C325 783.3 350 773.7 375 768.8C400 764 425 764 450 774.8C475 785.7 500 807.3 525 807.3C550 807.3 575 785.7 587.5 774.8L600 764L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 759L12.5 759.7C25 760.3 50 761.7 75 769C100 776.3 125 789.7 150 801.3C175 813 200 823 225 820C250 817 275 801 300 797.5C325 794 350 803 375 801.3C400 799.7 425 787.3 450 781.3C475 775.3 500 775.7 525 774.7C550 773.7 575 771.3 587.5 770.2L600 769L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
        "
                                ></animate>
                            </path>
                            <path className=" dark:fill-black/10 fill-primary/25">
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
            M0 837L12.5 836.3C25 835.7 50 834.3 75 831.2C100 828 125 823 150 825.5C175 828 200 838 225 842.2C250 846.3 275 844.7 300 838.7C325 832.7 350 822.3 375 822.8C400 823.3 425 834.7 450 836.7C475 838.7 500 831.3 525 832.8C550 834.3 575 844.7 587.5 849.8L600 855L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 840L12.5 842.5C25 845 50 850 75 848.5C100 847 125 839 150 832.8C175 826.7 200 822.3 225 826C250 829.7 275 841.3 300 848.8C325 856.3 350 859.7 375 853.8C400 848 425 833 450 830.2C475 827.3 500 836.7 525 840.3C550 844 575 842 587.5 841L600 840L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 840L12.5 839.2C25 838.3 50 836.7 75 834.3C100 832 125 829 150 827.2C175 825.3 200 824.7 225 831.3C250 838 275 852 300 849.8C325 847.7 350 829.3 375 821C400 812.7 425 814.3 450 819.8C475 825.3 500 834.7 525 834.7C550 834.7 575 825.3 587.5 820.7L600 816L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
            M0 837L12.5 836.3C25 835.7 50 834.3 75 831.2C100 828 125 823 150 825.5C175 828 200 838 225 842.2C250 846.3 275 844.7 300 838.7C325 832.7 350 822.3 375 822.8C400 823.3 425 834.7 450 836.7C475 838.7 500 831.3 525 832.8C550 834.3 575 844.7 587.5 849.8L600 855L600 901L587.5 901C575 901 550 901 525 901C500 901 475 901 450 901C425 901 400 901 375 901C350 901 325 901 300 901C275 901 250 901 225 901C200 901 175 901 150 901C125 901 100 901 75 901C50 901 25 901 12.5 901L0 901Z;
        "
                                ></animate>
                            </path>
                        </svg>
                    </div>
                    <div className="absolute h-auto md:h-full w-full left-0 top-0">
                        <CardHeader>
                            <CardTitle className="text-lg md:text-2xl">
                                Project details
                            </CardTitle>
                            <CardDescription className="text-sm md:text-md">
                                neccessary details about the select project.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="flex-center gap-8">
                                <div>
                                    <h2 className="text-md md:text-lg">Name</h2>
                                    <p className="dark:text-[#a8a29e] text-[#6b7280] text-xs md:text-sm">
                                        {project.title}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-md md:text-lg">
                                        Time-span
                                    </h2>
                                    <p className="dark:text-[#a8a29e] text-[#6b7280] text-xs md:text-sm">
                                        {project.timeSpan}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-md md:text-lg">
                                    Description
                                </h2>
                                <p className="dark:text-[#a8a29e] text-[#6b7280] text-xs md:text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex-center gap-8">
                                <a
                                    href={project.source}
                                    className="text-primary flex-center gap-1 hover:underline whitespace-nowrap text-sm md:text-md"
                                >
                                    Source Code <HiOutlineExternalLink />
                                </a>
                                <a
                                    href={project.preview}
                                    className="text-primary flex-center gap-1 hover:underline whitespace-nowrap text-sm md:text-md"
                                >
                                    Production Deploy <HiOutlineExternalLink />
                                </a>
                            </div>
                            <div>
                                <h2 className="mb-1 text-md md:text-lg">
                                    Tech Stack
                                </h2>
                                <div className="flex gap-1 flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <a
                                            href={
                                                technologies[tech].documentation
                                            }
                                            target="_blank"
                                            key={index}
                                            className="bg-primary/10 hover:ring-1 text-xs md:text-sm hover:ring-primary text-primary px-2 rounded-md"
                                        >
                                            {technologies[tech].name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="mt-1 mb-2 text-md md:text-lg">
                                    Video preview
                                </h2>
                                <div className="">
                                    <Dialog>
                                        <DialogTrigger className="inline-flex p-3 px-4 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent outline outline-2 outline-primary text-primary hover:bg-primary hover:text-black h-10 w-[60px]">
                                            <FaPlay />
                                        </DialogTrigger>
                                        <DialogContent className="max-w-screen w-fit">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Video preview
                                                </DialogTitle>
                                                <DialogDescription>
                                                    this vides shows the project
                                                    in action.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <iframe
                                                className="rounded-xl h-[70vh] aspect-[16/9] border"
                                                src={project.youtube}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Projects;
