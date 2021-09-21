import React from 'react'
import {Link} from 'react-router-dom'

function ShopCard({ imageSrc }) {
    return (

        <div className="relative group">
            <img
                className="min-h-full"
                src={imageSrc} alt="" />

            <Link to="" aria-label="shop"
                className="absolute bottom-5 right-0 left-0 p-4 bg-white w-1/2 mx-auto text-center">
                <span>Shop Bath Towels</span>
            </Link>
        </div>
    )
}

export default ShopCard
