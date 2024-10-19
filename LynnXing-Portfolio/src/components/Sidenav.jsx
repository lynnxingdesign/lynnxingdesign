import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import logo from '../../src/assets/Logo.svg'

import resume from '/src/assets/Mengpang_Xing_Resume.pdf'
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };


return (
    <div>
        {/* Create a menu from the top right (phone mode)*/}
        <AiOutlineMenu onClick= {handleNav} className = 'absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col  justify-center items-center z-20'> 
                    {/* Create a menu option for Home page (phone mode)*/}
                    <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <img src={logo} className="w-[20px] h-[20px]" />
                        <span className='pl-4'>Home</span>
                    </a>

                    {/* Create a menu option for Project page (phone mode)*/}
                    <a onClick={handleNav} href='#project' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Project</span>
                    </a>
                    
                    {/* Create a menu option for Work page (phone mode)*/}
                    <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20}/>
                        <span className='pl-4'>Work</span>
                    </a>
                    {/* Create a menu option for Resume page (phone mode)*/}
                    <a onClick={handleNav} href={resume} target='_blank'className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a>

                    {/* Create a menu option for Contact page (phone mode)*/}
                    <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            :(
                ''
            )
        }
        {/* Create a menu from the left side (computer mode)*/}
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                {/* Create a menu option for Home page (computer mode)*/}
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    {/* <AiOutlineHome size={20}/> */}
                    <img src={logo} className="w-[20px] h-[20px]" />
                </a>
                {/* Create a menu option for Project page (computer mode)*/}
                <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                {/* Create a menu option for Work page (computer mode)*/}
                <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                </a>
                {/* Create a menu option for Resume page (computer mode)*/}
                <a href={resume} target='_blank' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20}/>
                </a>
                {/* Create a menu option for Contact page (computer mode)*/}
                <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>


    </div>

  );
};
export default Sidenav