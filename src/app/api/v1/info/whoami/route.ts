import { LOGO_IMG } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    [
      {
        category: 'Frameworks',
        items: [
          { imgSrc: LOGO_IMG.nextJS, height: 32 },
          { imgSrc: LOGO_IMG.svelteKit, height: 16 },
        ],
      },
      {
        category: 'Libraries',
        items: [
          { imgSrc: LOGO_IMG.reactSvelte, height: 32 },
          { imgSrc: LOGO_IMG.d3Highcharts, height: 28 },
          { imgSrc: LOGO_IMG.threeJS, height: 28 },
        ],
      },
      {
        category: 'CSS',
        items: [
          { imgSrc: LOGO_IMG.tailwind, height: 8 },
          { imgSrc: LOGO_IMG.emotion, height: 24 },
          { imgSrc: LOGO_IMG.sass, height: 32 },
        ],
      },
    ],
    [
      {
        category: 'Languages',
        items: [{ imgSrc: LOGO_IMG.jsTs, height: 32 }],
      },
      {
        category: 'Package Manager',
        items: [
          { imgSrc: LOGO_IMG.yarn, height: 28 },
          { imgSrc: LOGO_IMG.npm, height: 28 },
        ],
      },
      {
        category: 'Communication',
        items: [
          { imgSrc: LOGO_IMG.slack, height: 24 },
          { imgSrc: LOGO_IMG.figma, height: 32 },
          { imgSrc: LOGO_IMG.jira, height: 24 },
          { imgSrc: LOGO_IMG.notion, height: 24 },
        ],
      },
    ],
  ]

  return NextResponse.json({ stacks: res })
}
