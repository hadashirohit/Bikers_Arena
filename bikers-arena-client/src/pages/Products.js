import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";

function Products() {

    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let categoryId = null;

        if (category === "jackets") {
            categoryId = 1;
        }
        else if (category === "gloves") {
            categoryId = 2;
        }
        else if (category === "luggage") {
            categoryId = 3;
        }
        else if (category === "pants") {
            categoryId = 4;
        }
        else if (category === "knee-guard") {
            categoryId = 5;
        }
        else if (category === "accessories") {
            categoryId = 6;
        }
        else if (category === "base-layers") {
            categoryId = 7;
        }

        setLoading(true);

        const pageNumber = 1;
        const pageSize = 20;

        let url = "https://localhost:7045/api/Product/getproducts";

        if (categoryId !== null) {
            url += `?categoryId=${categoryId}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
        }
        else {
            url += `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        }

        axios.get(url)
            .then((response) => {

                console.log("API Response:", response.data);

                setProducts(response.data);
                setLoading(false);

            })
            .catch((error) => {

                console.log("API Error:", error);
                setLoading(false);

            });

    }, [category]);

    if (loading) {
        return <h2>Loading products...</h2>;
    }

    return (
        <div>

            <h1>
                {category ? category : "All Products"}
            </h1>

            <div className="product-container">

                {products.length > 0 ? (

                    products.map((product) => (

                        <ProductCard
                            key={product.pk_pro_id}
                            product={product}
                        />

                    ))

                ) : (

                    <h2>No products found</h2>

                )}

            </div>

        </div>
    );
}

export default Products;