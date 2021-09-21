import React from 'react'
import Section from '../../ui/Section'
import BestSellerCard from './BestSellerCard'


function BestSeller() {
    return (
        <Section>
            <h2 className="flex flex-col justify-center items-center mb-8">
                <p>Best Seller</p>
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
                {[...new Array(3)].map((_,i) => <BestSellerCard key={i} imageSrc={`/images/product_${i+1}.jpg`}/>)}
            </div>

        </Section>
    )
}

export default BestSeller
