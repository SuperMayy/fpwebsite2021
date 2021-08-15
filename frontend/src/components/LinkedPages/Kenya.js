import React from 'react'
import './articles.css' 
import KenyaImg from '../../media/kenya.jpg'

const Kenya = () => {
    return (
        <div className="article">
            <h1>Case Study: Missionaries of the Poor (Kenya)</h1>
            <br/><br/>
            <img className="article-img" alt="Impact od donations in nigeria" src={KenyaImg} /><br/><br/>
            <p>Missionaries of the Poor is a charity care home based in Kenya and Uganda, in which FP has 
                visited the former. The missionaries mostly comprise of brothers and sisters of the Church, 
                with children under their care. Their case is that a lot of the children have special needs 
                and illnesses such as epilepsy and asthma. In addition, the care home needs medical equipment; 
                however, it is beyond their financial ability as medicine is expensive. FP would like to further 
                be in alliance with MOP, as the former organisation can provide a yearly supply of first aid 
                equipment to help children during their crises and equip the younger generation with knowledge 
                and confidence on first aid. Furthermore, as stated earlier, FP aims to start community outreach 
                sessions. This can be made possible, as MOP is linked to the community.</p><br/><br/>
        </div>
    )
}

export default Kenya
