import Image from 'next/image'
import { ReactNode } from 'react'

type StackInfoProps = {
  category: string
  children?: ReactNode
}

const StackInfo: React.FC<StackInfoProps> = ({ category, children }) => {
  return (
    <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl w-96'>
      <div className='flex flex-col w-full p-4 bg-background-box rounded-xl'>
        <div className='flex flex-col justify-center gap-2 bg-background-box rounded-xl'>
          <div className='font-serif text-4xl font-bold text-black'>{category}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StackInfo
