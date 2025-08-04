import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaCircle } from "react-icons/fa";
import { colors } from "../../../constants/global";
import { useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Navbar = () => {

    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

    useEffect(() => {
        const storedColor = localStorage.getItem("color");
        if (storedColor) {
            changePrimaryColor(storedColor);
        }
    }, []);


    return (
        <ParallaxLayer
            speed={1}
            offset={0}
            id="navbar"
            className="w-full flex justify-between px-[20px] sm:px-[50px] md:px-[100px] xl:px-[120px] py-6 bg-transparent rounded-[5px] shadow-none border-none relative z-[1000]"
        >
            <div className="ml-auto">
                <div className="flex items-center space-x-2">
                    <Select
                        onValueChange={(value) => {
                            changePrimaryColor(value)
                            localStorage.setItem("color", value);
                        }}
                    >
                        <SelectTrigger name="Color theme" className="w-[120px] md:w-[180px] shadow-md dark:bg-black/50 bg-accent dark:border-none text-xs sm:text-sm ">
                            <SelectValue placeholder="Color Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            {colors.map(
                                (
                                    color: {
                                        name: string;
                                        value: string;
                                        hex: string;
                                    },
                                    index: number
                                ) => (
                                    <SelectItem key={index} value={color.value}>
                                        <div className="flex items-center">
                                            <FaCircle
                                                className={`mr-2 text-lg`}
                                                style={{ color: color.hex }}
                                            />
                                            {color.name}
                                        </div>
                                    </SelectItem>
                                )
                            )}
                        </SelectContent>
                    </Select>
                    {/* <Button className="dark:bg-black/20 text-white">
                        Hire me
                    </Button> */}
                </div>
            </div>
        </ParallaxLayer>
    );
};

export default Navbar;
