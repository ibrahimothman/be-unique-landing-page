import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'

function ShopCard({ imageSrc, i }) {

    const dispatch = useDispatch()
    const [isAddedToCart, setIsAddedToCard] = useState(false)
    const toggleProductInCart = () => {
        setIsAddedToCard(prev => !prev)
        if (isAddedToCart) {
            dispatch(removeFromCart())
        } else {
            dispatch(addToCart())
        }
    }
    return (

        <div className="relative group">
            <img
                className="min-h-full"
                src={imageSrc} alt="" />

            {i > 1 ? (
                <button
                    type="button"
                    onClick={toggleProductInCart}
                    className="absolute bottom-5 right-0 left-0 p-4 bg-white w-1/2 mx-auto text-center">
                    <span className="font-brown font-bold text-black text-xs text-buttons">
                        {isAddedToCart ? 'Remove from cart' : 'Add to cart'}
                    </span>
                </button>
            ) : (
                <Link
                    to=""
                    aria-label="shop"
                    className="absolute bottom-5 right-0 left-0 p-4 bg-white w-1/2 mx-auto text-center">
                    <span className="font-brown font-bold text-black text-xs text-buttons">Shop Bath Towels</span>
                </Link>
            )}
        </div>
    )
}

export default ShopCard
