import { ReactNode } from 'react'

type StackInfoProps = {
  category: string
  children?: ReactNode
}

const StackInfo: React.FC<StackInfoProps> = ({ category, children }) => {
  return (
    <div className='flex justify-center mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl w-96'>
      <div className='flex flex-col w-9/12 p-4 md:w-full bg-background-box rounded-xl'>
        <div className='flex flex-col justify-center gap-2 bg-background-box rounded-xl'>
          <div className='font-serif text-xl font-bold text-black md:text-4xl'>{category}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StackInfo
