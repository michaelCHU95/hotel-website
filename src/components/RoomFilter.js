import React, { useContext } from "react"
import { RoomContext } from "../context.js"
import Title from "./Title.js"


function RoomFilter({ rooms }) {

    const {

        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets

    } = useContext(RoomContext);


    // Generic Function used to return array of unique elements by given item as an array and value as a string
    const getUnique = (item, value) => {
        return [...new Set(item.map((object) => object[value]))]
    };


    //** Getting Unique Room Types
    let Types = ["all", ...getUnique(rooms, "type")];

    // Mapping into <option> element
    Types = Types.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        )
    });
    //** End

    //** Getting Unique Capacities
    let People = getUnique(rooms, "capacity");

    // Mapping into <option> element
    People = People.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        )
    });
    //** End


    return (

        <section className="filter-container">

            <Title title="search rooms" />

            <form className="filter-form">

                {/* Types of Rooms */}
                <div className="form-group">

                    <label htmlFor="type">room type</label>

                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {Types}
                    </select>

                </div>

                {/* Number of Guests */}
                <div className="form-group">

                    <label htmlFor="capacity">Guests</label>

                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {People}
                    </select>

                </div>

                {/* Prices */}
                <div className="form-group">

                    <label htmlFor="price">room price ${price}</label>

                    <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control" />

                </div>

                {/* Room Sizes */}
                <div className="form-group">

                    <label htmlFor="size">room size</label>

                    <div className="size-inputs">

                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />

                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />

                    </div>

                </div>

                {/* Breakfast & Pets */}
                <div className="form-group">

                    <div className="single-extra">

                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />

                        <label htmlFor="breakfast">breakfast</label>

                    </div>

                    <div className="single-extra">

                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />

                        <label htmlFor="pets">pets</label>

                    </div>

                </div>

            </form>

        </section>

    )

}

export default RoomFilter