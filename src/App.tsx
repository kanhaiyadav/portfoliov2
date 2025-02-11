// import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/shared/navbar";
import Home from "./components/shared/Home";
import Divider from "./components/shared/divider";
import Education from "./components/shared/Education";
import Skills from "./components/shared/Skills/Skills";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";
import Achievements from "./components/shared/Achievements";

function App() {
   
    
    return (
        <div className="relative w-full flex flex-col justify-center items-center overflow-hidden gap-[100px]">
            <div id="home" className="w-full relative">
                <div className="absolute w-full h-full left-0 top-[-5px] z-0 dark:block hidden">
                    <svg
                        id="visual"
                        className="w-full h-full"
                        viewBox="0 0 960 540"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                    >
                        <path
                            className="fill-primary/50"
                            d="M0 81L26.7 94.5C53.3 108 106.7 135 160 143.8C213.3 152.7 266.7 143.3 320 126.7C373.3 110 426.7 86 480 89.8C533.3 93.7 586.7 125.3 640 130.5C693.3 135.7 746.7 114.3 800 107.8C853.3 101.3 906.7 109.7 933.3 113.8L960 118L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
                            ></path>
                        <path
                            className="fill-primary"
                            d="M0 93L26.7 95.5C53.3 98 106.7 103 160 97C213.3 91 266.7 74 320 60.7C373.3 47.3 426.7 37.7 480 40.2C533.3 42.7 586.7 57.3 640 70C693.3 82.7 746.7 93.3 800 92.5C853.3 91.7 906.7 79.3 933.3 73.2L960 67L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
                        ></path>
                    </svg>
                </div>
                <Navbar />
                <Home />
            </div>
            <Divider />
            <Achievements />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
            <Divider />
            <Contact />
        </div>
    );
}

export default App;
