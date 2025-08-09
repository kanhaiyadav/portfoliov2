import invictusIcon from "../src/assets/projects/invictus/icon.png";
import invictusThumbnail from "../src/assets/projects/invictus/thumbnail.png";
import kisaansetuIcon from "../src/assets/projects/kisaansetu/icon.png";
import kisaansetuThumbnail from "../src/assets/projects/kisaansetu/thumbnail.png";
import todoAppIcon from "../src/assets/projects/yourCheckMate/icon.png";
import todoAppThumbnail from "../src/assets/projects/yourCheckMate/thumbnail.png";
import portfolioIcon from "../src/assets/projects/portfoliov1/icon.jpeg";
import portfolioThumbnail from "../src/assets/projects/portfoliov1/thumbnail.png";
import myPassThumbnail from "../src/assets/projects/myPass/thumbnail.png";
import pomodoroThumbnail from "../src/assets/projects/pomodoro/thumbnail.png";
import snakeThumbnail from "../src/assets/projects/snake/thumbnail.png";
import pongThumbnail from "../src/assets/projects/pong/thumbnail.png";
import calculatorThumbnail from "../src/assets/projects/calculator/thumbnail.png";
import tikTacToeThumbnail from "../src/assets/projects/ttt/thumbnail.png";
import converzaIcon from "../src/assets/projects/converza/icon.png";
import converzaThumbnail from "../src/assets/projects/converza/thumbnail.png";
import pythonIcon from "../src/assets/projects/python.png";
import hackboxThumbnail from "../src/assets/projects/Hackbox/thumbnail.png";
import hackboxIcon from "../src/assets/projects/Hackbox/icon.png";

export const colors = [
    {
        name: "Default",
        value: "158 99% 50%",
        hex: "#01fea1",
    },
    {
        name: "Red",
        value: "0 72.2% 50.6%",
        hex: "#dc2626",
    },
    {
        name: "Yellow",
        value: "47.9 95.8% 53.1%",
        hex: "#facc15",
    },
    {
        name: "Orange",
        value: "24.6 95% 53.1%",
        hex: "#f97316",
    },
    {
        name: "Blue",
        value: "221.2 83.2% 53.3%",
        hex: "#2563eb",
    },
    {
        name: "Violet",
        value: "262.1 83.3% 57.8%",
        hex: "#7c3aed",
    },
];

export const education = [
    {
        bg: "/svv.jpg",
        name: "Salkia Vikram Vidyalaya",
        score: "73% (Class 10)",
        icon: "/saraswati.png",
        location: "Salkia, Howrah, West Bengal - 711106",
        degree: "Secondary Education",
        duration: "5 years (2015-2020)",
        joined: "2015",
    },
    {
        bg: "/sjv.jpg",
        score: "91% (Class 12)",
        icon: "sjvIcon.png",
        name: "Shree Jain Vidyalaya",
        location:
            "18-D, Phusraj Bachhawat Path, Sukeas Ln, BBD Bagh, Kolkata, West Bengal - 700001",
        degree: "Higher Secondary Education",
        duration: "2 years (2020-2022)",
        joined: "Aug 2020",
        officialWebsite: "https://sjv.edu.in",
    },
    {
        bg: "/heritage.png",
        score: "9.23 (3rd year 1st semester)",
        icon: "heritageIcon.png",
        name: "Heritage Institute of Technology",
        location:
            "Chowbaga Road, Anandapur, East Kolkata Township, Kolkata 700107",
        degree: "B.Tech in CSE(Data Sceince)",
        duration: "4 years (2022-2026)",
        joined: "16th August 2022",
        officialWebsite: "https://www.heritageit.edu",
        current: true,
    },
];

