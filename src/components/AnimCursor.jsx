import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {
    return (
        <AnimatedCursor 
            innerSize={4}
            outerSize={20}
            color='193, 11, 111'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={2}
        />
    )
}

export default AnimCursor