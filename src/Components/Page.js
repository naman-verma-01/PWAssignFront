import React from 'react'

function Page(props) {
    // console.log("PageDAta", props.data)
    return (
        <div id='pageCom'>
            <p id='pagePositionName'>{props.data.position}</p>
            <p id='pageCompName'>{props.data.companyName}</p>
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
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.postedOn} Days Ago</p>
                            <p>Posted</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.experience} months</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.endsIn} Days</p>
                            <p>Ends In</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p> $ {props.data.stipend}</p>
                            <p>Stipend</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.numberOfPositions}</p>
                            <p>Open Positions</p>
                        </div>
                    </div>
                </div>

                <div className='pageHighlightSection'>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
                        <div>
                            <p>{props.data.location}</p>
                            <p>Location</p>
                        </div>
                    </div>
                    <div className='pageHighlight'>
                        <img h src='./images/timer.jpg' />
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
                <p>{props.data.requirements}</p>
            </div>

            <div className='content'>
                <p><b>Responsbilities</b></p>
                <p>{props.data.responsibilities}</p>
            </div>
        </div>
    )
}

export default Page