import React, { useContext } from 'react'
import { /*RoomConsumer, */ RoomContext } from '../context'
import Title from '../components/Title'

export default function RoomsFilter() {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;


    return (
        <section className={"filter-container"}>
            <Title title="Search Rooms"></Title>
            <form className="filter-form">
                
            </form>
        </section>

    )




}
























//"Render prop" method of using context:

// return (<RoomConsumer>
    //     {(context) => {
    //         console.log(context)
    //         return (<div>fuck</div>)


    //     }}
    // </RoomConsumer>)