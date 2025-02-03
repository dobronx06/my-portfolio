// src/components/Card.js
import React from 'react';
import './Cards2.css';

function Card2({ title, content, imageUrl }) {
    return (
        <div>
            <div className="card2Up">
                <div className="card2Up-content">
                    <h2 className="card2Up-title">{title}</h2>
                </div>
            </div>
            <div className="card2">
                {imageUrl && <img src={imageUrl} alt={title} className="card2-image" />}
                <div className="card2-content">
                    <h2 className="card2-title">{title}</h2>
                    <p className="card2-text">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card2;