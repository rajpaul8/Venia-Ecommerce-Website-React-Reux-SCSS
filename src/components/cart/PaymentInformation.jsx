import React, { useState } from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PaymentInformation() {
    const [paymentForm, setPaymentForm] = useState({
        cardName: '',
        cardNumber: 0,
        expirationDate: '',
        CVV: 0,
    })

    const handleOnChange = (e) => {
        setPaymentForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
    }
    const navigate = useNavigate();
    const handleContinueToReviewOrder = () => {
        if (paymentForm.cardName === '' || paymentForm.cardName === 0 || paymentForm.expirationDate === '') {
            toast.warning('Please fill the required information')
        }else if(paymentForm.cardNumber < 9999){
            toast.warning('Please enter the correct card number')
        }
        else{
            localStorage.setItem('paymentInformation', JSON.stringify(paymentForm));
            navigate('/checkout/final-review')
        }
    }
    return (
        <>
            <div className='mt-3'>
                <h1 className='text-base font-bold'>3. Payment Information</h1>
                <div className='pt-3 ml-1 text-sm'>
                    <input type="radio" id='creditCard' name="creditCard" className="mr-2 h-3" value={'credit card'} readOnly checked />
                    <label htmlFor="shippingMethod" className='text-bse text-gray-500'>Credit Card</label>
                </div>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-2">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>Name on Card</label>
                        <input type="text" name="cardName" id='cardName' value={paymentForm.cardName} className='text-sm rounded-md border-base-300 w-full p-1 mt-1' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-2">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>Credit Card Number</label>
                        <input type="number" name="cardNumber" id='cardNumber' value={paymentForm.cardNumber} className='text-sm rounded-md border-base-300 w-full p-1 mt-1' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-2">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 md:pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>Expiration Date</label>
                        <input type="date" name="expirationDate" id='expirationDate' value={paymentForm.expirationDate} className='text-sm rounded-md border-base-300 w-full p-1 mt-1' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 md:pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>CVV</label>
                        <input type="number" name="CVV" id='CVV' value={paymentForm.CVV} className='text-sm rounded-md border-base-300 w-full p-1 mt-1' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 md:pr-2">
                    </div>
                </div>
                <div className='mt-3 flex items-center'>
                    <BsCheck2Square className='text-xl mr-2' /><p className='text-sm'> Billing address same as shipping address</p>
                </div>
                <div className='mt-9'>
                    <hr />
                    <h1 className='text-base pt-3 pb-3 text-gray-600 font-thin'><input type="radio" className='h-4 mt-3' /> PayPal</h1>
                    <hr />
                </div>
                <div className='flex justify-center mt-7 mb-7'>
                    <a className='continueShoppingButton text-md' onClick={ handleContinueToReviewOrder}> CONTINUE TO REVIEW ORDER </a>
                </div>

            </div>
        </>
    )
}

export default PaymentInformation