import React from 'react'
import './style.scss'
import Section from '../intro/shared/section'
import ContactInfo from './contact-info'

const Contact = () => {
  return (
    <Section id={"contact"} title={"Any Question? Feel Free To Contact"} background={"light"}>
        <div className="contact-content-wrapper">
             <ContactInfo/>
        </div>
    </Section>
  )
}

export default Contact