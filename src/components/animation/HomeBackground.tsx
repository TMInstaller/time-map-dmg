import './HomeBackground.style.css'

const HomeBackground = () => {
  return (
    <div className='w-screen h-screen fixed z-0'>
      <ul className='circles'>
        {[...Array(10)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  )
}

export default HomeBackground
