import React, { useState } from 'react'
import googleLogo from '../../assets/google-logo.png'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import ScheduleIcon from '@material-ui/icons/Schedule';
import './google-search.scss'


function GoogleSearch(props) {
    const [searchHistory, setSearchHistory] = useState([])
    const [search, setSearch] = useState("")
    
    return (
        <div className='main-content'>
            <div className='google-logo'>
                <img src={googleLogo} alt="google-logo"/>
            </div>
            <form noValidate className='search-form' onSubmit={(e) => {
                e.preventDefault()
                if(search.trim() !== ""){
                    setSearchHistory([...searchHistory, {title: search}])
                    setSearch("")
                }
            }}>
                <div 
                // className='search-bar-wrapper'>
                className={`search-bar-wrapper ${searchHistory.length ? "search-bar-wrapper-with-history": ""}`}>
                    <SearchOutlinedIcon />
                    <input className='search-input' onChange={e => { setSearch(e.target.value) }} value={search}/>
                    <MicIcon />
                </div>
                
                {searchHistory.length ? <div className="search-history-wrapper">
                    <div className="search-partition"></div>
                    <ul className="search-history-list">
                        {searchHistory.map((singleItem) => {
                            return <li key={singleItem.title} className="search-history-item">
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
                </div> : null}
                <div className='google-search-buttons-container'>
                    <input className='google-search-button' type='submit' value="Google Search" />
                    <input className='google-search-button' type='button' value="I'm Feeling Lucky"/>
                </div>
            </form>
        </div>
    )
}


export default GoogleSearch

