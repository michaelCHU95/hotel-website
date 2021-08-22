import React from "react"
import Room from "./Room.js"


function RoomList({ rooms }) {

    if (rooms.length === 0) {

        return (

            <div className="empty-search">
                <h3>No Rooms Matched Your Search Parameters</h3>
            </div>

        )

    }

    return (

        <section className="roomslist">

            <div className="roomslist-center">
                {rooms.map((item) => {
                    return (
                        <Room key={item.id} room={item} />
                    )
                })}
            </div>

        </section>

    )

}

export default RoomList