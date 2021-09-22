import React from 'react'

function BestSellerCard({ imageSrc, hasSpecialOffer }) {
    return (
        <div className="flex flex-col">
            <img
                className="mb-4"
                src={imageSrc} alt="" />

            <div className="flex flex-col">
                <p className="font-bold  mb-3 font-brown text-buttons">Product Name</p>
                <p className="text-sm mb-3 font-brown font-thin text-price">AED XXX</p>
                {hasSpecialOffer && (
                    <p className="text-xs font-brown">
                        <span className="text-special-offer">Special Offer</span>
                        {` `}
                        <span className="text-xs font-brown text-available">Get 25% OFF</span>
                    </p>
                )}
                {!hasSpecialOffer && <p className="text-xs font-brown text-available">Available in 3 colors</p>}
            </div>
        </div>
    )
}

export default BestSellerCard
