import React, { useState } from 'react'
import PopupForm from './PopupForm'
function FilterBar(props) {
  const [searchValue, setSearchValue] = useState('')
  const [location, setLocation] = useState([])
  const [duration, setDuration] = useState()



  const search = () => {
    props.changeFilterStates(location, duration, searchValue)
  }

  const applyFilters = (newlocation, newduration) =>{
    setLocation(newlocation)
    setDuration(newduration)
    props.changeFilterStates(newlocation, newduration, searchValue)
  }
  return (
    <div id='filterBar'>
      <div id='order'>
        <div><p>Popular</p></div>
        <p>Newest</p>
        <p>Bookmarks</p>
      </div>
      <div id='searchBarSection'>
        <input id='searchBar' value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }}></input>
        <div id='searchIcon' onClick={search}><img src='./images/searchIcon.png' /></div>
      </div>
      <PopupForm location={location} duration={duration}  applyFilters={applyFilters}/>
    </div>
  )
}

export default FilterBar