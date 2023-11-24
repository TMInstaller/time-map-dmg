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
            <StackInfo category='Frameworks'>
              <div className='relative h-32'>
                <Image src='/Nextjs.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-16'>
                <Image src='/sveltekit.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
            <StackInfo category='Libraries'>
              <div className='relative h-32'>
                <Image src='/ReactSvelte.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-28'>
                <Image src='/D3Highcharts.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-28'>
                <Image src='/ThreeJS.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
            <StackInfo category='CSS'>
              <div className='relative h-8'>
                <Image src='/tailwind.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-24'>
                <Image src='/emotion.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-32'>
                <Image src='/sass.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
          </div>
          <div>
            <StackInfo category='Languages'>
              <div className='relative h-32'>
                <Image src='/jsts.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
            <StackInfo category='Package Manager'>
              <div className='relative h-28'>
                <Image src='/yarn.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-28'>
                <Image src='/npm.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
            <StackInfo category='Communication'>
              <div className='relative h-24'>
                <Image src='/slack.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-32'>
                <Image src='/Figma.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-24'>
                <Image src='/Jira.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='relative h-24'>
                <Image src='/notion.png' alt='' fill style={{ objectFit: 'contain' }} />
              </div>
            </StackInfo>
          </div>
        </div>
      </TechStack>
    </div>
  )
}

export default withLayout(WhoAmI)
