'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import HotspotsPanel from '../components/HotspotPanel';

export default function Hotspot() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarData, setSidebarData] = useState({});


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline();
        tl.fromTo('.residence_image_overlay_1', {
            opacity: 0,
        }, {
            opacity: .5,
            ease: "sine.out",
            scrollTrigger: {
                trigger: '.residence_hotspots_container',
                start: 'top center',
                end: '20% 30%',
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    // Once the animation ends (when the end position is met), set opacity to 0
                    if (self.progress === 1) {
                        gsap.set('.residence_image_overlay_1', { opacity: 0 });
                    }
                }
            },
        });

        tl.fromTo('.residence_image_overlay_2', {
            opacity: 0,
        }, {
            opacity: .5,
            ease: "sine.out",
            scrollTrigger: {
                trigger: '.residence_hotspots_container',
                start: '20% 30%',
                end: 'center 30%',
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    if (self.progress === 1) {
                        gsap.set('.residence_image_overlay_2', { opacity: 0 });
                    }
                }
            },
        });

        tl.fromTo('.residence_image_overlay_3', {
            opacity: 0,
        }, {
            opacity: .6,
            scrollTrigger: {
                trigger: '.residence_hotspots_container',
                start: 'center 30%',
                end: '90% 70%',
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    // Once the animation ends (when the end position is met), set opacity to 0
                    if (self.progress === 1) {
                        gsap.set('.residence_image_overlay_3', { opacity: 0 });
                    }
                }
            },
        });


        const handleScroll = () => {
            const overlayElements = document.querySelectorAll('.residence_image_overlay');  // Select all overlay images
            overlayElements.forEach((overlayElement) => {
                // Check if the overlay element is in the viewport
                if (overlayElement.getBoundingClientRect().top < window.innerHeight) {
                    ScrollTrigger.refresh();  // Refresh ScrollTrigger if the element is in the viewport
                }
            });
        };


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleHotspotClick = (data) => {
        setIsSidebarOpen(true)
        setSidebarData(data)
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const penthouseData = {
        title: "Penthouse",
        description: `
          Situated at the apex of this residential tower on the top three floors, six of The Lana Residences are penthouses conceived on a scale and quality that reflects OMNIYAT’s ambition. With views from both sides of the tower, each penthouse has its own private swimming pool and terrace. They feature either four or five bedrooms, soaring ceilings and floor space extending from 9,400 sq. ft. to a staggering 17,700 sq. ft. For a connoisseur of luxury living, the penthouses at The Lana Residences, Dorchester Collection, Dubai represent the ultimate statement. Quite simply, there is nothing else like them.
        `,
    };

    const lanaHotelData = {
        title: "The Lana Hotel",
        description: `
          Dorchester Collection, a portfolio of nine of the world’s most legendary properties, and OMNIYAT, the visionary real estate development group, has announced that their new luxury landmark will be called The Lana. Coming from the Arabic expression meaning ‘for us’, The Lana represents a place of tranquillity and hospitality, evoking a sense of peace and belonging, and presenting an unrivalled lifestyle experience.
        `,
    };


    return (
        <div className="residence_hotspots_container_main">
            <div className="content-container">
                <div className="pdp_content_text heading-style-h6 text-color-richblue">
                    The 32-storey tower houses a range of exclusive penthouses to apartments with two to four bedrooms. With gracious proportions, private terraces, and floor-to-ceiling windows, each one overlooks the cityscape of Dubai.
                </div>
            </div>
            <div className="residence_hotspots_container">
                <div className="openHotspot openHotspot-1 hotspot_cta lana_hotspot_cta_1 w-inline-block" onClick={() => handleHotspotClick(penthouseData)}>
                    <div className="hotspot">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                        </svg>
                    </div>
                    <span className='hotspot_text text-size-large'>Panthouse</span>
                </div>
                <div className="openHotspot openHotspot-2 hotspot_cta lana_hotspot_cta_2 w-inline-block" onClick={() => handleHotspotClick(lanaHotelData)}>
                    <div className="hotspot">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                        </svg>
                    </div>
                    <span className='hotspot_text text-size-large'>The Lana Hotel</span>
                </div>
                <Image
                    src={'/images/hotspot.webp'}
                    width={2000}
                    height={1516}
                    className="img-fluid residence_image_main"
                    alt="Overview Image"
                />
                <Image
                    src={'/images/1.webp'}
                    width={2000}
                    height={1516}
                    className="img-fluid residence_image_overlay residence_image_overlay_1"
                    alt="Overview Image"
                />
                <Image
                    src={'/images/2.webp'}
                    width={2000}
                    height={1516}
                    className="img-fluid residence_image_overlay residence_image_overlay_2"
                    alt="Overview Image"
                />
                <Image
                    src={'/images/3.webp'}
                    width={2000}
                    height={1516}
                    className="img-fluid residence_image_overlay residence_image_overlay_3"
                    alt="Overview Image"
                />

                <HotspotsPanel isOpen={isSidebarOpen} closeSidebar={closeSidebar} data={sidebarData} />
            </div>
        </div>
    );
}
