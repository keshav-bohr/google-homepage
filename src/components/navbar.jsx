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

const otherGoogleAppsInfo = [
    {
        icon: '',
        appName: 'Account'
    },
    {
        icon: '',
        appName: 'Search'
    },
    {
        icon: '',
        appName: 'Maps'
    },
    {
        icon: '',
        appName: 'Youtube'
    },
    {
        icon: '',
        appName: 'Play'
    },
    {
        icon: '',
        appName: 'News'
    },
    {
        icon: '',
        appName: 'Gmail'
    },
    {
        icon: '',
        appName: 'Meet'
    },
    {
        icon: '',
        appName: 'Chat'
    },
    {
        icon: '',
        appName: 'Contacts'
    },
    {
        icon: '',
        appName: 'Drive'
    },
    {
        icon: '',
        appName: 'Calendar'
    },
    {
        icon: '',
        appName: 'Translate'
    },
    {
        icon: '',
        appName: 'Photos'
    },
    {
        icon: '',
        appName: 'Duo'
    },
    {
        icon: '',
        appName: 'Shopping'
    }
]

function otherGoogleApps() {
    return (
        <div className='other-google-apps-wrapper'>
            <ul className='other-google-apps-list'>
                {otherGoogleAppsInfo.map((eachApp) => {
                    return <li className='other-google-apps-list-icon'>
                        <div className='other-google-app-info'>
                            <Avatar className="other-google-app-avatar">K</Avatar>
                            <span>{eachApp.appName}</span>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default navbar