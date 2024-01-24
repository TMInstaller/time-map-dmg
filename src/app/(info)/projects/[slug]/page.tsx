'use client'

import CustomMarkdown from '@/components/info/CustomMarkdown'
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
    <div className='my-8 flex justify-center items-center px-6'>
      {/* 화면 전체 높이에 걸쳐 중앙 정렬 */}
      <article className='w-full md:w-2/3 flex flex-col px-4 py-8 border border-white rounded-xl md:max-w-[900px]'>
        {/* 전체 너비에서 반으로 줄임 */}
        <h1 className='text-4xl text-white mb-8 font-bold text-center'>{project.title}</h1>
        <CustomMarkdown content={content} />
      </article>
    </div>
  )
}

export default withLayout(ProjectPage)