export const webDev = [
    {
        imgPath: "react.png",
        name: "React",
        progress: 85,
        imgStyle: { borderRadius: "8px", border: "2px solid #00d8ff" },
        documentation: "https://reactjs.org/docs/getting-started.html",
    },
    {
        imgPath: "nodejs.png",
        name: "NodeJS",
        progress: 75,
        imgStyle: {
            backgroundColor: "white",
            borderRadius: "10px",
            border: "3px solid #026e00",
            padding: "5px",
        },
        documentation: "https://nodejs.org/en/docs/",
    },
    {
        imgPath: "Express.png",
        name: "Express",
        progress: 70,
        imgStyle: {
            borderRadius: "11px",
            backgroundColor: "#343434",
            paddingTop: "5px",
            border: "2px solid #fff",
        },
        documentation: "https://expressjs.com/en/starter/installing.html",
    },
    {
        imgPath: "nextjs.png",
        name: "Next.js",
        progress: 40,
        imgStyle: { borderRadius: "8px", border: "3px solid #000" },
        documentation: "https://nextjs.org/",
    },
    {
        imgPath: "mySql.png",
        name: "MySql",
        progress: 80,
        imgStyle: {
            backgroundColor: "white",
            borderRadius: "10px",
            border: "3px solid #01618b",
            padding: "2px",
        },
        documentation: "https://dev.mysql.com/doc/",
    },
    {
        imgPath: "mongodb.png",
        name: "MongoDB",
        progress: 60,
        documentation: "https://docs.mongodb.com/",
    },
    {
        imgPath: "GraphQL.png",
        name: "GraphQL",
        progress: 70,
        imgStyle: {
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            border: "2px solid #e10098",
        },
        documentation: "https://graphql.org/learn/",
    },
    {
        imgPath: "Socket.io.png",
        name: "Socket.io",
        progress: 85,
        imgStyle: {
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            border: "3px solid black",
        },
        documentation: "https://socket.io/docs/v4/",
    },
    {
        imgPath: "tailwind.jpg",
        name: "Tailwind",
        progress: 80,
        imgStyle: { borderRadius: "8px", border: "3px solid #00d8ff" },
        documentation: "https://tailwindcss.com/docs",
    },
    {
        imgPath: "shadcn.png",
        name: "Shadcn/ui",
        progress: 80,
        imgStyle: { borderRadius: "8px", border: "1px solid #fff" },
        documentation: "https://ui.shadcn.com/",
    },
    {
        imgPath: "Postman.png",
        name: "Postman",
        progress: 73,
        documentation:
            "https://learning.postman.com/docs/getting-started/introduction/",
    },
    {
        imgPath: "html.png",
        name: "HTML",
        progress: 80,
        documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        imgPath: "css.png",
        name: "CSS",
        progress: 93,
        documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        imgPath: "social.png",
        name: "Git",
        progress: 80,
        documentation: "https://git-scm.com/doc",
    },
];

export const programmingLanguages = [
    {
        imgPath: "js.png",
        name: "JavaScript",
        short: "JS",
        progress: 75,
        documentation:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        imgPath: "python.png",
        name: "Python",
        short: "Py",
        progress: 90,
        documentation: "https://docs.python.org/3/",
    },
    {
        imgPath: "typescript.png",
        name: "TypeScript",
        short: "TS",
        progress: 70,
        documentation: "https://www.typescriptlang.org/docs/",
    },
    {
        imgPath: "c-.png",
        name: "C++",
        short: "C++",
        progress: 90,
        documentation: "https://en.cppreference.com/w/",
    },
    {
        imgPath: "C.png",
        name: "C",
        short: "C",
        progress: 95,
        documentation: "https://en.cppreference.com/w/c",
    },
];

export const languages = [
    {
        imgPath: "english.svg",
        name: "English",
        progress: 80,
    },
    {
        imgPath: "hindi.png",
        name: "Hindi",
        progress: 90,
    },
    {
        imgPath: "bengali.png",
        name: "Bengali",
        progress: 65,
    },
];

