import React from 'react';
import Brand1 from  '../../../../Assets/BrandImg/Brand1 (1).png'
import Brand2 from  '../../../../Assets/BrandImg/Brand1 (2).png'
import Carousel from 'react-bootstrap/Carousel';


const BrandCarousel = () => {
    return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                    src={Brand1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                    src={Brand2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

export default BrandCarousel;