import withLayout from '@/hoc/withLayout'

const Contact: React.FC = () => {
  const commonStyle = 'col-start-5 col-end-8 row-start-2 row-end-3 py-8 px-12'

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-content w-full mt-6'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          <div className={`${commonStyle} animate-orbit1`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              1
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit2`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              2
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit3`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              3
            </div>
          </div>
          <div className={`${commonStyle}`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl hover:animate-pulse'>
              center
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit4`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              4
            </div>
          </div>

          <div className={`${commonStyle} animate-orbit5`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              5
            </div>
          </div>
          <div className={`${commonStyle} animate-orbit6`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
