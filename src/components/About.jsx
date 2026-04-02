import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="px-[8%] lg:px-[5%] py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex md:items-center lg:items-start  flex-col">
          <h1 className="text-6xl text-center tracking-widest mb-6">ABOUT ME</h1>
          <p className="text-center font-semibold lg:text-justify md:text-2xl lg:text-base text-muted  lg:w-[85%] mb-6">
            I’m a computer engineering student and a MERN stack developer,
            focused on building clean and functional web applications. I enjoy
            working on real-world projects and continuously improving my
            development skills.
          </p>

          <Image
            width={455}
            height={250}
            src="/about-img/img-1.jpg"
            alt="my-img-1"
          />
        </div>

        <div className="relative p-4 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                
                <div  className=" w-full h-85 md:w-80 md:h-80 lg:w-80 lg:h-80 flex items-center justify-center z-2 bg-background lg:absolute  lg:bottom-0 lg:left-0">
                    <Image className="w-62.5 h-62.5 lg:w-75 lg:h-75"  src="/about-img/img-2.jpg" height={300} width={300} alt="my-img-2" />
                </div>
        
                <Image className="w-62.5 h-62.5 lg:w-100 lg:h-90 lg:absolute lg:top-20 lg:right-0" src="/about-img/img-3.jpg" height={300} width={400} alt="my-img-3"  />
        </div>

        
      </div>
    </section>
  );
}
