import { LOGO_LINKS } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    [
      {
        category: 'Frameworks',
        items: [
          { imgSrc: LOGO_LINKS.nextJS, height: 32 },
          { imgSrc: LOGO_LINKS.svelteKit, height: 16 },
        ],
      },
      {
        category: 'Libraries',
        items: [
          { imgSrc: LOGO_LINKS.reactSvelte, height: 32 },
          { imgSrc: LOGO_LINKS.d3Highcharts, height: 28 },
          { imgSrc: LOGO_LINKS.threeJS, height: 28 },
        ],
      },
      {
        category: 'CSS',
        items: [
          { imgSrc: LOGO_LINKS.tailwind, height: 8 },
          { imgSrc: LOGO_LINKS.emotion, height: 24 },
          { imgSrc: LOGO_LINKS.sass, height: 32 },
        ],
      },
    ],
    [
      {
        category: 'Languages',
        items: [{ imgSrc: LOGO_LINKS.jsTs, height: 32 }],
      },
      {
        category: 'Package Manager',
        items: [
          { imgSrc: LOGO_LINKS.yarn, height: 28 },
          { imgSrc: LOGO_LINKS.npm, height: 28 },
        ],
      },
      {
        category: 'Communication',
        items: [
          { imgSrc: LOGO_LINKS.slack, height: 24 },
          { imgSrc: LOGO_LINKS.figma, height: 32 },
          { imgSrc: LOGO_LINKS.jira, height: 24 },
          { imgSrc: LOGO_LINKS.notion, height: 24 },
        ],
      },
    ],
  ]

  return NextResponse.json({ stacks: res })
}
