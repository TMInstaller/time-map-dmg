import ActivityInfo from '@/components/info/ActivityInfo'
import withLayout from '@/hoc/withLayout'

const Activities: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-5xl font-bold mt-4'>Activities</div>
      <ActivityInfo />
    </div>
  )
}

export default withLayout(Activities)
