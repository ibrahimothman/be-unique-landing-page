import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'

function Header() {
    const cartLength = useSelector(selectCart)

    return (
        <header className="h-16 bg-white border-b border-gray-300 p-10 sticky top-0 z-50">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full items-center">

                    <div className="text-gray-700 text-center flex items-center cursor-pointer">
                        <ul className="flex items-center justify-between text-nav">

                            <Link to="" className="mr-5" aria-label="shop">
                                <li className="font-brown">SHOP</li>
                            </Link>

                            <Link to="" className="mr-5" aria-label="our story">
                                <li className="font-brown">OUR STORY</li>
                            </Link>
                            <Link to="" className="mr-5" aria-label="expertise">
                                <li className="font-brown">EXPERTISE</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="text-gray-700 text-center flex items-center cursor-pointer">
                        <h1 className="flex justify-center items-center text-center w-full">
                            <Link to="/" aria-label="logo">
                                <img src="/images/logo.png" alt="logo" className="mt-2 w-6/12 mx-auto"/>
                            </Link>
                        </h1>
                    </div>

                    <div className="text-gray-700 text-center flex items-center align-items justify-between">
                        <>

                            <Link to="/" aria-label="contact" className="mr-5">
                                <span className="mr-20 text-nav text-lg">CONTACT</span>
                            </Link>

                            <Link
                                to=""
                                className="mr-5"
                                aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>

                            </Link>

                            <Link to="/" className="mr-5" aria-label="profile">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>

                            <Link to="/" aria-label="cart" className="mr-5 relative flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span
                                    className="absolute right-0 top-0 rounded-full
                                        bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono
                                        text-sm  leading-tight text-center">
                                        {cartLength}
                                </span>
                            </Link>


                        </>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
