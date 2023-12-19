'use client'
import HomeAnime from '@/components/animation/home/HomeAnime'
import ParticuleClick from '@/components/animation/click/ParticuleClick'

const Home = () => {
  return (
    <>
      <div className='fixed w-screen'>
        <ParticuleClick />
      </div>
      <div className='relative'>
        <HomeAnime />
      </div>
    </>
  )
}

export default Home

/** TODO:
 * 1. ParticuleClick이 HomeAnime의 rect id bg2에도 렌더링되도록 구현
 * 1.1. 현재 상황은 HomeAnime의 최후방에서 렌더링되고 있음
 * 2. 따라서 스크롤 위치에 따라 z-index를 변경해서 렌더링되도록 구현
 */
