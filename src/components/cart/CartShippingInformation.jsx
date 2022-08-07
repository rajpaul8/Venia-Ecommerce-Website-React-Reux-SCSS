import React, { useState } from 'react'
import { updatePricing } from '../../features/pricingSummary/pricingSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CartShippingInformation() {
    const { pricingSummary } = useSelector(state => state.pricing);
    const [shippingMode, setShippingMode] = useState(-1);
    const [shippingMenu, setShippingMenu] = useState(pricingSummary)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRadioToggle = (e) => {
        let shippingLocal = { ...pricingSummary };
        shippingLocal.shipping = e.target.value;
        setShippingMode(e.target.value)
        dispatch(updatePricing(shippingLocal));
    }

    const handleShippingCharges = () => {
        let shippingLocal = { ...pricingSummary };
        if (shippingMode === -1) {
            toast.warning(`Please select a shipping mode`)
        }
        else {
            shippingLocal.shipping = shippingMode;
            dispatch(updatePricing(shippingLocal));
            navigate('/checkout/payment-information')
        }
    }

    return (
        <>
            <div>
                <h1 className='text-base font-bold'>2. Shipping Method</h1>
            </div>

            <div className='pt-3 ml-1 text-sm'>
                <input type="radio" id='Standard' name="shippingMethod" className="mr-2 h-4" value={0} onClick={handleRadioToggle} />
                <label htmlFor="shippingMethod" className='text-md'>Standard Shipping (4-8 business days via USPS) FREE</label>
            </div>
            <div className='pt-1 ml-1 text-sm'>
                <input type="radio" id='Express' name="shippingMethod" className="mr-2 h-4" value={17.95} onClick={handleRadioToggle} />
                <label htmlFor="shippingMethod" className='text-md'>Express Delivery (2-5 business days via USPS) $17.95</label>
            </div>
            <div className='pt-1 pb-3 ml-1 text-sm'>
                <input type="radio" id='Next Day' name="shippingMethod" className="mr-2 h-4" value={53.61} onClick={handleRadioToggle} />
                <label htmlFor="shippingMethod" className='text-md'>Next Day Delivery (Next business days via FedEx) $53.61</label>
            </div>
            <div className='flex justify-center mt-7'>
                <button className='continueShoppingButton text-md' onClick={handleShippingCharges}> CONTINUE TO PAYMENT </button>
            </div>

            <div className='mt-9'>
                <hr />
                <h1 className='text-base pt-3 pb-3 text-gray-600 font-thin'>3. Payment Information</h1>
                <hr />
            </div>
        </>
    )
}

export default CartShippingInformation