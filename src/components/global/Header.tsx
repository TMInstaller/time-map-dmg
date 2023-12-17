'use client'
import Link from 'next/link'
import { useState } from 'react'
import './Header.style.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  const menuClass = isMenuOpen ? 'menu-slide-enter-active' : 'menu-slide-enter'

  const container = {
    common: 'flex items-center justify-between bg-background-light text-white',
    web: 'md:px-10 md:h-20',
    mobile: 'px-4 h-16',
  }

  const logo = {
    common: 'font-serif font-bold',
    web: 'md:text-3xl',
    mobile: 'text-2xl',
  }

  const webMenu = {
    common: '',
    web: 'md:flex md:row-auto md:gap-6',
    mobile: 'hidden',
  }

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

  return (
    <div className={`${container.common} ${container.web} ${container.mobile}`}>
      <div className={`${logo.common} ${logo.web} ${logo.mobile}`}>
        <Link href='/intro'>TimeMap.dmg</Link>
      </div>
      <div className={`${webMenu.common} ${webMenu.web} ${webMenu.mobile}`}>
        {categories.map((category, index) => (
          <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
            <div className='font-serif text-2xl'>{category}</div>
          </Link>
        ))}
      </div>
      {/* 햄버거 메뉴 버튼 (모바일 뷰) */}
      <button
        className='md:hidden flex flex-col h-10 w-10 border-none rounded justify-center items-center group bg-[#BEB5DD]'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? 'rotate-45 translate-y-3 opacity-70 group-hover:opacity-100'
              : 'opacity-70 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? 'opacity-0' : 'opacity-70 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? '-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100'
              : 'opacity-70 group-hover:opacity-100'
          }`}
        />
      </button>
      {/* 메뉴 슬라이드 (모바일 뷰) */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${menuClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* 배경 오버레이 */}
          <div className={`fixed top-16 right-0 w-3/4 h-full bg-background-light pl-4 z-50`}>
            {/* 메뉴 슬라이드 */}
            {categories.map((category, index) => (
              <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
                <div className='flex align-bottom font-serif text-2xl pt-3 pl-3 h-16 border-b-4 border-background-theme'>
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
