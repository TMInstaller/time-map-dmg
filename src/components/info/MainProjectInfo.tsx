import Image from 'next/image'
import Link from 'next/link'

const MainProjectInfo = () => {
  return (
    <div className='grid grid-cols-12 max-w-content w-full h-auto mt-4 bg-background-light p-4 rounded-xl gap-4'>
      <div className='col-start-1 col-end-7 relative bg-background-light flex flex-col justify-center items-center'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/Orf4dlkqGfo?si=7HEAPEdTbJSgwCWQ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
      <div
        className={`col-start-7 col-end-13 p-4 bg-background-light flex flex-col justify-center`}
      >
        <div className='flex flex-row gap-4 mb-4'>
          <div className='text-5xl font-bold'>Project</div>
          <div className='text-2xl font-bold'>Remember Plus</div>
        </div>
        <div className='flex flex-row gap-4 hover:border border-white'>
          <div className='text-xl font-bold'>Info</div>
          <div className='text-xl'>명함 관계 시각화 서비스</div>
        </div>
        <div className='flex flex-row gap-4 hover:border border-white'>
          <div className='text-xl font-bold'>Period</div>
          <div className='text-xl'>2023.07 ~ 2023.11</div>
        </div>
        <div className='flex flex-row gap-4 hover:border border-white'>
          <div className='text-xl font-bold'>Position</div>
          <div className='text-xl'>Frontend, DevOps</div>
        </div>
        <div className='flex flex-row gap-4 hover:border border-white'>
          <div className='text-xl font-bold'>Stacks</div>
          <div className='text-xl'>React.js, TailwindCSS, Three.js, D3.js</div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-xl font-bold'>Visit Articles</div>
          <div className='w-5/6 h-28 bg-background-boxlight rounded-lg grid grid-cols-3 py-2 hover:scale-105'>
            <div className='relative col-start-1 col-end-2 hover:scale-105'>
              <Link href={`https://github.com/SV-Summer-BootCamp-Team-F`}>
                <Image src='/github.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
            <div className='relative col-start-2 col-end-3 hover:scale-105'>
              <Link
                href={`https://medium.com/@tminstaller/siliconvalley-winter-bootcamp-remember-plus-korean-803311e5fa9c`}
              >
                <Image src='/medium.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
            <div className='relative col-start-3 col-end-4 hover:scale-105'>
              <Link href={`https://time-map-installer.tistory.com/250`}>
                <Image src='/tistory.png' alt='' fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainProjectInfo
