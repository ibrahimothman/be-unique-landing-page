import React from 'react'

function Main() {
    return (
        <div className="relative mb-12">
            <img
                className="w-full"
                src="/images/banner_1.jpg"
                alt="main image" />

            <h1
                className="absolute top-20 left-0 right-0
                flex flex-col items-center justify-center align-items
                text-4xl">
                <span className="mb-3">Super Soft, Stylish Bed Linen</span>
                <span>Made With Love</span>
            </h1>
        </div>
    )
}

export default Main
