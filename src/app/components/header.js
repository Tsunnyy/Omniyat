import Image from 'next/image'
import React from 'react'

export const Header = () => {
    return (
        <>
            <nav>
                <div className="d-flex justify-content-between align-items-center" style={{ height: '84px' }}>
                    <div id="menuBurger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
                        </svg>
                    </div>

                    <a href='/' className="brand-logo">
                        <Image src={'/images/logo.svg'} width={100} height={100} className='img-fluid logo' alt='logo' />
                        <Image src={'/images/logo.svg'} width={100} height={100} className='logo icon' alt='logo' />
                    </a>

                    <button>Contact Us</button>
                </div>

                <div className="subnav-bar h_scroll d-flex justify-content-center align-items-center">
                    <ul role="list" className="subnav-list w-list-unstyled d-flex justify-content-center">
                        <li className="subnav-item">
                            <a href="https://www.omniyat.com/mixed-use/the-lana-residences#sectionOverview" className="subnav-link w-inline-block">
                                <div>Overview</div>
                            </a>
                        </li>
                        <li className="subnav-item">
                            <a href="https://www.omniyat.com/mixed-use/the-lana-residences#sectionResidences" className="subnav-link w-inline-block">
                                <div>Residences</div>
                            </a>
                        </li>
                        <li className="subnav-item">
                            <a href="https://www.omniyat.com/mixed-use/the-lana-residences#sectionAmenities" className="subnav-link w-inline-block">
                                <div>Amenities</div>
                            </a>
                        </li>
                        <li className="subnav-item">
                            <a href="https://www.omniyat.com/mixed-use/the-lana-residences#sectionLocation" className="subnav-link w-inline-block">
                                <div>Location</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
