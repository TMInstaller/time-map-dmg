import Image from 'next/image'
import Link from 'next/link'

const ActivityInfo = () => {
  return (
    <div className='grid grid-cols-12 max-w-content w-full h-80 mt-4 animate-slide-in bg-background-light p-4 rounded-xl'>
      <div className='col-start-1 col-end-6 relative bg-background-light'>
        <Image src='/RememberPlus.png' alt='' fill style={{ objectFit: 'contain' }} />
      </div>
      <div
        className={`col-start-6 col-end-13 p-4 bg-background-light flex flex-col justify-center gap-2`}
      >
        <div className='flex flex-row gap-2'>
          <div className='text-4xl font-bold'>REMEMBER PLUS</div>
          <div className='text-xl font-bold'>Team Project</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl'>당신의 명함관계를 밤하늘의 별자리로</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Where</div>
          <div className='text-xl'>2023 SilliconValley Summer Bootcamp</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Period</div>
          <div className='text-xl'>2023.07 ~ 2023.11</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Result</div>
          <div className='text-xl'>종합 2위</div>
        </div>
        <div className='text-xl font-bold text-red-500 hover:underline'>
          <Link href='https://time-map-installer.tistory.com/250'>
            More Information(Visit Tistory)
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActivityInfo
