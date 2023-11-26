import MainProjectInfo from '@/components/info/MainProjectInfo'
import withLayout from '@/hoc/withLayout'
import Image from 'next/image'

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <MainProjectInfo />

      <div className='grid grid-cols-12 max-w-content w-full h-auto p-4 rounded-xl gap-4'>
        <select
          id='categories'
          className='col-start-1 col-end-3 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
        >
          <option selected>Categories</option>
          <option value='Web'>Web</option>
          <option value='Mobile'>Mobile</option>
        </select>
        <select
          id='sort'
          className='col-start-3 col-end-5 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
        >
          <option selected>Sort By</option>
          <option value='recentASC'>Recent ASC</option>
          <option value='recentDESC'>Recent DESC</option>
          <option value='alphabeticASC'>Alphabetic ASC</option>
          <option value='alphabeticDESC'>Alphabetic DESC</option>
        </select>

        <form className='col-start-5 col-end-13'>
          <div className='relative '>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Projects...'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className='grid grid-cols-3 max-w-content w-full h-72 gap-4'>
        <div className='relative rounded-xl hover:scale-105'>
          <Image
            src='/RememberPlus.png'
            alt=''
            fill
            style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
          />
          <div className='flex items-center justify-between absolute bottom-0 w-full bg-black opacity-60 h-1/6 px-2'>
            <div>AUTO-OverNight</div>
            <div>대학 외박신청어플</div>
          </div>
        </div>
        <div className='relative rounded-xl hover:scale-105'>
          <Image
            src='/RememberPlus.png'
            alt=''
            fill
            style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
          />
          <div className='flex items-center justify-between absolute bottom-0 w-full bg-black opacity-60 h-1/6 px-2'>
            <div>HQ Routine</div>
            <div>이벤트 일정 공유 서비스</div>
          </div>
        </div>
        <div className='relative rounded-xl hover:scale-105'>
          <Image
            src='/RememberPlus.png'
            alt=''
            fill
            style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
          />
          <div className='flex items-center justify-between absolute bottom-0 w-full bg-black opacity-60 h-1/6 px-2'>
            <div>Crop Doctor</div>
            <div>작물 병해 진단 플랫폼</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Projects)
