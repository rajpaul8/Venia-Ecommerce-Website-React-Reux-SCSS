import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CartContactInformation() {
    const [contactForm, setContactForm] = useState({
        email: '',
        phone: '',
        country: '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: ''
    })

    const contactFormInitiallyEmpty = {
        email: '',
        phone: '',
        country: '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: ''
    }
    useEffect(() => {
        // set the local storage for guesContactInfo to empty if a new guest user
        if (JSON.parse(localStorage.getItem('guestContactInfo')) === contactFormInitiallyEmpty || !JSON.parse(localStorage.getItem('guestContactInfo'))) {
            localStorage.setItem('guestContactInfo', JSON.stringify(contactFormInitiallyEmpty));
        }
        else {
            setContactForm(JSON.parse(localStorage.getItem('guestContactInfo')))
        }
    },[])

    const { email,
        phone,
        country,
        firstName,
        lastName,
        streetAddress,
        streetAddress2,
        city,
        state,
        zip, } = contactForm;

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        e.preventDefault();
        setContactForm((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const updateContactInfo = () => {


        if (email === '' || country === '' || firstName === '' || lastName === '' || streetAddress === '' || city === '' || state === '' || zip === '') {
            toast.warning(`Please fill the required information`)
        }
        else {
            localStorage.setItem('guestContactInfo', JSON.stringify(contactForm));
            toast.success(`Contact form successfully updated`)
            navigate('/checkout/shipping-information')
        }
    }

    return (
        <>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                    <label htmlFor="email" className='text-xs flex column font-bold'>Email</label>
                    <input type="email" name="email" value={contactForm.email} id='email' required className='text-sm rounded-md border-base-200 p-1 mt-1 w-full' placeholder=' abc@xyz.com' onChange={handleOnChange} />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                    <label htmlFor="phone" className='text-xs flex column font-bold'>Phone number</label>
                    <input type="number" name="phone" value={contactForm.phone} id='phone' required className='w-full text-sm rounded-md border-base-200 p-1 mt-1' placeholder=' (022) 222 - 22222' onChange={handleOnChange} />
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-base font-bold'>1. Shipping Information</h1>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>Country</label>
                        <input type="text" name="country" id='country' value={contactForm.country} className='text-sm rounded-md border-base-200 w-full p-1 mt-1' placeholder='United States' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="firstName" className='text-xs flex column '>First Name</label>
                        <input type="text" name="firstName" id='firstName' value={contactForm.firstName} required className='text-sm rounded-md p-1 mt-1 border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="lastName" className='text-xs flex column '>Last Name</label>
                        <input type="text" name="lastName" id='lastName' value={contactForm.lastName} required className='text-sm rounded-md p-1 mt-1 border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="streetAddress" className='text-xs flex column '>Street Address</label>
                        <input type="text" name="streetAddress" id='streetAddress' required value={contactForm.streetAddress} className='text-sm p-1 mt-1 rounded-md border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="streetAddress2" className='text-xs flex column '>Street Address 2 (optional)</label>
                        <input type="text" name="streetAddress2" id='streetAddress2' required value={contactForm.streetAddress2} className='text-sm p-1 mt-1 rounded-md border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="city" className='text-xs flex column '>City</label>
                        <input type="text" name="city" id='city' required value={contactForm.city} className='text-sm p-1 mt-1 rounded-md border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="state" className='text-xs flex column '>State</label>
                        <input type="text" name="state" id='state' required value={contactForm.state} className='text-sm p-1 mt-1 rounded-md border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 md-pr-2">
                        <label htmlFor="zip" className='text-xs flex column '>Zip</label>
                        <input type="text" name="zip" id='zip' required value={contactForm.zip} className='text-sm p-1  mt-1 rounded-md border-base-200 w-full' onChange={handleOnChange} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-7 mb-7'>
                <a className='continueShoppingButton text-md' onClick={() => updateContactInfo()}> CONTINUE TO SHIPPING METHOD </a>
            </div>

            <div className='mt-9'>
                <hr />
                <h1 className='text-base pt-3 pb-3 text-gray-600 font-thin'>2. Shipping Method</h1>
                <hr />
            </div>
            <div className='mt-9'>
                <hr />
                <h1 className='text-base pt-3 pb-3 text-gray-600 font-thin'>3. Payment Information</h1>
                <hr />
            </div>
        </>
    )
}

export default CartContactInformation