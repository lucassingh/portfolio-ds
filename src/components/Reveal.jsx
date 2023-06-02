import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width = '100%' }) => {

    const ref = useRef(null)

    const isInview = useInView(ref, { once: true })

    const mainControls = useAnimation()

    const slideControls = useAnimation()

    useEffect(() => {
        if (isInview){
            mainControls.start('visible');
            slideControls.start('visible')
        }
    }, [isInview, slideControls, mainControls])


    return (
        <div ref={ ref } style={{ position: 'relative', width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left:0 },
                    visible: { left: '100%' },
                }}
                initial='hidden'
                animate={slideControls}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                style={{
                    position:'absolute',
                    top:4,
                    bottom:4,
                    borderRadius:'15px',
                    left:0,
                    right:0,
                    backgroundColor: '#BCB4B4',
                    zIndex:20,
                }}
            />
        </div>
    )
}

export default Reveal