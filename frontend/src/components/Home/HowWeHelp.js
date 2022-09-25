import React from 'react'
import Card from '../generalComponents/Card'

const HowWeHelp = ({data, title}) => {
    return (
        <div className="how-we-help">
            <h1>{title}</h1> 
            <div className="card-container">
                {
                    data.map((a, index) => {
                        return (
                            <Card 
                              name={a.name}
                              extraClass={a.extraClass} 
                              link={a.link}
                              noLink={a.noLink} 
                              description={a.description}
                              key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HowWeHelp
