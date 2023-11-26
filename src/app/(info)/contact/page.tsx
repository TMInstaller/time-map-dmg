import withLayout from '@/hoc/withLayout'
import Image from 'next/image'
import Link from 'next/link'

const Contact: React.FC = () => {
  // 현재는 orbit 상태만을 유지시키고 있지만 추후에 고정되어있는 UI 방문링크를 추가할 예정
  const commonStyle = 'col-start-5 col-end-8 row-start-2 row-end-3 py-12 px-16'

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-content w-full mt-6'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          <div className={`${commonStyle} animate-orbit1`}>
            <div className='h-full bg-background-box grid justify-center items-center relative rounded-full hover:scale-105'>
              <Link href={`https://github.com/TMInstaller`}>
                <Image src='/github.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit2`}>
            <div className='h-full bg-background-box grid justify-center items-center relative rounded-full hover:scale-105'>
              <Link href={`https://medium.com/@tminstaller`}>
                <Image src='/Medium.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit3`}>
            <div className='h-full grid justify-center items-center relative hover:scale-105'>
              <Link href={`https://disquiet.io/@tminstaller`}>
                <Image src='/Disquiet.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle}`}>
            <div className='h-full grid justify-center items-center relative hover:scale-105'>
              <Link href='https://time-map-installer.tistory.com/'>
                <Image src='/Tistory.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit4`}>
            <div className='h-full grid justify-center items-center relative hover:scale-105'>
              <Link href={`https://open.kakao.com/o/seUHkOpf`}>
                <Image src='/Kakao.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit5`}>
            <div className='h-full w-5/6 bg-background-box grid justify-center items-center relative rounded-xl hover:scale-105'>
              <Link href={`/whoami`}>
                <Image src='/Mail.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit6`}>
            <div className='h-full grid justify-center items-center relative hover:scale-105'>
              <Link href={`https://www.linkedin.com/in/timemap`}>
                <Image src='/linkedIn.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
