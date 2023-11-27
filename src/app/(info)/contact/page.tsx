import withLayout from '@/hoc/withLayout'
import Image from 'next/image'
import Link from 'next/link'

const Contact: React.FC = () => {
  // 현재는 orbit 상태만을 유지시키고 있지만 추후에 고정되어있는 UI 방문링크를 추가할 예정
  const commonStyle = 'col-start-5 col-end-8 row-start-2 row-end-3 px-16 py-12'

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-6 max-w-content'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          <div className={`${commonStyle} animate-orbit1`}>
            <div className='relative grid items-center justify-center h-full rounded-full bg-background-box hover:scale-105'>
              <Link href={`https://github.com/TMInstaller`}>
                <Image src='/github.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit2`}>
            <div className='relative grid items-center justify-center h-full rounded-full bg-background-box hover:scale-105'>
              <Link href={`https://medium.com/@tminstaller`}>
                <Image src='/Medium.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit3`}>
            <div className='relative grid items-center justify-center h-full hover:scale-105'>
              <Link href={`https://disquiet.io/@tminstaller`}>
                <Image src='/Disquiet.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle}`}>
            <div className='relative grid items-center justify-center h-full hover:scale-105'>
              <Link href='https://time-map-installer.tistory.com/'>
                <Image src='/Tistory.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit4`}>
            <div className='relative grid items-center justify-center h-full hover:scale-105'>
              <Link href={`https://open.kakao.com/o/seUHkOpf`}>
                <Image src='/Kakao.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit5`}>
            <div className='relative grid items-center justify-center w-5/6 h-full bg-background-box rounded-xl hover:scale-105'>
              <Link href={`/whoami`}>
                <Image src='/Mail.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit6`}>
            <div className='relative grid items-center justify-center h-full hover:scale-105'>
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
