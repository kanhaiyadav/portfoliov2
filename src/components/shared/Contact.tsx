import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import Input from "./Input";
import { useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "@emailjs/browser";
import { GrPowerReset } from "react-icons/gr";
import { ParallaxLayer } from "@react-spring/parallax";
import Title from "./Title";
import SectionHeading from "./SectionHeading";

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);

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

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const form = useRef<HTMLFormElement>(null);
    const reset = () => {
        setValue({
            name: "",
            email: "",
            message: "",
        });
    };

    interface EmailResponse {
        text: string;
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        if (form.current) {
            emailjs
                .sendForm("service_yag3epj", "template_kt3b35t", form.current, {
                    publicKey: "wNCVxZcsSZIrBIYco",
                })
                .then(
                    () => {
                        console.log("SUCCESS!");
                        reset();
                        setLoading(false);
                        setSuccess(true);
                    },
                    (error: EmailResponse) => {
                        console.log("FAILED...", error.text);
                        setLoading(false);
                    }
                );
        }
    };

    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const onChange = (e: ChangeEvent) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <ParallaxLayer
            offset={5}
            id="contact"
            className="w-full h-fit md:h-screen overflow-hidden px-[15px] sm:px-[40px] lg:px-[80px] xl:px-[150px] flex flex-col flex-between gap-4 py-4"
        >
            <SectionHeading position="center">
                {` ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗    ███╗   ███╗███████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝    ████╗ ████║██╔════╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║       ██╔████╔██║█████╗  
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║       ██║╚██╔╝██║██╔══╝  
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║       ██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝       ╚═╝     ╚═╝╚══════╝
`}
            </SectionHeading>
            <div className="md:h-[80%] h-auto w-[95%] sm:w-auto flex flex-col-reverse md:flex-row justify-between sm:px-[20px] lg:px-[50px] xl:px-[100px] md:gap-[100px]">
                <div className="h-full w-full sm:w-[400px] flex flex-col gap-[20px]">
                    <img
                        src="/me.png"
                        alt=""
                        className="w-[250px] m-auto my-[10px] outline outline-4 outline-offset-4 outline-gray-500 rounded-full border-4 border-gray-500 md:block hidden"
                        onClick={() => {
                            setSubmitting(!submitting);
                        }}
                    />
                    <div className="text-center">
                        <h1 className="hidden md:block text-3xl font-semibold text-gray-500 dark:text-gray-400">
                            My Socials
                        </h1>
                        <hr className="hidden md:block  w-[100px] mb-8 mt-4 bg-gray-500 dark:bg-gray-400 h-1 mx-auto" />
                        <div className="flex items-center md:justify-between justify-around w-full">
                            <a
                                href="https://www.linkedin.com/in/kanhaiyadav/"
                                target="_blank"
                                aria-label="Linkedin logo"
                                className="bg-gray-500 dark:bg-gray-400 p-2 md:p-3 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <FaLinkedinIn className="text-xl sm:text-2xl lg:text-3xl text-background" />
                            </a>
                            <a
                                href="https://github.com/kanhaiyadav"
                                target="_blank"
                                aria-label="Github logo"
                                className="bg-gray-500 dark:bg-gray-400 p-2 md:p-3 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <LuGithub className="text-xl sm:text-2xl lg:text-3xl text-background" />
                            </a>
                            <a
                                href="https://x.com/Kanhaiyadav04"
                                target="_blank"
                                aria-label="Twitter logo"
                                className="bg-gray-500 dark:bg-gray-400 p-2 md:p-3 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <RiTwitterXLine className="text-xl sm:text-2xl lg:text-3xl text-background" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61563497158287"
                                target="_blank"
                                aria-label="Facebook logo"
                                className="bg-gray-500 dark:bg-gray-400 p-2 md:p-3 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <FaFacebookF className="text-xl sm:text-2xl lg:text-3xl text-background" />
                            </a>
                        </div>
                    </div>
                    <div className="m-auto">
                        <div className="flex-center gap-4 mb-2">
                            <MdOutlineMail className="text-lg sm:text-xl md:text-3xl text-gray-500" />
                            <span className="text-gray-400 text-sm sm:text-lg md:text-xl">
                                Email:
                            </span>
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                <a href="mailto:kanhaiyadav.me@gmail.com">
                                    kanhaiyadav.me@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className="flex-center gap-4 mb-2">
                            <FaPhoneAlt className="text-md sm:text-xl md:text-2xl text-gray-500" />
                            <span className="text-gray-400 text-sm sm:text-lg md:text-xl">
                                Phone:
                            </span>
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                7439466535
                            </span>
                        </div>
                        <div className="flex-center gap-4">
                            <FaRegAddressCard className="text-lg sm:text-xl md:text-3xl text-gray-500" />
                            <span className="text-gray-400 text-sm sm:text-lg md:text-xl">
                                Address:
                            </span>
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                Howrah, West Bengal, India
                            </span>
                        </div>
                    </div>
                </div>
                {!(submitted && !loading) ? (
                    <motion.form
                        ref={form}
                        key="form"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                        exit={{
                            y: -50,
                            opacity: 0,
                            transition: { duration: 0.5 },
                        }}
                        action=""
                        className="max-w-[300px] max-h-[600px] w-full flex md:hidden mb-8 m-auto flex-col gap-2"
                        onSubmit={sendEmail}
                    >
                        <Input
                            type="text"
                            name="name"
                            value={value.name}
                            placeholder="Name"
                            onChange={onChange}
                            disabled={loading}
                        />
                        <Input
                            disabled={loading}
                            type="email"
                            name="email"
                            value={value.email}
                            placeholder="Email"
                            onChange={onChange}
                        />
                        <textarea
                            rows={5}
                            placeholder="Your message..."
                            className={`p-2 md:p-3 px-3 md:px-4 max-h-[120px] md:max-h-[200px] text-md sm:text-lg md:text-xl dark:text-gray-800 rounded-lg bg-gray-300 dark:bg-gray-400 focus:bg-white dark:focus:bg-gray-300 border outline-none border-b-4 focus:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-600 `}
                            name="message"
                            value={value.message}
                            onChange={onChange}
                            disabled={loading}
                        />
                        <Button
                            className={`text-lg ${
                                loading
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => {
                                setSubmitting(true);
                            }}
                            disabled={loading}
                        >
                            {loading ? (
                                <span>Sending message...</span>
                            ) : (
                                <span>Send Message</span>
                            )}
                        </Button>
                    </motion.form>
                ) : (
                    <motion.div
                        className="w-full text-center mt-[-50px] block md:hidden mb-[50px]"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                        exit={{
                            y: -50,
                            opacity: 0,
                            transition: { duration: 0.5 },
                        }}
                    >
                        {success ? (
                            <>
                                <div className="m-auto w-[100px] h-[100px] animate-imgBounce mt-[80px]">
                                    <img
                                        src="/check.png"
                                        alt="success"
                                        className="w-full h-full"
                                    />
                                </div>
                                <h2 className="text-green-500 text-lg mt-[20px]">
                                    Your message has been sent
                                    <br />{" "}
                                    <p
                                        className="flex m-auto w-fit items-center gap-4"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setSuccess(false);
                                        }}
                                    >
                                        <span className="">successfully!</span>{" "}
                                        <GrPowerReset className="text-foreground cursor-pointer" />
                                    </p>
                                </h2>
                            </>
                        ) : (
                            <>
                                <div className="m-auto w-[100px] h-[100px] mt-[80px] animate-imgBounce">
                                    <img
                                        src="/error.png"
                                        alt="success"
                                        className="w-full h-full"
                                    />
                                </div>
                                <h2 className="text-red-500 text-xl mt-[20px]">
                                    An error has occured!
                                    <br />
                                    <p
                                        className="flex m-auto w-fit items-center gap-4"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setSuccess(false);
                                        }}
                                    >
                                        <span className="">successfully!</span>{" "}
                                        <GrPowerReset className="text-foreground cursor-pointer" />
                                    </p>
                                </h2>
                            </>
                        )}
                    </motion.div>
                )}

                <div className="flex-1 relative flex-grow-0 hidden md:flex-between w-full md:w-fit h-auto md:h-full border bg-primary/10 rounded-xl">
                    <div className="absolute w-full h-full top-0 left-0 flex justify-center mt-[30px] sm:mt-[40px] lg:mt-[70px]">
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loader"
                                    initial={{ y: 100, opacity: 0, scale: 0.5 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        transition: { duration: 1 },
                                    }}
                                    exit={{
                                        y: -150,
                                        opacity: 0,
                                        scale: 0.8,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <DotLottieReact
                                        src="/rocket.lottie"
                                        loop
                                        autoplay
                                        className="h-[350px]"
                                        renderConfig={{
                                            autoResize: true,
                                            devicePixelRatio: 2,
                                        }}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 1 },
                                    }}
                                    exit={{
                                        y: -50,
                                        opacity: 0,
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    {!submitted ? (
                                        <form
                                            onSubmit={sendEmail}
                                            key="form"
                                            className="max-w-[280px] md:max-w-[300px] max-h-[600px] w-full flex flex-col gap-4"
                                        >
                                            <Input
                                                name="name"
                                                value={value.name}
                                                onChange={onChange}
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <Input
                                                name="email"
                                                value={value.email}
                                                onChange={onChange}
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <textarea
                                                name="message"
                                                value={value.message}
                                                onChange={onChange}
                                                rows={5}
                                                placeholder="Your message..."
                                                className={`p-2 md:p-3 px-3 md:px-4 max-h-[120px] md:max-h-[200px] text-md sm:text-lg md:text-xl dark:text-gray-800 rounded-lg bg-gray-300 dark:bg-gray-400 focus:bg-white dark:focus:bg-gray-300 border outline-none border-b-4 focus:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-600 `}
                                            />
                                            <Button
                                                className="text-lg text-white"
                                                onClick={() => {
                                                    setSubmitting(true);
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </form>
                                    ) : (
                                        <div className="w-full text-center mt-[-50px]">
                                            {success ? (
                                                <>
                                                    <div className="m-auto w-[120px] h-[120px] mt-10 animate-imgBounce">
                                                        <img
                                                            src="/check.png"
                                                            alt="success"
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                    <h2 className="text-green-500 text-xl mt-[20px]">
                                                        Your message has been
                                                        <br />{" "}
                                                        <p
                                                            className="flex m-auto w-fit items-center gap-4"
                                                            onClick={() => {
                                                                setSubmitted(
                                                                    false
                                                                );
                                                                setSuccess(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <span className="">
                                                                successfully!
                                                            </span>{" "}
                                                            <GrPowerReset className="text-foreground cursor-pointer" />
                                                        </p>
                                                    </h2>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="m-auto w-[120px] h-[120px] mt-10 animate-imgBounce">
                                                        <img
                                                            src="/error.png"
                                                            alt="error"
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                    <h2 className="text-red-500 text-xl mt-[20px]">
                                                        An error has occured!,
                                                        <br />{" "}
                                                        <p
                                                            className="flex m-auto w-fit items-center gap-4"
                                                            onClick={() => {
                                                                setSubmitted(
                                                                    false
                                                                );
                                                                setSuccess(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <span className="">
                                                                try again later
                                                            </span>{" "}
                                                            <GrPowerReset className="text-foreground cursor-pointer" />
                                                        </p>
                                                    </h2>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="w-full md:w-auto h-auto md:h-full aspect-[2/3]">
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
                </div>
                <img
                    src="/me.png"
                    alt=""
                    className="w-[250px] block md:hidden my-6 m-auto outline outline-4 outline-offset-4 outline-gray-500 rounded-full border-4 border-gray-500"
                    onClick={() => {
                        setSubmitting(!submitting);
                    }}
                />
            </div>
        </ParallaxLayer>
    );
};

export default Contact;
