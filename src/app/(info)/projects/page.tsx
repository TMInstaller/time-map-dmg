import MainProjectInfo from '@/components/info/MainProjectInfo'
import withLayout from '@/hoc/withLayout'

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <MainProjectInfo />
    </div>
  )
}

export default withLayout(Projects)
