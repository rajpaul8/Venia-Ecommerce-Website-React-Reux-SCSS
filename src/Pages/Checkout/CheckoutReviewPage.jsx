import React from 'react'
import ContactEditableCard from "../../components/cart/ContactEditableCard"
import CartPaymentSection from "../../components/cart/CartPaymentSection"
import ShippingEditableCard from '../../components/cart/ShippingEditableCard'
import PaymentEditableCard from '../../components/cart/PaymentEditableCard'
import CartItemEditableCard from '../../components/cart/CartItemEditableCard'
import { useNavigate } from 'react-router-dom'

function CheckoutReviewPage() {
    const navigate =useNavigate();

    const handlePlaceOrder =()=>{
        navigate('/checkout/order-placed')
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="pt-11">
                    <div className="container">
                        <h1 className='text-center text-4xl pb-3'> Checkout</h1>
                        <div className='flex justify-center'>
                            <div className='orange_border_product'></div>
                        </div>
                        {/* Main Hero Section */}
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                <h1 className="text-3xl">Guest Checkout</h1>
                                {/* Contact Information Editable Card Here */}
                                <ContactEditableCard />

                                {/* Enter Shipping Editable Form Here....*/}
                                <div className='mt-3 mb-5'>
                                    <ShippingEditableCard />
                                </div>

                                {/* Payment Editable Form Information Here...*/}
                                <div className='mt-3 mb-5'>
                                    <PaymentEditableCard />
                                </div>

                                {/* Items in the Cart Card Here */}

                                <CartItemEditableCard />
                                <div className='flex justify-center mt-7 mb-7'>
                                    <a className='continueShoppingButton text-md' onClick={handlePlaceOrder}> PLACE ORDER </a>
                                </div>

                            </div>

                            {/* Right Side Section Comes Here */}
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">

                                {/* Pricing Summary Table Here */}
                                <div className="lg-mt-16">
                                    <CartPaymentSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutReviewPage