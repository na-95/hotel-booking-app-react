import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export const Home = () => {


    return (
        <>
            <Hero hero="defaultHero" >
                <Banner title="Luxurious Rooms" subTitle="Deluxe rooms starting at Rs. 30,000.">
                    <Link to="/rooms">
                        <button className="btn-primary">
                            our ROOMS
                        </button>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;



