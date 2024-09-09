import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data/data.json';
import { FaGithub , FaLinkedinIn} from "react-icons/fa";


const Hero = () => {
  return (
    <section className='px-4 sm:px-8 lg:px-16 flex items-end h-auto md:h-screen'>
      <div className='flex flex-col-reverse items-center gap-6 md:flex-row'>
      {/* Text Section */}
      <div className='flex flex-col gap-3.5 items-center sm:items-start'>
        <div className='text-center md:text-right flex flex-col gap-3'>
          <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight'>
            {data.name}
          </h1>
          <p className='text-sm sm:text-lg lg:text-2xl lg:w-[620px]'>
            <span className='text-secondary-foreground'>{data.job}</span>{' '}
            {data.institute}
          </p>
        </div>

        {/* Buttons Section */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-6 p-4'>
          <Link href={data.links.Cv}>
            <button className='text-sm sm:text-base bg-secondary rounded-full flex justify-between items-center py-3 px-8 max-w-fit'>
              حمل السيفي الخاص بي
            </button>
          </Link>
          <ul className='flex gap-5 justify-center text-foreground'>
            <li>
              <Link href={data.links.linkedin}>
                <FaLinkedinIn size={24} />
              </Link>
            </li>
            <li>
              <Link href={data.links.github}>
              <FaGithub size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className='relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] '>
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-secondary  to-secondary opacity-40 blur-2xl -z-10'></div>
        <Image
          src='/profile.png'
          alt='profile'
          layout='responsive'
          width={400}
          height={400}
          className='object-cover absolute inset-0 bottom-0'
        />
      </div>

      </div>
    </section>
  );
};

export default Hero;
