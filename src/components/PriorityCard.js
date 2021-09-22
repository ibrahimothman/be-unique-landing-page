import React from 'react'

function PriorityCard({ imageSrc, header }) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img
                className="mb-10"
                src={imageSrc}
                alt="" />
            <h3 className="mb-5 font-brown text-priority-item-header">{header}</h3>
            <p className="text-sm font-brown font-thin px-5 text-priority-item-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, fugit!</p>
        </div>
    )
}

export default PriorityCard
