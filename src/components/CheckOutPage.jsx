import React from 'react'
import '../styles/checkout.scss'
import HomePageInput from './HomePageInput'


const CheckOutPage = ({
    name,
    address,
    contact,
    handleName,
    setContact,
    setAddress,
}) => {
    return (
        <div>
        <HomePageInput
        contact={contact}
        handleName={handleName}
        setContact={setContact}
        setAddress={setAddress}
        address={address}
        name={name}
      />
        </div>
    )
}

export default CheckOutPage
