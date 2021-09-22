import React from 'react'
import Section from '../../ui/Section'
import {Link} from 'react-router-dom'

function Social() {
    return (
        <Section isFullWidth>
            <Link to="" className="mb-5">
                <h2 className="flex font-brown text-footer items-center justify-center align-middle">
                    <span>FOLLOW US ON</span>
                    <img
                        className="w-4 h-4 ml-3"
                        src="/images/instagram.svg" alt="" />
                </h2>
            </Link>

            <div className="grid grid-cols-4 gap-0">
                {[...new Array(4)].map((_,i) => (
                    <img key={i} className="w-full h-96" src={`images/bottom_image_${i+1}.jpg`} alt="" />
                ))}
            </div>
        </Section>
    )
}

export default Social
