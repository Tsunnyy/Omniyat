'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Drawer() {
    const [drawer, setDrawer] = useState(false)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

    }, []);

    return (
        <>
            <div className={drawer == true ? "bottom_drawer visible" : "bottom_drawer"}>
                <div className="bottom_drawer_start d-flex justify-content-between align-items-center" onClick={() => setDrawer(!drawer)}>
                    <h6 className="specs_heading">Masterpiece Specifications</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        {drawer == false ? <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /> : <path fill="currentColor" d="M19 12.998H5v-2h14z" />}
                    </svg>
                </div>
                <div className="specs_grid text-size-large">
                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Location</div>
                        <div id="w-node-_04a39101-fcc8-9784-4548-d70b3b1eca6c-26e0d45b" className="spec_value">Marasi Bay</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Use</div>
                        <div id="w-node-_67016dcb-98b0-5e39-d2c8-fee46937536d-26e0d45b" className="spec_value">Residences, Hotel, F&amp;B and retail</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Architecture</div>
                        <div id="w-node-_5b21518d-37c9-dbb3-cdbb-761be8720987-26e0d45b" className="spec_value">Foster + Partners</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Interior Designers</div>
                        <div id="w-node-_809d47e6-c4f3-7c3d-8019-f6eaedabe2c7-26e0d45b" className="spec_value">Gilles &amp; Boissier</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Completed by</div>
                        <div id="w-node-_7db7ec49-fded-e475-3e64-d0ec03fe13fa-26e0d45b" className="spec_value">2023</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Residences type</div>
                        <div id="w-node-c59b32d5-99ff-7f73-515b-2104d5fa2665-26e0d45b" className="spec_value">39 Residences</div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Simplex</div>
                        <div id="w-node-_71aebcb0-fdf3-7d3a-f981-2b1c57e93d18-26e0d45b" className="spec_value">
                            2 Bedroom + Study<br />
                            3,900 - 4,000 sq. ft
                        </div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Simplex</div>
                        <div id="w-node-_3c1044ed-b8e3-11e8-2232-5fa51a666dc8-26e0d45b" className="spec_value">
                            4 Bedroom<br />
                            7,700 - 7,800 sq. ft
                        </div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Duplex</div>
                        <div id="w-node-_5b6e98a9-800c-d345-ec99-2a2364f7eb6f-26e0d45b" className="spec_value">
                            4 Bedroom<br />
                            6,302 sq. ft
                        </div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Duplex</div>
                        <div id="w-node-e788ab0c-9705-67da-cba6-c86d9e32c07f-26e0d45b" className="spec_value">
                            4 Bedroom<br />
                            6,200 - 10,000 sq. ft
                        </div>
                    </div>

                    <div className="spec_item">
                        <div className="spec_label text-size-medium">Penthouses</div>
                        <div id="w-node-_01eab2b0-1c31-e3f8-abfb-29766b7eab3a-26e0d45b" className="spec_value">
                            4-5 Bedrooms<br />
                            9,400 - 17,700 sq. ft.
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
