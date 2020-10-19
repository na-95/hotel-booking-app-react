import React from 'react'
import Room from './Room'
import Title from './Title'

export default function RoomsList({ rooms }) {
    // console.log(rooms)

    if (!rooms.length) {
        return (<div className="empty-search">Sorry, No Rooms Matched Your Search</div>)
    }



    return (
        <section className="roomslist">
            <Title title="Rooms" />
            <div className="roomslist-center">
                {rooms.map((i) => {
                    return (
                        <Room key={i.id} room={i} />
                    )
                })}
            </div>
        </section>
    )
}
