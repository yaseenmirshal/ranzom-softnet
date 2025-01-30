// app/layout.js
import localFont from "next/font/local"; // Import localFont
import { Sora } from 'next/font/google'; // Import the Sora font
import "./globals.css"; // Import your global CSS
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load the Sora font
const sora = Sora({
  subsets: ['latin'], // Specify the subsets you need
  weights: ['100', '400', '600', '800'], // Specify the font weights you want to use
});

export const metadata = {
  title: "Ranzom Technologies | Software Development & AI Solutions",
  description: "Ranzom Technologies - Leading software development, AI solutions, web development, UI/UX design, and digital transformation services.",
  keywords: "software development, AI solutions, web development, UI/UX design, mobile app development, digital transformation, IT consulting, cloud computing, machine learning, custom software, technology services, Ranzom Technologies",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.className} antialiased`} // Add Sora class here
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
