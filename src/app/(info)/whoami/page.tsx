import PersonalInfo from '@/components/info/PersonalInfo'
import StackInfo from '@/components/info/StackInfo'
import TechStack from '@/components/info/TechStack'
import TechStackItem from '@/components/info/TechStackItem'
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
              <TechStackItem imgSrc='/Nextjs.png' height='32' />
              <TechStackItem imgSrc='/sveltekit.png' height='16' />
            </StackInfo>
            <StackInfo category='Libraries'>
              <TechStackItem imgSrc='/ReactSvelte.png' height='32' />
              <TechStackItem imgSrc='/D3Highcharts.png' height='28' />
              <TechStackItem imgSrc='/ThreeJS.png' height='28' />
            </StackInfo>
            <StackInfo category='CSS'>
              <TechStackItem imgSrc='/tailwind.png' height='8' />
              <TechStackItem imgSrc='/emotion.png' height='24' />
              <TechStackItem imgSrc='/sass.png' height='32' />
            </StackInfo>
          </div>
          <div>
            <StackInfo category='Languages'>
              <TechStackItem imgSrc='/jsts.png' height='32' />
            </StackInfo>
            <StackInfo category='Package Manager'>
              <TechStackItem imgSrc='/yarn.png' height='28' />
              <TechStackItem imgSrc='/npm.png' height='28' />
            </StackInfo>
            <StackInfo category='Communication'>
              <TechStackItem imgSrc='/slack.png' height='24' />
              <TechStackItem imgSrc='/Figma.png' height='32' />
              <TechStackItem imgSrc='/Jira.png' height='24' />
              <TechStackItem imgSrc='/notion.png' height='24' />
            </StackInfo>
          </div>
        </div>
      </TechStack>
    </div>
  )
}

export default withLayout(WhoAmI)
