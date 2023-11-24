import Image from 'next/image'

type PersonalInfoProps = {
  name: string
  email: string
  birth: string
  phone: string
  location: string
  profileImage: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  email,
  birth,
  phone,
  location,
  profileImage,
}) => {
  return (
    <div className='max-w-content w-full mt-4'>
      <div className='h-96 grid grid-cols-12 gap-12'>
        <div className='col-start-1 col-end-6 w-full relative border rounded-xl overflow-hidden'>
          <Image src={profileImage} alt='' fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='col-start-6 col-end-13 flex flex-col gap-6 justify-center'>
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
            <div className='text-xl font-bold'>Phone</div>
            <div className='text-xl'>{phone}</div>
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
