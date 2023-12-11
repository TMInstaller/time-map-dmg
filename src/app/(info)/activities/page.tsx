'use client'
import ActivityInfo from '@/components/info/ActivityInfo'
import { API_URL } from '@/constants/urls'
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
      .get(`${API_URL}info/activities`)
      .then((response) => {
        const data = response.data.activities
        setActivities(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mt-4 text-3xl font-bold text-white md:text-5xl'>Activities</div>
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
