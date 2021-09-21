import {useState} from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    const [emailAddress, setEmailAddress] = useState('')
    return (
        <div className="container pt-4 pb-10 px-10">
            <div className="grid grid-cols-4 gap-8">

                <div className="flex flex-col">
                    <h3 className="mb-5">OUR STORY</h3>
                    <p className="text-xs pr-20 mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis eum repellat, vitae fugiat provident velit laudantium tenetur culpa officia.
                    </p>
                    <div className="flex">
                        <Link to="">
                            <img
                                className="h-4 w-4 mr-5"
                                src="/images/facebook.svg"
                                alt="" />
                        </Link>

                        <Link to="">
                            <img
                                className="h-4 w-4 mr-5"
                                src="/images/instagram.svg"
                                alt="" />
                        </Link>

                        <Link to="">
                            <img
                                className="h-4 w-4 mr-5"
                                src="/images/twitter.svg"
                                alt="" />
                        </Link>
                    </div>
                </div>


                <div className="flex flex-col">
                    <h3 className="mb-5">MORE.</h3>
                    <ul className="flex flex-col">
                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                About Us
                            </li>
                        </Link>

                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                Contact Us
                            </li>
                        </Link>

                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                Track My Order
                            </li>
                        </Link>

                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                FAQs
                            </li>
                        </Link>


                    </ul>
                </div>


                <div className="flex flex-col">
                    <h3 className="mb-5">SHOP.</h3>
                    <ul className="flex flex-col">
                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                Bed Towels
                            </li>
                        </Link>

                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                Bed Towels
                            </li>
                        </Link>

                        <Link to="" className="mb-2">
                            <li className="text-sm">
                                Bed Towels
                            </li>
                        </Link>


                    </ul>
                </div>


                <div className="flex flex-col">
                    <h3 className="mb-5">NEWSLETTER</h3>
                    <p className="text-xs pr-20 mb-4">
                        Subscribe to receive updates, access to exclusive deals, and more
                    </p>
                    <form className="flex border border-gray-300">

                        <input
                            type="email"
                            aria-label="enter email to subscribe into newsletter"
                            autoComplete="off"
                            className="text-sm text-gray-base w-full mr-3 p-2 outline-none"
                            placeholder="Enter Your Email Address"
                            onChange={e => setEmailAddress(e.target.value)}

                        />
                        <button
                            className={`
                                text-sm ${!emailAddress && 'opacity-25'}
                                bg-gray-500 text-black py-2 px-5`}
                            disabled={emailAddress.length < 1}
                            type="submit"
                            >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            <div className="flex justify-between mt-5 items-center">
                <p>&copy;2021</p>
                <img src="/images/payment_options.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
