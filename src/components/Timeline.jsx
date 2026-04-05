import { timelineData } from "@/data/timelineData";


export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-linear-to-br from-[#1a1a1a] via-[#2d1b3c] to-[#1a1a1a]text-foreground">
        <div className="px-[8%] lg:px-[5%]">
            <div className="flex items-center flex-col lg:flex-row  lg:justify-between">
                <h1 className="w-full lg:w-1/2 text-4xl md:text-5xl mb-6 lg:mb-0 lg:text-6xl text-center lg:text-start tracking-widest">Education<br /> & Experience</h1>
                <p className="text-muted font-semibold text-center md:text-center lg:text-justify text-base w-full lg:w-1/2">
                    I’m a computer engineering student and MERN stack developer with hands-on experience through a 4-month internship, where I worked on building APIs, UI components.
                </p>
            </div>

           <div className="max-w-5xl relative mx-auto timeline mt-10 lg:mt-20">

            {timelineData.map((timeline, index) => (
                <div key={index} className={`px-6 md:px-8 lg:px-12.5 py-2.5 relative w-full lg:w-1/2 ${index % 2 === 0 ? "lg:left-0" : "lg:left-1/2"}`}>
                    <div className={`w-4 h-4 bg-orange-400 rounded-full absolute top-8 z-10 left-1 ${index % 2 === 0 ? "lg:left-[100.8%]" : "lg:left-1"}`}></div>
                <div className="px-5 py-4 bg-white  rounded-md text-black text-base shadow-md  max-w-full">
                    <h2 className="font-semibold">{timeline.title}</h2>
                    <h4 className="font-normal text-accent">{timeline.subTitle}</h4>
                    <small className="text-muted font-normal mb-3.5">{timeline.date}</small>
                    <p className="text-sm text-slate-500">{timeline.description}</p>
                </div>
            </div>
            ))}

           </div>

        </div>
    </section>
  );
}
