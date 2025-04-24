import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Read</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1532012197267-da84d127e765"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Enhance</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Knowladge</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
