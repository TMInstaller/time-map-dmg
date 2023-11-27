'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Home() {
  const [tooltip, setTooltip] = useState('')

  const handleMouseEnter = (category: string) => {
    setTooltip(`More about ${category}`)
  }

  const handleMouseLeave = () => {
    setTooltip('')
  }

  const container: string = 'grid grid-cols-2 gap-4 w-screen h-screen p-10 text-center'
  const serviceName: string =
    'col-span-2 text-6xl font-bold flex justify-center items-center hover:animate-pulse'
  const categoryClass: string =
    'p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out relative font-bold text-3xl'

  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  return (
    <div className={container}>
      <h1 className={serviceName}>TimeMap.dmg</h1>
      {categories.map((category, index) => (
        <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
          <div
            className={categoryClass}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            {category}
            {tooltip === `More about ${category}` && (
              <div className='absolute w-full p-2 mt-2 bg-gray-700 border'>{tooltip}</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
