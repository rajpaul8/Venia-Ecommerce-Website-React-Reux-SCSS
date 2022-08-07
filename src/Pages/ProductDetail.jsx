import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../features/products/productSlice';
import { addToCart } from '../features/cart/cartSlice';
import Spinner from '../components/Spinner';
import { toast } from "react-toastify";
import Breadcrumbs from '../components/BreadCrumps';
import { AiFillStar, AiOutlineStar, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'

function ProductDetail() {
  const { product, isLoading, isError, message } = useSelector(state => state.products)
  const dispatch = useDispatch();
  const { productID } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getProduct(productID));
    //eslint-disable-next-line
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleQuantityDecreament = (e) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    else {
      e.preventDefault()
      setQuantity(1)
    }
  }
  const handleQuantityIncreament = () => {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    let addingToCartProduct = { ...product };
    addingToCartProduct.cartQuantity = quantity;
    dispatch(addToCart(addingToCartProduct))
    navigate('/cart')
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="pt-11">
          <div className="container">
            {/* Main Hero Section */}
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-y-hidden">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md-pr-2">
                <div className='md-hidden'><Breadcrumbs /></div>
                <div className="productContainer">
                  {/* Get List of Images for the product here */}
                  <ul className="productThumbnails">
                    <li> <a href="#productSlide1"><img src={product.image} /></a> </li>
                    <li> <a href="#productSlide2"><img src={product.image} /></a> </li>
                    <li> <a href="#productSlide3"><img src={product.image} /></a> </li>
                    <li> <a href="#productSlide4"><img src={product.image} /></a> </li>
                  </ul>
                  <ul className="productproductSlides">
                    <li id="productSlide1"><img src={product.image} alt={product.title} /></li>
                    <li id="productSlide2"><img src={product.image} alt={product.title} /></li>
                    <li id="productSlide3"><img src={product.image} alt={product.title} /></li>
                    <li id="productSlide4"><img src={product.image} alt={product.title} /></li>
                  </ul>
                </div>

              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md-pl-7">
                <div className='md-block'><Breadcrumbs /></div>
                <div className='pt-2'>
                  <h1 className='text-3xl font-bold text-gray-800'>{product.title}</h1>
                  <h3 className='text-lg pt-1'>$ {product.price}</h3>
                  <div className='flex items-center'>
                    {[...Array(Math.floor(product.rating.rate))].map((x, i) =>
                      <AiFillStar className='text-lg' key={i} />
                    )}
                    {[...Array(5 - Math.floor(product.rating.rate))].map((x, i) =>
                      <AiOutlineStar className='text-lg' key={i} />
                    )}
                    <p className='text-sm font-bold underline px-1'>({product.rating.count}) </p>
                  </div>
                </div>

                <div className='text-sm pt-2'>
                  {isReadMore ? product.description.slice(0, 150) : product.description}
                  <span onClick={toggleReadMore} className="read-or-hide text-sm font-bold">
                    {isReadMore ? " ...Read more" : " show less"}
                  </span>
                </div>

                <div className='pt-2'>
                  <hr />
                  <h3 className='text-lg py-3'>Quantity</h3>
                  {/* Increment and Decrement Bar */}
                  <div className=' quantityAdjustment'>
                    <a className='decrementer text-4xl pr-2' onClick={() => handleQuantityDecreament()}><AiOutlineMinusCircle /></a>
                    <div>
                      <input type="number" className='quantity-counter text-center' disabled value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <a className='text-4xl pl-2 ' onClick={() => handleQuantityIncreament()}><AiOutlinePlusCircle /></a>
                  </div>
                </div>

                <div className='pt-7 flex quantityAdjustment'>
                  <button className='organgeButtonFilled' onClick={() => handleAddToCart()}>Add to Cart</button>
                </div>
                <div className='quantityShare'>
                  <div className='text-xl mr-5 flex'><AiOutlineHeart /><span className='text-base'> &nbsp; Save</span> </div>
                  <div className='text-xl flex'><AiOutlineShareAlt /><span className='text-base'>&nbsp; Share</span>  </div>
                </div>
              </div>
            </div>
            {/* More Title and Description */}
            <div className='pt-5'>
              <hr />
              <h1 className='text-3xl font-bold text-gray-800 pt-3'>{product.title}</h1>
              <h5 className='font-bold text-md pt-2'>Description</h5>
              <h5 className='text-sm pt-1'>{product.description}</h5>
              <div className='pt-7'>
                <div className='orange_border_product flex justify-center md:justify-start'>&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail