import React from "react"
import Faq from "../components/Faq.js"
import faq from "../../site_cms/faqs.json"

export default function FaqContainer() {
  return (
    <Faq>
      <Faq.Title>Frequently Asked Question</Faq.Title>
      {faq.list.map(ele => {
        ;<Faq.Item>
          <Faq.Header>{ele.header}</Faq.Header>
          <Faq.Body>{ele.body}</Faq.Body>
        </Faq.Item>
      })}
    </Faq>
  )
}
