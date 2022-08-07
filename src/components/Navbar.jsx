import { Link, NavLink, useLocation } from 'react-router-dom'
import { BsFillBagCheckFill } from 'react-icons/bs'
import cartSlice from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../features/cart/cartSlice';
import { useEffect } from 'react';

function Navbar() {
    const location = useLocation();
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals())
    }, [cart])

    return (
        <>
            <div className="navbar navbar_custom">
                <div className="container">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5  menu-ul">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/products/women'>Women</NavLink></li>
                                <li><NavLink to='/products/men'>Men</NavLink></li>
                                <li><NavLink to='/products/electronics'>Electronics</NavLink></li>
                                <li><NavLink to='/products/jewelery'>Jewelery</NavLink></li>
                            </ul>
                            <h1 className="menu-Logo-sm-screen text-xl ml-5 logo NavLink"> VENIA</h1>
                        </div>
                    </div>
                    <h1 className="lg-hidden normal-case text-xl logo ml-5  NavLink"> VENIA</h1>
                    <div className="navbar-center lg-flex">
                        <ul className="menu menu-horizontal lg-flex p-0">
                            <li ><NavLink to='/' className={location === '/' ? 'activeNavLink' : 'NavLink'}>Home</NavLink></li>
                            <li><NavLink to='/products/women' className={location === '/women' ? 'activeNavLink' : 'NavLink'}>Women</NavLink></li>
                            <li><NavLink to='/products/men' className={location === '/men' ? 'activeNavLink' : 'NavLink'}>Men</NavLink></li>
                            <li><NavLink to='/products/electronics' className={location === '/electronics' ? 'activeNavLink' : 'NavLink'}>Electronics</NavLink></li>
                            <li><NavLink to='/products/jewelery' className={location === '/jewelery' ? 'activeNavLink' : 'NavLink'}>Jewelery</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end flex mr-5">
                    <NavLink to='/cart' className="mr-7">
                        <div className="indicator">
                            <BsFillBagCheckFill className='text-xl' style={{ color: 'white' }} />
                            <span className="badge badge-sm indicator-item">{cart.cartTotalQuantity}</span>
                        </div>
                    </NavLink>
                </div>
            </div>

        </>
    )
}

export default Navbar