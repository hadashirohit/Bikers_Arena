import React from "react";

function ServicesSection() {

    const services = [
        {
            number: "01",
            title: "Riding Gear & Protection",
            description:
                "Premium jackets, gloves, pants, knee guards and protective equipment designed for safer and more confident riding."
        },
        {
            number: "02",
            title: "Bike Accessories",
            description:
                "Practical and stylish motorcycle accessories that enhance your bike and make every ride more convenient."
        },
        {
            number: "03",
            title: "Touring & Luggage",
            description:
                "Durable bags and luggage solutions made for long rides, road trips and motorcycle touring."
        }
    ];

    return (
        <section className="services-section">

            {/* Heading */}
            <div className="services-heading">

                <div className="small-heading">
                    <span></span>
                    WHAT WE OFFER
                </div>

                <h2>Services</h2>

            </div>


            {/* Service Cards */}
            <div className="services-grid">

                {services.map((service) => (

                    <div className="service-card" key={service.number}>

                        {/* Large Number */}
                        <div className="service-number">
                            {service.number}
                        </div>

                        {/* Content */}
                        <div className="service-content">

                            <h3>
                                {service.title}
                            </h3>

                            <p>
                                {service.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default ServicesSection;