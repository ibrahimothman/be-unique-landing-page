import React from 'react'

function Section({ children, classes, isFullWidth }) {
    return (
        <div className={`container mx-auto flex flex-col items-center justify-center ${!isFullWidth && 'px-52'} py-10
            ${classes}`}>
            {children}
        </div>
    )
}

export default Section
