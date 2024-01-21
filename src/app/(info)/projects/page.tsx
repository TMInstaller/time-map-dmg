// import MainProjectInfo from '@/components/info/MainProjectInfo'
import withLayout from '@/hoc/withLayout'
import { getAllProjects } from '@/lib/markdown'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  const projects = getAllProjects(['slug', 'title', 'imageUrl'])
  // 필터링 및 정렬 로직 추가 위치

  return (
    <div className='flex flex-col items-center text-white'>
      {/* ...카테고리, 정렬 선택, 검색 바... */}
      <div className='mt-4 text-3xl font-bold text-white md:text-5xl'>Projects</div>
      {/* 프로젝트 그리드 */}
      <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-content px-8 mt-8'>
        {projects.map((project) => (
          // 프로젝트 카드
          <div key={project.slug} className='relative rounded-xl hover:scale-105'>
            <Link href={`/projects/${project.slug}`}>
              {project.imageUrl ? (
                <div className='flex justify-center items-center h-48 rounded-xl'>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout='fill'
                    style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
                  />
                </div>
              ) : (
                <div className='flex justify-center items-center h-48 bg-gray-200 rounded-xl'>
                  <span className='text-gray-700'>No Image Available</span>
                </div>
              )}
              <div className='absolute bottom-0 flex items-center justify-between w-full px-2 bg-black opacity-60 h-1/6'>
                <div>{project.title}</div>
                {/* 추가 정보를 여기에 포함시킬 수 있습니다. */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withLayout(Projects)
