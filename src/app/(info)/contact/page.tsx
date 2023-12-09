'use client'
import ContactOrbit from '@/components/info/ContactOrbit'
import { API_URL } from '@/constants/urls'
import withLayout from '@/hoc/withLayout'
import axios from 'axios'
import { useState, useEffect } from 'react'

type Orbit = {
  href: string
  imgURL: string
  animationClass?: string
}

const Contact: React.FC = () => {
  const [orbits, setOrbits] = useState<Orbit[]>([])

  useEffect(() => {
    axios
      .get(`${API_URL}info/contact`)
      .then((response) => {
        const data = response.data.orbits
        setOrbits(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-6 max-w-content'>
        <div className='grid grid-cols-11 grid-rows-3 h-[84vh] gap-2'>
          {orbits.map((orbit, index) => (
            <ContactOrbit
              key={index}
              href={orbit.href}
              imgURL={orbit.imgURL}
              animationClass={orbit.animationClass}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default withLayout(Contact)
