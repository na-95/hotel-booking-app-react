import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';

export const Error = () => {
    return (

        <Hero>
            <Banner title="Error 404" subTitle="Page not found.">
                <Link to="/">
                    <button className="btn-primary">
                        return home
                    </button>
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error;
