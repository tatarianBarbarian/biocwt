import { About } from 'components/sections/About'
import { OurWork } from 'components/sections/OurWork'
import { QuestionsForm } from 'components/sections/QuestionsForm'
import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About className="mb-32" />
      <main className="container">
        <OurWork />
        <QuestionsForm />
      </main>
    </>
  )
}
