import './CSS/App.css';
import './CSS/FilterBar.css';
import './CSS/index.css';
import './CSS/MainCard.css';
import './CSS/Navbar.css';
import './CSS/Page.css';
import './CSS/PopUpForm.css';
import FilterBar from './Components/FilterBar';
import MainCard from './Components/MainCard';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import { useEffect, useState } from 'react';
import Advertisement from './Components/Advertisement';

function App() {
  const [location, setLocation] = useState([])
  const [duration, setDuration] = useState()
  const [industry, setIndustry] = useState('')
  const [apiData, setApiData] = useState([])
  const [pageData, setPageData] = useState()

  const getData = async (location = [], duration = '', industry = '') => {

    location = location.join()

    console.log("API HIT ==>", `https://pw-assign-back.vercel.app/fetchPost?location=${location}&duration=${duration}&industry=${industry}`)
    let data = await fetch(`https://pw-assign-back.vercel.app/fetchPost?location=${location}&duration=${duration}&industry=${industry}`)

    if (data.status) {
      data = await data.json()
      console.log("DATA", data)

      setApiData(data.data)
      setPageData(data.data[0])
    }
  }


  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    let cards = document.getElementsByClassName('card')
    let i = 0
    for (let card of cards) {
      // console.log("CARDS - ---->",card)
      // if( card === pageData.index)
      card.style.boxShadow = "1px 1px 10px 0px rgba(0, 0, 0, 0.15)"
    }
    if (pageData) {
      document.getElementById(pageData._id).style.boxShadow = '0 0 5px 1px #6938EF'
    }


  }, [pageData])

  const changePageData = (index) => {
    changePageDataHandle(index)
  }

  const changePageDataHandle = (index) => {
    setPageData(apiData[index])
  }


  const changeFilterStates = (newlocation, newduration, newindustry) => {
    changeFilterStateshandle(newlocation, newduration, newindustry)
  }

  const changeFilterStateshandle = (newlocation, newduration, newindustry) => {
    setLocation(newlocation)
    setDuration(newduration)
    setIndustry(newindustry)
    // console.log("HERE")
    getData(newlocation, newduration, newindustry);


  }
  return (
    <div className="App">
      <Navbar />
      <FilterBar changeFilterStates={changeFilterStates} />

      <div id='displaySection'>

        <div id='cardSection'>

          {apiData && apiData.length > 0 ? apiData.map((value, index) => {
            if (index < 1) {
              return <>
                <MainCard value={value} key={index} index={index} changePageData={changePageData} />
              </>
            } else {
              return null
            }

          }) : null}



          {apiData && apiData.length == 0 ?
            <div className='card'>
              <p className='cardEmpty'>Wooooops!! Looks like your filtered choice isnt available right now😥. <br/><br/> Try browsing for other alternatives😃.</p> 
            </div>
            : null}

          <Advertisement />

          {apiData && apiData.length > 0 ? apiData.map((value, index) => {
            if (index >= 1) {
              return <>
                <MainCard value={value} key={index} index={index} changePageData={changePageData} />
              </>
            } else {
              return null
            }

          }) : null}



        </div>

        <div id='page'>

          {pageData ? <Page data={pageData} /> : null}

        </div>
      </div>
    </div >
  );
}

export default App;
