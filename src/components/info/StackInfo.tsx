import Image from 'next/image'

type StackInfoProps = {
  category: string
}

const StackInfo: React.FC<StackInfoProps> = ({ category }) => {
  return (
    <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl w-96'>
      <div className='flex flex-col bg-background-box p-4 rounded-xl w-full'>
        <div className='flex flex-col justify-center bg-background-box rounded-xl'>
          <div className='font-serif font-bold text-4xl text-text-dark'>{category}</div>
          <div className='relative h-32'>
            <Image src='/Nextjs.png' alt='' fill style={{ objectFit: 'cover' }} />
          </div>
          <div className='relative h-12'>
            <Image src='/sveltekit.png' alt='' fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackInfo
