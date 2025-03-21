import { motion } from "framer-motion";
import { education } from "../../../constants/global";
import { HiOutlineExternalLink } from "react-icons/hi";

const pathVariants = {
    hidden: {
        strokeDasharray: 1200, // Total length of the motion.path
        strokeDashoffset: 1200, // Initially hidden
        fill: "rgba(0,0,0,0.1)", // Transparent fill
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

const Education2 = () => {
    return (
        <section
            id="education"
            className="container min-h-screen w-full mx-auto flex-col-center mt-[100px] flex-col-center"
        >
            <motion.div
                className="flex gap-8 items-center heading"
                initial={{ x: -100, opacity: 0 }} // Start off-screen to the left and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate to its original position and fully visible
                viewport={{ once: true }} // Trigger animation only once when it comes into view
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }} // Smooth tween transition over 0.8 seconds
            >
                <hr className="w-[150px] border-2 border-primary hidden md:block" />
                <motion.svg
                    className={`w-[200px] sm:w-[300px] md:w-[400px] xl:w-[450px] mt-8 md:my-6 xl:my-8`}
                    width="860"
                    viewBox="0 0 860 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.path
                        d="M754.927 107V108.5H756.427H793.201H794.701V107V98.1406V96.857L793.432 96.6586L782.115 94.8883V31.2269L831.314 107.811L831.756 108.5H832.576H845.232H846.732V107V16.7877L856.947 15.033L858.193 14.819V13.5547V4.625V3.125H856.693H845.232H819.919H818.419V4.625V13.5547V14.8383L819.688 15.0367L831.005 16.807V79.8988L783.15 3.82628L782.709 3.125H781.88H767.888H756.427H754.927V4.625V13.5547V14.819L756.173 15.033L766.388 16.7877V94.9076L756.173 96.6623L754.927 96.8763V98.1406V107Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M666.273 94.9205L666.278 94.9271L666.283 94.9336C670.124 99.6983 674.776 103.402 680.229 106.031C685.708 108.672 691.865 109.977 698.67 109.977C705.836 109.977 712.205 108.677 717.738 106.033C723.244 103.402 727.859 99.6919 731.566 94.9118C735.305 90.104 738.103 84.4439 739.978 77.9554C741.851 71.4723 742.779 64.3455 742.779 56.5859V55.1094C742.779 47.3969 741.851 40.2946 739.979 33.8131C738.105 27.2791 735.307 21.5949 731.567 16.7858C727.861 11.959 723.246 8.22393 717.738 5.59191C712.205 2.94754 705.836 1.64844 698.67 1.64844C691.865 1.64844 685.708 2.95256 680.229 5.59416C674.773 8.22497 670.119 11.9545 666.278 16.7675L666.278 16.7675L666.273 16.7748C662.489 21.5778 659.596 27.2554 657.58 33.784L657.58 33.7839L657.578 33.7907C655.608 40.2792 654.631 47.3894 654.631 55.1094V56.5859C654.631 64.3518 655.607 71.4856 657.578 77.975L657.581 77.9847C659.598 84.4667 662.49 90.1194 666.273 94.9205ZM714.186 90.7115L714.179 90.7166C710.339 93.8234 705.217 95.4453 698.67 95.4453C692.823 95.4453 687.961 93.846 683.995 90.7094C679.981 87.4883 676.893 83.0008 674.768 77.169C672.636 71.2716 671.552 64.419 671.552 56.5859V54.9688C671.552 47.1826 672.636 40.4031 674.765 34.603L674.767 34.5994C676.893 28.7642 679.983 24.2747 683.999 21.0529C687.966 17.8708 692.826 16.25 698.67 16.25C705.112 16.25 710.214 17.8897 714.108 21.0478L714.108 21.0478L714.115 21.0541C718.068 24.2158 721.013 28.6612 722.907 34.48L722.907 34.48L722.912 34.4933C724.864 40.3054 725.857 47.1222 725.857 54.9688V56.5859C725.857 64.4812 724.887 71.3736 722.978 77.2856C721.083 83.1044 718.138 87.5498 714.186 90.7115Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M602.85 107V108.5H604.35H641.123H642.623V107V98.1406V96.8763L641.377 96.6623L631.162 94.9076V16.7877L641.377 15.033L642.623 14.819V13.5547V4.625V3.125H641.123H604.35H602.85V4.625V13.5547V14.819L604.096 15.033L614.311 16.7877V94.9076L604.096 96.6623L602.85 96.8763V98.1406V107Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M524.912 107V108.5H526.412H563.186H564.686V107V98.1406V96.8763L563.44 96.6623L553.225 94.9076V16.6016H573.634L575.554 29.525L575.744 30.8047H577.037H587.303H588.803V29.3047V4.625V3.125H587.303H502.225H500.725V4.625V29.3047V30.8047H502.225H512.631H513.931L514.116 29.5178L515.97 16.6016H536.373V94.9076L526.158 96.6623L524.912 96.8763V98.1406V107Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M403.593 107V108.5H405.093H434.413H435.913V107V98.1406V96.8775L434.668 96.6625L428.71 95.6334L434.684 79.4609H473.576L479.368 95.6303L473.392 96.6625L472.147 96.8775V98.1406V107V108.5H473.647H503.038H504.538V107V98.1406V96.8362L503.246 96.6552L496.601 95.7236L461.76 4.09189L461.393 3.125H460.358H448.475H447.448L447.076 4.08354L411.606 95.7216L404.886 96.6549L403.593 96.8346V98.1406V107ZM454.308 26.22L468.276 64.8594H440.079L454.308 26.22Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M330.55 102.98L330.554 102.982C337.742 107.677 346.624 109.977 357.108 109.977C362.897 109.977 368.525 109.307 373.99 107.965L374.002 107.962C379.463 106.572 384.206 104.644 388.205 102.157L388.913 101.716V100.883V78.6641V77.1641H387.413H376.585H375.239L375.094 78.5024L373.628 92.025C371.827 93.0307 369.581 93.888 366.865 94.5773C363.846 95.3432 360.759 95.7266 357.601 95.7266C350.802 95.7266 345.123 94.1882 340.489 91.1881C335.896 88.1843 332.35 83.8179 329.874 78.0118C327.439 72.1475 326.194 65.0199 326.194 56.5859V54.9688C326.194 47.1956 327.367 40.4047 329.675 34.5671C331.976 28.7475 335.331 24.2541 339.717 21.0198L339.717 21.0198L339.725 21.014C344.067 17.7684 349.411 16.1094 355.843 16.1094C358.533 16.1094 360.998 16.3147 363.241 16.7185L363.246 16.7194C365.547 17.1253 367.595 17.7072 369.401 18.4559L369.401 18.456L369.413 18.4607C371.043 19.1205 372.484 19.9094 373.745 20.8221L375.162 36.3317L375.286 37.6953H376.655H387.694H389.194V36.1953V14.1172V13.4407L388.687 12.9929C384.915 9.66163 380.201 6.95138 374.582 4.83819C368.908 2.70462 362.68 1.64844 355.913 1.64844C346.289 1.64844 337.927 3.96168 330.894 8.65036C323.899 13.3136 318.543 19.6985 314.825 27.7612C311.11 35.7706 309.272 44.8975 309.272 55.1094V56.5859C309.272 66.6968 311.014 75.7892 314.531 83.8352L314.534 83.8421C318.114 91.9209 323.454 98.3143 330.55 102.98Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M213.7 93.3044L213.703 93.3096C217.041 98.66 221.612 102.784 227.383 105.67C233.15 108.553 239.666 109.977 246.898 109.977C254.617 109.977 261.428 108.634 267.29 105.898L267.299 105.894C273.177 103.102 277.763 99.0167 281.016 93.6462C284.328 88.2071 285.945 81.642 285.945 74.0234V16.7877L296.16 15.033L297.406 14.819V13.5547V4.625V3.125H295.906H259.132H257.632V4.625V13.5547V14.819L258.878 15.033L269.093 16.7877V74.0234C269.093 78.9889 268.123 83.0239 266.273 86.2073L266.269 86.2139L266.265 86.2205C264.445 89.4276 261.904 91.8162 258.616 93.4169L258.609 93.4204C255.333 95.0369 251.512 95.8672 247.109 95.8672C242.758 95.8672 238.989 95.0389 235.763 93.4274C232.566 91.7841 230.064 89.3719 228.237 86.1569C226.472 82.9668 225.546 78.9465 225.546 74.0234V16.7877L235.761 15.033L237.007 14.819V13.5547V4.625V3.125H235.507H198.734H197.234V4.625V13.5547V14.819L198.48 15.033L208.695 16.7877V74.0234C208.695 81.4223 210.341 87.8707 213.7 93.3044Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M98.3434 107V108.5H99.8434H140.625C149.922 108.5 158.047 106.256 164.935 101.713L164.937 101.712C171.831 97.1482 177.14 90.9581 180.861 83.1784L180.862 83.1752C184.579 75.3562 186.422 66.6008 186.422 56.9375V54.7578C186.422 44.8582 184.508 35.9989 180.64 28.2153C176.776 20.4386 171.347 14.2976 164.356 9.83092C157.38 5.34331 149.215 3.125 139.922 3.125H111.304H99.8434H98.3434V4.625V13.5547V14.819L99.5895 15.033L109.804 16.7877V94.9076L99.5895 96.6623L98.3434 96.8763V98.1406V107ZM165.893 76.1084L165.89 76.1137C163.498 81.8015 160.089 86.3165 155.677 89.7052C151.326 92.9998 146.1 94.6719 139.922 94.6719H126.656V17.0234H139.922C146.111 17.0234 151.344 18.6547 155.695 21.8635C160.095 25.1076 163.499 29.5444 165.89 35.23L165.893 35.2367L165.896 35.2433C168.334 40.886 169.57 47.3347 169.57 54.6172V56.9375C169.57 63.978 168.336 70.3613 165.893 76.1084Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M2.19531 107V108.5H3.69531H81.6719H83.1719V107V82.4609V80.9609H81.6719H70.6328H69.288L69.1417 82.2977L67.7412 95.0938H30.5078V61.0391H66.7656H68.2656V59.5391V48.6406V47.1406H66.7656H30.5078V16.8125H65.4934L66.892 29.4L67.0402 30.7344H68.3828H79.4922H80.9922V29.2344V4.625V3.125H79.4922H3.69531H2.19531V4.625V13.5547V14.819L3.44136 15.033L13.6562 16.7877V94.9076L3.44136 96.6623L2.19531 96.8763V98.1406V107Z"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                </motion.svg>
                <hr className="w-[150px] border-2 border-primary hidden md:block" />
            </motion.div>
            <ul id="cards" className="w-[95vw] pb-[130px] list-none pl-0">
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
            </ul>
        </section>
    );
};

export default Education2;
