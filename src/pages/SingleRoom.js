import React, { useContext } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Banner from "../components/Banner.js"
import { Link, useParams } from "react-router-dom"
import { RoomContext } from "../context.js"
import StyledHero from "../components/StyledHero.js"


function SingleRoom() {

    const { getRoom, loading } = useContext(RoomContext);

    const state = {
        slug: useParams().slug, //Alternative: props.match.params.slug
        loading,
        defaultBcg
    }

    const room = getRoom(state.slug);

    // Check the status of loading of room data from context.js
    if (loading) {

        return (

            <div className="error">
                <h3>wait a moment...</h3>
            </div>

        )

    }

    else {
        // Check the existent of room 
        if (room === undefined) {

            return (

                <div className="error">

                    <h3>no such room could be found...</h3>

                    <Link to="/rooms/" className="btn-primary">
                        back to rooms
                    </Link>

                </div>

            )

        }

        else {

            const {
                name,
                description,
                capacity,
                size,
                price,
                extras,
                breakfast,
                pets,
                images
            } = room;

            const [main, ...defaultImg] = images;

            return (

                <React.Fragment>

                    <StyledHero img={main || defaultBcg}>

                        <Banner title={`${name} room`}>

                            <Link to="/rooms/" className="btn-primary">back to rooms</Link>

                        </Banner>

                    </StyledHero>

                    <section className="single-room">

                        <div className="single-room-images">

                            {defaultImg.map((img, index) => {
                                return (
                                    <img key={index} src={img} alt={name} />
                                )
                            })}

                        </div>

                        <div className="single-room-info">

                            <article className="desc">

                                <h3>details</h3>
                                <p>{description}</p>

                            </article>

                            <article className="info">

                                <h3>info</h3>
                                <h6>price: ${price}</h6>
                                <h6>size: {size} SQFT</h6>
                                <h6>
                                    max capacity: {(capacity > 1) ? `${capacity} people` : `${capacity} person`}
                                </h6>
                                <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                                {breakfast && <h6>free breakfast included</h6>}

                            </article>

                        </div>

                    </section>

                    <section className="room-extras">

                        <h6>extras</h6>

                        <ul className="extras">

                            {extras.map((item, index) => {
                                return (
                                    <li key={index}>- {item}</li>
                                )
                            })}

                        </ul>

                    </section>

                </React.Fragment>

            )

        }

    }

}

export default SingleRoom