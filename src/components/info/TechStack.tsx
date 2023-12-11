import { ReactNode } from 'react'

type TechStackProps = {
  children: ReactNode
}

const TechStack: React.FC<TechStackProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto pb-4 mt-4 mb-4 text-center max-w-content bg-background-light rounded-xl'>
      <div className='mt-4 font-serif text-xl font-bold md:text-5xl'>I MAINLY USE</div>
      {children}
    </div>
  )
}

export default TechStack
