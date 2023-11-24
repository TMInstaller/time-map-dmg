import PersonalInfo from '@/components/info/PersonalInfo'
import TechStack from '@/components/info/TechStack'
import withLayout from '@/hoc/withLayout'
import Image from 'next/image'

const WhoAmI: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <PersonalInfo
        name='백동열'
        email='dongyeol.json@gmail.com'
        birth='2000.03.17'
        phone='010-8713-6926'
        location='Ansan, Gyeonggi'
        profileImage='/profile_image.jpg'
      />

      <TechStack>
        <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl'>
          <div className='flex flex-col bg-background-box p-4 pr-12 pl-12 rounded-xl w-full'>
            <div className='flex flex-col justify-center bg-background-box rounded-xl'>
              <div className='font-serif font-bold text-4xl text-text-dark'>Frameworks</div>
              <div className='relative h-32'>
                <Image src='/Nextjs.png' alt='' fill style={{ objectFit: 'cover' }} />
              </div>
              <div className='relative h-12'>
                <Image src='/sveltekit.png' alt='' fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4 transition ease-in-out hover:scale-105 hover:shadow-xl'>
          <div className='flex flex-col bg-background-box p-4 pr-12 pl-12 rounded-xl w-full'>
            <div className='flex flex-col justify-center bg-background-box rounded-xl'>
              <div className='font-serif font-bold text-4xl text-text-dark'>Frameworks</div>
              <div className='relative h-32'>
                <Image src='/Nextjs.png' alt='' fill style={{ objectFit: 'cover' }} />
              </div>
              <div className='relative h-12'>
                <Image src='/sveltekit.png' alt='' fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </TechStack>
    </div>
  )
}

export default withLayout(WhoAmI)
