import React from 'react'
import Image from 'next/image'
import data from '@/data/data.json'
import Titel from './ui/titel'
import Content from './ui/content'
import CircularProgress from './ui/circulProgrees'

const Experience = () => {
  return (
    <section className='px-6 sm:px-16 py-20 w-full gap-24 flex flex-col items-center justify-around relative'>
      <div className='flex flex-col items-center text-center text-base sm:text-lg lg:text-2xl'>
        {/* Title */}
        <Titel> الخبرة </Titel>
        {/* Description */}
        <Content content={data.experience} />
      </div>
      {/* Skills */}
      <div className='flex flex-col items-center text-center text-base sm:text-lg lg:text-2x gap-4'>
        <Titel> المهارات </Titel>
        <div className='grid grid-cols-2  place-items-center justify-center'>
          {data.skills.map((skill,index) => (
            <div key={index} className='flex items-center gap-2'>
                <Image src= {skill.img} alt={skill.name} width={10} height={10} className='w-10 h-10' />
              <p className='text-sm sm:text-base'>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-12 flex-wrap'>
          {
            data.tools.map((tool,index) => (
              <CircularProgress content={tool.name} size={100} strokeWidth={7} progress={tool.presentage} />
            ))
          }
          
        </div>
      </div>
      <Image src='/binary.png' alt='binary' width={500} height={500} className='w-48 h-48 absolute -bottom-24 left-5' />
      
      <Image src='/dispay-code.png' alt='binary' width={500} height={500} className='w-96 h-96 absolute top-48 left-24' />

      <Image src='/code-simple.png' alt='binary' width={500} height={500} className='w-48 h-48 absolute top-1/2 right-4' />

    </section>
  )
}

export default Experience