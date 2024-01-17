'use client'

import withLayout from '@/hoc/withLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

type Project = {
  title: string
  // 기타 필요한 속성 추가
}

function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [content, setContent] = useState('')

  useEffect(() => {
    axios
      .get(`/api/v1/info/projects/${params.slug}`)
      .then((response) => {
        setProject(response.data.project)
        setContent(response.data.content)
      })
      .catch((error) => console.error('Error:', error))
  }, [params, params.slug])

  if (!project) {
    return <p>Project Data Loading...</p>
  }

  return (
    <div className='mt-8 flex justify-center items-center'>
      {/* 화면 전체 높이에 걸쳐 중앙 정렬 */}
      <article className='w-full md:w-2/3 flex flex-col px-4 md:px-0'>
        {/* 전체 너비에서 반으로 줄임 */}
        <h1 className='text-4xl font-bold text-center'>{project.title}</h1>
        <ReactMarkdown
          components={{
            // 예를 들어 h1 태그에 대한 커스텀 렌더링
            h1: ({ node, ...props }) => <h1 className='text-3xl font-bold my-4' {...props} />,
            h2: ({ node, ...props }) => <h2 className='text-2xl font-bold my-4' {...props} />,
            h3: ({ node, ...props }) => <h3 className='text-xl font-bold my-4' {...props} />,
            p: ({ node, ...props }) => <p className='my-2 text-base' {...props} />,
            a: ({ node, ...props }) => <a className='text-blue-600 hover:underline' {...props} />,
            ul: ({ node, ...props }) => <ul className='list-disc list-inside my-4' {...props} />,
            li: ({ node, ...props }) => <li className='ml-4' {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote
                className='border-l-4 border-blue-600 pl-4 py-2 italic bg-blue-50 text-black'
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code className='bg-gray-600 rounded p-[2px] font-mono text-sm' {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </article>
    </div>
  )
}

export default withLayout(ProjectPage)
