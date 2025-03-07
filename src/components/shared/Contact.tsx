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
        <section
            id="contact"
            className="w-full h-fit md:h-screen overflow-hidden px-[15px] sm:px-[40px] lg:px-[80px] xl:px-[150px] flex flex-col flex-between gap-4 py-4"
        >
            <motion.div
                className="flex gap-8 items-center m-auto heading"
                initial={{ y: 50, opacity: 0 }} // Start off-screen to the left and invisible
                whileInView={{ y: 0, opacity: 1 }} // Animate to its original position and fully visible
                viewport={{ once: true }} // Trigger animation only once when it comes into view
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
            >
                <hr className="w-[150px] border-2 border-primary sm:block hidden" />
                <motion.svg
                    className={`w-[250px] sm:w-[300px] md:w-[480px]`}
                    width="969"
                    viewBox="0 0 969 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.path
                        d="M886.372 107V108.5H887.872H965.849H967.349V107V82.4609V80.9609H965.849H954.81H953.465L953.319 82.2977L951.918 95.0938H914.685V61.0391H950.943H952.443V59.5391V48.6406V47.1406H950.943H914.685V16.8125H949.67L951.069 29.4L951.217 30.7344H952.56H963.669H965.169V29.2344V4.625V3.125H963.669H887.872H886.372V4.625V13.5547V14.819L887.618 15.033L897.833 16.7877V94.9076L887.618 96.6623L886.372 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M743.607 107V108.5H745.107H781.88H783.38V107V98.1406V96.8604L782.116 96.6593L771.005 94.8916V66.5V66.4914L771.005 66.4828L770.589 30.2358L802.37 103.938L802.761 104.844H803.747H812.958H813.959L814.343 103.92L845.068 30.1293V66.5V94.8963L834.233 96.6601L832.974 96.8651V98.1406V107V108.5H834.474H871.247H872.747V107V98.1406V96.8763L871.501 96.6623L861.287 94.9076V16.7877L871.501 15.033L872.747 14.819V13.5547V4.625V3.125H871.247H840.38H839.375L838.993 4.05495L808.228 78.9331L776.441 4.03895L776.053 3.125H775.06H756.568H745.107H743.607V4.625V13.5547V14.819L744.853 15.033L755.068 16.7877V94.9076L744.853 96.6623L743.607 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M624.576 107V108.5H626.076H662.85H664.35V107V98.1406V96.8763L663.104 96.6623L652.889 94.9076V16.6016H673.298L675.218 29.525L675.408 30.8047H676.701H686.967H688.467V29.3047V4.625V3.125H686.967H601.889H600.389V4.625V29.3047V30.8047H601.889H612.295H613.595L613.78 29.5178L615.634 16.6016H636.037V94.9076L625.822 96.6623L624.576 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M527.627 102.98L527.631 102.982C534.82 107.677 543.701 109.977 554.186 109.977C559.975 109.977 565.603 109.307 571.067 107.965L571.079 107.962C576.541 106.572 581.283 104.644 585.283 102.157L585.991 101.716V100.883V78.6641V77.1641H584.491H573.662H572.316L572.171 78.5024L570.706 92.025C568.904 93.0307 566.659 93.888 563.942 94.5773C560.923 95.3432 557.837 95.7266 554.678 95.7266C547.879 95.7266 542.2 94.1882 537.567 91.1881C532.974 88.1843 529.428 83.8179 526.951 78.0118C524.517 72.1475 523.272 65.0199 523.272 56.5859V54.9688C523.272 47.1956 524.445 40.4047 526.753 34.5671C529.053 28.7475 532.409 24.2541 536.795 21.0198L536.795 21.0198L536.803 21.014C541.145 17.7684 546.488 16.1094 552.92 16.1094C555.611 16.1094 558.075 16.3147 560.319 16.7185L560.324 16.7194C562.624 17.1253 564.673 17.7072 566.479 18.4559L566.479 18.456L566.49 18.4607C568.12 19.1205 569.562 19.9094 570.823 20.8221L572.239 36.3317L572.363 37.6953H573.733H584.772H586.272V36.1953V14.1172V13.4407L585.765 12.9929C581.993 9.66163 577.278 6.95138 571.659 4.83819C565.986 2.70462 559.757 1.64844 552.991 1.64844C543.367 1.64844 535.004 3.96168 527.971 8.65036C520.976 13.3136 515.62 19.6985 511.902 27.7612C508.188 35.7706 506.35 44.8975 506.35 55.1094V56.5859C506.35 66.6968 508.091 75.7892 511.608 83.8352L511.611 83.8421C515.191 91.9209 520.532 98.3143 527.627 102.98Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M398.389 107V108.5H399.889H429.21H430.71V107V98.1406V96.8775L429.465 96.6625L423.507 95.6334L429.481 79.4609H468.372L474.164 95.6303L468.189 96.6625L466.944 96.8775V98.1406V107V108.5H468.444H497.835H499.335V107V98.1406V96.8362L498.043 96.6552L491.398 95.7236L456.557 4.09189L456.189 3.125H455.155H443.272H442.244L441.873 4.08354L406.403 95.7216L399.683 96.6549L398.389 96.8346V98.1406V107ZM449.105 26.22L463.072 64.8594H434.876L449.105 26.22Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M338.101 107V108.5H339.601H376.374H377.874V107V98.1406V96.8763L376.628 96.6623L366.413 94.9076V16.6016H386.823L388.742 29.525L388.932 30.8047H390.226H400.491H401.991V29.3047V4.625V3.125H400.491H315.413H313.913V4.625V29.3047V30.8047H315.413H325.819H327.119L327.304 29.5178L329.158 16.6016H349.562V94.9076L339.347 96.6623L338.101 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M196.742 107V108.5H198.242H235.015H236.515V107V98.1406V96.857L235.247 96.6586L223.929 94.8883V31.2269L273.128 107.811L273.571 108.5H274.39H287.046H288.546V107V16.7877L298.761 15.033L300.007 14.819V13.5547V4.625V3.125H298.507H287.046H261.734H260.234V4.625V13.5547V14.8383L261.502 15.0367L272.82 16.807V79.8988L224.964 3.82628L224.523 3.125H223.695H209.703H198.242H196.742V4.625V13.5547V14.819L197.988 15.033L208.203 16.7877V94.9076L197.988 96.6623L196.742 96.8763V98.1406V107Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M108.087 94.9205L108.092 94.9271L108.098 94.9336C111.938 99.6983 116.591 103.402 122.044 106.031C127.522 108.672 133.679 109.977 140.484 109.977C147.65 109.977 154.019 108.677 159.553 106.033C165.058 103.402 169.673 99.6919 173.38 94.9118C177.119 90.104 179.918 84.4439 181.792 77.9554C183.665 71.4723 184.593 64.3455 184.593 56.5859V55.1094C184.593 47.3969 183.665 40.2946 181.793 33.8131C179.919 27.2791 177.121 21.5949 173.382 16.7858C169.675 11.959 165.06 8.22393 159.553 5.59191C154.019 2.94754 147.65 1.64844 140.484 1.64844C133.679 1.64844 127.522 2.95256 122.044 5.59416C116.587 8.22497 111.934 11.9545 108.093 16.7675L108.093 16.7675L108.087 16.7748C104.303 21.5778 101.411 27.2554 99.3946 33.784L99.3946 33.7839L99.3926 33.7907C97.4219 40.2792 96.445 47.3894 96.445 55.1094V56.5859C96.445 64.3518 97.4217 71.4856 99.3925 77.975L99.3955 77.9847C101.412 84.4667 104.304 90.1194 108.087 94.9205ZM156 90.7115L155.994 90.7166C152.153 93.8234 147.031 95.4453 140.484 95.4453C134.637 95.4453 129.775 93.846 125.809 90.7094C121.795 87.4883 118.707 83.0008 116.582 77.169C114.45 71.2716 113.367 64.419 113.367 56.5859V54.9688C113.367 47.1826 114.45 40.4031 116.58 34.603L116.581 34.5994C118.707 28.7642 121.797 24.2747 125.813 21.0529C129.78 17.8708 134.64 16.25 140.484 16.25C146.926 16.25 152.028 17.8897 155.922 21.0478L155.922 21.0478L155.93 21.0541C159.882 24.2158 162.827 28.6612 164.722 34.48L164.722 34.48L164.726 34.4933C166.679 40.3054 167.672 47.1222 167.672 54.9688V56.5859C167.672 64.4812 166.702 71.3736 164.792 77.2856C162.898 83.1044 159.952 87.5498 156 90.7115Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M23.4024 102.98L23.4064 102.982C30.595 107.677 39.4761 109.977 49.9609 109.977C55.7497 109.977 61.3778 109.307 66.8422 107.965L66.8542 107.962C72.3158 106.572 77.0585 104.644 81.0578 102.157L81.7656 101.716V100.883V78.6641V77.1641H80.2656H69.4375H68.0913L67.9462 78.5024L66.4807 92.025C64.6791 93.0307 62.4336 93.888 59.717 94.5773C56.6985 95.3432 53.6116 95.7266 50.4531 95.7266C43.6543 95.7266 37.9754 94.1882 33.3416 91.1881C28.7488 88.1843 25.203 83.8179 22.7263 78.0118C20.2916 72.1475 19.0469 65.0199 19.0469 56.5859V54.9688C19.0469 47.1956 20.2199 40.4047 22.5278 34.5671C24.8285 28.7475 28.1837 24.2541 32.5699 21.0198L32.5699 21.0198L32.5777 21.014C36.9197 17.7684 42.2631 16.1094 48.6953 16.1094C51.3857 16.1094 53.8503 16.3147 56.0936 16.7185L56.0987 16.7194C58.399 17.1253 60.4478 17.7072 62.2536 18.4559L62.2536 18.456L62.2653 18.4607C63.8954 19.1205 65.3369 19.9094 66.5979 20.8221L68.014 36.3317L68.1385 37.6953H69.5078H80.5469H82.0469V36.1953V14.1172V13.4407L81.5398 12.9929C77.7677 9.66163 73.0534 6.95138 67.4342 4.83819C61.7609 2.70462 55.5324 1.64844 48.7656 1.64844C39.1418 1.64844 30.7791 3.96168 23.7461 8.65036C16.7513 13.3136 11.3953 19.6985 7.67751 27.7612C3.96267 35.7706 2.125 44.8975 2.125 55.1094V56.5859C2.125 66.6968 3.86628 75.7892 7.38337 83.8352L7.38642 83.8421C10.9663 91.9209 16.3068 98.3143 23.4024 102.98Z"
                        stroke="white"
                        className={`stroke-primary stroke-[4]`}
                        variants={pathVariants}
                    />
                </motion.svg>
                <hr className="w-[150px] border-2 border-primary sm:block hidden" />
            </motion.div>
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
        </section>
    );
};

export default Contact;
