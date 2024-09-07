import React from 'react'
import {  useNavigate} from "react-router-dom";
import logo from '../assets/Paris_2024.svg.png';


const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <div>
        <img src={logo} alt="Logo JO 2024"  style={{width: 200}}/>
         <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <button onClick={()=>navigate('/vam')}>
                Current day
            </button>
            <br />
            <button onClick={()=>navigate('/vam/2024-07-29')}>
            2024-07-29
            </button>
            <br />
            <button onClick={()=>navigate('/vam/comp/OG2024/2024-07-29')}>
            CompetitionAndDate
            </button>
            <br />
            <button onClick={()=>navigate('/vam/table')}>
            Table
            </button>
    </div>
  )
}

export default NoMatch
