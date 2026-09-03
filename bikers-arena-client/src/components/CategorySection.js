import React from "react";

import jacketImage from "../assets/home-pic/jacket.jpg";
import glovesImage from "../assets/home-pic/gloves.jpg";
import luggageImage from "../assets/home-pic/luggage.jpg";
import pantImage from "../assets/home-pic/pant.jpg";
import kneeGuardImage from "../assets/home-pic/kneegaurd.jpg";
import accessoriesImage from "../assets/home-pic/accessories.jpg";
import baseLayerImage from "../assets/home-pic/baselayer.jpg";

function CategorySection() {
    return (
        <>
            {/* =========================
                FIRST ROW
            ========================= */}

            <div className="main">

                {/* Jackets */}
                <div className="box category-box">
                    <a href="/products/jackets">
                        <img
                            src={jacketImage}
                            alt="Jackets"
                        />

                        <span className="category-button">
                            <span>Jackets</span>
                        </span>
                    </a>
                </div>


                {/* Gloves */}
                <div className="box category-box">
                    <a href="/products/gloves">
                        <img
                            src={glovesImage}
                            alt="Gloves"
                        />

                        <span className="category-button">
                            <span>Gloves</span>
                        </span>
                    </a>
                </div>


                {/* Luggage */}
                <div className="box category-box">
                    <a href="/products/luggage">
                        <img
                            src={luggageImage}
                            alt="Luggage"
                        />

                        <span className="category-button">
                            <span>Luggage</span>
                        </span>
                    </a>
                </div>

            </div>


            {/* =========================
                SECOND ROW
            ========================= */}

            <div className="container2">

                {/* Pants */}
                <div className="box1 category-box">
                    <a href="/products/pants">
                        <img
                            src={pantImage}
                            alt="Pants"
                        />

                        <span className="category-button">
                            <span>Pants</span>
                        </span>
                    </a>
                </div>


                {/* Knee Guard */}
                <div className="box1 category-box">
                    <a href="/products/knee-guard">
                        <img
                            src={kneeGuardImage}
                            alt="Knee Guard"
                        />

                        <span className="category-button">
                            <span>Knee Guard</span>
                        </span>
                    </a>
                </div>


                {/* Accessories */}
                <div className="box1 category-box">
                    <a href="/products/accessories">
                        <img
                            src={accessoriesImage}
                            alt="Accessories"
                        />

                        <span className="category-button">
                            <span>Accessories</span>
                        </span>
                    </a>
                </div>


                {/* Base Layers */}
                <div className="box1 category-box">
                    <a href="/products/base-layers">
                        <img
                            src={baseLayerImage}
                            alt="Base Layers"
                        />

                        <span className="category-button">
                            <span>Base Layers</span>
                        </span>
                    </a>
                </div>

            </div>

            <hr />
        </>
    );
}

export default CategorySection;