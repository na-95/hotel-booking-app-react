import React, { Component } from 'react';
// import FeaturedRooms from './components/FeaturedRooms';
import items from './data';

const RoomContext = React.createContext()

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    }



    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(i => (i.featured))
        let maxPrice = Math.max(...rooms.map(i => i.price))
        let maxSize = Math.max(...rooms.map(i => i.size))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize

        })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(typeof this.state.name);
        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let sortedRooms = [...this.state.rooms]

        if (this.state.type != 'all') {
            sortedRooms = sortedRooms.filter(i => {
                return i.type == this.state.type
            })
        }

        if (this.state.capacity != 'all') {
            sortedRooms = sortedRooms.filter(i => {
                return i.capacity == this.state.capacity
            })
        }


        this.setState({
            sortedRooms
        })
    }


    formatData(items) {
        let tempItems = items.map(i => {
            let id = i.sys.id;

            let images = i.fields.images.map(image => image.fields.file.url);
            let room = { ...i.fields, images, id }

            return room;
        })
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(i => i.slug === slug)
        return room;
    }



    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
