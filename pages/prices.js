import { Carousel } from 'components/Carousel'
import { Heading } from 'components/Heading'
import { QuestionsForm } from 'components/sections/QuestionsForm'
import Head from 'next/head'
import Image from 'next/future/image'
import price from 'public/price.svg'

export default function Prices() {
  return (
    <>
      <Head>
        <title>Prices for services</title>
      </Head>
      <main className="container">
        <Heading
          as="h1"
          className="mt-7 mb-14"
        >
          Price list
        </Heading>
        <Carousel className="mb-4">
          <Image
            src={price}
            alt="prices"
          />
          <Image
            src={price}
            alt="prices"
          />
        </Carousel>
        <p className="mb-40">
          Full price list can be found{' '}
          <a
            href="/price-list.pdf"
            target="_blank"
            className="border-b-2 border-wood-400"
          >
            here
          </a>
        </p>
        <QuestionsForm />
      </main>
    </>
  )
}
