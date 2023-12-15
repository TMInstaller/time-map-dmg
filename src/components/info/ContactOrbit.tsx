import Image from 'next/image'
import Link from 'next/link'

type OrbitProps = {
  href: string
  imgURL: string
  animationClass?: string
}

const ContactOrbit: React.FC<OrbitProps> = ({ href, imgURL, animationClass }) => {
  const webStyle = 'hidden md:block col-start-5 col-end-8 row-start-2 row-end-3 px-16 py-12'
  const mobileStyle = 'md:hidden col-start-1 col-end-12'

  return (
    <>
      <div className={`${webStyle} ${animationClass}`}>
        <div className='relative grid items-center justify-center h-full rounded-xl bg-background-box hover:scale-105'>
          <Link href={href}>
            <Image
              src={imgURL}
              alt=''
              fill
              priority={false}
              sizes='(min-width: 512px) 600px, 100vw'
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
      <div className={`${mobileStyle} flex justify-center py-1`}>
        <div className='relative h-full w-5/6 rounded-xl bg-background-box hover:scale-105'>
          <Link href={href}>
            <Image
              src={imgURL}
              alt=''
              fill
              priority={false}
              sizes='(min-width: 512px) 600px, 100vw'
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ContactOrbit
