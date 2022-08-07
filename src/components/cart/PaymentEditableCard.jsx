import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// cardName: "2133211232", cardNumber: "0231312231", expirationDate: "2022-08-15", CVV: "021312"
function PaymentEditableCard() {
    const [lastFourDigitsOfCreditCard, setLastFourDigitsOfCreditCard] = useState(0);

    useEffect(() => {
        let paymentInfo = JSON.parse(localStorage.getItem('paymentInformation'));
        let last4DigitsLocal = paymentInfo.cardNumber.slice(-4)
        setLastFourDigitsOfCreditCard(last4DigitsLocal);
    }, [lastFourDigitsOfCreditCard]);


    return (
        <>
            <div className='mt-7 mb-5 border-base-300 shadow mr-7'>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='capitalize bg-white text-md'>
                                    <p className='capitalize text-md ml-5'>Payment Method</p>
                                </th>
                                <th className='bg-white flex justify-end capitalize editButtonEnd'>
                                    <div>
                                        <Link to='/checkout/payment-information' className='text-sm flex' style={{ color: "#e26a2c" }}>
                                            <BsPencil className='mr-1' /> Edit
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='ml-5 text-sm'>
                                        <p className='p-0-m-0'>Credit Card</p>
                                        <p className='p-0-m-0'>Visa ending in {lastFourDigitsOfCreditCard}</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PaymentEditableCard