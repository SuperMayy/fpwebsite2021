import React from 'react'
import './articles.css' //nigeria-covid2
import NigeriaCovid from '../../media/nigeria-covid.jpg'
import NigeriaCovid2 from '../../media/nigeria-covid2.jpg'
import NigeriaCovid3 from '../../media/nigeria-covid3.jpg'
import NigeriaCovid4 from '../../media/nigeria-covid4.jpg'
import NigeriaCovid5 from '../../media/nigeria-covid5.jpg'

const Recent= () => {
    return (
        <div className="article">
            <h1>Would you rather risk getting infected, earning money or starve staying at home for safety?</h1>
            <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid3} style={{width: "60%"}}/>
            <br/><br/>
            <p>The World Health Organisation warned the world to prepare for a second wave of coronavirus. 
                Earlier this year, while lockdown may have been lifted in Nigeria, however shops were only open three times a week. 
                As the virus has yet to be eliminated, daily income earners had to make such demanding choices. 
                Market vendors, hairdressers and taxi drivers and so much more were severely impacted.
            </p> <br/><br/>
            <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid} />
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid2} />
            </div>
            <p>One of the largest populations of Africa, workers are faced with a tough choice: earning money to feed their families, 
                being susceptible of being infected or suffer starvation when isolating at home. Nigerian workers receive no compensation 
                pay for their days off and food prices have surged, leaving them with a severe lack of provisions.
            </p><br/><br/>
            <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid4} />
              <img className="article-img" alt="Impact od donations in nigeria" src={NigeriaCovid5} />
            </div>
            <p>With your donations, Fionita’s Project provided dry and essential necessities to help Nigerians survive this unprecedented time. 
                Our organisation firmly believes that the wellbeing of workers and their families is a priority, and their needs must be met to move forward. 
                Your contribution helped name a positive impact in the lives of so many people. Thank you.
            </p><br/><br/>
       </div>
    )
}

export default Recent
