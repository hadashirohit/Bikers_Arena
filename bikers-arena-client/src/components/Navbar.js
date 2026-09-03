import React, { useEffect, useState } from "react";

import arenaLogo from "../assets/icon/Arena Logo.png";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 56) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-sm navbar-dark fixed-top ${
                scrolled ? "navbar-scrolled" : ""
            }`}
        >
            <div className="container-fluid">

                {/* Logo */}
                <a href="/" className="navbar-logo-link">
                    <img
                        src={arenaLogo}
                        alt="Biker's Arena"
                        className="arena-logo"
                    />
                </a>

                {/* Brand Name */}
                <a className="navbar-brand" href="/">
                    <h3>
                        <i>Biker's Arena</i>
                    </h3>
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {/* Home */}
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <i className="bi bi-house-door-fill nav-icon"></i>
                                Home
                            </a>
                        </li>

                        {/* Products */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/products"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-bag-fill nav-icon"></i>
                                Products
                            </a>

                            <ul className="dropdown-menu dropdown-menu-dark">

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/jackets"
                                    >
                                        <i className="bi bi-shield-fill me-2"></i>
                                        Jackets
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/gloves"
                                    >
                                        <i className="bi bi-hand-index-fill me-2"></i>
                                        Gloves
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/luggage"
                                    >
                                        <i className="bi bi-backpack-fill me-2"></i>
                                        Luggage
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/pants"
                                    >
                                        <i className="bi bi-person-standing me-2"></i>
                                        Pants
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/knee-guard"
                                    >
                                        <i className="bi bi-shield-check me-2"></i>
                                        Knee Guard
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/accessories"
                                    >
                                        <i className="bi bi-gear-fill me-2"></i>
                                        Accessories
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="/products/base-layers"
                                    >
                                        <i className="bi bi-layers-fill me-2"></i>
                                        Base Layers
                                    </a>
                                </li>

                            </ul>
                        </li>

                        {/* Login */}
                        <li className="nav-item">
                            <a className="nav-link" href="/login" >
                                <i className="bi bi-person-circle nav-icon"></i>
                                Log In
                            </a>

                        </li>

                        {/* Cart */}
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i className="bi bi-cart3 nav-icon"></i>
                                Cart
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;