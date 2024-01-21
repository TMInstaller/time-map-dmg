// lib/markdown.ts
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// 마크다운 파일이 저장된 디렉토리 경로 설정
const projectsDirectory = join(process.cwd(), 'src/data')

// 마크다운 파일의 슬러그(파일 이름)를 가져오는 함수
export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory)
}

// 특정 슬러그에 해당하는 마크다운 파일을 읽고 필요한 데이터를 추출하는 함수
export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // 필요한 필드 데이터만 추출
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

// 모든 포스트의 필요한 데이터를 배열로 반환하는 함수
export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectsSlugs()
  const posts = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // 포스트를 날짜 순으로 정렬
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
  return posts
}

/** 마크다운 문자열을 HTML 문자열로 변환하는 함수  */
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
