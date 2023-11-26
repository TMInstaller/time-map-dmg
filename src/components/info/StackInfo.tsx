import Image from 'next/image'
import { ReactNode } from 'react'

type StackInfoProps = {
  category: string
  children?: ReactNode
}

const StackInfo: React.FC<StackInfoProps> = ({ category, children }) => {
  return (
    <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl w-96'>
      <div className='flex flex-col bg-background-box p-4 rounded-xl w-full'>
        <div className='flex flex-col justify-center bg-background-box rounded-xl gap-2'>
          <div className='font-serif font-bold text-4xl text-black'>{category}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StackInfo
