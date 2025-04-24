import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">Welcome to the JAS Library !</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    This online portal is your personalized gateway to seamlessly manage your library account and unlock a world of information and resources from the convenience of your device.

Through this system, you can easily search our comprehensive catalog to find books, e-books, articles, and other materials. You have the power to renew items you've borrowed, place holds on materials currently on loan, and keep track of your reading history.<br/>
                        <br/>
                        Beyond managing your loans, this platform provides access to a growing collection of digital resources subscribed to by the library. You can also update your contact information and manage your notification preferences to stay informed about your account and new arrivals.
                        <br/>
                        <br/>
                        Our goal is to make your library experience as convenient and efficient as possible. Log in now to explore all the features and start making the most of your library membership!<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
