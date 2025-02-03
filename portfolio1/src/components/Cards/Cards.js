// src/components/Card.js
import React from 'react';
import './Cards.css';

function Card({ title, content, imageUrl }) {
    return (
        <div>
            <div className="cardUp">
                <div className="cardUp-content">
                    <h2 className="cardUp-title">{title}</h2>
                </div>
            </div>
            <div className="card">
                {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;