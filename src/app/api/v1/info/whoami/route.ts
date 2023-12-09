import { LOGO_IMG } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    [
      {
        category: 'Frameworks',
        items: [
          { imgSrc: LOGO_IMG.framework.nextJS, height: 32 },
          { imgSrc: LOGO_IMG.framework.svelteKit, height: 32 },
        ],
      },
      {
        category: 'Libraries',
        items: [
          { imgSrc: LOGO_IMG.library.react, height: 32 },
          { imgSrc: LOGO_IMG.library.svelte, height: 32 },
          { imgSrc: LOGO_IMG.library.d3, height: 32 },
          { imgSrc: LOGO_IMG.library.highcharts, height: 32 },
          { imgSrc: LOGO_IMG.library.threeJS, height: 32 },
        ],
      },
      {
        category: 'CSS',
        items: [
          { imgSrc: LOGO_IMG.css.tailwind, height: 32 },
          { imgSrc: LOGO_IMG.css.emotion, height: 32 },
          { imgSrc: LOGO_IMG.css.sass, height: 32 },
        ],
      },
    ],
    [
      {
        category: 'Languages',
        items: [
          { imgSrc: LOGO_IMG.language.javaScript, height: 32 },
          { imgSrc: LOGO_IMG.language.typeScript, height: 32 },
        ],
      },
      {
        category: 'Package Manager',
        items: [
          { imgSrc: LOGO_IMG.packageManager.yarn, height: 32 },
          { imgSrc: LOGO_IMG.packageManager.npm, height: 32 },
        ],
      },
      {
        category: 'Communication',
        items: [
          { imgSrc: LOGO_IMG.communication.slack, height: 32 },
          { imgSrc: LOGO_IMG.communication.figma, height: 32 },
          { imgSrc: LOGO_IMG.communication.jira, height: 32 },
          { imgSrc: LOGO_IMG.communication.notion, height: 32 },
        ],
      },
    ],
  ]

  return NextResponse.json({ stacks: res })
}
