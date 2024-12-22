'use client'

import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Hotspot() {

    gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {

    //     let tl = gsap.timeline()
    //     tl.to('.residence_image_overlay_1', {
    //         opacity: 1,
    //         duration: 1,
    //         ease: 'power4.out',
    //         scrollTrigger: {
    //             trigger: '.residence_hotspots_container',
    //             start: 'top top',
    //             end: 'top -100vh',
    //             scrub: true,
    //             markers: true,
    //             anticipatePin: 1,
    //             invalidateOnRefresh: true,
    //             // pin: true,
    //             // pinSpacing: false,
    //         },
    //     });

    // }, []);

    return (
        <div className="residence_hotspots_container_main">
            <div className="content-container">
                <div className="pdp_content_text heading-style-h6 text-color-richblue">
                    The 32-storey tower houses a range of exclusive penthouses to apartments with two to four bedrooms. With gracious proportions, private terraces, and floor-to-ceiling windows, each one overlooks the cityscape of Dubai.
                </div>
            </div>
            <div className='residence_hotspots_container'>
                <Image
                    src={'/images/hotspot.webp'}
                    width={2000}
                    height={1516}
                    className='img-fluid residence_image_main'
                    alt='Overview Image'
                />
                <Image
                    src={'/images/1.webp'}
                    width={2000}
                    height={1516}
                    className='img-fluid residence_image_overlay residence_image_overlay_1'
                    alt='Overview Image'
                />
                {/* <Image
                    src={'/images/2.webp'}
                    width={2000}
                    height={1516}
                    className='img-fluid residence_image_overlay residence_image_overlay_2'
                    alt='Overview Image'
                />
                <Image
                    src={'/images/3.webp'}
                    width={2000}
                    height={1516}
                    className='img-fluid residence_image_overlay residence_image_overlay_3'
                    alt='Overview Image'
                /> */}
            </div>
        </div>
    )
}
