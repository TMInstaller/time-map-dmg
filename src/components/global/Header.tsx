import Link from 'next/link'

const Header = () => {
  const categories: string[] = ['Who am I', 'Projects', 'Activities', 'Contact']

  return (
    <div className='w-screen h-20 bg-background-light flex items-center justify-center'>
      <div className='flex justify-between max-w-content w-full'>
        <div className='font-serif font-bold text-3xl'>TimeMap.dmg</div>
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
