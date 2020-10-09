import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaCamera } from 'react-icons/fa'



export default class Services extends React.Component {
    state = {
        services: [{
            icon: <FaCocktail />,
            title: 'free cocktails',
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime officia, minus accusamus rerum autem? loresa jksah dsjkadh ksahdjah dkjh asjkdhaskjhdkjashd"
        },
        {
            icon: <FaHiking />,
            title: 'endless hiking',
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime officia, minus accusamus rerum autem? loresa jksah dsjkadh ksahdjah dkjh asjkdhaskjhdkjashd"
        },
        {
            icon: <FaShuttleVan />,
            title: 'free shuttle',
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime officia, minus accusamus rerum autem? loresa jksah dsjkadh ksahdjah dkjh asjkdhaskjhdkjashd"
        }
            ,
        {
            icon: <FaCamera />,
            title: 'Breathtaking Views',
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maxime officia, minus accusamus rerum autem? loresa jksah dsjkadh ksahdjah dkjh asjkdhaskjhdkjashd"
        }
        ]
    }




    render() {
        return (
            <div className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item) => {
                        return (
                            <div className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
