import React from 'react'
import ShopCard from '../ShopCard'
import Section from '../../ui/Section'

function Shop() {

    const buttonsText = [
        'Shop Bath Linens',
        'Shop Bath Towels',
        'Shop Bath Robes',
        'Shop Home Fragrances',
    ]
    return (
        <Section>
            <h2 className="flex flex-col justify-center items-center mb-8">
                <p className="font-headers text-lg text-section-header">Our premium products got the finest quality cotton that create an exquisite lightweight</p>
                <p className="font-headers text-lg text-section-header">textile that’s both soft and crisp – guaranteed to give you a wonderful night’s sleep.</p>
            </h2>

            <div className="grid grid-cols-2 gap-0 mt-4">
                {[...new Array(4)].map((_,i) => (
                    <ShopCard key={i} i={i} imageSrc={`/images/image_${i+1}.jpg`} buttonText={buttonsText[i]}/>
                ))}
            </div>

        </Section>
    )
}

export default Shop
