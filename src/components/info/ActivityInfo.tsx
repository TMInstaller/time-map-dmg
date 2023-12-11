import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ActivityInfoProps = {
  title: string
  activityType: string
  description: string
  where: string
  period: string
  result: string
  moreInfoURL: string
  imageURL: string
}

const ActivityInfo: React.FC<ActivityInfoProps> = ({
  title,
  activityType,
  description,
  where,
  period,
  result,
  moreInfoURL,
  imageURL,
}) => {
  const router = useRouter()
  return (
    <div
      className='grid w-full grid-cols-12 p-4 mt-4 max-w-content h-80 animate-slide-in bg-background-light rounded-xl hover:animate-pulse hover:cursor-pointer'
      onClick={() => router.push(moreInfoURL)}
    >
      <div className='relative col-start-1 col-end-6 bg-background-light'>
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes='(min-width: 512px) 600px, 100vw'
          style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
        />
      </div>
      <div
        className={`col-start-6 col-end-13 p-4 bg-background-light flex flex-col justify-center gap-2`}
      >
        <div className='flex flex-row gap-2'>
          <div className='text-4xl font-bold'>{title}</div>
          <div className='text-xl font-bold'>{activityType}</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl'>{description}</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Where</div>
          <div className='text-xl'>{where}</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Period</div>
          <div className='text-xl'>{period}</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-xl font-bold'>Result</div>
          <div className='text-xl'>{result}</div>
        </div>
        <div className='text-xl font-bold text-red-500 hover:underline'>
          <Link href={moreInfoURL} target='_blank'>
            More Information
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActivityInfo
