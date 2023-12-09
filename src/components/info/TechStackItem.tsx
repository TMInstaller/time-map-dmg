import Image from 'next/image'

type TechStackItemProps = {
  imgSrc: string
}

const TechStackItem: React.FC<TechStackItemProps> = ({ imgSrc }) => (
  <div className={`relative h-28`}>
    <Image
      src={imgSrc}
      alt=''
      fill
      sizes='(min-width: 512px) 600px, 100vw'
      style={{ objectFit: 'contain' }}
      blurDataURL='path/to/placeholder.jpg'
    />
  </div>
)

export default TechStackItem
