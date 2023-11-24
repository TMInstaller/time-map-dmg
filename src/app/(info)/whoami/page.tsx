import withLayout from '@/hoc/withLayout'
import Image from 'next/image'

const WhoAmI: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-content w-full mt-4'>
        <div className='h-96 grid grid-cols-12 gap-12'>
          <div className='col-start-1 col-end-6 w-full relative border rounded-xl overflow-hidden'>
            <Image src='/profile_image.jpg' layout='fill' objectFit='cover' alt='' />
          </div>
          <div className='col-start-6 col-end-13 flex flex-col gap-6 justify-center'>
            <div className='flex flex-row gap-2'>
              <div className='text-4xl font-bold'>WHO AM I?</div>
              <div className='text-xl font-bold'>I am Web Frontend Engineer</div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='text-xl font-bold'>Name</div>
              <div className='text-xl'>백동열</div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='text-xl font-bold'>E-Mail</div>
              <div className='text-xl'>dongyeol.json@gmail.com</div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='text-xl font-bold'>Birth</div>
              <div className='text-xl'>2000.03.17</div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='text-xl font-bold'>Phone</div>
              <div className='text-xl'>010-8713-6926</div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='text-xl font-bold'>Location</div>
              <div className='text-xl'>Ansan, Gyeonggi</div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-content w-full mt-4 flex flex-col justify-center items-center text-center bg-background-light rounded-xl'>
        <div className='font-serif font-bold text-5xl mt-4'>I MAINLY USE</div>
        <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl'>
          <div className='flex flex-col bg-background-box p-4 pr-12 pl-12 rounded-xl w-96'>
            <div className='font-serif font-bold text-4xl text-text-dark'>Frameworks</div>
            <div className='relative h-32'>
              <Image src='/Nextjs.png' layout='fill' objectFit='cover' alt='' />
            </div>
            <div className='relative h-12'>
              <Image src='/sveltekit.png' layout='fill' objectFit='cover' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withLayout(WhoAmI)
