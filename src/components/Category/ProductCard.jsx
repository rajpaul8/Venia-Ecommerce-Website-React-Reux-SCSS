import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ProductCard({ productImage, productName, productPrice, productID, productCategory }) {
    return (
        <><div className='productCard hoverImageScaleZoomOut'>
            <Link to={`/products/${productCategory}/${productID}`}>
                <div className="productImage">
                    <img src={productImage} alt={productName} />
                </div>
                <div className="">
                    <p className='productName'>{productName}</p>
                    <p>$ {productPrice}</p>
                </div>
                <div className="productPrice">
                </div>
                <div className="addToCartWithHeart">
                    <AiOutlineHeart className='text-xl' />
                </div>
            </Link>
        </div>
        </>
    )
}

export default ProductCard