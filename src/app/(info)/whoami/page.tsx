import Header from '@/components/global/Header'

export default function WhoAmI() {
  return (
    <>
      <Header />
      <div className='w-screen h-auto flex justify-center'>
        <div className='grid max-w-content w-full'>여기는 WhoAmI Page입니다</div>
      </div>
    </>
  )
}
