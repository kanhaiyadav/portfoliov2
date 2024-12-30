import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaCircle } from "react-icons/fa";
import { colors } from "../../../constants/global";

const Navbar = () => {

    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }
    
    return (
        <nav className=" fixed top-0 left-0 w-full flex items-center justify-between px-[120px] py-4">
            <Select onValueChange={(value) => changePrimaryColor(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Color Theme" />
                </SelectTrigger>
                <SelectContent>
                    {
                        colors.map((color: {
                            name: string;
                            value: string;
                        }, index:number) => (
                            <SelectItem key={index} value={color.value}>
                                <div className="flex items-center">
                                    <FaCircle className={`mr-2 text-lg text-[hsl(${color.value})]`} />
                                    {color.name}
                                </div>
                            </SelectItem>
                        ))
                    }
                    {/* <SelectItem value="142.1,76.2%,36.3%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(142.1,76.2%,36.3%)]" />
                            Default
                        </div>
                    </SelectItem> */}
                    {/* <SelectItem value="0 72.2% 50.6%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(0,72.2%,50.6%)]" />
                            Red
                        </div>
                    </SelectItem>
                    <SelectItem value="47.9 95.8% 53.1%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(47.9,95.8%,53.1%)]" />
                            Yello
                        </div>
                    </SelectItem>
                    <SelectItem value="24.6 95% 53.1%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(24.6,95%,53.1%)]" />
                            Orange
                        </div>
                    </SelectItem>
                    <SelectItem value="221.2 83.2% 53.3%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(221.2,83.2%,53.3%)]" />
                            Blue
                        </div>
                    </SelectItem>
                    <SelectItem value="262.1 83.3% 57.8%">
                        <div className="flex items-center">
                            <FaCircle className="mr-2 text-lg text-[hsl(262.1,83.3%,57.8%)]" />
                            Violet
                        </div>
                    </SelectItem> */}
                </SelectContent>
            </Select>

            <div>
                <ul className="flex items-center text-white space-x-8">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                    <Button>
                        Hire me
                    </Button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
