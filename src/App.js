import './CSS/App.css';
import './CSS/FilterBar.css';
import './CSS/index.css';
import './CSS/MainCard.css';
import './CSS/Navbar.css';
import './CSS/Page.css';
import FilterBar from './Components/FilterBar';
import MainCard from './Components/MainCard';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState([])
  const [duration, setDuration] = useState()
  const [industry, setIndustry] = useState('')
  const [apiData, setApiData] = useState([])
  const [pageData, setPageData] = useState()

  const getData = async (location = [], duration = '', industry = '') => {

    location = location.join()


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


  const changePageData = (index) =>{
    changePageDataHandle(index)
  }

  const changePageDataHandle = (index) =>{
    setPageData(apiData[index])
  }
  return (
    <div className="App">
      <Navbar />
      <FilterBar />

      <div id='displaySection'>

        <div id='cardSection'>

          {apiData.length > 0 ? apiData.map((value, index) => {
            return <>
              <MainCard value={value} key={index} index={index} changePageData={changePageData} />
            </>
          }) : null}

        </div>

        <div id='page'>

          {pageData ? <Page data={pageData} /> : null}
      
        </div>
      </div>
    </div>
  );
}

export default App;
