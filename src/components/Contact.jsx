"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialInstagram,
} from "react-icons/sl";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setStatus({ type: "loading", message: "" });
    emailjs
      .send(
        "service_e66oo7m",
        "template_prbnowl",
        formData,
        "Wv310UBx2m2iV4wKB",
      )
      .then(() => {
        toast.success("Message sent successfully!!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setStatus({ type: "", message: "" });
      })
      .catch(() => {
        toast.error("Something went wrong");
        setStatus({ type: "", message: "" });
      });
  };
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="px-[8%] lg:px-[5%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex items-center flex-col lg:flex-row lg:justify-between"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl capitalize tracking-widest text-center mb-6"
          >
            get - in touch
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-muted text-center lg:text-justify  text-base lg:w-1/2"
          >
            Let’s build something great together. I’m open to new opportunities,
            collaborations, and meaningful conversations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.14, delayChildren: 0.08 },
            },
          }}
          className="flex flex-col lg:flex-row lg:px-5 gap-5"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0, transition: { duration: 0.55 } },
            }}
            className="w-full  lg:w-1/2 p-4"
          >
            <h4 className="text-xl text-center lg:text-start mb-4">
              Contact Information
            </h4>
            <div className="">
              <div className="flex items-center md:justify-center lg:justify-start gap-4 mb-3">
                <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center  rounded-full">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <p>
                  Email:{" "}
                  <a href="mailto:abhi85076@gmail.com">abhi85076@gmail.com</a>
                </p>
              </div>
              <div className="flex  items-center md:justify-center lg:justify-start gap-4 mb-3">
                <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center rounded-full">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <p>
                  Phone: <a href="tel:+91-7990184694">+91-7990184694</a>
                </p>
              </div>

              <div className="flex items-center md:justify-center lg:justify-start gap-4">
                <div className="bg-accent-muted/50 w-8 h-8 flex items-center justify-center rounded-full">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p>
                  Location:{" "}
                  <a
                    href="https://maps.app.goo.gl/4hpTdvhvgbJK6Yu2A"
                    target="_blank"
                  >
                    Ahmedabad, Gujarat
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <p className="text-base font-display tracking-wide">
                Connect with Me:
              </p>
              <div className="flex flex-row items-center gap-4 mt-1">
                <Link
                  href="https://www.linkedin.com/in/abhi-solanki-364bb8258/"
                  target="_blank"
                >
                  <SlSocialLinkedin className="text-accent transition-colors duration-300 w-5 h-5 hover:text-white" />
                </Link>

                <Link href="https://github.com/Abhis1605" target="_blank">
                  <SlSocialGithub className="text-accent w-5 h-5 transition-colors duration-300 hover:text-white" />
                </Link>

                <Link
                  href="https://www.instagram.com/imabhisolanki/"
                  target="_blank"
                >
                  <SlSocialInstagram className="text-accent w-5 h-5 transition-colors duration-300 hover:text-white" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30, scale: 0.98 },
              show: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.55 },
              },
            }}
            className=" bg-white/10 backdrop-blur-md rounded-md py-5 lg:px-5 lg:py-5 w-full lg:w-1/2"
          >
            <h3 className="text-2xl text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="">
              <div className="flex flex-col items-center mt-4 gap-2 px-4 lg:px-0">
                <label htmlFor="name">Your Name</label>
                <input
                  placeholder="John Doe"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                />
                <label htmlFor="email">Your Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                />
                <label htmlFor="message">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, How are you!!"
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-2 rounded-md border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={status.type === "loading"}
                  className="cursor-pointer px-4 rounded-full gap-2 flex items-center py-2 text-white border-2 border-accent transition-colors duration-300 text-lg hover:text-accent hover:bg-white hover:border-0 hover:scale-95"
                  type="submit"
                >
                  Send <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
            {status.message && (
              <p
                className={`mt-4 text-center ${status.type === "error" ? "text-red-500" : "text-green-500"}`}
              >
                {status.message}
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
