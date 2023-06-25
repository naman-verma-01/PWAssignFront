import React from 'react'

function Page(props) {
    // console.log("PageDAta", props.data)
    return (
        <div id='pageCom'>
            <div style={{display:'flex'}}>
                <img src='./images/comp1.jpg'/>
                <div>
                    <p id='pagePositionName'>{props.data.position}</p>
                    <p id='pageCompName'>{props.data.companyName}</p>
                </div>
            </div>

            <div id='pageHighlightContainer'>
                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.duration} months</p>
                            <p>Duration</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/calendar.jpg' />
                        <div>
                            <p>{props.data.postedOn.split(' ')[0]} Days Ago</p>
                            <p>Posted</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/rank.jpg' />
                        <div>
                            <p>{props.data.experience} months</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/calendarStar.jpg' />
                        <div>
                            <p>{props.data.endsIn.split(' ')[0]} Days</p>
                            <p>Ends In</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/wallet.jpg' />
                        <div>
                            <p> ₹{props.data.stipend}</p>
                            <p>Stipend</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/person.jpg' />
                        <div>
                            <p>{props.data.numberOfPositions}</p>
                            <p>Open Positions</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/ballon.jpg' />
                        <div>
                            <p>{props.data.location}</p>
                            <p>Location</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/people.jpg' />
                        <div>
                            <p>{props.data.totalApplicants}</p>
                            <p>Total Applicants</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='pageSkillSection'>
                {props.data.requiredSkills.map((value, index) => {
                    return <>
                        <div className='pageSkill'>
                            {value}
                        </div>
                    </>
                })}
            </div>


            <div className='content'>
                <p><b>About Us</b></p>
                <p>{props.data.aboutUs}</p>
            </div>

            <div className='content'>
                <p><b>Requirements</b></p>
                <div dangerouslySetInnerHTML={{__html:props.data.requirements}}></div>
            </div>

            <div className='content'>
                <p><b>Responsbilities</b></p>
                <div dangerouslySetInnerHTML={{__html:props.data.responsibilities}}></div>
            </div>

            <div className='content'>
                <p style={{ color: "#6938EF" }}><b>Visit Website</b></p>
            </div>

            <div id='applyNowSection'>
                <button id='applyNowButton'>Apply Now</button>
            </div>
        </div>
    )
}

export default Page