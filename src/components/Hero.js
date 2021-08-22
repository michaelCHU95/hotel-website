import React from "react"

function Hero({ children, hero }) {

    return (

        <header className={hero}>

            {children}

        </header>

    )

}

export default Hero;


// Setting the default value of hero prop
Hero.defaultProps = {
    hero: "defaultHero"
};