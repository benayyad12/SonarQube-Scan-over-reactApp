import './App.css'
import React from 'react'
import Try from './components/Try'
import TableComponent from './components/TableComponent'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import NoMatch from './components/NoMatch'
import YourTableComponent from './components/YourTableComponent'


function App() {

  // if he gives the date 
  // /date soit given or not it will show 
  // COMP+DATE is valid


  return (
    
    <>
    <div>
      {/* <FetchData /> */}
      <Router>
        <Routes>
        {/* vam/OG2024/2024-07-29 works */}
        {/* vam/2024-07-29 works  */}
          <Route path='/table' element={<TableComponent/>}></Route>
          {/* <Route path='vam/:date?' element={<Try/>}></Route> */}
          <Route path='/vam/comp/:compValue?/:date?' element={<Try/>}></Route>
          <Route path='/vam/:date?' element={<Try/>}></Route>
          {/* <Route path='/vam/:compValue?' element={<Try/>}></Route> */}

          {/* <Route path='vam/:compValue' element={<Try/>}></Route> */}
          <Route path='vam/table' element={<YourTableComponent/>}></Route>
          <Route path="*" element={<NoMatch/>}></Route>









        </Routes>
      </Router>
    



      

    </div>
    </>
  )
}

export default App
