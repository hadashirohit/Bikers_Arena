import React from "react";

import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <HeroCarousel />
            <CategorySection />
            <ServicesSection />
            <Footer />
        </>
    );
}

export default Home;