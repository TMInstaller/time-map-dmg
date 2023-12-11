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

  const container = {
    common: 'p-4 mt-4 bg-background-light rounded-xl animate-slide-in',
    hover: 'hover:animate-pulse hover:cursor-pointer',
    web: 'grid grid-cols-12 w-[92%] max-w-content',
    mobile: 'grid grid-cols-1',
  }

  return (
    <div
      className={`${container.common} ${container.hover} ${container.mobile} md:${container.web}`}
      onClick={() => router.push(moreInfoURL)}
    >
      <div className='relative col-start-1 col-end-6 bg-background-light'>
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
        />
      </div>
      <div
        className={`col-start-6 col-end-13 p-4 bg-background-light flex flex-col justify-center gap-2`}
      >
        <div className='flex flex-col gap-2 md:flex-row'>
          <div className='text-xl font-bold md:text-4xl'>{title}</div>
          <div className='text-sm font-bold md:text-xl'>{activityType}</div>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='text-sm md:text-xl'>{description}</div>
        </div>
        <div className='flex-row hidden gap-4 md:flex'>
          <div className='text-sm font-bold md:text-xl'>Where</div>
          <div className='text-sm md:text-xl'>{where}</div>
        </div>
        <div className='flex-row hidden gap-4 md:flex'>
          <div className='text-sm font-bold md:text-xl'>Period</div>
          <div className='text-sm md:text-xl'>{period}</div>
        </div>
        <div className='flex-row hidden gap-4 md:flex'>
          <div className='text-sm font-bold md:text-xl'>Result</div>
          <div className='text-sm md:text-xl'>{result}</div>
        </div>
        <div className='hidden text-sm font-bold text-red-500 md:block md:text-xl hover:underline'>
          <Link href={moreInfoURL} target='_blank'>
            More Information
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActivityInfo
