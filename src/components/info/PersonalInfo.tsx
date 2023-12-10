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
      <div className='grid grid-cols-12 gap-12 h-96'>
        <div className='relative w-full col-start-1 col-end-6 overflow-hidden border rounded-xl'>
          <Image src={profileImage} alt='' fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='flex flex-col justify-center col-start-6 col-end-13 gap-6'>
          <div className='flex flex-row gap-2'>
            <div className='text-4xl font-bold'>WHO AM I?</div>
            <div className='text-xl font-bold'>I am Web Frontend Engineer</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='text-xl font-bold'>Name</div>
            <div className='text-xl'>{name}</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='text-xl font-bold'>E-Mail</div>
            <div className='text-xl'>{email}</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='text-xl font-bold'>Birth</div>
            <div className='text-xl'>{birth}</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='text-xl font-bold'>Location</div>
            <div className='text-xl'>{location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
