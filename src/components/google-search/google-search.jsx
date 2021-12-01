import React, { useEffect, useState } from 'react'
import googleLogo from '../../assets/google-logo.png'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import ScheduleIcon from '@material-ui/icons/Schedule';
import './google-search.scss'

const searchHistory = [
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'},
    {title: 'history'}
]

function GoogleSearch(props) {
    const [searchHistory, setSearchHistory] = useState([])
    
    return (
        <div className='main-content'>
            <div className='google-logo'>
                <img src={googleLogo} alt="google-logo"/>
            </div>
            <form noValidate className='search-form'>
                <div className="search-bar-wrapper">
                    <SearchOutlinedIcon />
                    <input className='search-input'/>
                    <MicIcon />
                </div>
                <div className='google-search-buttons-container'>
                    <div className='google-search-button' type='button'>Google Search</div>
                    <div className='google-search-button' type='button'>I'm Feeling Lucky</div>
                </div>
                {/* <div className="search-history-wrapper">
                    <div className="search-partition"></div>
                    <ul className="search-history-list">
                        {searchHistory.map((singleItem) => {
                            return <li className="search-history-item">
                                <ScheduleIcon fontSize='small'/>
                                <div className='search-history-item-description'>
                                    <div className='search-history-item-title'>
                                        <span className='search-history-title'>{singleItem.title}</span>
                                    </div>
                                </div>
                                <div className='search-history-item-remove'>
                                    <div>Remove</div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div> */}
            </form>
        </div>
    )
}


export default GoogleSearch

