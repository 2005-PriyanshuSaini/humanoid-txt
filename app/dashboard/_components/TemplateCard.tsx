import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'

function TemplateCard(item:TEMPLATE) {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col'>
        <Image src={item.icon} alt='icon' width={50} height={50} />
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
    </div>
  )
}

export default TemplateCard