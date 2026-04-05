import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const quickLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Contact",
        href: "#contact"
    }
]

export default function Footer() {
  return (
    <footer className='bg-surface border-t border-[rgba(240,96,48,0.12)] py-10'>

        <div className='px-[8%] lg:px-[5%]'>

            <div className='flex flex-col lg:flex-row justify-between'>

                <div className='flex flex-col items-start lg:w-[40%]'>
                    <h1 className='text-lg md:text-2xl lg:text-2xl font-extrabold text-white syne  text-shadow-xs text-shadow-blue-100'>Abhi<span className='text-muted'>.dev</span></h1>
                    <p className='text-muted text-base mt-1 font-semibold '>Passionate about creating modern web experiences that are clean, functional, and user-focused.</p>
                    <div className='flex flex-row gap-4 mt-2'>
                        <Link className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                        hover:bg-white hover:text-gray-600"  href="https://www.linkedin.com/in/abhi-solanki-364bb8258/" target="_blank">
                            <FaLinkedinIn className="w-5 h-5" />
                        </Link>
                        <Link className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                        hover:bg-white hover:text-gray-600" href="https://github.com/Abhis1605" target="_blank">
                            <FaGithub className="w-6 h-6" />
                        </Link>
                        <Link className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                        hover:bg-white hover:text-gray-600" href="https://www.instagram.com/imabhisolanki/" target="_blank">
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                <div className="mt-3 lg:mt-0">
                    <h4 className="text-2xl ">Quick Actions</h4>
                    {quickLinks.map((link, index) => (
                                <Link key={index} className="text-lg font-semibold text-muted m-1 flex" href={link.href}>
                                    {link.label}
                                </Link>
                    ))}
                </div>
                
                <div className="mt-3 lg:mt-0">
                    <h4 className="text-2xl">Contact Information</h4>
                    <div className="flex flex-col">
                        <a className="text-lg font-semibold text-muted" href="mailto:abhi85076@gmail.com">
                    abhi85076@gmail.com
                </a>
                <a className="text-lg font-semibold text-muted" href="tel:+91-7990184694">
                    +91-7990184694
                </a>
                <a className="text-lg font-semibold text-muted" href="https://maps.app.goo.gl/4hpTdvhvgbJK6Yu2A" target="_blank">
                    Ahmedabad, Gujarat
                </a>
                    </div>
                </div>
            </div>

            <hr className="mt-2 text-muted" />

            <div className="flex flex-col lg:flex-row mt-4 items-center justify-between">

                <p className="text-lg font-semibold text-muted text-center">
                    &copy; {new Date().getFullYear()} Abhi Solanki. All rights reserved
                </p>
                
                <p className="text-lg text-muted font-semibold">
                    Built and designed by <Link className="text-white hover:text-accent-warm" href="https://github.com/Abhis1605" target="_blank">Abhis1605</Link>
                </p>
            </div>

        </div>

    </footer>
  )
}
