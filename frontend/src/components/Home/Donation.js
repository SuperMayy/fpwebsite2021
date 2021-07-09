import React from 'react'

const Donation = () => {
    return (
        <div className="donation-container">
            <div className="donation-card">
                <div className="donation-card-image" />
                <div className="donation-card-content">
                    <div className="top-section-donation-type">
                        <h1 id="one-time-payment">One-time</h1>
                        <h1 id="monthly-payment">Monthly</h1>
                    </div>
                    <div className="donation-text">
                        <h3>Help Make A Diffrence</h3>
                        <p style={{padding: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    </div>
                    <div className="donation-card-container">
                        <div className="donate-card-left">
                          <button className="donate-card five">£5</button>
                          <button className="donate-card ten">£10</button>
                        </div>
                        <div className="donate-card-right">
                          <button className="donate-card twenty">£20</button>
                          <button className="donate-card input">Enter Amount</button>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation
