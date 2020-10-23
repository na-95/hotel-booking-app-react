import React, { useContext } from 'react'
import { /*RoomConsumer, */ RoomContext } from '../context'
import Title from '../components/Title'

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    // callback function for filtering out unique 'type' values:
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    //Unique 'type':
    let types = rooms.map(i => { return i.type }).filter(onlyUnique)

    types = ['all', ...types].map((i, index) => { return (<option value={i} key={index} >{i}</option>) })

    //Unique 'capacity':
    let guests = rooms.map(i => { return i.capacity }).filter(onlyUnique)

    guests = ['all', ...guests].map((i, index) => { return (<option value={i} key={index} >{i}</option>) })


    // console.log(types)
    return (
        <section className={"filter-container"}>
            <Title title="Search Rooms"></Title>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    {/*the value attribute in select is unnecessary?*/}
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Room Type</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {guests}
                    </select>
                </div>
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