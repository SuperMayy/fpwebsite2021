import React from 'react'

const From = ({link, header, body}) => {
    return (
        <a href={link} download>
            <div className="downloadables">
                <h3>{header}</h3>
                <p>{body}</p>
            </div>
        </a>
    )
}

export default From
