import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {(context) => {
                const { loading, sortedRooms, rooms } = context;

                if (loading) {
                    return (
                        <Loading />
                    )
                }

                return (
                    <div>
                        I am functional component in rooms page
                        {console.log(loading)}
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                )
            }}
        </RoomConsumer>

    )
}
