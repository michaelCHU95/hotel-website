import React from "react"
import { Link } from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types"


function Room({ room }) {

    const { name, slug, images, price } = room;

    return (

        <article className="room">

            <div className="img-container">

                <img src={images[0] || defaultImg} alt="single room" />

                <div className="price-top">

                    <h6>${price}</h6>

                    <p>per night</p>

                </div>

                <Link to={`/rooms/${slug}`} className="btn-primary room-link" >Features</Link>

            </div>

            <div className="room-info">

                <p>{name}</p>

            </div>

        </article>

    )

}

export default Room


// Typechecking on Props
// This method only used in Development Mode due to performance concerns.
Room.propTypes = {
    // Checking the shape of prop
    room: PropTypes.shape({

        // It's must be a string and the prop need to be passed to Room otherwise will be warned
        name: PropTypes.string.isRequired,
        // It's must be a string and the prop need to be passed to Room otherwise will be warned
        slug: PropTypes.string.isRequired,
        // It's must be a array of string and the prop need to be passed to Room otherwise will be warned
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        // It's must be a number and the prop need to be passed to Room otherwise will be warned
        price: PropTypes.number.isRequired

    })

};