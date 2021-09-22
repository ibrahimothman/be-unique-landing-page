import React from 'react'

function Main() {
    return (
        <div className="relative mb-20">
            <img
                className="w-full"
                src="/images/banner_1.jpg"
                alt="main image" />

            <h1
                className="absolute top-20 left-0 right-0
                flex flex-col items-center justify-center align-items
                text-4xl">
                <span className="mb-3 font-headers text-banner-heading">Super Soft, Stylish Bed Linen</span>
                <span className="font-headers text-banner-heading">Made With Love</span>
            </h1>

            <p
                className="absolute -bottom-14 right-0 left-0
                    font-brown flex flex-col items-center justify-center
                    text-explore font-thin">
                EXPLORE
                <span className="border-l-2 border-solid border-vertical-line h-32"></span>
            </p>
        </div>
    )
}

export default Main
