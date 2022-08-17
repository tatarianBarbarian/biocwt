import { Heading } from 'components/Heading'
import Image from 'next/future/image'
import Head from 'next/head'
import mapImg from 'public/pic/map.png'
import { FiPhoneCall, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="container my-32 flex flex-col justify-between l:flex-row">
        <div className="flex flex-col s:mb-10">
          <Heading
            as="h1"
            className="mb-24 l:mb-28"
          >
            Contact
          </Heading>
          <address className="flex flex-col">
            <a
              href="tel:080008008080"
              className="mb-8 inline-flex items-center font-medium"
            >
              <FiPhoneCall className="mr-3 h-[24px] w-[24px] l:h-[39px] l:w-[39px]" />
              +420 000 000 000
            </a>
            <span className="flex items-center">
              <FiMapPin className="mr-3 h-[24px] w-[24px] l:h-[39px] l:w-[39px]" />
              <p className="font-medium">
                Na Plzeňce 1166/0 <br /> 150 00
              </p>
            </span>
          </address>
        </div>
        <Image
          src={mapImg}
          alt="Map screenshot demonstrating address on map"
        />
      </main>
    </>
  )
}
