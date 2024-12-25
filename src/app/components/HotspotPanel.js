import React, { useEffect, useState } from "react";

const HotspotsPanel = ({ isOpen, closeSidebar, data }) => {

    const [showPanel, setShowPanel] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShowPanel(true);
        } else {
            setTimeout(() => setShowPanel(false), 300);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>

            <div className="overlay" onClick={closeSidebar}>
                <div className={`residence_hotspots_panel w-dyn-item ${showPanel ? "show" : "hide"}`}
                    onClick={(e) => e.stopPropagation()}>
                    <div className="icon-close w-embed" onClick={closeSidebar}>
                        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m9.211 1.433.354-.353-.707-.707-.354.353L5.001 4.23 1.496.726 1.143.372l-.707.707.353.354 3.504 3.504L.726 8.504l-.353.354.707.707.353-.353 3.568-3.568 3.566 3.567.354.353.707-.707-.354-.353-3.566-3.567L9.21 1.433Z"
                                fill={"currentColor"}
                            ></path>
                        </svg>
                    </div>
                    <h4 className="text-color-richblue">{data.title}</h4>
                    <div className="panel_text text-size-medium text-color-richblue">
                        {data.description}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotspotsPanel;
