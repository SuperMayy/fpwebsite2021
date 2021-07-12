import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DonationButton = ({amount, classRef}) => {
    const [donationAmount, setDonationAmount] = useState(null)

    useEffect(() => {
        if(donationAmount){
            console.log(donationAmount)
            //Create payload that will be sent to the backend
          const payload = {
            amount: donationAmount.amount
        }

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        axios({
            url: '/api/create-checkout-session',
            method: 'POST',
            data: payload,
            headers: headers,
        })
        .then((res)=>{
            const reply = res.data;
            if((reply.msg === "sent") && reply.retStatus === 303){
                console.log('Data has been sent to the server')
                window.location = reply.redirectTo;
            }
        })
        .catch(()=>{
            console.log('Internal server error')
        })  
        }
    }, [donationAmount]);

    const handleButtonClick = async (amount) => {
        await setDonationAmount({"amount": amount})
    }

    return (
        <>
            <button className={`donate-card ${classRef}`} onClick={()=>{handleButtonClick(amount)}}>
               {typeof amount == "number"  ? '£' : null} {amount}
            </button>
        </>
    )
}

export default DonationButton
