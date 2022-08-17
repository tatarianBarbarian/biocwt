import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import React from 'react'

const ErrMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => <span className="ml-5 mb-4 block l:ml-12">{message}</span>}
  </ErrorMessage>
)

export const QuestionsFormImpl = ({ className }, ref) => {
  return (
    <div
      className={`${className} bg-right-bottom bg-no-repeat pb-40 l:bg-[url('/pic/stump.png')]`}
      ref={ref}
    >
      <Heading className="mb-11 l:text-right">Any questions?</Heading>
      <div className="grid grid-cols-1 s:gap-y-11 l:grid-cols-2 l:gap-x-16">
        <Formik
          initialValues={{ name: '', tel: '', question: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Name is required'),
            tel: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Phone is required'),
            question: Yup.string().required('What is your question?'),
          })}
          onSubmit={() => {
            alert('You did it! Good job. Seriously.')
          }}
        >
          <Form>
            <Field
              name="name"
              type="text"
              className="mb-5 block w-full rounded border-2 border-cloud-400 bg-slate-400 py-4 px-5 outline-none focus:border-wood-700 focus:bg-cloud-200 focus:text-slate-300  focus:placeholder:text-slate-300 l:border-4 l:px-12"
              placeholder="Your name"
            />
            <ErrMessage name="name" />

            <Field
              name="tel"
              type="text"
              className="mb-5 block w-full rounded border-2 border-cloud-400 bg-slate-400 py-4 px-5 outline-none focus:border-wood-700 focus:bg-cloud-200 focus:text-slate-300  focus:placeholder:text-slate-300 l:border-4 l:px-12"
              placeholder="Your telephone number"
            />
            <ErrMessage name="tel" />

            <Field
              name="question"
              as="textarea"
              className="mb-5 block w-full resize-none rounded border-2 border-cloud-400 bg-slate-400 py-4 px-5 outline-none focus:border-wood-700 focus:bg-cloud-200 focus:text-slate-300  focus:placeholder:text-slate-300 l:border-4 l:px-12"
              rows={5}
              placeholder="Your question"
            />
            <ErrMessage name="question" />

            <Button type="submit">Send</Button>
          </Form>
        </Formik>
        <p className="s:row-start-1 l:text-right">
          Write to us and we will be sure to <br /> answer all your questions
          and give <br /> you a comprehensive consultation.
        </p>
      </div>
    </div>
  )
}

export const QuestionsForm = React.forwardRef(QuestionsFormImpl)
