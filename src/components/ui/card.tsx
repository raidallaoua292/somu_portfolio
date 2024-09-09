import React from 'react';
import Image from 'next/image';

import { ServiceCardProps } from '@/types';

const Card = ({ title, numProjects, img }: ServiceCardProps) => {
  return (
    <div className='flex flex-col items-center gap-4 p-2.5 max-w-[130px] sm:max-w-[155px] md:max-w-[175px] bg-card shadow-lg'>
      <div className='border-cyan-50 border p-4 flex flex-col items-center text-center h-full w-full justify-between'>
        {/* Image with responsive sizing */}
        <Image src={img} alt={title} width={60} height={60} className='text-white fill-current' />
        
        {/* Title */}
        <h3 className='text-sm sm:text-base md:text-lg font-semibold'>{title}</h3>
        
        {/* Number of Projects */}
        <p className='text-center text-xs sm:text-sm md:text-base'>{numProjects}</p>
      </div>
    </div>
  );
};

export default Card;
