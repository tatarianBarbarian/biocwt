import { Heading } from 'components/Heading'
import Image from 'next/future/image'
import { FiCheck, FiX } from 'react-icons/fi'
import oakTile from 'public/pic/oak-tile.png'
import beechTile from 'public/pic/beech-tile.png'
import ashTile from 'public/pic/ash-tile.png'

const MaterialsItem = ({ material }) => {
  const { title = '', pros = [], cons = [], pic = {} } = material
  return (
    <div className="grid justify-items-center s:mr-7 s:min-w-[147px]">
      <div>
        <Image
          src={pic.src}
          alt={pic.alt}
          className="mx-auto mb-10 s:w-[90px]"
        />
        <p className="mb-10 text-center font-bold">{title}</p>
        {pros.map((pro) => (
          <div
            className="mb-2 flex items-center l:mb-6"
            key={pro}
          >
            <FiCheck className="mr-3 justify-self-end text-wood-200" />
            <span>{pro}</span>
          </div>
        ))}
        {cons.map((con) => (
          <div
            className="mb-6 flex items-center"
            key={con}
          >
            <FiX className="mr-3 text-wood-200" />
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const materials = [
  {
    title: 'Oak',
    pros: ['Durability', 'Beautiful texture', 'Water resistance'],
    cons: ['Expensive'],
    pic: {
      src: oakTile,
      alt: 'Oak tree sample image',
    },
  },
  {
    title: 'Beech',
    pros: ['Durability'],
    cons: ['Hard to handle'],
    pic: {
      src: beechTile,
      alt: 'Beech tree sample image',
    },
  },
  {
    title: 'Ash',
    pros: ['Durability'],
    cons: ['Hard to handle'],
    pic: {
      src: ashTile,
      alt: 'Ash-tree sample image',
    },
  },
]

export const Materials = ({ className }) => {
  return (
    <section className={className}>
      <Heading
        as="h3"
        className="mb-24 l:mb-32 l:ml-24"
      >
        The wood we <br /> work with
      </Heading>
      <div className="flex s:overflow-x-scroll l:grid l:grid-cols-[auto_auto_auto] l:justify-between">
        {materials.map((mat) => (
          <MaterialsItem
            material={mat}
            key={mat.title}
          />
        ))}
      </div>
    </section>
  )
}
