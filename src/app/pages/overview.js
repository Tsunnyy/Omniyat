import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Overview = () => {

    useEffect(() => {
        gsap.to('.carouselstickydiv', {
            scale: 1,
            duration: 2.5,
            borderRadius: 0,
            ease: "power4.out",
            y: 0,
            scrollTrigger: {
                trigger: '.carouselstickydiv',
                start: 'top 70%',
                end: 'bottom bottom',
                // markers: true,
                scrub: 2
            }
        })
    }, [])


    return (
        <>
            <section id="sectionOverview" className='section_overview'>
                <div className="overview_container">
                    <div className="content-container sticky-top">
                        <h4 className='content-caption text-size-caption'>Overview</h4>
                        <h5 className="content-heading masterpieces_heading">A life less ordinary</h5>
                        <p className="content-text text-size-large text-color-richblue">With only 39 exquisite apartments, managed exclusively by Dorchester Collection, this elite waterfront development in the Burj Khalifa District is the perfect embodiment of the legendary Dorchester Collection experience, the iconic architecture of Foster + Partners, and the timeless design of Gilles & Boissier.</p>
                    </div>
                </div>
                <div className="carouselstickydiv noNav">
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/1.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                            <div className="full_carousel_slide_content">
                                <h4 className="full_carousel_slide_title heading-style-h5">Architecture by Foster+Partners</h4>
                                <div className="full_carousel_slide_caption text-size-medium">The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.</div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/2.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                            <div className="full_carousel_slide_content">
                                <h4 className="full_carousel_slide_title heading-style-h5">Architecture by Foster+Partners</h4>
                                <div className="full_carousel_slide_caption text-size-medium">The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.</div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/3.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                            <div className="full_carousel_slide_content">
                                <h4 className="full_carousel_slide_title heading-style-h5">Architecture by Foster+Partners</h4>
                                <div className="full_carousel_slide_caption text-size-medium">The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.</div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/4.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                            <div className="full_carousel_slide_content">
                                <h4 className="full_carousel_slide_title heading-style-h5">Architecture by Foster+Partners</h4>
                                <div className="full_carousel_slide_caption text-size-medium">The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.</div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <section id="sectionOverview" className='section_overview'>
                <div className="overview_container">
                    <div className="content-container sticky-top">
                        <h4 className='content-caption text-size-caption'>Residences</h4>
                        <h5 className="content-heading masterpieces_heading">The ultimate address</h5>
                        <p className="content-text text-size-large text-color-richblue">Every aspect of this prestigious new address on the waterfront of the Marasi Bay Marina embodies the unmistakable essence of luxury, creating an unparalleled living experience.</p>
                    </div>
                </div>
                <div className="carouselstickydiv">
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/5.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/6.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src={'/images/overview/7.webp'}
                                width={2000}
                                height={2000}
                                className='img-fluid'
                                alt='Overview Image'
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}
