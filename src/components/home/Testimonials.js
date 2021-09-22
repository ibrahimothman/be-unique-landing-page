import React from 'react'
import Section from '../../ui/Section'
import {Link} from 'react-router-dom'

function Testimonials() {
    return (
        <Section>
            <img
                className="mb-5 mt-5"
                src="/images/starts.png" alt="" />
            <h2 className="mb-8 flex flex-col items-center justify-center">
                <p className="font-headers text-2xl text-testimonial-comment">"This is the best towel set I've ever had; it's cool,</p>
                <p className="font-headers text-2xl text-testimonial-comment">comfortable and aesthetically perfect."</p>
            </h2>
            <Link to=""
                className="border-b border-gray-300 mb-10 font-brown text-gray-400 text-footer"
                >READ TESTIMONIALS</Link>
        </Section>
    )
}

export default Testimonials
