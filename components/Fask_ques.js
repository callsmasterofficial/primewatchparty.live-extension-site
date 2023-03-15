import React, { useState } from 'react'
import siteConfig from '../siteConfig'
import CustomAccordion from './CustomAccordion'

function Fask_question() {
  const [show, setShow] = useState('')

  function toggleFunc(item) {
    if (item.id === show) return setShow('')
    setShow(item.id)
  }
  return (
    <>
      <div className="f-ask-container  m-auto mt-14 w-[80%]">
        {/* text section */}
        <div className="f-ask-box   flex items-center justify-center  ">
          <h4 className="primary_text_color mb-5 p-2  text-2xl font-semibold md:text-3xl ">
            Frequently Asked Questions
          </h4>
        </div>
        <div className="mb-10">
          <p className="text-center">
            Follow these easy steps to get started with the virtual party
            extension: –
          </p>
        </div>
        <div>
          {siteConfig.faq.accordian.map((item) => (
            <div className="accordion-item" key={item.id}>
              <CustomAccordion
                item={item}
                show={show}
                toggleFunc={toggleFunc}
                key={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fask_question
