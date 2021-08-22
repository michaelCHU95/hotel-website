import React from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero.js"
import Banner from "../components/Banner.js"


function Error() {

    return (

        <React.Fragment>

            <Hero>

                <Banner title="404" subtitle="page not found">

                    <Link to="/" className="btn-primary">Return Home</Link>

                </Banner>

            </Hero>

        </React.Fragment>

    )

}

export default Error