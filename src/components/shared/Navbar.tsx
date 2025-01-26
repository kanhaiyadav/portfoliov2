import { Button } from "../ui/button";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaCircle } from "react-icons/fa";
import { colors } from "../../../constants/global";
import { useTheme } from "@/Hooks/Theme";

const Navbar = () => {
    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

    const {theme, setTheme} = useTheme();
    
    return (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[120px] py-6 bg-background rounded-[5px] dark:shadow-none shadow-card border-gray-400 border-2 dark:border-none ring-1 ring-transparent border-dashed border-l-0 border-r-0 border-t-0">
            <div className="flex items-center space-x-4">
                <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                    className="shadow-md border-[#8e8d87]"
                >
                    {theme === "dark" ? (
                        <LuSun className="scale-105 hover:rotate-90" />
                    ) : (
                        <LuMoon />
                    )}
                </Button>
                <Select onValueChange={(value) => changePrimaryColor(value)}>
                    <SelectTrigger className="w-[180px] shadow-md">
                        <SelectValue placeholder="Color Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        {colors.map(
                            (
                                color: {
                                    name: string;
                                    value: string;
                                    preValue: string;
                                },
                                index: number
                            ) => (
                                <SelectItem key={index} value={color.value}>
                                    <div className="flex items-center">
                                        <FaCircle
                                            className={`mr-2 text-lg text-[hsl(${color.preValue})]`}
                                        />
                                        {color.name}
                                    </div>
                                </SelectItem>
                            )
                        )}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <ul className="flex items-center space-x-8">
                    <li>Home</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Achivements</li>
                    <li>Contact</li>
                    <Button>Hire me</Button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
