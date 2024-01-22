'use client'
import IntroBackground from '@/components/animation/IntroBackground'
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  const container = {
    common: 'grid gap-4 w-screen h-screen text-center',
    web: 'md:grid-cols-2 md:p-10',
    mobile: 'grid-cols-1 p-4',
  }
  const serviceName = {
    common: 'font-bold flex justify-center items-center text-white',
    web: 'md:col-span-2 md:text-6xl',
    mobile: 'col-span-1 text-4xl',
  }
  const categoryName = {
    common: 'relative shadow-md font-bold',
    hover: 'hover:shadow-lg hover:text-white hover:bg-black hover:bg-opacity-40 hover:rounded-xl',
    web: 'md:p-8 md:text-3xl md:bg-transparent md:text-text-normal',
    mobile: 'p-4 text-xl bg-black bg-opacity-30 rounded-xl text-white',
  }
  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  return (
    <>
      <IntroBackground />
      <div className={`${container.common} ${container.web} ${container.mobile}`}>
        <div
          className={`${serviceName.common} ${serviceName.web} ${serviceName.mobile} flex-col gap-4 z-50`}
        >
          <div className='cursor-pointer'>
            <Link href={`/`}>TimeMap.dmg</Link>
          </div>
          <div className='text-sm md:text-lg animate-bounce hover:cursor-default'>
            - 뒤에 떠다니는 사각형을 눌러볼 수 있어요! -
          </div>
          <div className='text-sm md:text-lg animate-bounce hover:cursor-default'>
            - Try to click background Squares! -
          </div>
        </div>
        {categories.map((category, index) => (
          <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
            <div
              className={`${categoryName.common} ${categoryName.hover} ${categoryName.web} ${categoryName.mobile}`}
            >
              {category}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Intro
