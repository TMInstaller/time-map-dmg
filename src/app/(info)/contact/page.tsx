import ContactOrbit from '@/components/info/ContactOrbit'
import withLayout from '@/hoc/withLayout'

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-6 max-w-content'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          <ContactOrbit
            href='https://github.com/TMInstaller'
            imgURL='/github.png'
            animationClass='animate-orbit1'
          />

          <ContactOrbit
            href='https://medium.com/@tminstaller'
            imgURL='/Medium.png'
            animationClass='animate-orbit2'
          />

          <ContactOrbit
            href='https://disquiet.io/@tminstaller'
            imgURL='/Disquiet.png'
            animationClass='animate-orbit3'
          />

          <ContactOrbit
            href='https://time-map-installer.tistory.com/'
            imgURL='/Tistory.png'
            animationClass=''
          />

          <ContactOrbit
            href='https://open.kakao.com/o/seUHkOpf'
            imgURL='/Kakao.png'
            animationClass='animate-orbit4'
          />

          <ContactOrbit href='/whoami' imgURL='/Mail.png' animationClass='animate-orbit5' />

          <ContactOrbit
            href='https://www.linkedin.com/in/timemap'
            imgURL='/linkedIn.png'
            animationClass='animate-orbit6'
          />
        </div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
