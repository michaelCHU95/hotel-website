import React, { useContext } from "react"
import { RoomContext } from "../context.js"
import Loading from "./Loading.js"
import Room from "./Room.js"
import Title from "./Title.js"


function FeaturedRoom() {

    const { loading, featuredRooms } = useContext(RoomContext);

    let rooms = featuredRooms.map((room) => {
        return (
            <Room key={room.id} room={room} />
        )
    });

    return (

        <section className="featured-rooms">

            <Title title="Featured Rooms" />

            <div className="featured-rooms-center">

                {loading ? <Loading /> : rooms}

            </div>

        </section>

    )

}

export default FeaturedRoom