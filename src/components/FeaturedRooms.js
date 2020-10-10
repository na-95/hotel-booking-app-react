import React from 'react'
import { RoomContext } from '../context'


export default class FeaturedRooms extends React.Component {

    static contextType = RoomContext;

    render() {


        return (
            <h1>I am saying {this.context}</h1>
        )



        // return (
        //     <RoomContext.Consumer>
        //         {Value => (
        //             <h1>I is Say {Value}</h1>
        //         )}
        //     </RoomContext.Consumer>
        // )
    }
}

