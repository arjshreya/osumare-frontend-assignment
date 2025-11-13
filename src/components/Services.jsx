import React from "react";
import"./Services.css";

const Services=()=>{
    const services=[
        {title:"SEO Optimization",desc:"Improve your website ranking with our expert SEO services."},
        {title:"Social Media Marketing",desc:"Boost engagement and reach on social platforms."},
        {title:"Web Development",desc:"Build responsive and user-friendly websites."},
    ];

    return(
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map((service,index)=>(
                    <div key={index} className="card">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Services;