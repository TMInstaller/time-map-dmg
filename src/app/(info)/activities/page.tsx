'use client'
import ActivityInfo from '@/components/info/ActivityInfo'
import withLayout from '@/hoc/withLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Activity = {
  title: string
  activityType: string
  description: string
  where: string
  period: string
  result: string
  moreInfoURL: string
  imageURL: string
}

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/info/activities')
      .then((response) => {
        const data = response.data.activities
        setActivities(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-4 text-5xl font-bold'>Activities</div>
      {activities.map((activity, index) => (
        <ActivityInfo
          key={index}
          title={activity.title}
          activityType={activity.activityType}
          description={activity.description}
          where={activity.where}
          period={activity.period}
          result={activity.result}
          moreInfoURL={activity.moreInfoURL}
          imageURL={activity.imageURL}
        />
      ))}
    </div>
  )
}

export default withLayout(Activities)
