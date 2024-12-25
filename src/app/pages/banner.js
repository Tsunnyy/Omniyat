'use client'

import Image from "next/image";
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Banner() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline()
        gsap.to('.hero-section', {
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom -600px",
                // end: "bottom bottom",
                // markers: true,
                // pinSpacing: false,
                pin: true,
            },
        })

        tl.to(".overlay-text", {
            opacity: 0,
            y: -50,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
                trigger: ".overlay-text",
                start: "top 20%",
                end: "bottom 40%",
                scrub: true,
                // markers: true,
            },
        });

        tl.to(".overlay-image", {
            transform: 'scale(13) translate(0, -118px)',
            // opacity: 0,
            transformOrigin: "center",
            // ease: "none",
            ease: "sine.out",
            scrollTrigger: {
                trigger: ".overlay-image",
                start: "50% top",
                end: "bottom center",
                scrub: 2,
                // markers: true
            },
        });

        tl.to(".white-layer", {
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".white-layer",
                start: "10% top",
                end: "bottom 60%",
                scrub: true,
                // markers: true,
            },
        });

        tl.to(".content-with-overlay", {
            opacity: 1,
            duration: 2.5,
            ease: "slow(0.7,0.7,false)",
            scrollTrigger: {
                trigger: ".content-with-overlay",
                start: "bottom -200px",
                end: "bottom center",
                scrub: true,
                // markers: true,
            },
        });

    }, []);

    return (
        <>
            <section className="hero-section">
                {/* <div className="white-layer"></div> */}
                {/* <Image
                    src={'/images/overlay.svg'}
                    width={1000}
                    height={1000}
                    className='overlay-image'
                    alt='Overlay Image'
                /> */}
                <svg width="1661" className="overlay-image" height="901" viewBox="0 0 1661 901" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1661 0H0V900H653.289L830.5 490.5L1007.71 900H1661V0Z" fill="white" />
                    <path d="M831.488 749L892.976 900.5H770L831.488 749Z" fill="white" />
                </svg>

                <h2 className="overlay-text">Refined living <br /> redefined</h2>
                <video width="320" height="240" playsInline autoPlay muted loop>
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="content-with-overlay">
                    <div className="content-family">
                        <div className="content content-1">
                            <Image
                                src={'/images/content.webp'}
                                width={1000}
                                height={1000}
                                className='img-fluid'
                                alt='content Image'
                            />
                        </div>

                        <div className="content content-2">
                            <Image
                                src={'/images/content2.webp'}
                                width={1000}
                                height={1000}
                                loading="lazy"
                                className='img-fluid'
                                alt='content Image'
                            />
                            <h3 className="pdp_hero_subheading">
                                Waterfront serenity in the heart of Dubai
                            </h3>
                            <div className="pdp_hero_text text-size-large">
                                Iconic elegance and an extraordinary legacy converge with glamour and modern opulence at The Lana Residences, Dorchester Collection, Dubai.
                            </div>
                        </div>

                        <div className="content content-3">
                            <div className="pdp_stats_content_inner">
                                <div className="pdp_stat_content_item">
                                    <div className="pdp_stat_item text-size-counter">Marasi Bay</div>
                                    <div className="pdp_stat_caption text-size-large">Location</div>
                                </div>
                                <div className="pdp_stat_content_item">
                                    <div className="pdp_stat_item text-size-counter">Mixed use</div>
                                    <div className="pdp_stat_caption text-size-large">Property type</div>
                                </div>
                                <div className="pdp_stat_content_item">
                                    <div className="pdp_stat_item text-size-counter">2023</div>
                                    <div className="pdp_stat_caption text-size-large">Completion</div>
                                </div>
                            </div>
                        </div>

                        <div className="content content-4">
                            <div className="pdp_stats_content_inner">
                                <div className="pdp_stat_content_item">
                                    <div className="pdp_stat_item text-size-counter">33</div>
                                    <div className="pdp_stat_caption text-size-large">Residences</div>
                                </div>
                                <div className="pdp_stat_content_item">
                                    <div className="pdp_stat_item text-size-counter">06</div>
                                    <div className="pdp_stat_caption text-size-large">Penthouses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
