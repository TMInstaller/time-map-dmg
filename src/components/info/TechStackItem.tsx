import Image from 'next/image'

type TechStackItemProps = {
  imgSrc: string
  height: number
}

const TechStackItem: React.FC<TechStackItemProps> = ({ imgSrc, height }) => (
  <div className={`relative h-${height} h-24`}>
    {/* h를 두번 쓴 이유는 배열에 순차적으로 불러와지는 이미지 데이터로 인해 초기 높이가 없는 상태에서 Image 태그가 동작하지 않기 때문 */}
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
