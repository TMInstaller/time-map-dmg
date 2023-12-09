import Link from 'next/link'

const Header = () => {
  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  return (
    <div className='flex items-center justify-center w-screen h-20 bg-background-light'>
      <div className='flex justify-between w-full max-w-content'>
        <div className='font-serif text-3xl font-bold text-white'>
          <Link href='/'>TimeMap.dmg</Link>
        </div>
        <div className='flex row-auto gap-20'>
          {categories.map((category, index) => (
            <Link key={index} href={`/${category.replace(/\s+/g, '').toLowerCase()}`} passHref>
              <div className='font-serif text-2xl'>{category}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
