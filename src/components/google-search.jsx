import React from 'react'
import googleLogo from '../assets/google-logo.png'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import './google-search.scss'

function googleSearch(props) {
    return (
        <div className='main-content'>
            <div className='google-logo'>
                <img src={googleLogo} alt="google-logo"/>
            </div>
            <form noValidate>
                <div className="search-bar-wrapper">
                    <SearchOutlinedIcon />
                    <input className='search-input'/>
                    <MicIcon />
                </div>
            </form>
        </div>
    )
}


export default googleSearch

