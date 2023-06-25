import React from 'react'

function MainCard(props) {

    const handleCardClick = () => {
        props.changePageData(props.index)
    }
    // console.log("PORP", props.value)
    return (
        <div className='card' id={props.value._id} onClick={handleCardClick}>
            <div className='cardHeading'>
                <div>
                    <p>{props.value.position}</p>
                    <p>{props.value.companyName}</p>
                </div>
                <div className='bookmark'>
                    <img height='20px' src='./images/bookmarkIcon.jpg' />
                </div>
            </div>


            <div className='cardSkillSection'>
                <img src='./images/comp1.jpg' />
                <div className='cardSkills'>
                    <p>{props.value.requiredSkills[0]}</p>
                    <p>{props.value.requiredSkills[1]}</p>
                    <p>{props.value.requiredSkills[2]}</p>
                    <p>+2</p>
                </div>
            </div>

            <div id='cardHighlightContainer'>


                <div className='cardHighlightSection'>
                    <div className='cardHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.value.duration} Months</p>
                        </div>
                    </div>
                    <div className='cardHighlight'>
                        <img h src='./images/people.jpg' />
                        <div>
                            <p>{props.value.totalApplicants} Applicants</p>
                        </div>
                    </div>
                </div>

                <div className='cardHighlightSection'>
                    <div className='cardHighlight'>
                        <img h src='./images/wallet.jpg' />
                        <div>
                            <p>₹{props.value.stipend}</p>
                        </div>
                    </div>
                    <div className='cardHighlight'>
                        <img h src='./images/calendarStar.jpg' />
                        <div>
                            <p>Ends in {props.value.postedOn.split(' ')[0]} Days</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MainCard