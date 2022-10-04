import React from 'react'

function Article() {
    return (
        <article>
            <div className="article--cover"></div>
            <div className="article--info.container">
                <div className="article--location">
                    <img src="./location-dot-solid.svg" alt=""></img>
                    <h4>Japan</h4>
                    <p className="location--link"></p>
                </div>
                <div className="article--info">

                </div>
            </div>
        </article>
    )
}

export default Article