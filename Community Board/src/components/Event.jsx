import React from "react";

const Event = (props) => {
    return (
        <div className="Event">
            <img className="Eventimg" src={props.source} alt=""></img>
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <a href={props.location} target="_blank" rel="noopener noreferrer">
                <button>Visit Website</button>
            </a>
        </div>
    )
}

export default Event;