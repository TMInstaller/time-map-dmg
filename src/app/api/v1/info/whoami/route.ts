import { LOGO_IMG } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    [
      {
        category: 'Frameworks',
        items: [{ imgSrc: LOGO_IMG.framework.nextJS }, { imgSrc: LOGO_IMG.framework.svelteKit }],
      },
      {
        category: 'Libraries',
        items: [
          { imgSrc: LOGO_IMG.library.react },
          { imgSrc: LOGO_IMG.library.svelte },
          { imgSrc: LOGO_IMG.library.d3 },
          { imgSrc: LOGO_IMG.library.highcharts },
          { imgSrc: LOGO_IMG.library.threeJS },
        ],
      },
      {
        category: 'CSS',
        items: [
          { imgSrc: LOGO_IMG.css.tailwind },
          { imgSrc: LOGO_IMG.css.emotion },
          { imgSrc: LOGO_IMG.css.sass },
        ],
      },
    ],
    [
      {
        category: 'Languages',
        items: [{ imgSrc: LOGO_IMG.language.javaScript }, { imgSrc: LOGO_IMG.language.typeScript }],
      },
      {
        category: 'Package Manager',
        items: [{ imgSrc: LOGO_IMG.packageManager.yarn }, { imgSrc: LOGO_IMG.packageManager.npm }],
      },
      {
        category: 'Communication',
        items: [
          { imgSrc: LOGO_IMG.communication.slack },
          { imgSrc: LOGO_IMG.communication.figma },
          { imgSrc: LOGO_IMG.communication.jira },
          { imgSrc: LOGO_IMG.communication.notion },
        ],
      },
    ],
  ]

  return NextResponse.json({ stacks: res })
}
