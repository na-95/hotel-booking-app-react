import React, { Component } from 'react'
import { RoomContext } from '../context';
// import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'


export default class SingleRoom extends Component {
    static contextType = RoomContext;


    render() {
        // const slug = this.props.match.params.variable;
        // console.log(slug)
        // const { getRoom } = this.context;
        const room = this.context.getRoom(this.props.match.params.variable)
        console.log(this.context)
        console.log(room)

        if (!room) {
            return <div className="error">
                <h3>No room found...</h3>
                <Link to='/rooms' className="btn-primary" >Back To Rooms</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        // let pictures = images.slice(1);

        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title={name}>
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </Hero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((i, index) => {
                            return <img key={index} src={i} alt="" />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info"><h3>
                            info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} Sqft.</h6>
                            {capacity > 1 ? <h6>Max Capacity: {capacity} People</h6> : <h6>Max Capacity: {capacity} Person</h6>}
                            {pets ? <h6>Pets Allowed</h6> : <h6>Pets NOT allowed</h6>}
                            <h6>{breakfast && "Free Breakfast Included"}</h6>

                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((i, index) => {
                            return <li key={index}>- {i}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
