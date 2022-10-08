import React from 'react'

function Article(props) {
    return (
        <article>
            <img src={props.img} alt={props.img_alt} />
            <div className="article--info--container">
                <div className="article--location--container">
                    <img className="location--pin" src="/location-pin.svg" alt="pin icon"></img>
                    <h4 className="location--city">{props.location}</h4>
                    <a href={props.maps_link} className="location--link">View on Google Maps</a>
                </div>
                <div className="article--info">
                    <h2 className="article--title">{props.title}</h2>
                    <h5 className="article--date">{props.from_date} - {props.to_date}</h5>
                    <p className="article--description">{props.description}</p>
                </div>
            </div>
        </article>
    )
}


export default Article