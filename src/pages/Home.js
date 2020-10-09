import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export const Home = () => {

    return (
        <div>
            <Hero hero="defaultHero" >

                <Banner title="Luxurious Rooms" subTitle="Deluxe rooms starting at Rs. 30,000.">
                    <Link to="/rooms">
                        <button className="btn-primary">
                            our ROOMS
                        </button>
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Home;



