'use client'
import {  Menu, MoveUpRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
    { label: "Home", href: "#home"},
    { label: "About", href: "#about"},
    { label: "Skills", href: "#skills"},
    { label: "Projects", href: "#projects"},
    { label: "Contact", href: "#contact"}
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <div className={`w-full transition-all duration-500 fixed top-0 left-0 z-50 fixed-nav ${isFixed ? "bg-white/10 backdrop-blur-xs py-3" : "bg-transparent py-5 "}`}>

        <div className={`w-full flex items-center justify-between transition-all duration-500 ${isFixed ? "px-[8%] lg:px-[8%]" : "px-[8%] lg:px-[5%]"}`}>

            <Link href="/" className="text-lg md:text-2xl lg:text-2xl font-extrabold text-white syne  text-shadow-sm text-shadow-muted">
                Abhi<span className="text-(--color-surface-2)">.dev</span>
            </Link>

            <nav className="hidden lg:flex space-x-5 menu-link relative z-40">

                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="font-display uppercase text-xs tracking-widest text-white hover:text-blue-600  font-bold transition-all duration-300">
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <Link className="flex items-center gap-2 px-5 py-1 text-sm uppercase bg-transparent text-white border-2 hover:bg-white font-display tracking-widest hover:text-accent transition-all duration-300 hover:border-none hover:scale-95" href="/">
                    <MoveUpRight className="w-4 h-4 " />
                    Resume
                </Link>
            </div>

            <div className="lg:hidden flex items-center justify-between gap-4">
                <button className="text-2xl focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Menu className="lg:w-5 lg:h-5" />
                </button>
            </div>

        </div>

        { mobileMenuOpen && (
            <div className="lg:hidden bg-black border-t border-gray-500 mt-3 transition-all duration-500">
                <div className="flex flex-col px-[8%] py-3 space-y-1">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        )}
      
    </div>
  )
}
