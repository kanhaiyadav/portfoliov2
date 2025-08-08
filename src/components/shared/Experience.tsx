import React from 'react'
import SectionHeading from './SectionHeading'
import Title from './Title'
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMailOpenOutline } from "react-icons/io5";

const Experience = () => {
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
                <div className=' border-l-2 border-l-primary h-full border-dashed absolute left-1/2 -translate-x-1/2' />
                <div className='absolute top-0 right-1/2 w-[400px] mr-[50px] h-[300px] flex flex-col items-end'>
                    <a href="https://banao.tech/" target='_blank' rel='noopener noreferrer' className='w-fit'>
                        <img src="/experience/banao-logo.png" alt="" className='w-fit' />
                    </a>
                    <Title title='Full Stack Developer' />
                    <p className='text-2xl text-right'>Developed and maintained features for projects HobbyCue, Sahaj Money and Plnr.</p>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center justify-center w-[80px] h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <IoMailOpenOutline className='text-3xl text-primary' />
                        </div>
                        <div className='flex items-center justify-center w-[80px] h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <LiaCertificateSolid className='text-4xl text-primary' />
                        </div>
                    </div>
                </div>
                <div className='absolute top-[300px] h-[300px] left-1/2 w-[400px] ml-[50px] grayscale'>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-gray-400 w-[50px] h-[50px] flex items-center justify-center rounded-full text-4xl font-semibold text-gray-800'>
                            ?
                        </div>
                        <h2 className='text-4xl font-sans text-gray-400'>Yet to find one</h2>
                    </div>
                    <Title title='Unknown' />
                    <p className='text-2xl'>Currently looking finding a new job opportunity. After the last internship.</p>
                    <div className='flex items-center gap-4 mt-4 grayscale'>
                        <div className='flex items-center justify-center w-[80px] h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <IoMailOpenOutline className='text-3xl text-primary' />
                        </div>
                        <div className='flex items-center justify-center w-[80px] h-[80px] rounded-md border border-1 border-primary hover:bg-primary/10'>
                            <LiaCertificateSolid className='text-4xl text-primary' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience