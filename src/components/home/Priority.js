import React from 'react'
import Section from '../../ui/Section'
import PriorityCard from '../PriorityCard'

function Priority() {
    const cardsHeaders = [
        'Quality Products',
        'Life Warranty',
        'Stress-free Shopping',
        'Fair Prices',
    ]
    return (
        <Section classes="bg-secondary-bg">
            <h2 className="mb-5 mt-5 font-headers text-2xl text-priority">Your Comfort Is Our #1 Priority</h2>

            <div className="flex justify-between py-10">
                {[...new Array(4)].map((_, i) => (
                    <PriorityCard key={i} imageSrc={`images/icons/icon_${i+1}.png`} header={cardsHeaders[i]}/>
                ))}
            </div>
        </Section>
    )
}

export default Priority
