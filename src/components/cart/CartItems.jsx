import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { ImBin } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, addToCart } from '../../features/cart/cartSlice';
import './cartStyle/style.css'


function CartItems({ cartItems }) {
    const dispatch = useDispatch();

    const handleCartQuantityDecreament = (item) => {
        if (item.cartQuantity === 1) {
            alert(`You're about to remove ${item.title}. Are you sure about it?`);
        }
        dispatch(decreaseCart(item));
    }
    const handleQuantityIncreament = (item) => {
        // setQuantity(quantity + 1);
        dispatch(addToCart(item));
    }

    const handleRemoveItem = (item) => {
        alert(`You're about to remove ${item.title}. Are you sure about it?`);
        dispatch(removeFromCart(item));
    }

    return (
        <>
            {/* <!-- Cart --> */}
            <div className="overflow-x-hidden">
                {cartItems?.map((item) => {
                    return <>{
                        <div class="grid-container">
                            <div className='imageContainer'>
                                <img src={item.image} alt="" className='imageContainerimg' />
                            </div>
                            <div className="textContainer pl-5 ">
                                <p className='font-bold'>{item.title}</p>
                                <p>$ {item.price * item.cartQuantity}</p>
                            </div>
                            <div className="counterContainer">
                                <div className=' quantityAdjustment'>
                                    <a className='decrementer text-4xl pr-2' onClick={() => handleCartQuantityDecreament(item)}><AiOutlineMinusCircle /></a>
                                    <div>
                                        <input type="number" className='quantity-counter-cart text-center' disabled value={item.cartQuantity} onChange={() => e => e.target.value} />                                    </div>
                                    <a className='text-4xl pl-2' onClick={() => handleQuantityIncreament(item)}><AiOutlinePlusCircle /></a>
                                </div>
                            </div>
                            <div className="editContainer">
                                {/* For large Screen */}
                                <ul className="menu md-block">
                                    <li><Link to={`/products/${item.category}/${item.id}`} className='flex  text-black text-sm'><BiPencil /> Edit</Link></li>
                                    <li><a onClick={() => handleRemoveItem(item)} className=" text-black text-sm"> <ImBin /> Remove</a></li>
                                    <li><a className=' text-black text-sm'> <AiOutlineHeart className='text-xl' /> Save for later </a></li>
                                </ul>
                                {/* For Small Screen */}
                                <div className="dropdown dropdown-end md-hidden">
                                    <label tabIndex="0" className="">
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                        </a>
                                    </label>
                                    <ul tabIndex="0" className="dropdown-content menu shadow">
                                        <li><Link to={`/products/${item.category}/${item.id}`} className='flex'><BiPencil /> Edit</Link></li>
                                        <li><a onClick={() => handleRemoveItem(item)}> <ImBin /> Remove</a></li>
                                        <li><a> <AiOutlineHeart /> Save for later </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    </>
                })}
            </div>


            {/* <!-- End Cart --> */}

        </>
    )
}

export default CartItems