export const projects = [
    {
        thumbnail: hackboxThumbnail,
        icon: hackboxIcon,
        title: "HackBox",
        description:
            "Ever felt like you needed a Swiss Army knife, but for the internet? Meet HackBox – the only web app that can boost your productivity, fix your life, and maybe even find your missing socks. (Okay, not the last one… yet.)",
        preview: "https://hackbox.kanhaiya.me",
        source: "https://github.com/kanhaiyadav/HackBox",
        package: false,
        timeSpan: "July 2024 - October 2024",
        technologies: [17, 18, 5, 3, 19, 21, 22, 20],
        youtube:"https://www.youtube.com/embed/hS1kEGRxCWk?si=FQZCseS3NHMfTAcN",
    },
    {
        thumbnail: converzaThumbnail,
        icon: converzaIcon,
        title: "Converza",
        description:
            "A chat application with core features like message seen status, unread message tracking etc. It is a full stack project with a beautiful and responsive design.",
        preview: "https://converza.vercel.app",
        source: "https://github.com/kanhaiyadav/Converza",
        package: false,
        timeSpan: "July 2024 - October 2024",
        technologies: [5, 0, 1, 2, 3, 4],
        youtube:
            "https://www.youtube.com/embed/hS1kEGRxCWk?si=FQZCseS3NHMfTAcN",
    },
    {
        thumbnail: kisaansetuThumbnail,
        icon: kisaansetuIcon,
        title: "KisaanSetu",
        description:
            "A platform for farmers where they can sell their products directly to the customers. Even through it is a team project(for a hackathon) everything except the ML model and chatbot is done by me.",
        source: "https://github.com/kanishy/KisaanSetu",
        preview: "https://kisaansetu.kanhaiya.me",
        timeSpan: "Sep 2024 - Present",
        package: false,
        technologies: [0, 1, 2, 3, 4, 5],
        youtube:
            "https://www.youtube.com/embed/VdaOQMOajNc?si=FrSfdgbwZ-KBV5Tr",
    },
    {
        thumbnail: invictusThumbnail,
        icon: invictusIcon,
        title: "invictus",
        description:
            "Invictus is a powerful and easy-to-use CLI tool built with Node.js for securely managing passwords. It securely stores your passwords in the OS keychain using the keytar library and provides an intuitive web interface for managing passwords with a beautiful, responsive UI.",
        source: "https://github.com/kanishy/invictus",
        timeSpan: "March 8th to 16th 2025",
        package: true,
        npm: "https://www.npmjs.com/package/invictus",
        technologies: [0, 1, 2],
        youtube:
            "https://www.youtube.com/embed/VdaOQMOajNc?si=FrSfdgbwZ-KBV5Tr",
    },
    {
        thumbnail: todoAppThumbnail,
        icon: todoAppIcon,
        title: "YourCheckMate",
        description:
            "This is one of my initial web dev project, a simple todo app with all necessary features. It is a full stack project with a beautiful and responsive design.",
        preview: "https://yourcheckmate.netlify.app/",
        source: "https://github.com/kanishy/todo_react",
        package: false,
        timeSpan: "July 2024 - July 2024",
        technologies: [0, 1, 2, 3, 4],
        youtube:
            "https://www.youtube.com/embed/FvZDQBydzuQ?si=bOqi6idkaCJ5q3ZH",
    },
    {
        thumbnail: portfolioThumbnail,
        icon: portfolioIcon,
        title: "My Portfolio",
        description:
            "This is my first portfolio website with beautiful and responsive design.",
        source: "https://github.com/kanishy/Portfolio",
        timeSpan: "october 2024 - October 2024",
        package: false,
        technologies: [0, 6],
    },
    {
        thumbnail: myPassThumbnail,
        icon: pythonIcon,
        title: "MyPass",
        description:
            "A simple password manager which generates and save your password.",
        preview:
            "https://drive.google.com/file/d/1AIb_gdepumq5fRTfRJBg_0_HJeEyuwOv/view?usp=sharing",
        package: false,
        source: "https://github.com/kanishy/python_password_manager",
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 7],
        youtube:
            "https://www.youtube.com/embed/Hi-g3dInSLg?si=wj7u8v8HTdelS1D6",
    },
    {
        thumbnail: pomodoroThumbnail,
        icon: pythonIcon,
        title: "Pomodoro",
        description:
            "A simple pomodoro timer for managing work and break time.",
        preview:
            "https://drive.google.com/file/d/18p-ybkm0llmPDIHfUISxcFxqoBMYI56V/view?usp=sharing",
        package: false,
        source: "https://github.com/kanishy/python_pomodoro_app",
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 7],
        youtube:
            "https://www.youtube.com/embed/DZPovvuUBeM?si=DjdDMglS0OB8Eo86",
    },
    {
        thumbnail: snakeThumbnail,
        icon: pythonIcon,
        title: "Snake Game",
        description: "A simple snake game for entertainment.",
        preview:
            "https://drive.google.com/file/d/19HMT8yM_S0MIlejURcX-h3oMCnkATqaA/view?usp=sharing",
        source: "https://github.com/kanishy/python_sanke_game",
        package: false,
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 8],
    },
    {
        thumbnail: pongThumbnail,
        icon: pythonIcon,
        title: "Pong Game",
        description: "A very basic pong game for entertainment.",
        preview:
            "https://drive.google.com/file/d/1ATw2c-7cYGu2LuZNI6b2M2QhR7aWjN3Q/view?usp=sharing",
        source: "https://github.com/kanishy/python_pong_game",
        package: false,
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 8],
        youtube:
            "https://www.youtube.com/embed/TBQ7NexslZM?si=_hy1f4xEnGe4O7Mj",
    },
    {
        thumbnail: calculatorThumbnail,
        icon: pythonIcon,
        title: "Calculator",
        description: "A simple calculator for basic arithmetic operations.",
        preview:
            "https://drive.google.com/file/d/17Df8luCi8nESApRvUkZ2ud7U576xFLMN/view?usp=sharing",
        source: "https://github.com/kanishy/python_calculator",
        package: false,
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 7],
        youtube:
            "https://www.youtube.com/embed/EzQTjPA8BdI?si=lt-xmVFz2NBUe4jg",
    },
    {
        thumbnail: tikTacToeThumbnail,
        icon: pythonIcon,
        title: "TikTacToe",
        description: "A simple tik-tac-toe game for entertainment.",
        preview:
            "https://drive.google.com/file/d/1t2kFUbytpsgmoSXsXWaZvnngjdkuBvZJ/view?usp=sharing",
        source: "https://github.com/kanishy/python_tik_tac_toe_game",
        package: false,
        timeSpan: "2023(3rd Semester)",
        technologies: [6, 7],
        youtube:
            "https://www.youtube.com/embed/9_rcsyU6Lfg?si=Lorcw1M7L04qyF7d",
    },
];

