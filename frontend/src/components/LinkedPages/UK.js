import React from 'react'
import './articles.css' 
import UKACS from '../../media/uk-acs.png'

const UK = () => {
    return (
        <div className="article">
            <h1>Case Study: University of East Anglia (UEA) African Caribbean Society (ACS)</h1>
            <br/><br/>
            <img className="article-img" alt="Impact od donations in nigeria" src={UKACS} /><br/><br/>
            <p>One of the universities’ largest cultural societies, the organisation strives to educate 
                and empower students of African and Caribbean background and heritage. 
                This is implemented through debate sessions, film nights, book club sessions and more. 
                In March of this year, Ms Igwe did a first aid workshop for two hours, in collaboration with the ACS. 
                The society aligns well with FP as both organisations firmly believe in the educational empowerment of 
                the Afro-Caribbean diaspora.</p><br/><br/>
        </div>
    )
}

export default UK
