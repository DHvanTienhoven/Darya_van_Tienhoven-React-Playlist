import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
            <div className = "header">
                <h1>React Playlist</h1>
                <Link to = "/"> Home </Link> | <Link to = "/about"> About </Link>
            </div>
        )
    }
}

export default Header
