import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Input from "./Input";
import { useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    const [submitting, setSubmitting] = useState(false);


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
            className="w-full h-fit md:h-dvh overflow-hidden px-[15px] sm:px-[40px] lg:px-[80px] xl:px-[150px] flex flex-col flex-between gap-4 py-4"
        >
            <div className='flex items-center justify-center'>

                <SectionHeading>
                    {` ██████╗  ██████╗  ███╗   ██╗ ████████╗  █████╗   ██████╗ ████████╗
██╔════╝ ██╔═══██╗ ████╗  ██║ ╚══██╔══╝ ██╔══██╗ ██╔════╝ ╚══██╔══╝
██║      ██║   ██║ ██╔██╗ ██║    ██║    ███████║ ██║         ██║   
██║      ██║   ██║ ██║╚██╗██║    ██║    ██╔══██║ ██║         ██║   
╚██████╗ ╚██████╔╝ ██║ ╚████║    ██║    ██║  ██║ ╚██████╗    ██║   
 ╚═════╝  ╚═════╝  ╚═╝  ╚═══╝    ╚═╝    ╚═╝  ╚═╝  ╚═════╝    ╚═╝   
`}
                </SectionHeading>
                <span className="text-[50px] leading-[75px] sm:text-[80px] md:text-[120px] md:leading-[140px] font-stylish text-secondary mr-[-30px] sm:mr-[-60px] md:mr-[-70px]">
                    Me
                </span>
            </div>
            <div className="md:h-[80%] h-auto w-[95%] sm:w-auto flex flex-col md:flex-row sm:px-[20px] lg:px-[50px] xl:px-[100px] md:gap-[50px] flex-1 items-center justify-center mt-[50px] md:mt-[-50px]">
                <div className="h-fit w-full sm:w-[400px] flex flex-col gap-[20px]">
                    <img
                        src="/me.png"
                        alt=""
                        className="w-[220px] m-auto my-[10px] outline outline-4 outline-offset-4 outline-gray-500 rounded-full border-4 border-gray-500"
                        onClick={() => {
                            setSubmitting(!submitting);
                        }}
                    />

                    <div className="m-auto hidden md:block">
                        <div className="flex-center gap-4 mb-2">
                            <MdOutlineMail className="text-lg sm:text-xl md:text-xl text-gray-500" />
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                <a href="mailto:kanhaiyadav.me@gmail.com">
                                    kanhaiyadav.me@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className="flex-center gap-4 mb-2">
                            <LuPhone className="text-md sm:text-xl md:text-lg text-gray-500" />
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                7439466535
                            </span>
                        </div>
                        <div className="flex-center gap-4">
                            <IoLocationOutline className="text-lg sm:text-xl md:text-xl text-gray-500" />
                            <span className="text-sm sm:text-lg md:text-xl text-primary hover:underline">
                                Howrah, West Bengal, India
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] md:mt-0">
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
                            className="w-[350px] max-h-[600px] flex mb-8 flex-col gap-2"
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
                                rows={2}
                                placeholder="Your message..."
                                className={`glass p-2 px-3 text-md sm:text-lg md:text-xl text-white !rounded-lg focus:outline focust:outline-2 focus:outline-primary placeholder:text-gray-400 `}
                                name="message"
                                value={value.message}
                                onChange={onChange}
                                disabled={loading}
                            />
                            <Button
                                className={`text-lg ${loading
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                                    }`}
                                onClick={() => {
                                    setSubmitting(true);
                                }}
                                disabled={loading}
                                style={{
                                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                                }}
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
                                    <p>successs</p>
                                </>
                            ) : (
                                <>
                                    <p>An error has occurred!</p>
                                </>
                            )}
                        </motion.div>
                    )}
                    <div className="text-center">
                        <hr className="hidden md:block w-[100px] mb-8 mt-4 bg-gray-500 dark:bg-gray-400 h-1 mx-auto" />
                        <div className="flex items-center justify-center gap-6 w-full">
                            <a
                                href="https://www.linkedin.com/in/kanhaiyadav/"
                                target="_blank"
                                aria-label="Linkedin logo"
                                className="bg-gray-500 dark:bg-gray-400 p-1 md:p-2 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <FaLinkedinIn className="text-xl sm:text-xl lg:text-2xl text-background" />
                            </a>
                            <a
                                href="https://github.com/kanhaiyadav"
                                target="_blank"
                                aria-label="Github logo"
                                className="bg-gray-500 dark:bg-gray-400 p-1 md:p-2 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <LuGithub className="text-xl sm:text-xl lg:text-2xl text-background" />
                            </a>
                            <a
                                href="https://x.com/Kanhaiyadav04"
                                target="_blank"
                                aria-label="Twitter logo"
                                className="bg-gray-500 dark:bg-gray-400 p-1 md:p-2 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <RiTwitterXLine className="text-xl sm:text-xl lg:text-2xl text-background" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61563497158287"
                                target="_blank"
                                aria-label="Facebook logo"
                                className="bg-gray-500 dark:bg-gray-400 p-1 md:p-2 rounded-full outline outline-offset-2 outline-gray-500 dark:outline-gray-400 w-fit"
                            >
                                <FaFacebookF className="text-xl sm:text-xl lg:text-2xl text-background" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
