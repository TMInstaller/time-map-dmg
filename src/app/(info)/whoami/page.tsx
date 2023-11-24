import withLayout from '@/hoc/WithLayout'

const WhoAmI: React.FC = () => {
  return <div className='max-w-content w-full mt-4'>여기는 WhoAmI Page입니다</div>
}

export default withLayout(WhoAmI)
