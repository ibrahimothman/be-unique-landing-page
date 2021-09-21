import React from 'react'

function BestSellerCard({ imageSrc }) {
    return (
        <div className="flex flex-col">
            <img
                className="mb-4"
                src={imageSrc} alt="" />

            <div className="flex flex-col">
                <p className="font-bold text-xl mb-3">Product Name</p>
                <p className="text-sm mb-3">AED 100</p>
                <p className="text-xs">Available in 3 colors</p>
            </div>
        </div>
    )
}

export default BestSellerCard
