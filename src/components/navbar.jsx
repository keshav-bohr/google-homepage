import React from "react";
import './navbar.scss';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';

function navbar(props) {
    return (
        <>
            <div className="navbar">
                <div className="navbar-item-container-wrapper">
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
                        {/* <a href="#">Apps</a> */}
                        <AppsIcon fontSize="medium"/>
                    </div>
                    <div className="navbar-item">
                        <Avatar className="navbar-avatar">K</Avatar>
                    </div>
                </div>
                </div>
            </div>
            {otherGoogleApps()}
        </>
    )
}

function otherGoogleApps() {
    return (
        <div className='other-google-apps-wrapper'>
            <ul className='other-google-apps-list'>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
                <li className='other-google-apps-list-icon'>

                </li>
            </ul>
        </div>
    )
}

export default navbar