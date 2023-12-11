import Image from 'next/image'

type PersonalInfoProps = {
  name: string
  email: string
  birth: string
  location: string
  profileImage: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  email,
  birth,
  location,
  profileImage,
}) => {
  return (
    <div className='w-full mt-4 max-w-content'>
      <div className='grid h-auto grid-cols-12 gap-4 md:gap-12 md:h-96'>
        <div className='relative w-full col-start-1 col-end-6 overflow-hidden border rounded-xl'>
          <Image src={profileImage} alt='' fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='flex flex-col justify-center col-start-6 col-end-13 md:gap-6'>
          <div className='flex flex-col md:gap-2 md:flex-row'>
            <div className='text-lg font-bold md:text-4xl'>WHO AM I?</div>
            <div className='text-sm font-bold md:text-xl text-text-normal'>
              I am Web Frontend Engineer
            </div>
          </div>
          <div className='flex flex-col md:gap-4 md:flex-row'>
            <div className='text-lg font-bold md:text-xl'>Name</div>
            <div className='text-sm md:text-xl text-text-normal'>{name}</div>
          </div>
          <div className='flex flex-col md:gap-4 md:flex-row'>
            <div className='text-lg font-bold md:text-xl'>E-Mail</div>
            <div className='text-sm md:text-xl text-text-normal'>{email}</div>
          </div>
          <div className='flex-row hidden gap-4 md:flex'>
            <div className='text-xl font-bold'>Birth</div>
            <div className='text-xl'>{birth}</div>
          </div>
          <div className='flex-row hidden gap-4 md:flex'>
            <div className='text-xl font-bold'>Location</div>
            <div className='text-xl'>{location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
