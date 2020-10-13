import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from "prop-types";

export default function Room({ room }) {
    const { name, slug, price, images } = room;
    const image = images[0];

    return (
        <article className='room' >
            <div className="img-container">
                <img src={image || defaultImg} alt="" />
                <div className="price-top">
                    <h6>{'$' + price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    More Details
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
