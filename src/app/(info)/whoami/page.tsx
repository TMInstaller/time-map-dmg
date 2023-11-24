import PersonalInfo from '@/components/info/PersonalInfo'
import StackInfo from '@/components/info/StackInfo'
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
        <div className='flex gap-8'>
          <div>
            <StackInfo category='Frameworks' />
            <StackInfo category='Libraries' />
            <StackInfo category='CSS' />
          </div>
          <div>
            <StackInfo category='Languages' />
            <StackInfo category='Package Manager' />
            <StackInfo category='Communication' />
            <StackInfo category='AI Manager' />
          </div>
        </div>
      </TechStack>
    </div>
  )
}

export default withLayout(WhoAmI)
