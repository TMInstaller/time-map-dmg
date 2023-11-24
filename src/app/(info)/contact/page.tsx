import withLayout from '@/hoc/withLayout'

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-content w-full mt-4'>
        <div className='border border-white'>여기는 Contact Page입니다</div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
