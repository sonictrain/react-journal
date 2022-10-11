import React from 'react'
import { useState } from 'react'

function Article(props) {
    const [count, setCount] = useState(0)
    
    return (
        <article>
            <div className="divider">
                <div className="image-container">
                    <img className="article-img" src={props.img} alt={props.img_alt} />
                    <div className="like-counter-container">
                        <button onClick={() => setCount((count) => count + 1)}>
                            <img src="/thumbs-up.svg" alt="thumbs up icon" />
                        </button>
                        <h5>{count}</h5>
                    </div>   
                </div> 
                <div className="article-container">
                    <div className="location-container">
                        <img className="pin" src="/location-pin.svg" alt="pin icon"></img>
                        <h4 className="city">{props.location}</h4>
                        <a href={props.maps_link} className="maps-link">View on Google Maps</a>
                    </div>
                    <div className="detail-container">
                        <h2 className="title">{props.title}</h2>
                        <h5 className="date-range">{props.from_date} - {props.to_date}</h5>
                        <p className="description">{props.description}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}


export default Article