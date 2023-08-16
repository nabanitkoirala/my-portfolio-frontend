import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
import Qualifications from './components/Qualifications'
import Trainings from './components/Trainings'

const Dashboard = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Qualifications />
            <Experience />
            {/* <Trainings /> */}
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
                <Contact />
                {window.screen.width < 500 ? "" : <StarsCanvas />}
            </div>
        </div>
    )
}

export default Dashboard