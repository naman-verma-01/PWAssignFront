import React from 'react'

function FilterBar() {

  const handleFilterOpen = () => {
    console.log("Filters")
  }

  return (
    <div id='filterBar'>
      <div id='order'>
        <div><p>Popular</p></div>
        <p>Newest</p>
        <p>Bookmarks</p>
      </div>
      <div id='searchBarSection'>
        <input id='searchBar'></input>
        <div id='searchIcon'><img src='./images/searchIcon.png' /></div>
      </div>
      <div id='filterCone' onClick={handleFilterOpen}><img src='./images/filterIcon.jpg' /></div>
    </div>
  )
}

export default FilterBar