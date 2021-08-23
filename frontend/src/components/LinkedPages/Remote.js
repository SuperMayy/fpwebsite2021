import React from 'react'
import './articles.css' 
import CPR1 from '../../media/cpr1.jpg'
import CPR2 from '../../media/cpr2.jpg'
import CPR3 from '../../media/cpr3.jpg'
import CPR4 from '../../media/cpr4.jpg'
import CPR5 from '../../media/cpr5.jpg'

const Remote = () => {
    return (
        <div className="article">
            <h1>Advice during the COVID pandemic</h1>
            <br/><br/>
            <img className="article-img" alt="Impact od donations in nigeria" src={CPR1} />
            <br/><br/>
            <p>With advice and demonstration images from St John's Ambulance, we present a guide on how to do CPR on unconscious persons during Covid-19. 
                We hope you find this informative and stay safe!</p><br/><br/>
            <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={CPR2} />
              <img className="article-img" alt="Impact od donations in nigeria" src={CPR3} />
            </div>
            <div className="article-img-wrapper">
              <img className="article-img" alt="Impact od donations in nigeria" src={CPR4} />
              <img className="article-img" alt="Impact od donations in nigeria" src={CPR5} />
            </div>
            
        </div>
    )
}

export default Remote
