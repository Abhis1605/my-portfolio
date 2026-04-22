import { DM_Sans, DM_Serif_Display, Syne} from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-logo"
})

export const metadata = {
  title: "Abhi Solanki - Developer",
  description: "MERN Stack Developer Portfolio"
}


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" /> 
      </body>
    </html>
  );
}
