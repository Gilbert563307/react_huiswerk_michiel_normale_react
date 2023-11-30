import React from 'react'

export default function Card({ title = "", text = "", button = "View more" }) {
    return (
        <div className="own-card">
            <div className="own-card-body">
                <div className='own-card-body-content'>
                    <h5 class="own-card-title">{title}</h5>
                    <p className="own-card-text">{text}</p>
                </div>
                <button className="btn btn-primary">{button}</button>
            </div>
        </div>
    )
}
