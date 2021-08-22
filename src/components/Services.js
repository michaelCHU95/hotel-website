import React from "react"
import Title from "./Title.js"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"


function Services() {

    const serveItems = [

        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaHiking />,
            title: "endless hiking",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },

        {
            icon: <FaBeer />,
            title: "strongest beer",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }

    ];

    const itemList = serveItems.map((item, index) => {

        return (

            <article key={index} className="service">

                <span>{item.icon}</span>

                <h6>{item.title}</h6>

                <p>{item.info}</p>

            </article>

        )

    })

    return (

        <section className="services">

            <Title title="Services" />

            <div className="services-center">{itemList}</div>

        </section>

    )

}

export default Services