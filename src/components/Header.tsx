import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-fit py-2.5 px-8 w-full flex items-center justify-end drop-shadow-xl'>

      <Link href='/'>
          <Image src='/Logo-Somu-Academy.png' alt='logo' width={100} height={100} className='cursor-pointer w-20 md:w-28' />

      </Link>
  
    </header>

  )
}

export default Header