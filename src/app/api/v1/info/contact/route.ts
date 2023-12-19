import { ICON_IMG, LOGO_IMG } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    {
      href: 'https://time-map-installer.tistory.com/',
      imgURL: ICON_IMG.tistory,
      animationClass: '',
    },
    {
      href: 'https://github.com/TMInstaller',
      imgURL: ICON_IMG.github,
      animationClass: 'animate-orbit1',
    },
    {
      href: 'https://medium.com/@tminstaller',
      imgURL: ICON_IMG.medium,
      animationClass: 'animate-orbit2',
    },
    {
      href: 'https://disquiet.io/@tminstaller',
      imgURL: LOGO_IMG.info.disquiet,
      animationClass: 'animate-orbit3',
    },
    {
      href: 'https://open.kakao.com/o/seUHkOpf',
      imgURL: ICON_IMG.kakao,
      animationClass: 'animate-orbit4',
    },
    {
      href: '/whoami',
      imgURL: ICON_IMG.mail,
      animationClass: 'animate-orbit5',
    },
    {
      href: 'https://www.linkedin.com/in/timemap',
      imgURL: ICON_IMG.linkedIn,
      animationClass: 'animate-orbit6',
    },
  ]

  return NextResponse.json({ orbits: res })
}
