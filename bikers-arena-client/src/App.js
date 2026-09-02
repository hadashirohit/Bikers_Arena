import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategorySection from "./components/CategorySection";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <CategorySection />
        </>
    );
}

export default App;