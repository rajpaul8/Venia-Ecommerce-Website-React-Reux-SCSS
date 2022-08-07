import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ContactEditableCard() {
    
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

    const navigate = useNavigate()

    useEffect(() => {
        // Check if guest user has entered the contact info, else navigate them back to contact information page
        if (JSON.parse(localStorage.getItem('guestContactInfo')) === contactFormInitiallyEmpty || !JSON.parse(localStorage.getItem('guestContactInfo'))) {
            toast.warning('Please fill in the contact information first!')
            navigate('/')
        }
        else {
            setContactForm(JSON.parse(localStorage.getItem('guestContactInfo')))
        }
    }, [])

    return (
        <>
            <div className='mt-7 mb-5 border-base-300 shadow mr-7'>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='capitalize bg-white text-md'>
                                    <p className='capitalize text-md ml-5'>Shipping Information</p>
                                </th>
                                <th className='bg-white flex justify-end capitalize editButtonEnd'>
                                    <div>
                                        <Link to='/checkout' className='text-sm flex' style={{ color: "#e26a2c" }}>
                                            <BsPencil className='' /> Edit
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='w-50 whitespace-normal'>
                                    <div className='ml-5 text-sm'>
                                        <p className='p-0-m-0'>{contactForm.email}</p>
                                        <p className='p-0-m-0'>{contactForm.phone}</p>
                                    </div>
                                </td>
                                <td className='text-sm whitespace-normal'>
                                    <p>{contactForm.streetAddress}</p>
                                    <p>{contactForm.streetAddress2}</p>
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ContactEditableCard