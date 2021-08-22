import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);


    function handleToggle() {

        setIsOpen(isOpen ? false : true);

    }


    return (

        <nav className="navbar">

            <div className="nav-center">

                <div className="nav-header">

                    <Link to="/">

                        <img src={logo} alt="Bearch Resort" />

                    </Link>

                    <button type="button" className="nav-btn" onClick={handleToggle}>

                        <FaAlignRight className="nav-icon" />

                    </button>

                </div>

                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>

                    <Link to="/">Home</Link>

                    <Link to="/rooms/">Rooms</Link>

                </ul>

            </div>

        </nav>
    )

}

export default Navbar