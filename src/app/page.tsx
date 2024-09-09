import Image from "next/image";
import data from '@/data/data.json'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { fetchData } from "@/lib/utils";
import Projects from "@/components/Projects";


export default function Home() {

  return (
      <main className=" flex flex-col items-center pb-32">
        <Hero />
        <About />
        <Experience/>
        <Projects/>
      </main>
  );
}
