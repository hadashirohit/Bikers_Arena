import React from "react";

function ProductCard({ product }) {
    return (
        <div className="product-card">

            <img
                src={product.prod_image_url}
                alt={product.prod_name}
            />

            <h3>{product.prod_name}</h3>

            <p>{product.prod_desc}</p>

            <h4>₹ {product.prod_price}</h4>

            <p>
                ⭐ {product.prod_rating}
                {" "}
                ({product.prod_review_count} reviews)
            </p>

        </div>
    );
}

export default ProductCard;