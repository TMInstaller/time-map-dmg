'use client'
import HomeBackground from '@/components/animation/HomeBackground'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Home() {
  const container: string = 'grid grid-cols-2 gap-4 w-screen h-screen p-10 text-center z-1'
  const serviceName: string =
    'col-span-2 text-6xl font-bold flex justify-center items-center hover:animate-pulse text-white'
  const categoryClass: string =
    'p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out relative font-bold text-3xl text-white'

  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  return (
    <>
      <HomeBackground />
      <div className={container}>
        <h1 className={serviceName}>TimeMap.dmg</h1>
        {categories.map((category, index) => (
          <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
            <div
              className={`${categoryClass} hover:animate-pulse hover:bg-black hover:bg-opacity-40 hover:rounded-xl`}
            >
              {category}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
