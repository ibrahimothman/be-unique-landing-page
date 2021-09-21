import React from 'react'
import Section from '../../ui/Section'
import PriorityCard from '../PriorityCard'

function Priority() {
    return (
        <Section classes="bg-gray-200">
            <h2 className="mb-5 mt-5">Your Comfort Is Our #1 Priority</h2>

            <div className="flex justify-between py-10">
                {[...new Array(4)].map((_, i) => <PriorityCard key={i} imageSrc={`images/icons/icon_${i+1}.png`}/>)}
            </div>
        </Section>
    )
}

export default Priority
