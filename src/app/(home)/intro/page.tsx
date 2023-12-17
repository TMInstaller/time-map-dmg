'use client'
import IntroAnime from '@/components/animation/intro/IntroAnime'
import ParticuleClick from '@/components/animation/click/ParticuleClick'

const Intro = () => {
  return (
    <>
      <div className='fixed w-screen'>
        <ParticuleClick />
      </div>
      <div className='relative'>
        <IntroAnime />
      </div>
    </>
  )
}

export default Intro

/** TODO:
 * 1. ParticuleClick이 IntroAime의 rect id bg2에도 렌더링되도록 구현
 * 1.1. 현재 상황은 IntroAnime의 최후방에서 렌더링되고 있음
 * 2. 따라서 스크롤 위치에 따라 z-index를 변경해서 렌더링되도록 구현
 */
