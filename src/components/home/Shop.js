import React from 'react'
import ShopCard from '../ShopCard'
import Section from '../../ui/Section'

function Shop() {
    return (
        <Section>
            <h2 className="flex flex-col justify-center items-center mb-8">
                <p>Our premium products got the finest quality cotton that create an exquisite lightweight</p>
                <p>textile that’s both soft and crisp – guaranteed to give you a wonderful night’s sleep.</p>
            </h2>

            <div className="grid grid-cols-2 gap-0 mt-4">
                {[...new Array(4)].map((_,i) => <ShopCard key={i} imageSrc={`/images/image_${i+1}.jpg`}/>)}
            </div>

        </Section>
    )
}

export default Shop
