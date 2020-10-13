import React, { Component } from 'react';
// import FeaturedRooms from './components/FeaturedRooms';
import items from './data';

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(i => (i.featured))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
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

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
