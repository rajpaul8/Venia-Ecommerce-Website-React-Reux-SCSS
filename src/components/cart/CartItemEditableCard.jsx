import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../features/cart/cartSlice';
import { useEffect } from 'react';


function CartItemEditableCard() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals())
    }, [cart])


    return (
        <>
            <div className='mt-7 mb-5 border-base-300 shadow mr-7'>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='capitalize bg-white text-md'>
                                    <p className='ml-7'>{cart.cartTotalQuantity} items in your order</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=' overflow-x-scroll'>
                                {cart.cartItems.map((item) => {
                                    return <>
                                        <td id={item.id}>
                                            <div className="flex items-center space-x-5">
                                                <div className="avatar">
                                                    <div className=" w-24 h-28 ">
                                                        <img src={item.image} alt="" className='object-contain' />
                                                    </div>
                                                </div>
                                                <div className="font-bold text-sm whitespace-normal w-24">
                                                    <p>
                                                    {item.title}
                                                    </p>
                                                    <p className="opacity-90 whitespace-normal font-thin">Quantity: { item.cartQuantity}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </>
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CartItemEditableCard