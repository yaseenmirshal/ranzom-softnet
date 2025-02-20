'use client'

import "aos/dist/aos.css";
import Landingpage from "./Components/Landingpage"
import About from "./Components/About";
import Service from "./Components/Service"
import Clients from "./Components/Clients";
import Whychoose from "./Components/Whychoose";

export default function Home() {
  

  return (
   <>
   <Landingpage/>
   <Service/>
   
   <About/>
   <Whychoose/>
   <Clients/>
   </>
  );
}
