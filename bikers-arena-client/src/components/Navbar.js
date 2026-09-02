import React, { useEffect, useState } from "react";

import arenaLogo from "../assets/icon/Arena Logo.png";
import homeIcon from "../assets/icon/home.png";
import loginIcon from "../assets/icon/login-icon.png";
import cartIcon from "../assets/icon/cart.png";

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
        <nav className={`navbar navbar-expand-sm navbar-dark fixed-top ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="container-fluid">

                <a href="/" className="navbar-logo-link">
                    <img
                        src={arenaLogo}
                        alt="Biker's Arena"
                        className="arena-logo"
                    />
                </a>

                <a className="navbar-brand" href="/">
                    <h3>
                        <i>Biker's Arena</i>
                    </h3>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <img
                                    src={homeIcon}
                                    alt="Home"
                                    className="nav-icon"
                                />
                                Home
                            </a>
                        </li>

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="/products"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Products
                            </a>

                            <ul className="dropdown-menu dropdown-menu-dark">

                                <li>
                                    <a className="dropdown-item" href="/products/jackets">
                                        Jackets
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/gloves">
                                        Gloves
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/luggage">
                                        Luggage
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/pants">
                                        Pants
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/knee-guard">
                                        Knee Guard
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/accessories">
                                        Accessories
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/products/base-layers">
                                        Base Layers
                                    </a>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="/login"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src={loginIcon}
                                    alt="Login"
                                    className="nav-icon"
                                />
                                Log In
                            </a>

                            <ul className="dropdown-menu dropdown-menu-dark">

                                <li>
                                    <a className="dropdown-item" href="/user-login">
                                        User Log in
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="/admin-login">
                                        Admin Log in
                                    </a>
                                </li>

                            </ul>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="/cart">
                                <img
                                    src={cartIcon}
                                    alt="Cart"
                                    className="nav-icon cart-icon"
                                />
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