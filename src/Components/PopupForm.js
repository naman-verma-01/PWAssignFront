import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Select from 'react-select';
import Slider from 'react-input-slider';

const options = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Jaipur', label: 'Jaipur' },
    { value: 'Mumbai', label: 'Mumbai' },
];



function PopupForm(props) {
    const [category, setCategory] = useState(null)
    const [skills, setSkills] = useState(null)
    const [stipend, setStipend] = useState(0)
    const [applicants, setApplicants] = useState(0)
    const [location, setLocation] = useState(props.duration)
    const [duration, setDuration] = useState(props.duration)


    return (
        <Popup
        // open={false}
            trigger={<div id='filterCone' ><img src='./images/filterIcon.jpg' /></div>}
            modal
            nested
        >   
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Filters </div>
                    <div className='modalFieldContainer'>
                        <div className='modalField'>
                            <p>Category</p>
                            <Select
                                defaultValue={category}
                                onChange={setCategory}
                                isMulti
                                options={options}
                            />
                        </div>

                        <div className='modalField'>
                            <p>Skills</p>
                            <Select
                                defaultValue={skills}
                                onChange={setSkills}
                                isMulti
                                options={options}
                            />
                        </div>
                    </div>

                    <div className='modalFieldContainer'>


                        <div className='modalField'>
                            <p>Duration (Months)</p>
                            <Slider
                                axis="x"
                                x={duration}
                                xstep='1'
                                xmax='12'
                                onChange={({ x }) => setDuration(x)}
                            />
                            <div className='sliderLabel'>
                                {['-',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value, index) => {
                                    return <div>{value}</div>
                                })}
                            </div>

                        </div>

                        <div className='modalField'>
                            <p>Location</p>
                            <Select
                                defaultValue={location}
                                onChange={setLocation}
                                isMulti
                                options={options}
                            />
                        </div>
                    </div>

                    <div className='modalFieldContainer'>
                        <div className='modalField'>
                            <p>Stipend</p>
                            <Slider
                                axis="x"
                                x={stipend}
                                xstep='1'
                                xmax='5'
                                onChange={({ x }) => setStipend(x)}
                            />
                            <div className='sliderLabel'>
                                {['20K', '40K', '60K', '80K', '100K', '120K'].map((value, index) => {
                                    return <div>{value}</div>
                                })}
                            </div>
                        </div>

                        <div className='modalField'>
                            <p>Applicants</p>
                            <Slider
                                axis="x"
                                x={applicants}
                                xstep='1'
                                xmax='3'
                                onChange={({ x }) => setApplicants(x)}
                            />
                            <div className='sliderLabel'>
                                {[10, 20, 30, '40+'].map((value, index) => {
                                    return <div>{value}</div>
                                })}
                            </div>

                        </div>
                    </div>



                    <div className="actions">
                        <button
                            className="modalCloseButton"
                            onClick={() => {
                                close();
                            }}
                        >
                            <b>Close</b>
                        </button>

                        <button
                            className="modalCloseButton"
                            onClick={() => {
                                console.log('modal closed ', location);
                                let arr = []
                                for (let loc of location) {
                                    arr.push(loc.value)
                                }

                                props.applyFilters(arr, duration)
                                close();
                            }}
                        >
                            <b>Apply</b>
                        </button>


                    </div>
                </div>
            )}
        </Popup>
    )
}

export default PopupForm