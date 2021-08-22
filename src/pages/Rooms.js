import React from 'react'
import { Link } from "react-router-dom"
import Hero from "../components/Hero.js"
import Banner from "../components/Banner.js"
import RoomContainer from "../components/RoomContainer.js"


function Rooms() {

    return (

        <React.Fragment>

            <Hero hero="roomsHero">

                <Banner title="Our Rooms">

                    <Link to="/" className="btn-primary">Return Home</Link>

                </Banner>

            </Hero>

            <RoomContainer />

        </React.Fragment>

    )

}

export default Rooms;