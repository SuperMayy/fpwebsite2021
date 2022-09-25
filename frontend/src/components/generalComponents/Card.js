import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({name, extraClass, link, noLink, description}) => {
    return (
        <div className="card-body">
            <div className={`card-top ${extraClass}`}></div>
            <div className={`card-bottom ${noLink && "extend"}`}>
                {!noLink ? 
                  <h3 className="country">{name}</h3> :
                  <h5>{name}</h5>
                }
                {description && <p>{description}</p>}
                {!noLink && <Link to={`/${link}`}>Learn More ›</Link>}
            </div>
        </div>
    )
}

export default Card
