import React from 'react'
import './fragrance-item.styles.scss';
export default function FragranceItem({ title, imageUrl, size }) {
    return (
        <div className={`${size} fragrance-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div >

    )
}
