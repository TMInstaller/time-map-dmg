import anime from 'animejs'
import { useEffect } from 'react'

// Particule 타입 정의
type Particule = {
  x: number
  y: number
  color: string
  radius: number
  endPos: { x: number; y: number }
  draw: () => void
}

// Circle 타입 정의
type Circle = {
  x: number
  y: number
  color: string
  radius: number
  alpha: number
  lineWidth: number
  draw: () => void
}

const ParticuleClick = () => {
  useEffect(() => {
    // 캔버스 요소 및 컨텍스트 타입 지정
    const canvasEl = document.querySelector('.fireworks') as HTMLCanvasElement
    const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D
    let numberOfParticules = 30
    let pointerX = 0
    let pointerY = 0
    const tap = 'ontouchstart' in window || navigator.maxTouchPoints ? 'touchstart' : 'mousedown'
    const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']

    // 캔버스 크기 조절 함수
    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2
      canvasEl.height = window.innerHeight * 2
      canvasEl.style.width = window.innerWidth + 'px'
      canvasEl.style.height = window.innerHeight + 'px'
      ctx.scale(2, 2)
    }

    // 좌표 업데이트 함수
    function updateCoords(e: MouseEvent | TouchEvent) {
      // 이벤트가 마우스 이벤트인지 터치 이벤트인지에 따라 좌표값을 다르게 설정
      if (e instanceof MouseEvent) {
        pointerX = e.clientX
        pointerY = e.clientY
      } else if (e instanceof TouchEvent) {
        pointerX = e.touches[0].clientX
        pointerY = e.touches[0].clientY
      }
    }

    function setParticuleDirection(p: { x: number; y: number }) {
      // 파티클의 방향을 랜덤으로 설정
      var angle = (anime.random(0, 360) * Math.PI) / 180
      var value = anime.random(50, 180)
      var radius = [-1, 1][anime.random(0, 1)] * value
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      }
    }

    // 파티클 생성 및 설정 함수
    function createParticule(x: number, y: number) {
      const p: Particule = {
        x: x,
        y: y,
        color: colors[anime.random(0, colors.length - 1)],
        radius: anime.random(16, 32),
        endPos: setParticuleDirection({ x, y }),
        draw: function () {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
          ctx.fillStyle = this.color
          ctx.fill()
        },
      }
      return p
    }

    // 원 생성 함수
    function createCircle(x: number, y: number): Circle {
      let p: Circle = {
        x: x,
        y: y,
        color: '#FFF',
        radius: 0.1,
        alpha: 0.5,
        lineWidth: 6,
        draw: function () {
          ctx.globalAlpha = this.alpha
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
          ctx.lineWidth = this.lineWidth
          ctx.strokeStyle = this.color
          ctx.stroke()
          ctx.globalAlpha = 1
        },
      }
      return p
    }

    // Particule 렌더링 함수
    function renderParticule(anim: anime.AnimeInstance) {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      for (let i = 0; i < anim.animatables.length; i++) {
        // 먼저 unknown으로 캐스팅
        const target = anim.animatables[i].target as unknown
        if ((target as Particule).draw) {
          // Particule의 draw 메서드가 있는지 확인
          ;(target as Particule).draw()
        } else if ((target as Circle).draw) {
          // Circle의 draw 메서드가 있는지 확인
          ;(target as Circle).draw()
        }
      }
    }

    // Particule 애니메이션 함수
    function animateParticules(x: number, y: number) {
      const circle = createCircle(x, y)
      const particules = []
      for (let i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y))
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: function (p: Particule) {
            return p.endPos.x
          },
          y: function (p: Particule) {
            return p.endPos.y
          },
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: renderParticule,
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: 'linear',
            duration: anime.random(600, 800),
          },
          duration: anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: renderParticule,
          offset: 0,
        })
    }

    // 캔버스 크기 설정 및 이벤트 리스너 추가
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize, false)

    // 이벤트 리스너 추가
    document.addEventListener(
      tap,
      function (e) {
        window.requestAnimationFrame(() => {
          updateCoords(e)
          animateParticules(pointerX, pointerY)
        })
      },
      false,
    )

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('mousedown' as any, setCanvasSize)
      document.removeEventListener(tap, updateCoords as EventListener)
    }
  }, [])

  return <canvas className='fireworks h-full w-full bg-none' />
}

export default ParticuleClick
