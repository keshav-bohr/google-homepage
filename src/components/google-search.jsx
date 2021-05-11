import React from 'react'
import googleLogo from '../assets/google-logo.png'
import './google-search.scss'

function googleSearch(props) {
    return (
        <div className='google-logo'>
            <img src={googleLogo} alt="google-logo"/>
        </div>
    )
}


export default googleSearch

