import ActivityInfo from '@/components/info/ActivityInfo'
import withLayout from '@/hoc/withLayout'

const Activities: React.FC = () => {
  const activities = [
    {
      title: 'TECHEER PARTNERS',
      activityType: 'Frontend Mentor',
      description: '개발자 꿈나무들을 위한 멘토링 프로그램',
      where: 'TECHEER',
      period: '2023.08 ~ 2021.12',
      result: '멘토링 수행',
      moreInfoURL:
        'https://www.tukorea.ac.kr/tukorea/1099/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGdHVrb3JlYSUyRjM3NiUyRjQ0NjQyJTJGYXJ0Y2xWaWV3LmRvJTNG',
      imageURL: '/TECHEERPartners.png',
    },
    {
      title: '우아한테크코스 2024 프리코스',
      activityType: 'Participant',
      description: '4주간 진행되는 우아한테크코스 2024 선발 사전과제',
      where: '우아한형제들',
      period: '2023.10 ~ 2021.11',
      result: '심사중...',
      moreInfoURL: 'https://time-map-installer.tistory.com/263',
      imageURL: '/Woowa.png',
    },
    {
      title: 'Good Night Hackathon',
      activityType: '2nd, Participant',
      description: '주말동안 진행되는 해커톤',
      where: 'TECHEER',
      period: '2023.08',
      result: '요구조건을 받아 Svelte, Go를 활용하여 FE/BE 개발',
      moreInfoURL: 'https://time-map-installer.tistory.com/251',
      imageURL: '',
    },
    {
      title: '실리콘밸리 테커 SW 부트캠프',
      activityType: 'Leader',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      where: 'TECHEER',
      period: '2023.06 ~ 2021.08',
      result: '종합 2위 (Project: Remember Plus)',
      moreInfoURL: 'https://time-map-installer.tistory.com/250',
      imageURL: '/2023SummerBootcamp.png',
    },
    {
      title: '실리콘밸리 해커톤',
      activityType: 'Participant(Developer)',
      description: '무박 2일 아이디어 구현 해커톤',
      where: 'TECHEER',
      period: '2023.05',
      result: '현재 위치에서 가까운 관광지를 추천해주는 서비스 (BangBangGo)',
      moreInfoURL: 'https://time-map-installer.tistory.com/243',
      imageURL: '',
    },
    {
      title: 'Good Night Hackathon',
      activityType: 'Participant',
      description: '주말동안 진행되는 무박 2일 Spring Boot 해커톤',
      where: 'TECHEER',
      period: '2023.02',
      result: '요구조건을 받아 Spring Boot로 API 개발',
      moreInfoURL: 'https://time-map-installer.tistory.com/175',
      imageURL: '',
    },
    {
      title: '실리콘밸리 부트캠프',
      activityType: '[티타임즈X테커] Vice Leader',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      where: 'TECHEER',
      period: '2022.12 ~ 2023.02',
      result: '종합 2위 (Project: Crop Doctor)',
      moreInfoURL: 'https://time-map-installer.tistory.com/162',
      imageURL: '/2022WinterBootcamp.png',
    },
    {
      title: 'MSW X Super Hackathon',
      activityType: 'Participant',
      description: 'Maple Story World 엔진을 활용한 게임 개발 해커톤',
      where: 'TECHIT',
      period: '2023.02',
      result: '요구조건을 받아 Spring Boot로 API 개발',
      moreInfoURL: 'https://time-map-installer.tistory.com/117',
      imageURL: '',
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <div className='text-5xl font-bold mt-4'>Activities</div>
      {activities.map((activity, index) => (
        <ActivityInfo
          key={index}
          title={activity.title}
          activityType={activity.activityType}
          description={activity.description}
          where={activity.where}
          period={activity.period}
          result={activity.result}
          moreInfoURL={activity.moreInfoURL}
          imageURL={activity.imageURL}
        />
      ))}
    </div>
  )
}

export default withLayout(Activities)
