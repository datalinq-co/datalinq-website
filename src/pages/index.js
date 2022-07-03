import React from "react"
import NavbarContainer from "../containers/Navbar"
import HomepageContainer from "../containers/Homepage"
import AboutUsContainer from "../containers/AboutUs"
import StandardContainer from "../containers/Standards"
import TestimonialAnimation from "../animation/Testimonials"
import CoreCompContainer from "../containers/CoreCompitency"
import TimelineContainer from "../containers/Timeline"
import ContactContainer from "../containers/Contact"
import FaqContainer from "../containers/Faq"

export default function Home() {
  return (
    <>
      <NavbarContainer />
      <HomepageContainer />
      <AboutUsContainer />
      <CoreCompContainer />
      <TestimonialAnimation />
      <StandardContainer />
      <FaqContainer />
      <ContactContainer />
    </>
  )
}
