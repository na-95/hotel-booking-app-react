import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css'

export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    navbarToggleHandler = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            }
        })
    }

    render() {

        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >
                            <img src={logo} alt="" />
                        </Link>
                        <button onClick={this.navbarToggleHandler} type="button" className="nav-btn">
                            <FaHamburger className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links '}>
                        <li>
                            <Link to="/" >
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/rooms" >
                                Rooms
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}
