import React from 'react'
import rocket from "../assets/images/rocket.png";

export default function ContentSectionCard({ title = "", image = "up" }) {
    return (
        <article className='content-card'>
            {image === "up" && (<img src={rocket} alt="" />)}
            <div>
                <h5>{title}</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, odio nemo numquam quis iure debitis pariatur eos dolor
                    exercitationem velit! Architecto aperiam itaque odio deserunt labore quas, quos dolorum ea!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, odio nemo numquam quis iure debitis pariatur eos dolor
                    exercitationem velit! Architecto aperiam itaque odio deserunt labore quas, quos dolorum ea!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, odio nemo numquam quis iure debitis pariatur eos dolor
                    exercitationem velit! Architecto aperiam itaque odio deserunt labore quas, quos dolorum ea!
                </p>
            </div>
            {image === "down" && (<img src={rocket} alt="" />)}
        </article>
    )
}
