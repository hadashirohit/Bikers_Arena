import React from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/products/jackets">
                        <img
                            src={jacketImage}
                            alt="Jackets"
                        />

                        <span className="category-button">
                            <span>Jackets</span>
                        </span>
                    </Link>
                </div>


                {/* Gloves */}
                <div className="box category-box">
                    <Link to="/products/gloves">
                        <img
                            src={glovesImage}
                            alt="Gloves"
                        />

                        <span className="category-button">
                            <span>Gloves</span>
                        </span>
                    </Link>
                </div>


                {/* Luggage */}
                <div className="box category-box">
                    <Link to="/products/luggage">
                        <img
                            src={luggageImage}
                            alt="Luggage"
                        />

                        <span className="category-button">
                            <span>Luggage</span>
                        </span>
                    </Link>
                </div>

            </div>


            {/* =========================
                SECOND ROW
            ========================= */}

            <div className="container2">

                {/* Pants */}
                <div className="box1 category-box">
                    <Link to="/products/pants">
                        <img
                            src={pantImage}
                            alt="Pants"
                        />

                        <span className="category-button">
                            <span>Pants</span>
                        </span>
                    </Link>
                </div>


                {/* Knee Guard */}
                <div className="box1 category-box">
                    <Link to="/products/knee-guard">
                        <img
                            src={kneeGuardImage}
                            alt="Knee Guard"
                        />

                        <span className="category-button">
                            <span>Knee Guard</span>
                        </span>
                    </Link>
                </div>


                {/* Accessories */}
                <div className="box1 category-box">
                    <Link to="/products/accessories">
                        <img
                            src={accessoriesImage}
                            alt="Accessories"
                        />

                        <span className="category-button">
                            <span>Accessories</span>
                        </span>
                    </Link>
                </div>


                {/* Base Layers */}
                <div className="box1 category-box">
                    <Link to="/products/base-layers">
                        <img
                            src={baseLayerImage}
                            alt="Base Layers"
                        />

                        <span className="category-button">
                            <span>Base Layers</span>
                        </span>
                    </Link>
                </div>

            </div>

            <hr />
        </>
    );
}

export default CategorySection;