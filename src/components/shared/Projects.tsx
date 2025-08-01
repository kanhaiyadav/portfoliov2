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
import type { ProjectType } from "@/types/index";
import SectionHeading from "./SectionHeading";
import { ParallaxLayer } from "@react-spring/parallax";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projects[0].title);
    const [page, setPage] = useState(1);
    const nofPorojects = projects.length;
    const pages = Math.ceil(nofPorojects / 9);
    const [project, setProject] = useState<ProjectType>(projects[0]);

    return (
        <ParallaxLayer
            speed={0.5}
            offset={3}
            id="projects"
            className="w-full mt-[50px] min-h-screen md:min-h-min md:h-screen  px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-4 py-4"
        >
            <SectionHeading>
                {`██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
`}
            </SectionHeading>
            <div className="h-full w-full flex flex-col md:flex-row gap-4 pb-[10px]">
                <div className=" bg-primary/5 rounded-xl border overflow-hidden flex-col-between py-4 w-full lg:w-[75%]">
                    <div className="flex gap-2 lg:gap-4 flex-wrap p-2 md:p-4 justify-evenly h-[300px] md:h-auto sm:max-h-screen overflow-auto no-scrollbar">
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
                                    onClick={() => {
                                        setPage(i + 1);
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}
                    </div>
                </div>
                <Card
                    id="project-details"
                    className="overflow-hidden no-scrollbar h-full border rounded-xl bg-primary/5 relative"
                >
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
                                    target="_blank"
                                >
                                    Source Code <HiOutlineExternalLink />
                                </a>
                                {project.package ? (
                                    <a
                                        href={project.npm}
                                        className="text-primary flex-center gap-1 hover:underline whitespace-nowrap text-sm md:text-md"
                                        target="_blank"
                                    >
                                        NPM Package <HiOutlineExternalLink />
                                    </a>
                                ) : (
                                    <a
                                        href={project.preview}
                                        className="text-primary flex-center gap-1 hover:underline whitespace-nowrap text-sm md:text-md"
                                    >
                                        Production Deploy{" "}
                                        <HiOutlineExternalLink />
                                    </a>
                                )}
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
                                        <DialogContent className="max-w-screen w-fit p-2 sm:p-4">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Video preview
                                                </DialogTitle>
                                                <DialogDescription>
                                                    this video shows the project
                                                    in action.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <iframe
                                                className="rounded-xl sm:h-[40vh] lg:h-[50vh] xl:h-[70vh] aspect-[16/9] border"
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
        </ParallaxLayer>
    );
};

export default Projects;
