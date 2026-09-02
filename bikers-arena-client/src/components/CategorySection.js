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
            <div className="main">

                <div className="box">
                    <a href="/products/jackets">
                        <img src={jacketImage} alt="Jackets" />
                    </a>
                </div>

                <div className="box">
                    <a href="/products/gloves">
                        <img src={glovesImage} alt="Gloves" />
                    </a>
                </div>

                <div className="box">
                    <a href="/products/luggage">
                        <img src={luggageImage} alt="Luggage" />
                    </a>
                </div>

            </div>

            <div className="container2">

                <div className="box1">
                    <a href="/products/pants">
                        <img src={pantImage} alt="Pants" />
                    </a>
                </div>

                <div className="box1">
                    <a href="/products/knee-guard">
                        <img src={kneeGuardImage} alt="Knee Guard" />
                    </a>
                </div>

                <div className="box1">
                    <a href="/products/accessories">
                        <img src={accessoriesImage} alt="Accessories" />
                    </a>
                </div>

                <div className="box1">
                    <a href="/products/base-layers">
                        <img src={baseLayerImage} alt="Base Layers" />
                    </a>
                </div>

            </div>

            <hr />
        </>
    );
}

export default CategorySection;