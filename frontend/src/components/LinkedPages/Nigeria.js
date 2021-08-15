import React from 'react'
import './articles.css' 
import UKACS from '../../media/uk-acs.png'

const Nigeria = () => {
    return (
        <div className="article">
            <h1>We set up free HIV testing sessions in Nigeria!</h1>
            <br/><br/>
            <img className="article-img" alt="Impact od donations in nigeria" src={UKACS} /><br/><br/>
            <p>Here are some long overdue photos from the HIV testing sessions at a local church in Lagos. 
                According to avert.org, gaps remain in reaching men and key populations which needs to be addressed. 
                Nevertheless, members from the local community attending this session was a success story!</p><br/><br/>
            <p>Along with mythbusting workshops, we want to provide communities with awareness and the 
                confidence of thriving instead of surviving, if living with the illness. For more information visit 
                <a href="http://aidsinfo.unaids.org" style={{color: "#ff0066"}}> http://aidsinfo.unaids.org</a></p><br/><br/>
        </div>
    )
}

export default Nigeria
