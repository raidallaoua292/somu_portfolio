import React from 'react'
import Image from 'next/image'


const ProjectCrad = ({project}:any) => {
  return (
    <div className='w-full flex flex-col items-center'>
      
      <div className="p-4 border-secondary border-2 w-full max-w-[315px] h-[210px] lg:max-w-[430px] lg:h-[330px] lg:p-8 flex items-center justify-center">
        <Image 
          src='/project.png' 
          alt='project' 
          width={430} 
          height={330} 
          className='object-cover h-full w-full '
        />
      </div>
      
      <div className="flex items-end justify-end pt-5 w-full max-w-[315px] lg:max-w-[430px]">
        <h4 className="cursor-pointer hover:text-secondary transition-colors">
          التفاصيل &#x2926;
        </h4>
      </div>
    </div>
  )
}

export default ProjectCrad
