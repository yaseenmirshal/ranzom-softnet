// app/layout.js
import { Poppins } from 'next/font/google'; // Correct import of Google font
import "./globals.css"; // Import your global CSS
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Load Poppins font with valid weights
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Added multiple weights for flexibility
  subsets: ["latin"],
});
export const metadata = {
  title: "Ranzom Technologies | Software Development & AI Solutions",
  description: "Ranzom Technologies - Leading software development, AI solutions, web development, UI/UX design, and digital transformation services.",
  keywords: "software development, AI solutions, web development, UI/UX design, mobile app development, digital transformation, IT consulting, cloud computing, machine learning, custom software, technology services, Ranzom Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
      
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
