import React from "react";
import './navbar.scss'

function navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-item-container">
                <div className="navbar-item">
                    <a href="https://mail.google.com/mail/?tab=wm&authuser=0&ogbl">Gmail</a>
                </div>
                <div className="navbar-item">
                    <a href="https://www.google.co.in/imghp?hl=en&tab=wi&authuser=0&ogbl">Images</a>
                </div>
            </div>
            <div className="navbar-item-container">
                <div className="navbar-item">
                    <a href="#">Apps</a>
                </div>
                <div className="navbar-item">
                    <a href="#">Avatar</a>
                </div>
            </div>
        </div>
    )
}

export default navbar