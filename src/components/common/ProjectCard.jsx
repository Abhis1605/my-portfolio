import { ExternalLink, } from 'lucide-react'
import { SiGithub } from "react-icons/si";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "DogVerse",
    desc: "React based website that displays dog breeds using Dog CEO API with search and category filtering",
    image: "/projects/dogverse.webp",
    tech: ["React", "CSS", "React Router"],
    category: "frontend",
    live: "https://dogverse.vercel.app",
    github: "https://github.com/Abhis1605/dogverse",
    learned: [
      "Fetching data from APIs",
      "Implementing dynamic routing using React Router",
      "Building search and category filtering",
      "Creating Responsive UI"
    ]
  }
  ,
  {
    id: 2,
    title: "NoteStack",
    desc: "Full-Stack MERN notes app with authentication, CRUD operations, and search & pin features.",
    image: "/projects/note-stack.png",
    tech: ["React", "Node.js","Express", "MongoDB", "Tailwind"],
    category: "frontend",
    live: "https://note-stack-frontend-kappa.vercel.app/",
    github: "https://github.com/Abhis1605/notestack",
    learned: [
      "Building REST APIs",
      "Implementing authentication (login/signup)",
      "Managing CRUD operations",
      "Adding features like search and pin notes",
      "Handling frontend-backend integration"
    ]
  },
  {
    id: 3,
    title: "EduNest",
    desc: "Student management portal built as a final year project using Next.js and modern tools.",
    image: "/projects/edunest.webp",
    tech: ["Next.js", "NextAuth", "MongoDB", "Tailwind", "ShadCN"],
    category: "fullstack",
    live: "https://edunest-blue.vercel.app/",
    github: "https://github.com/Abhis1605/edunest",
    learned: [
      "Understanding Next.js architecture",
      "Building APIs in Next.js",
      "Implementing authentication using NextAuth",
      "Using Context API for state management",
      "Working with modern UI libraries like ShadCN"
    ]
  },
    {
    id: 4,
    title: "Elite Estate",
    desc: "Frontend real estate UI built using React and Tailwind with clean and modern design.",
    image: "/projects/elite-e-state.webp",
    tech: ["React", "Tailwind"],
    category: "frontend",
    live: "https://eliteestat.netlify.app",
    github: "https://github.com/Abhis1605/EliteEstate",
    learned: [
      "Designing modern UI with Tailwind",
      "Component-based architecture in React",
      "Improving layout and responsiveness"
    ]
  },

  {
    id: 5,
    title: "Local Mart",
    desc: "E-commerce website built using HTML, CSS, and JavaScript with cart functionality.",
    image: "/projects/local-mart.webp",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    live: "https://local-mart-kappa.vercel.app",
    github: "https://github.com/Abhis1605/LocalMart/",
    learned: [
      "Working with pure JavaScript logic",
      "Implementing add to cart functionality",
      "Understanding basic e-commerce flow",
      "Handling DOM manipulation"
    ]
  },
]

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="flex flex-col bg-[#141414] border-2 border-border shadow-lg shadow-white/10 rounded-2xl transition-all duration-300 p-4"
    >
      <div className="border-4 border-border rounded-md mb-3 overflow-hidden">
        <div className="relative w-full h-50">
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            fill
          />
        </div>
      </div>

      <div>
        <h4 className="text-xl tracking-wider mb-1 font-extrabold">{project.title}</h4>
        <p className="text-sm text-justify text-muted font-semibold mb-2">{project.desc}</p>

        <div className="flex gap-2 mb-4 flex-wrap">
          {project.tech.map((tag) => (
            <span key={tag} className="bg-accent-muted px-2 py-1 rounded-full">
              <p className="font-display text-xs text-accent-warm">{tag}</p>
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-muted">What I learned:</p>
        <ol className="list-disc text-xs text-muted pl-4">
          {project.learned.map((item, index) => (
            <li key={`${project.id}-${index}`}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="flex mt-3 gap-3">
        <Link
          target="_blank"
          href={project.live}
          className="bg-background flex items-center justify-center rounded-full transition-all duration-300 w-10 h-10 hover:bg-accent hover:scale-95"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
        <Link
          className="bg-background flex items-center justify-center rounded-full transition-all duration-300 w-10 h-10 hover:bg-accent hover:scale-95"
          target="_blank"
          href={project.github}
        >
          <SiGithub className="w-5 h-5" />
        </Link>
      </div>
    </motion.article>
  );
}