import { ACTICITY_IMG } from '@/constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    {
      title: 'TECHEER PARTNERS',
      activityType: 'Frontend Mentor',
      description: '개발자 꿈나무들을 위한 멘토링 프로그램',
      where: 'TECHEER',
      period: '2023.08 ~ 2021.12',
      result: '멘토링 수행',
      moreInfoURL:
        'https://www.tukorea.ac.kr/tukorea/1099/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGdHVrb3JlYSUyRjM3NiUyRjQ0NjQyJTJGYXJ0Y2xWaWV3LmRvJTNG',
      imageURL: ACTICITY_IMG.techeerPartners,
    },
    {
      title: '우아한테크코스 2024 프리코스',
      activityType: 'Participant',
      description: '4주간 진행되는 우아한테크코스 2024 선발 사전과제',
      where: '우아한형제들',
      period: '2023.10 ~ 2021.11',
      result: '심사중...',
      moreInfoURL: 'https://time-map-installer.tistory.com/263',
      imageURL: ACTICITY_IMG.woowa,
    },
    {
      title: 'Good Night Hackathon',
      activityType: '2nd, Participant',
      description: '주말동안 진행되는 해커톤',
      where: 'TECHEER',
      period: '2023.08',
      result: '요구조건을 받아 Svelte, Go를 활용하여 FE/BE 개발',
      moreInfoURL: 'https://time-map-installer.tistory.com/251',
      imageURL: ACTICITY_IMG.goodNight2nd,
    },
    {
      title: '실리콘밸리 테커 SW 부트캠프',
      activityType: 'Leader',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      where: 'TECHEER',
      period: '2023.06 ~ 2021.08',
      result: '종합 2위 (Project: Remember Plus)',
      moreInfoURL: 'https://time-map-installer.tistory.com/250',
      imageURL: ACTICITY_IMG.summerBootcamp2023,
    },
    {
      title: '실리콘밸리 해커톤',
      activityType: 'Participant(Developer)',
      description: '무박 2일 아이디어 구현 해커톤',
      where: 'TECHEER',
      period: '2023.05',
      result: '현재 위치에서 가까운 관광지를 추천해주는 서비스 (BangBangGo)',
      moreInfoURL: 'https://time-map-installer.tistory.com/243',
      imageURL: ACTICITY_IMG.bangBangGo,
    },
    {
      title: 'Good Night Hackathon',
      activityType: 'Participant',
      description: '주말동안 진행되는 무박 2일 Spring Boot 해커톤',
      where: 'TECHEER',
      period: '2023.02',
      result: '요구조건을 받아 Spring Boot로 API 개발',
      moreInfoURL: 'https://time-map-installer.tistory.com/175',
      imageURL: ACTICITY_IMG.goodNight,
    },
    {
      title: '실리콘밸리 부트캠프',
      activityType: '[티타임즈X테커] Vice Leader',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      where: 'TECHEER',
      period: '2022.12 ~ 2023.02',
      result: '종합 2위 (Project: Crop Doctor)',
      moreInfoURL: 'https://time-map-installer.tistory.com/162',
      imageURL: ACTICITY_IMG.winterBootcamp2022,
    },
    {
      title: 'MSW X Super Hackathon',
      activityType: 'Participant',
      description: 'Maple Story World 엔진을 활용한 게임 개발 해커톤',
      where: 'TECHIT',
      period: '2023.02',
      result: '',
      moreInfoURL: 'https://time-map-installer.tistory.com/117',
      imageURL: ACTICITY_IMG.nananana,
    },
  ]

  return NextResponse.json({ activities: res })
}
