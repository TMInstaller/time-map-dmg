import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    {
      href: 'https://time-map-installer.tistory.com/',
      imgURL: '/Tistory.png',
      animationClass: '',
    },
    {
      href: 'https://github.com/TMInstaller',
      imgURL: '/github.png',
      animationClass: 'animate-orbit1',
    },
    {
      href: 'https://medium.com/@tminstaller',
      imgURL: '/Medium.png',
      animationClass: 'animate-orbit2',
    },
    {
      href: 'https://disquiet.io/@tminstaller',
      imgURL: '/Disquiet.png',
      animationClass: 'animate-orbit3',
    },
    {
      href: 'https://open.kakao.com/o/seUHkOpf',
      imgURL: '/Kakao.png',
      animationClass: 'animate-orbit4',
    },
    {
      href: '/whoami',
      imgURL: '/Mail.png',
      animationClass: 'animate-orbit5',
    },
    {
      href: 'https://www.linkedin.com/in/timemap',
      imgURL: '/linkedIn.png',
      animationClass: 'animate-orbit6',
    },
  ]

  return NextResponse.json({ orbits: res })
}
