import React from 'react'

function PriorityCard({ imageSrc }) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img
                className="mb-2"
                src={imageSrc}
                alt="" />
            <h3 className="mb-5">Quality Products</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, fugit!</p>
        </div>
    )
}

export default PriorityCard
