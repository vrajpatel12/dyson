import React from 'react'
import ContactForm from './ContactForm'
import Galaary from './Galaary'
import Main from './Main'

const Hero = () => {
  return (
    <section role={"definition"} className="hero">
        <div role={"feed"} className="wrapper-hero">
            <Galaary></Galaary>
            <Main></Main>
            <ContactForm></ContactForm>
        </div>
    </section>
  )
}

export default Hero