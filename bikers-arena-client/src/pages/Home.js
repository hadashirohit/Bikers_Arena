import React from "react";

import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <HeroCarousel />
            <CategorySection />
            <ServicesSection />
            <Footer />
        </>
    );
}

export default Home;