export const technologies = [
    {
        name: "React",
        imgPath: "/react.png",
        documentation: "https://react.dev",
    },
    {
        name: "Node.js",
        imgPath: "/node.png",
        documentation: "https://nodejs.org/en",
    },
    {
        name: "Express.js",
        imgPath: "/express.png",
        documentation: "https://expressjs.com",
    },
    {
        name: "MongoDB",
        imgPath: "/mongo.png",
        documentation: "https://www.mongodb.com",
    },
    {
        name: "PassportJs",
        imgPath: "/passport.png",
        documentation: "http://www.passportjs.org",
    },
    {
        name: "Socket.io",
        imgPath: "/socket.png",
        documentation: "https://socket.io",
    },
    {
        name: "Python",
        imgPath: "python.png",
        documentation: "https://www.python.org",
    },
    {
        name: "Tkinter",
        imgPath: "/tkinter.png",
        documentation: "https://docs.python.org/3/library/tkinter.html",
    },
    {
        name: "Turtle",
        imgPath: "/turtle.png",
        documentation: "https://docs.python.org/3/library/turtle.html",
    },
    {
        name: "Git",
        imgPath: "/git.png",
        documentation: "https://git-scm.com",
    },
    {
        name: "GitHub",
        imgPath: "/github.png",
        documentation: "https://github.com",
    },
    {
        name: "Postman",
        imgPath: "/postman.png",
        documentation: "https://www.postman.com",
    },
    {
        name: "HTML",
        imgPath: "/html.png",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        imgPath: "/css.png",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        imgPath: "/js.png",
        documentation:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "C",
        imgPath: "/C.png",
        documentation: "https://www.learn-c.org",
    },
    {
        name: "C++",
        imgPath: "/c-.png",
        documentation: "https://www.cplusplus.com",
    },
    {
        name: "Next.js",
        imgPath: "/nextjs.png",
        documentation: "https://nextjs.org",
    },
    {
        name: "TypeScript",
        imgPath: "/typescript.png",
        documentation: "https://www.typescriptlang.org",
    },
    {
        name: "Auth.js",
        imgPath: "/authjs.png",
        documentation: "https://authjs.dev",
    },
    {
        name: "Shadcn/ui",
        imgPath: "/shadcn.png",
        documentation: "https://ui.shadcn.com/",
    },
    {
        name: "PayPal",
        imgPath: "/paypal.png",
        documentation: "https://www.paypal.com",
    },
    {
        name: "Algolia",
        imgPath: "/algolia.png",
        documentation: "https://www.algolia.com",
    }
];

export const achievements = [
    {
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
        title: "Hackthon Win",
        descriptions: [
            "Our team, <span class='text-primary font-semibold'>Code Connectors</span>, earned 2nd runner-up position at HackSpire-2024, one of the top offline hackathons organized by the <span class='text-primary font-semibold'>FIEM ACM Student Chapter</span>. 🚀",
            "Out of nearly 2000 participants, our team from <a href='#education' class='text-primary font-semibold'>Heritage Institute of Technology</a> placed 3rd among 250+ brilliant finalists from across India. We built <a href='#projects' class='text-primary font-semibold'>KisaanSetu</a>, a MERN stack platform that connects farmers and consumers, integrating image classification to streamline the process.",
            "This hackathon was an incredible learning experience, where I enhanced my skills in web development, teamwork, collaboration, and working under tight deadlines to create a project from scratch. 🛠️💡",
        ],
        date: "October 2024",
    },
    {
        images: ["/img7.jpg", "/img8.jpg", "/img9.png", "img10.png"],
        title: "Quiz Competition",
        descriptions: [
            "Secured 2nd runner up position in the Intra College Quiz Competition, <span class='text-primary font-semibold'>Quiztopher</span>. 🏆",
            "The quiz was organized by the <a href='#education' class='text-primary font-semibold'>Heritage Institute of Technology</a> ACM Student Chapter, where I competed against 50+ participants in a series of rounds testing our knowledge in various domains, such as sports, history, technology, and general awareness.",
            "This competition was a great opportunity to showcase my knowledge and learn from my peers, and I look forward to participating in more such events in the future. 🧠🌟",
        ],
        date: "October 2024",
    },
];
