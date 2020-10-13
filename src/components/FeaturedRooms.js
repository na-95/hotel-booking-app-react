import React from 'react'
import { RoomContext } from '../context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'


export default class FeaturedRooms extends React.Component {

    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms } = this.context;
        featuredRooms = featuredRooms.map(i => {
            return <Room key={i.id} room={i} />
        })

        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : featuredRooms}
                </div>


            </section>

        )
    }
}

