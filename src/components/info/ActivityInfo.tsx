import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <div className='grid grid-cols-12 max-w-content w-full h-80 mt-4 animate-slide-in bg-background-light p-4 rounded-xl'>
      <div className='col-start-1 col-end-6 relative bg-background-light'>
        <Image
          src={imageURL}
          alt={title}
          fill
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
