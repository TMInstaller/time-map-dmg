import './HomeBackground.style.css'

const HomeBackground = () => {
  const animateButton = (e: any) => {
    e.preventDefault()
    const target = e.target
    target.classList.add('animateClick')

    setTimeout(() => {
      target.classList.remove('animateClick')
    }, 750) // 0.75초 후에 클래스 제거
  }

  return (
    <div className='w-screen h-screen fixed z-0'>
      <ul className='circles'>
        {[...Array(10)].map((_, i) => (
          <li key={i} onClick={animateButton}></li>
        ))}
      </ul>
    </div>
  )
}

export default HomeBackground
