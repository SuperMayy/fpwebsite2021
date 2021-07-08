import React from 'react'

const Card = ({header, body, url, color, position, img}) => {
    return (
        <div className={`card ${color === "pink" ? "pink" : ""} ${position ==="right" && "right"}`}>
            <img src={img} alt="description"/>
            <div className="card-content">
                <h4>{header}</h4>
                <p>{body} {url && <a href={url}>{url}</a>}</p>
            </div>
        </div>
    )
}

export default Card
