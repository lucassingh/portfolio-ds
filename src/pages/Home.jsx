import React from 'react'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import ContactBanner from '../components/ContactBanner'
import Loader from '../components/Loader'

const Home = () => {

    const loading = false

    return (

        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div >
                        <HeroSection />
                        <AboutSection />{/* 
                        <ServicesSection /> */}
                        {/* <ProjectsSection /> */}
                        {/* <TestimonialsSection /> */}
                        <ContactBanner />
                    </div>
                )
            }
        </>

    )
}

export default Home