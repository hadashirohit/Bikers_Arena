import React from "react";

import ktmImage from "../assets/carousel-source/ktm.jpg";
import pic1 from "../assets/carousel-source/pic1.jpg";
import pic2 from "../assets/carousel-source/pic2.jpg";
import video1 from "../assets/carousel-source/vidio1.mp4";

function HeroCarousel() {
    return (
        <div
            className="carousel slide"
            id="heroCarousel"
            data-bs-ride="carousel"
        >

            {/* Carousel Indicators */}
            <div className="carousel-indicators">

                <button
                    className="active"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="0"
                    aria-label="Slide 1"
                ></button>

                <button
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>

                <button
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>

                <button
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>

            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">

                {/* Slide 1 */}
                <div className="carousel-item active">
                    <img
                        src={ktmImage}
                        className="d-block w-100"
                        alt="KTM Motorcycle"
                    />
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <img
                        src={pic1}
                        className="d-block w-100"
                        alt="Biker's Arena"
                    />
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                    <img
                        src={pic2}
                        className="d-block w-100"
                        alt="Motorcycle Riding"
                    />
                </div>

                {/* Slide 4 */}
                <div className="carousel-item">
                    <video
                        className="d-block w-100"
                        src={video1}
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </div>

            </div>

            {/* Previous Button */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">
                    Previous
                </span>
            </button>

            {/* Next Button */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">
                    Next
                </span>
            </button>

        </div>
    );
}

export default HeroCarousel;