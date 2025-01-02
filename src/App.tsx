// import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/shared/navbar";
import Home from "./components/shared/Home";
import Divider from "./components/shared/divider";
import Education from "./components/shared/Education";
import Skills from "./components/shared/Skills/Skills";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";

function App() {

    return (
        <div className="relative w-full flex flex-col justify-center items-center overflow-hidden pt-[70px] gap-[100px]">
            <Navbar />
            <Home />
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
