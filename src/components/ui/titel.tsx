import React from 'react'

const Titel = ({children}: { children: React.ReactNode }) => {
  return (
    <h2 className='relative w-fit pb-3.5 mb-4 md:mb-8 text-xl sm:text-2xl lg:text-3xl font-semibold before:underline'>
          {children}
    </h2>
  )
}

export default Titel