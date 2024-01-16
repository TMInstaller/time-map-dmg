import MainProjectInfo from '@/components/info/MainProjectInfo'
import withLayout from '@/hoc/withLayout'
import { getAllProjects } from '@/lib/markdown'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  const projects = getAllProjects(['slug', 'title'])
  console.log(projects)

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withLayout(Projects)

// const Projects: React.FC = () => {
//   return (
//     <div className='flex flex-col items-center text-white'>
//       <MainProjectInfo />

//       <div className='grid w-full h-auto grid-cols-12 gap-4 p-4 max-w-content rounded-xl'>
//         <select
//           id='categories'
//           className='col-start-1 col-end-3 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
//         >
//           <option defaultValue=''>Categories</option>
//           <option value='Web'>Web</option>
//           <option value='Mobile'>Mobile</option>
//         </select>
//         <select
//           id='sort'
//           className='col-start-3 col-end-5 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
//         >
//           <option defaultValue=''>Sort By</option>
//           <option value='recentASC'>Recent ASC</option>
//           <option value='recentDESC'>Recent DESC</option>
//           <option value='alphabeticASC'>Alphabetic ASC</option>
//           <option value='alphabeticDESC'>Alphabetic DESC</option>
//         </select>

//         <form className='col-start-5 col-end-13'>
//           <div className='relative '>
//             <div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
//               <svg
//                 className='w-4 h-4 text-gray-500 dark:text-gray-400'
//                 aria-hidden='true'
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 20 20'
//               >
//                 <path
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
//                 />
//               </svg>
//             </div>
//             <input
//               type='search'
//               id='default-search'
//               className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//               placeholder='Search Projects...'
//               required
//             />
//             <button
//               type='submit'
//               className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className='grid w-full grid-cols-3 gap-4 max-w-content h-72'>
//         <div className='relative rounded-xl hover:scale-105'>
//           <Image
//             src='/auto-overnight.png'
//             alt=''
//             fill
//             style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
//           />
//           <div className='absolute bottom-0 flex items-center justify-between w-full px-2 bg-black opacity-60 h-1/6'>
//             <div>AUTO-OverNight</div>
//             <div>대학 외박신청어플</div>
//           </div>
//         </div>
//         <div className='relative rounded-xl hover:scale-105'>
//           <Image
//             src='/HQRoutine.png'
//             alt=''
//             fill
//             style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
//           />
//           <div className='absolute bottom-0 flex items-center justify-between w-full px-2 bg-black opacity-60 h-1/6'>
//             <div>HQ Routine</div>
//             <div>이벤트 일정 공유 서비스</div>
//           </div>
//         </div>
//         <div className='relative rounded-xl hover:scale-105'>
//           <Image
//             src='/CropDoctor.png'
//             alt=''
//             fill
//             style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
//           />
//           <div className='absolute bottom-0 flex items-center justify-between w-full px-2 bg-black opacity-60 h-1/6'>
//             <div>Crop Doctor</div>
//             <div>작물 병해 진단 플랫폼</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
