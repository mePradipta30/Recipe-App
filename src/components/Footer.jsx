import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"

const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        <span className="text-green-400 text-xl">Yummy</span>
                    </p>
                </div>

                <div className="">
                    <p className="mb-10 text-2xl text-green-500 text-center">QUICK LINKS</p>

                    <div className="flex flex-col text-center mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                <div>
                    <p className="mb-10 text-2xl text-green-500 text-center">LEGAL</p>
                    <div className='flex flex-col text-center mb-4 md:mb-0 text-[14px]'>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            License Agreement
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Copyright Information
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            <div className="text-center mt-8 text-[0.8rem] text-[#bbb]">
                <p className="text-gray-400 leading-10 text-xs"> &copy; Yummy  2024</p> 
                <p className='lastText text-[rgba(255,_0,_0,_0.612)] text-xs'>Made by Pradipta Banerjee</p>
            </div>
        </footer>
    )
}

export default Footer