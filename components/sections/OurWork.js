import { Carousel } from 'components/Carousel'
import int from 'public/pic/int1.jpg'
import int2 from 'public/pic/int2.jpg'
import int3 from 'public/pic/int3.jpg'
import Image from 'next/future/image'
import { Heading } from 'components/Heading'

export const OurWork = ({ className }) => {
  return (
    <section className={className}>
      <Heading
        as="h2"
        className="mb-24 l:mb-32 l:pl-24"
      >
        Our work
      </Heading>
      <Carousel className="mb-12">
        <Image
          src={int}
          alt="Wooden kitchen interior"
        />
        <Image
          src={int2}
          alt="Wooden dinner table"
        />
        <Image
          src={int3}
          alt="Wooden dinner table 2"
        />
      </Carousel>
    </section>
  )
}
