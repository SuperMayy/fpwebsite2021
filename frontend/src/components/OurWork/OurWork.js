import React from 'react'
import Card from './Card'
import './OurWork.css';
import contactA from '../../media/contact-a.png'
import contactB from '../../media/contact-b.png'
import contactC from '../../media/contact-c.png'

const OurWork = () => {
    return (
        <>
            <div className="our-work-landing">
              <h1>Our Work</h1>
                <div className="gallery">
                  <div className="left-image"/>
                  <div className="middle-image">
                    <div className="top-middle-image"/>
                    <div className="bottom-middle-image"/>
                  </div>
                  <div className="right-image"/>
                </div>
            </div>
            <Card
            img={contactA}
            header = "PROVIDING FIRST AID TRAINING AROUND THE WORLD." 
            body="One of the universities’ largest cultural societies, the organisation strives to educate and empower students of African and Caribbean background and heritage. This is implemented through debate sessions, film nights, book club sessions and more. In March of this year, Ms Igwe did a first aid workshop for two hours, in collaboration with the ACS. The society aligns well with FP as both organisations firmly believe in the educational empowerment of the Afro-Caribbean diaspora."
            />
            <Card 
            img={contactB}
            color="pink"
            position="right"
            header = "PROVIDING HIV TEST KITS." 
            body="Here are some long overdue photos from the HIV testing sessions at a local church in Lagos. According to avert.org, gaps remain in reaching men and key populations which needs to be addressed. Nevertheless, members from the local community attending this session was a success story!
            Along with mythbusting workshops, we want to provide communities with awareness and the confidence of thriving instead of surviving, if living with the illness. For more information: "
            url= "http://aidsinfo.unaids.org"
            />
            <Card 
            img={contactC}
            header = "FEEDING FAMILIES IN NIGERIA" 
            body="During the Covid-19 pandemic, we were able to donate food to 20 families in Lagos, with the help of your donations. Our donations helped local residents like Promise Chukwuemeka. She hasn’t worked as a teacher since the pandemic, as schools have closed. Living alone with two children to support, she finds it difficult to support them."
            />
        </>
    )
}

export default OurWork
