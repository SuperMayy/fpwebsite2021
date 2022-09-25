import React from 'react'
import './articles.css' //nigeria-covid2
import NigeriaCovid from '../../media/nigeria-covid.jpg'
import NigeriaCovid2 from '../../media/nigeria-covid2.jpg'
import NigeriaCovid3 from '../../media/nigeria-covid3.jpg'
import NigeriaCovid4 from '../../media/nigeria-covid4.jpg'
import NigeriaCovid5 from '../../media/nigeria-covid5.jpg'
import Fundraise from '../../media/fundraise.jpg'
import fundraiseVid from '../../media/fundraise-vid.mp4'

const Recent= () => {
    return (
        <div className="article" style={{background: "white"}}>
            {/* <h1></h1> */}
            <a className="fundraising-link" href='https://donorbox.org/help-us-provide-healthcare-for-local-pan-african-communities?fbclid=IwAR3ZStuXMKtflJe2Dl5chmtlFPJeoDbmMvEn5Puxyxk3yqfjvXx6Ne0BE_0'>
                <h1>Our Fundraising Link</h1>
            </a>
            <img className="article-img" alt="Please help us to provide healthcare for local Pan-African communities." src={Fundraise} style={{width: "100%"}}/>
            <br/><br/>
            <p>Last year we provided help to 20 families in Nigeria during Christmans. We would love to continue and extend our work, through monthly medical outreach projects that will include free General Medicine, General Paediatrics & Prenatal Care to locals.
            </p> <br/><br/>
            <div className="article-img-wrapper">
              <video src={fundraiseVid} width="1200" height="600" controls="controls" autoPlay="true" />
            </div> <br/><br/>
            {/* <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid} />
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid2} />
            </div> <br/><br/> */}
            {/* <p>One of the largest populations of Africa, workers are faced with a tough choice: earning money to feed their families, 
                being susceptible of being infected or suffer starvation when isolating at home. Nigerian workers receive no compensation 
                pay for their days off and food prices have surged, leaving them with a severe lack of provisions.
            </p><br/><br/>
            <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid4} />
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid5} />
            </div> */}
            <p>Your help would be greatly appreciated! <a className="fundraising-link" href='https://donorbox.org/help-us-provide-healthcare-for-local-pan-african-communities?fbclid=IwAR3ZStuXMKtflJe2Dl5chmtlFPJeoDbmMvEn5Puxyxk3yqfjvXx6Ne0BE_0'>
                Our Fundraising Link
            </a>
            </p><br/><br/>
       </div>
    )
}

export default Recent
