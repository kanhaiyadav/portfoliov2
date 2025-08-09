import SectionHeading from './SectionHeading'
import Title from './Title'
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMailOpenOutline } from "react-icons/io5";
import { useModal } from '@/Hooks/useModal';
import { MdOutlineDateRange } from "react-icons/md";

const Experience = () => {

    const { setType, setData } = useModal();

    return (
        <section className='flex-1 w-full flex flex-col items-center gap-[50px]'>
            <div className='flex items-center justify-center gap-4'>
                <SectionHeading>{` ██████╗  █████╗  ██████╗  ███████╗ ███████╗ ██████╗ 
██╔════╝ ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔════╝ ██╔══██╗
██║      ███████║ ██████╔╝ █████╗   █████╗   ██████╔╝
██║      ██╔══██║ ██╔══██╗ ██╔══╝   ██╔══╝   ██╔══██╗
╚██████╗ ██║  ██║ ██║  ██║ ███████╗ ███████╗ ██║  ██║
 ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚══════╝ ╚══════╝ ╚═╝  ╚═╝
`}</SectionHeading>
                <span className="text-[50px] leading-[75px] sm:text-[80px] md:text-[120px] md:leading-[140px] font-stylish text-secondary mr-[-30px] sm:mr-[-60px] md:mr-[-70px]">
                    Map
                </span>
            </div>
            <div className='flex-1 w-full relative'>
                <div className=' border-l-2 border-l-primary h-[80%] sm:h-full border-dashed absolute left-[10%] sm:left-1/2 -translate-x-1/2' />
                <div className='absolute top-0 left-[15%] sm:left-auto sm:right-1/2 sm:w-[280px] md:w-[350px] lg:w-[400px] ml-[20px] sm:mr-[30px] md:mr-[50px] h-[300px] flex flex-col sm:items-end'>
                    <a href="https://banao.tech/" target='_blank' rel='noopener noreferrer' className='w-fit'>
                        <img src="/experience/banao-logo.png" alt="" className='w-[100px] sm:w-[150px] lg:w-fit' />
                    </a>
                    <Title title='Full Stack Developer  ' />
                    <p className='text-xl md:text-2xl sm:text-right'>Developed and maintained features for projects HobbyCue, Sahaj Money and Plnr.</p>
                    <div className='flex items-center gap-4 md:gap-8'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineDateRange className='text-sm sm:text-lg md:text-xl text-primary' />
                            <span className='text-sm sm:text-lg md:text-xl text-primary whitespace-nowrap'>Dec 2024 - June 2025</span>
                        </div>
                        <div className='whitespace-nowrap'>
                            <span className='text-sm sm:text-lg md:text-xl text-primary'>Type: </span>
                            <span className='text-sm sm:text-lg md:text-xl text-primary'>Internship</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'
                            onClick={() => {
                                setType("pdf");
                                setData({
                                    title: "Offer Letter",
                                    description: "This is my internship offer letter from Banao.",
                                    link: "/experience/Offer-Letter.pdf"
                                });
                            }}
                        >
                            <IoMailOpenOutline className='text-xl sm:text-2xl md:text-3xl text-primary' />
                        </div>
                        <div className='flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'
                            onClick={() => {
                                setType("pdf");
                                setData({
                                    title: "Internship Certificate",
                                    description: "This is my internship certificate from Banao.",
                                    link: "/experience/Banao-Certificate .pdf"
                                });
                            }}
                        >
                            <LiaCertificateSolid className='text-2xl sm:text-3xl md:text-4xl text-primary' />
                        </div>
                    </div>
                </div>
                <div className='absolute top-[300px] h-[300px] left-[13%] sm:left-1/2 sm:w-[280px] md:w-[350px] lg:w-[400px] ml-[20px] sm:ml-[30px] md:ml-[50px] grayscale'>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-gray-400 w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full text-4xl font-semibold text-gray-800'>
                            ?
                        </div>
                        <h2 className='text-2xl md:text-4xl font-sans text-gray-400 font-semibold'>Finding One</h2>
                    </div>
                    <Title title='Unknown' />
                    <p className='text-xl md:text-2xl'>Currently looking finding a new job opportunity. After the last internship.</p>
                    <div className='flex items-center gap-4 md:gap-8'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineDateRange className='text-sm sm:text-lg md:text-xl text-primary' />
                            <span className='text-sm sm:text-lg md:text-xl text-primary whitespace-nowrap'>____ - ____</span>
                        </div>
                        <div className='whitespace-nowrap'>
                            <span className='text-sm sm:text-lg md:text-xl text-primary'>Type: </span>
                            <span className='text-sm sm:text-lg md:text-xl text-primary'>NA</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-4 grayscale'>
                        <div className='flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <IoMailOpenOutline className='text-xl sm:text-2xl md:text-3xl text-primary' />
                        </div>
                        <div className='flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <LiaCertificateSolid className='text-2xl sm:text-3xl md:text-4xl text-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience