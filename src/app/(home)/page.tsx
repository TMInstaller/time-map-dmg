'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Home() {
  const [tooltip, setTooltip] = useState('')
  const router = useRouter()

  const handleMouseEnter = (category: string) => {
    setTooltip(`More about ${category}`)
  }

  const handleMouseLeave = () => {
    setTooltip('')
  }

  const handleMouseClick = (category: string) => {
    router.push(`/${category.toLowerCase()}`)
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
        <div
          key={index}
          className={categoryClass}
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMouseClick(category)}
        >
          {category}
          {tooltip === `More about ${category}` && (
            <div className='absolute w-full bg-gray-700 border p-2 mt-2'>{tooltip}</div>
          )}
        </div>
      ))}
    </div>
  )
}
