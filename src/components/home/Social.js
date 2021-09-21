import React from 'react'
import Section from '../../ui/Section'
import {Link} from 'react-router-dom'

function Social() {
    return (
        <Section isFullWidth>
            <Link to="" className="mb-5">
                <h2 className="flex">
                    FOLLOW US ON
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                </h2>
            </Link>

            <div className="grid grid-cols-4 gap-0">
                {[...new Array(4)].map((_,i) => (
                    <img className="w-full h-96" src={`images/bottom_image_${i+1}.jpg`} alt="" />
                ))}
            </div>
        </Section>
    )
}

export default Social
