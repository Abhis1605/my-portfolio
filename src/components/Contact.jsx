import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram  } from "react-icons/sl";
import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="px-[8%] lg:px-[5%]">
        <div className="flex items-center flex-col lg:flex-row lg:justify-between">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-center mb-6">
            get - in touch
          </h1>
          <p className="text-muted text-center lg:text-justify  text-base lg:w-1/2">
            Let’s build something great together. I’m open to new opportunities,
            collaborations, and meaningful conversations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:px-5 gap-5">
          <div className="w-full  lg:w-1/2 p-4">
            <h4 className="text-xl text-center lg:text-start mb-4">Contact Information</h4>
            <div className="">
                <div className="flex items-center md:justify-center lg:justify-start gap-4 mb-3">
              <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center  rounded-full">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <p>
                Email: <a href="mailto:abhi85076@gmail.com" target="_blank">
                    abhi85076@gmail.com
                </a>
              </p>
            </div>
            <div className="flex  items-center md:justify-center lg:justify-start gap-4 mb-3">
              <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center rounded-full">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <p>
                Phone: <a href="tel:+91-7990184694" target="_blank">
                    +91-7990184694
                </a>
              </p>
            </div>

            <div className="flex items-center md:justify-center lg:justify-start gap-4">
              <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center rounded-full">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <p>
                Location: <a href="https://maps.app.goo.gl/4hpTdvhvgbJK6Yu2A" target="_blank">
                    Ahmedabad, Gujarat
                </a>
              </p>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-base font-display tracking-wide">Connect with Me:</p>
                <div className="flex flex-row items-center gap-4 mt-1">
                    <Link href="https://www.linkedin.com/in/abhi-solanki-364bb8258/" target="_blank">
                        <SlSocialLinkedin className="text-accent transition-colors duration-300 w-5 h-5 hover:text-white" />
                    </Link>

                    <Link href="https://github.com/Abhis1605" target="_blank">
                        <SlSocialGithub className="text-accent w-5 h-5 transition-colors duration-300 hover:text-white" />
                    </Link>
                    
                    <Link href="https://www.instagram.com/imabhisolanki/" target="_blank">
                        <SlSocialInstagram className="text-accent w-5 h-5 transition-colors duration-300 hover:text-white" />
                    </Link>
                </div>
            </div>
          </div>

          <div className=" bg-white/10 backdrop-blur-md rounded-md py-5 lg:px-5 lg:py-5 w-full lg:w-1/2"> 
            <h3 className="text-2xl text-center">
                Send a Message
            </h3>
            <form className="">
                <div className="flex flex-col items-center mt-4 gap-2 px-4 lg:px-0">
                    <label htmlFor="name" className="">
                        Your Name
                    </label>
                    <input placeholder="John Doe" type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0" />
                    <label htmlFor="email">Your Email</label>
                    <input placeholder="johndoe@example.com" type="text" id="email" name="email" required className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0" />
                    <label htmlFor="message">Your Message</label>
                    <textarea placeholder="Hello, How are you!!" name="message" id="message" required className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0" />
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button className="cursor-pointer px-4 rounded-full gap-2 flex items-center py-2 text-white border-2 border-accent transition-colors duration-300 text-lg hover:text-accent hover:bg-white hover:border-0 hover:scale-95" type="submit">
                    Send <Send className="w-4 h-4" />
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
