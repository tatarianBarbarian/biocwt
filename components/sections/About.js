import Image from 'next/future/image'
import { NailedSection } from 'components/NailedSection'
import collage2 from 'public/pic/collage2.png'
import { Heading } from 'components/Heading'

export const About = ({ className }) => {
  return (
    <NailedSection
      position="left"
      className={className}
    >
      <div className="flex flex-col justify-between l:flex-row">
        <div className="">
          <Heading
            as="h3"
            className="l:mb-16"
          >
            About us
          </Heading>
          <p className="mb-14">
            BIO CWT - We manufacture solid <br /> wood products according to{' '}
            <br />
            individual drawings. We make <br /> chairs, armchairs, wardrobes,
            beds <br /> and much more in our own <br /> workshop, equipped with
            all the <br /> necessary industrial equipment.
          </p>
        </div>
        <div className="pl-12">
          <Image
            src={collage2}
            alt="collage 2"
          />
        </div>
      </div>
    </NailedSection>
  )
}
