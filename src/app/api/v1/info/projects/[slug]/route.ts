import { getProjectBySlug, markdownToHtml } from '@/lib/markdown'

// request: Request 를 추가했는데 갑자기 데이터가 불러와진다고?
// 분명 request는 선언되었고 사용되지 않았는데?
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const project = getProjectBySlug(slug, ['title', 'content'])
    // const content = await markdownToHtml(project.content || '')
    const content = project.content || ''

    return new Response(JSON.stringify({ project, content }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error:', error)
    // 적절한 에러 응답을 반환합니다.
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
