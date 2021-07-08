import React from 'react'
import Card from './Card'
import './OurWork.css';
import ourwork from '../../media/ourwork.png'
import contactA from '../../media/contact-a.png'
import contactB from '../../media/contact-b.png'
import contactC from '../../media/contact-c.png'

const OurWork = () => {
    return (
        <>
            <img 
            alt="our work landing collage" 
            src={ourwork}
            className="our-work-landing"
            />
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
            header = "Talk About Work In Nigeria." 
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </>
    )
}

export default OurWork
