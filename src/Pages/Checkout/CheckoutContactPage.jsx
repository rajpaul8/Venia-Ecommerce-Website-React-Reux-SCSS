import CartPaymentSection from "../../components/cart/CartPaymentSection"
import { useEffect, useState } from "react"
import CartContactInformation from "../../components/cart/CartContactInformation"
import { useSelector } from "react-redux"

function CheckoutContactPage() {
    const {pricingSummary} = useSelector(state=>state.pricing)

    useEffect(()=>{
        
    },[])

  return (
    <>
          <div className="flex justify-center">
              <div className="pt-11">
                  <div className="container">
                      <h1 className='text-center text-4xl pb-3'> Checkout</h1>
                      <div className='flex justify-center'>
                          <div className='orange_border-base-300_product'></div>
                      </div>
                      {/* Main Hero Section */}
                      <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                              <h1 className="text-3xl">Guest Checkout</h1>
                              <div className="mt-5">
                                   <p className="text-base font-bold">Contact information</p>         
                                   <p className="text-sm pt-1">We'll use these details to keep you informed on your delivery.</p>         
                              </div>
                              {/* Enter Contact Info Form Here*/}
                              <CartContactInformation />
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md-pr-2">
                              
                              {/* Sign in for Express Checkout Section Should come here.... only for large screen*/}
                              <div className="mb-5 mt-3 lg-block">
                                  <div className="p-3 border-base-300">
                                      <div className="flex justify-center align-center">
                                          <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                                              <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md-pr-2">
                                                  <h1 className="text-md pt-1 font-bold ml-5 mt-1">Sign in for Express Checkout</h1>
                                              </div>
                                              <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md-pr-2 flex justify-center">
                                                  <div className="continueShoppingButton">
                                                      <a className="text-md pl-5 pr-5">Sign in</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              {/* Pricing Summary Table Here */}
                              <CartPaymentSection cartTotalPriceAmountWithoutDiscount={pricingSummary.cartTotalPriceAmountWithoutDiscount} coupon={pricingSummary.coupon} giftCard={pricingSummary.giftCard} />
                          </div>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default CheckoutContactPage