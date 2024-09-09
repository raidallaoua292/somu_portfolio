import React from 'react'
import data from '@/data/data.json'
import Card from "@/components/ui/card"
import Titel from './ui/titel'
import Content from './ui/content'
import { BsDatabaseUp } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";
import { TfiMobile } from "react-icons/tfi";





const About = () => {
  return (
    <section className='px-6 sm:px-16 bg-primary py-20 w-full min-h-screen flex flex-col items-center justify-around'>
      <div className='flex flex-col items-center text-center text-base sm:text-lg lg:text-2xl'>
        {/* Title */}
        <Titel> النبذة الشخصية </Titel>
        {/* Description */}
        <Content content={data.description} />
      </div>
      {/* Services */}
      <div className='grid grid-cols-2 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-4 lg:max-w-[900px]'>
        {data.services.map((service) => (
          <Card key={service.title} title={service.title} numProjects={service.numberProjects} img={service.img} />
        ))}


      </div>

    </section>
  )
}

export default About
