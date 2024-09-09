import React from 'react'

const Content = ({content}:{content:string}) => {
  return (
    <p className='max-w-[90%] md:max-w-[700px] lg:max-w-[900px] leading-relaxed'>
          {content}
    </p>
  )
}

export default Content