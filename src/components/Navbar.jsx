'use client'
import { Download, Menu } from "lucide-react"
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
    <div className={`w-full transition-all py-5 duration-500 fixed top-0 left-0 z-50 fixed-nav ${isFixed ? "bg-black" : "bg-transparent"}`}>

        <div className={`w-full flex items-center justify-between transition-all duration-500 ${isFixed ? "px-[8%] lg:px-[16%]" : "px-[8%] lg:px-[5%]"}`}>

            <Link href="/" className={`text-3xl lg:text-4xl font-bold text-white`}>
                Abhi<span>.dev</span>
            </Link>

            <nav className="hidden lg:flex space-x-5 menu-link relative z-40">

                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="text-white hover:text-blue-600 transition-all duration-300">
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <Link className="flex items-center gap-2 px-4 py-2 bg-amber-500 rounded-full text-sm" href="/">
                    <Download className="w-5 h-5" />
                    Resume
                </Link>
            </div>

            <div className="lg:hidden flex items-center justify-between gap-4">
                <button className="text-2xl focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Menu className="w-5 h-5" />
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
