// import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/shared/navbar";
import Home from "./components/shared/Home";
import Divider from "./components/shared/divider";
import Education from "./components/shared/Education";

function App() {
    // useEffect(() => {
    //     const logo = document.querySelectorAll("#new-logo path");
    //     console.log(logo);
    //     for (let i = 0; i < logo.length; i++) {
    //         console.log(
    //             `Letter ${i} is ${(logo[i] as SVGPathElement).getTotalLength()}`
    //         );
    //     }
    // }, []);

    

    return (
        <div className="relative w-full flex flex-col justify-center items-center overflow-x-hidden pt-[70px]">
            <Navbar />
            <Home />
            <Divider />
            <Education />
        </div>
    );
}

export default App;
