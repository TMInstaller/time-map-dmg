import withLayout from '@/hoc/withLayout'

const projectDetail = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-4 max-w-content'>
        <div className='border border-white'>여기는 Project Detail Page입니다</div>
      </div>
    </div>
  )
}

export default withLayout(projectDetail)
