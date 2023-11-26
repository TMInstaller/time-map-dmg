import withLayout from '@/hoc/withLayout'

const Contact: React.FC = () => {
  const orbitClass = 'animate-orbit'

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-content w-full mt-8'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          <div className={`col-start-3 col-end-6 row-start-1 row-end-2 p-4 ${orbitClass}`}>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              1
            </div>
          </div>
          <div className='col-start-7 col-end-10 row-start-1 row-end-2 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              2
            </div>
          </div>

          <div className='col-start-2 col-end-5 row-start-2 row-end-3 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              3
            </div>
          </div>
          <div className='col-start-5 col-end-8 row-start-2 row-end-3 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              4
            </div>
          </div>
          <div className='col-start-8 col-end-11 row-start-2 row-end-3 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              5
            </div>
          </div>

          <div className='col-start-3 col-end-6 row-start-3 row-end-4 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              6
            </div>
          </div>
          <div className='col-start-7 col-end-10 row-start-3 row-end-4 p-4'>
            <div className='h-full bg-background-box grid justify-center items-center rounded-xl'>
              7
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
