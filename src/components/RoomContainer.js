import React, { useContext } from "react"
import RoomFilter from "./RoomFilter.js"
import RoomList from "./RoomList.js"
import Loading from "./Loading.js"
import { RoomContext } from "../context.js"


function RoomContainer() {

    const { loading, sortedRooms, rooms } = useContext(RoomContext);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (

        <React.Fragment>

            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />

        </React.Fragment>

    )

}

export default RoomContainer;