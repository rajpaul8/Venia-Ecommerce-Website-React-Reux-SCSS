import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from '../components/cart/CartItems';
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { getTotals } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import CartPaymentSection from '../components/cart/CartPaymentSection';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsHandbag, BsPaypal } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { updatePricing } from '../features/pricingSummary/pricingSlice'

function Cart() {
    const cart = useSelector((state) => state.cart);
    const {pricingSummary} = useSelector(state=>state.pricing)
    const { cartTotalPriceAmountWithoutDiscount, coupon, giftCard, shipping } = pricingSummary;

    // Making Local States to Rapidly Update item from single element and put it in a form to update the entire dict. of price inn one go
    const [couponLocal, setCouponLocal]= useState(0)
    const [giftCardLocal, setGiftCardLocal]= useState(0)
    const [shippingLocal, setShippingLocal]= useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());

        // UseEffect to store this payment Details in Local session Storage as backend DB is not connected
        dispatch(updatePricing({ cartTotalPriceAmountWithoutDiscount: cart.cartTotalAmount, coupon: couponLocal, giftCard: giftCardLocal, shipping: shippingLocal }))

    }, [cart, dispatch, couponLocal, giftCardLocal, shippingLocal]);


    const navigate = useNavigate();

    const handleCheckout = () => {
        dispatch(updatePricing(pricingSummary))

        navigate('/checkout');
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="pt-11">
                    <div className="container">
                        <h1 className='text-center text-4xl pb-3'> Your Shopping Bag</h1>
                        <div className='flex justify-center'>
                            <div className='orange_border_product'></div>
                        </div>
                        {/* Main Hero Section */}
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                {/* Bag Items Here */}
                                <div className='setCartItemsHeight'>
                                    {cart.cartItems.length === 0 ? (<>
                                        <div className='flex justify-center pt-12'>
                                            <h1 className='text-2xl'> No Item in your Cart</h1>
                                        </div>
                                        <div className='flex justify-center pt-3'>
                                            <Link to='/products'><button className='organgeButtonFilled flex justify-center items-center'><IoArrowBackCircleOutline className='text-2xl' /> &nbsp; Shop Now </button></Link>
                                        </div>
                                    </>) : (
                                        <CartItems cartItems={cart.cartItems} />
                                    )}
                                </div>
                                {/* Estimate your shipping Section Here*/}
                                <div className='mt-11 border-base-200'>
                                    <div className="collapse border-base-200">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-base font-medium flex justify-between">
                                            <div className='text-md'>Estimate your Shipping </div><div className='text-2xl'><RiArrowDropDownLine /></div>
                                        </div>
                                        <div className="collapse-content flex justify-between">
                                            {/* Need to handle the shipping address logic here... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Complete Address' />
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Pincode' />
                                        </div>
                                    </div>
                                    <div className="collapse border-base-200">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-base font-medium flex justify-between">
                                            <div>Enter Coupon <span className='text-sm'>(Upto $100)</span> </div><div className='text-sm flex'><p className=' md-block'>{couponLocal}% coupon applied </p><RiArrowDropDownLine className='text-2xl' /></div>
                                        </div>
                                        <div className="collapse-content flex justify-between">
                                            {/* Need to handle the logic of verifying the coupon code ... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Apply Coupon' />
                                            <button className='btn btn-outline btn-warning' onClick={() => setCouponLocal(10)}> NewBie 10% Off </button>
                                            <button className='btn btn-outline btn-warning' onClick={() => setCouponLocal(40)}> Special Offer 40% Off </button>
                                        </div>
                                    </div>
                                    <div className="collapse border-base-200">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-base font-medium flex justify-between">

                                            <div>Apply Gift Card <span className='text-sm'>(Upto $50)</span></div><div className='text-2xl'><RiArrowDropDownLine /></div>
                                        </div>
                                        <div className="collapse-content flex justify-between">
                                            {/* Need to handle the logic of verifying the giftcard string... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Apply GiftCard' />
                                            <button className='btn btn-outline btn-warning' onClick={() => setGiftCardLocal(10)}> Birthday Off 20%</button>
                                            <button className='btn btn-outline btn-warning' onClick={() => setGiftCardLocal(40)}> Special Offer 25% Off </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                {/* Pricing Summary Table Here */}
                                <CartPaymentSection />
                                <div className='flex justify-center mt-5'>
                                    <button className='organgeButtonFilled flex justify-center items-center' onClick={() => handleCheckout()}><BsHandbag className="text-xl mr-2" /> Checkout</button>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <button className='paypalButtonFilled rounded-3xl flex justify-center items-center' disabled><BsPaypal className="text-xl mr-2" /> <span className='text-blue-800 font-bold'>Pay</span><span className='text-blue-500 font-bold'>Pal</span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart