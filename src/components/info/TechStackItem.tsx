import Image from 'next/image'

type TechStackItemProps = {
  imgSrc: string
  height: string
}

const TechStackItem: React.FC<TechStackItemProps> = ({ imgSrc, height }) => (
  <div className={`relative h-${height}`}>
    <Image src={imgSrc} alt='' fill style={{ objectFit: 'contain' }} />
  </div>
)

export default TechStackItem
