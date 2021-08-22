import React from 'react'
import { Link } from "react-router-dom"
import Hero from "../components/Hero.js"
import Banner from "../components/Banner.js"
import Services from "../components/Services.js"
import FeaturedRoom from "../components/FeaturedRoom.js"

function Home() {

    return (

        <React.Fragment>

            <Hero>

                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">

                    <Link to="/rooms/" className="btn-primary">our rooms</Link>

                </Banner>

            </Hero>

            <Services />

            <FeaturedRoom />

        </React.Fragment>

    )

}

export default Home;
