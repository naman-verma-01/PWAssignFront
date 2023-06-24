import React from 'react'

function MainCard(props) {

    const handleCardClick = ()=>{
        props.changePageData(props.index)
    }
    // console.log("PORP", props.value)
    return (
        <div onClick={handleCardClick}>MainCard</div>
    )
}

export default MainCard