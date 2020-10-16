import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer';

export const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms" >
                    <Link to="/">
                        <button className="btn-primary">
                            home
                    </button>
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms