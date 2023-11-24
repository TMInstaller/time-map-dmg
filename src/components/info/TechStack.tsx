import { ReactNode } from 'react'

type TechStackProps = {
  children: ReactNode
}

const TechStack: React.FC<TechStackProps> = ({ children }) => {
  return (
    <div className='max-w-content w-full h-auto mt-4 flex flex-col justify-center items-center text-center bg-background-light rounded-xl'>
      <div className='font-serif font-bold text-5xl mt-4'>I MAINLY USE</div>
      {children}
    </div>
  )
}

export default TechStack
