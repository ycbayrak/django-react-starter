import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import './Navbar.scss';

export default class Navbar extends Component {

    render() {
        return (
        <div className="Navbar">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        )
    }
}