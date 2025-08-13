import SectionHeading from './SectionHeading'

const WhoAmI = () => {
    return (
        <>
            {/* <div className="w-full h-[200px] bg-background absolute top-0 left-0 translate-y-[-97.5%]"></div> */}
            <div className="flex items-end mt-[100px]">
                <SectionHeading>
                    {`██╗    ██╗ ██╗  ██╗  ██████╗       █████╗  ███╗   ███╗     ██╗
██║    ██║ ██║  ██║ ██╔═══██╗     ██╔══██╗ ████╗ ████║     ██║
██║ █╗ ██║ ███████║ ██║   ██║     ███████║ ██╔████╔██║     ██║
██║███╗██║ ██╔══██║ ██║   ██║     ██╔══██║ ██║╚██╔╝██║     ██║
╚███╔███╔╝ ██║  ██║ ╚██████╔╝     ██║  ██║ ██║ ╚═╝ ██║     ██║
 ╚══╝╚══╝  ╚═╝  ╚═╝  ╚═════╝      ╚═╝  ╚═╝ ╚═╝     ╚═╝     ╚═╝
`}
                </SectionHeading>
                <span className="text-[90px] leading-[100px] sm:text-[150px] sm:leading-[160px] md:text-[180px] md:leading-[140px] font-stylish text-secondary">
                    ?
                </span>
            </div>
            <div className="flex-1 min-w-0 py-[50px] flex flex-col items-center">
                <div className='px-[20px] sm:px-[30px] md:px-[200px] w-screen text-center text-2xl md:text-3xl'>
                    <p>Just your friendly neighborhood developer, <span className="text-[#ffff00]">Kanhaiya Yadav</span></p>
                    <p>Student at <a href="https://heritageit.edu/" target="_blank" className="text-[#ffe100] hover:underline underline-offset-2">Heritage Institute of Technology</a>, pursuing bachelor's degree in Computer Science with specialization in Data Science.</p>
                    <p>Web development is my playground, JavaScript is my frenemy, and chess is my forever obsession.</p>
                </div>
            </div>
        </>
    )
}

export default WhoAmI