import React from 'react'
import DonationButton from './DonationButton'

const Donation = () => {
    return (
        <div className="donation-container">
            <div className="donation-card">
                <div className="donation-card-image" />
                <div className="donation-card-content">
                    <div className="top-section-donation-type">
                        <h1 id="one-time-payment">One-time</h1>
                        {/* <h1 id="monthly-payment">Monthly</h1> */}
                    </div>
                    <div className="donation-text">
                        <h3>Help Make A Diffrence</h3>
                        <p style={{padding: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    </div>
                    <div className="donation-card-container">
                        <div className="donate-card-left">
                          <DonationButton amount={5} classRef="five"/>
                          <DonationButton amount={10} classRef="ten"/>
                        </div>
                        <div className="donate-card-right">
                          <DonationButton amount={20} classRef="twenty"/>
                          <DonationButton amount={50} classRef="twenty"/>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation
