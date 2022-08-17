import { Materials } from 'components/sections/Materials'
import { OurWork } from 'components/sections/OurWork'
import { QuestionsForm } from 'components/sections/QuestionsForm'
import Head from 'next/head'

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className="container mt-32">
        <OurWork />
        <Materials />
        <QuestionsForm />
      </main>
    </>
  )
}
