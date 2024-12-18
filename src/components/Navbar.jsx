import React, { useState } from 'react'
import Logo from '../images/logo3.jpg'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full pl-[10px] pr-[10px] py-4 absolute top-[0] left-[0] flex items-center flex-wrap justify-between !backdrop-filter backdrop-blur-[6px] z-10'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center '>
                <Link to="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block rounded-2xl w-8 h-8 lg:w-14 lg:h-14' />
                    
                </Link>

                <ul className='hidden md:flex gap-8 ml-auto justify-end mx-[25px] my-[2px] px-0 py-[5px] text-[1.18rem] cursor-pointer outline-[none] text-[#fff]  [transition:all_.3s_ease] '>
                    <li>
                        <Link to="/" className='hover:[text-shadow:0px_-1px_6px_rgb(137,_0,_0)] hover:text-[rgb(223,161,133)]'>Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes"className='hover:[text-shadow:0px_-1px_6px_rgb(137,_0,_0)]  hover:text-[rgb(223,161,133)]'>Explore</Link>

                    </li>
                    <li>
                        <Link to="/favorites" className='hover:[text-shadow:0px_-1px_6px_rgb(137,_0,_0)] hover:text-[rgb(223,161,133)]'>Favorite Foods</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className='hover:[text-shadow:0px_-1px_6px_rgb(137,_0,_0)] hover:text-[rgb(223,161,133)]'>Contact Us</Link>
                    </li>
                </ul>

                <Button
                    title='Sign in'
                    conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                />

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </header>
    )

}


export default Navbar