import ActivityInfo from '@/components/info/ActivityInfo'
import withLayout from '@/hoc/withLayout'

const Activities: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-5xl font-bold mt-4'>Activities</div>
      <ActivityInfo
        title='REMEMBER PLUS'
        activityType='Team Project'
        description='당신의 명함관계를 밤하늘의 별자리로'
        where='2023 Silicon Valley Summer Bootcamp'
        period='2023.07 ~ 2023.11'
        result='종합 2위'
        moreInfoURL='https://time-map-installer.tistory.com/250'
        imageUrl='/RememberPlus.png'
      />
    </div>
  )
}

export default withLayout(Activities)
