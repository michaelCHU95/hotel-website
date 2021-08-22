import React, { createContext, useEffect, useState } from "react"
import client from "./Contentful"


// Create a Context Object
const RoomContext = createContext();


// Main Component
function RoomProvider({ children }) {

    // All the basic features of Room Data
    const [data, setData] = useState({

        rooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    });


    // Async Function requesting data from Contentful: ComponentDidMount
    useEffect(() => {

        (async () => {

            try {

                // Get data from Contentful API
                const response = await client.getEntries({

                    content_type: "hotelRoom",
                    order: "sys.createdAt"

                });

                let rooms = formatData(response.items);

                let featuredRooms = rooms.filter(room => room.featured === true);

                let maxPrice = Math.max(...rooms.map((item) => item.price));

                let maxSize = Math.max(...rooms.map((item) => item.size));

                setData({

                    rooms,
                    featuredRooms,
                    loading: false,
                    type: "all",
                    capacity: 1,
                    price: maxPrice,
                    minPrice: 0,
                    maxPrice,
                    minSize: 0,
                    maxSize,
                    breakfast: false,
                    pets: false

                });

            }
            catch (error) { console.log(error); }

        })()

    }, []);

    //For Room Filtering Purpose
    const [sortedRooms, setSortedRooms] = useState([]);


    //Updating sortedRooms when a change in data is detected: ComponentDidUpdate
    useEffect(() => {

        const { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = data;

        let tempRoom = rooms;

        const cap = parseInt(capacity);

        const desiredPrice = parseInt(price);

        //** Conditions 

        //Filtered By Types of Room
        if (type !== "all") { tempRoom = rooms.filter((item) => item.type === type); }

        //Filtered By Capacity
        if (cap !== 1) { tempRoom = rooms.filter((item) => item.capacity >= cap); }

        //Filtered by Breakfast
        if (breakfast) { tempRoom = tempRoom.filter((item) => item.breakfast === true); }

        //Filtered by Pets
        if (pets) { tempRoom = tempRoom.filter((item) => item.pets === true); }

        //Filtered by User's Desired Price
        tempRoom = tempRoom.filter((item) => item.price <= desiredPrice);

        //Filtered by User's Desired Size
        tempRoom = tempRoom.filter((item) => item.size >= minSize && item.size <= maxSize);

        //** End of Conditions

        // Updating sortedRooms
        setSortedRooms(tempRoom);

    }, [data]);


    // Elementary Function for Data Formatting to return an array of room objects
    function formatData(items) {

        const tempItem = items.map((item) => {

            const id = item.sys.id;

            const images = item.fields.images.map((image) => { return image.fields.file.url });

            const room = { ...item.fields, images, id };

            return room;

        });

        return tempItem;

    }


    // Function used by SingleRoom.js to get the targeted room object
    function getRoom(slug) {

        const tempItem = [...data.rooms];

        const room = tempItem.find((room) => room.slug === slug);

        return room;

    }


    // Updating the data based on user's input 
    function handleChange(event) {

        const target = event.target;

        const value = (target.type === "checkbox") ? target.checked : target.value;

        const name = target.name;

        setData({ ...data, [name]: value });

    }


    return (

        <RoomContext.Provider value={{

            ...data,
            sortedRooms,
            getRoom,
            handleChange

        }}>
            {children}
        </RoomContext.Provider>

    )

}


export { RoomContext, RoomProvider }