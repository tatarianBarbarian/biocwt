import { Button } from 'components/Button'
import ClientOnlyPortal from 'components/ClientOnlyPortal'
import { NailedSection } from 'components/NailedSection'
import Image from 'next/future/image'
import Head from 'next/head'
import WoodPic from 'public/pic/imag.png'
import collage from 'public/pic/collage1.png'
import stares from 'public/pic/stares.png'
import { QuestionsForm } from 'components/sections/QuestionsForm'
import { About } from 'components/sections/About'
import { OurWork } from 'components/sections/OurWork'
import { Heading } from 'components/Heading'
import { Materials } from 'components/sections/Materials'
import React from 'react'

export async function getStaticProps() {
  return {
    props: {
      headerProps: {
        variant: 'opaque',
      },
    },
  }
}

export default function Home() {
  const qRef = React.useRef(null)

  return (
    <>
      <Head>
        <title>BIO CWT</title>
        <meta
          name="description"
          content="Solid wood products!"
        />
      </Head>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ClientOnlyPortal selector="body">
          <Image
            src={WoodPic}
            alt=""
            style={{
              width: '60%',
              height: '100vh',
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 0,
              objectFit: 'cover',
              opacity: 0.6,
            }}
            tabIndex={-1}
            priority
          />
        </ClientOnlyPortal>
        <NailedSection className="mb-20 l:mb-72">
          <div className="flex flex-col l:flex-row">
            <div className="l:border-r-2 l:pr-12">
              <Heading
                as="h1"
                className="mb-6"
              >
                Solid
                <br className="s:hidden" /> wood
                <br />
                products
              </Heading>
              <p className="mb-14 text-wood-100">
                Oak, beech, ash from <br />{' '}
                <span className="font-bold">1700 CZK</span> per m3
              </p>
              <Button
                onClick={() =>
                  qRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Order
              </Button>
            </div>
            <div className="pl-12">
              <Image
                src={collage}
                alt=""
                priority
              />
            </div>
          </div>
        </NailedSection>
        <div className="container">
          <Materials className="mb-20 l:mb-72" />
          <OurWork className="mb-20 l:mb-72" />
          <section>
            <Heading
              as="p"
              className="l:ml-24"
            >
              Advantages <br /> working with us
            </Heading>
            <div className="my-16 flex flex-col-reverse l:my-32 l:grid l:grid-cols-2 l:gap-32">
              <div>
                <Image
                  src={stares}
                  alt="Wooden stares picture"
                />
              </div>
              <div className="flex w-10/12 flex-col justify-between s:mb-12">
                <p>In-house carpentry production</p>
                <br />
                <p>
                  We only treat wood with environmentally friendly and safe
                  products
                </p>
                <br />
                <p>Prices from the manufacturer, no extra charges</p>
              </div>
            </div>
            <center className="mb-24 l:mb-72">
              <Button
                className="mx-auto"
                onClick={() =>
                  qRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Recieve consultation
              </Button>
            </center>
          </section>
        </div>
        <About className="mb-20 l:mb-72" />
        <QuestionsForm
          className="container"
          ref={qRef}
        />
      </div>
    </>
  )
}
