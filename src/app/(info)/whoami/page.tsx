'use client'
import PersonalInfo from '@/components/info/PersonalInfo'
import StackInfo from '@/components/info/StackInfo'
import TechStack from '@/components/info/TechStack'
import TechStackItem from '@/components/info/TechStackItem'
import withLayout from '@/hoc/withLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'

// Adjust the type to be an array of arrays
type Stack = {
  category: string
  items: {
    imgSrc: string
    height: number // Changed from string to number
  }[]
}[][]

const WhoAmI: React.FC = () => {
  const [techStackData, setTechStackData] = useState<Stack>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/info/whoami')
      .then((response) => {
        setTechStackData(response.data.stacks)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <PersonalInfo
        name='백동열'
        email='dongyeol.json@gmail.com'
        birth='2000.03.17'
        phone='010-8713-6926'
        location='Ansan, Gyeonggi'
        profileImage='/profile_image.jpg'
      />

      <TechStack>
        <div className='flex gap-8'>
          {techStackData.map((column, columnIndex) => (
            <div key={columnIndex} className='flex flex-col gap-4'>
              {column.map((stack, stackIndex) => (
                <StackInfo key={stackIndex} category={stack.category}>
                  {stack.items.map((item, itemIndex) => (
                    <TechStackItem key={itemIndex} imgSrc={item.imgSrc} height={item.height} />
                  ))}
                </StackInfo>
              ))}
            </div>
          ))}
        </div>
      </TechStack>
    </div>
  )
}

export default withLayout(WhoAmI)
