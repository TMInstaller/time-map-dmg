import Image from 'next/image'
import Link from 'next/link'

type Orbit = {
  href: string
  imgURL: string
  animationClass?: string
}

const ContactOrbit: React.FC<Orbit> = ({ href, imgURL, animationClass }) => {
  const commonStyle = 'col-start-5 col-end-8 row-start-2 row-end-3 px-16 py-12'

  return (
    <div className={`${commonStyle} ${animationClass}`}>
      <div className='relative grid items-center justify-center h-full rounded-xl bg-background-box hover:scale-105'>
        <Link href={href}>
          <Image src={imgURL} alt='' fill style={{ objectFit: 'contain' }} />
        </Link>
      </div>
    </div>
  )
}

export default ContactOrbit
