import React from 'react'

function Article() {
    return (
        <article>
            <div className="article--cover"></div>
            <div className="article--info--container">
                <div className="article--location--container">
                    <img className="location--pin" src="/location-pin.svg" alt="pin icon"></img>
                    <h4>Japan</h4>
                    <p className="location--link">View on Google Maps</p>
                </div>
                <div className="article--info">
                    <h2>Monte Fuji</h2>
                    <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </article>
    )
}


export default Article