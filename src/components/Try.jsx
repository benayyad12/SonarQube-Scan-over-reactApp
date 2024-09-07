import React , { useEffect, useState  } from 'react'
import { urlJO } from '../constants/url';
import axios from 'axios';
import {GetAbbreviation , concatenateDisciplineVenue ,calculateTimeDifference , getStatusColor ,extractTimeFromDate} from '../utils/transform';
import {useParams} from "react-router-dom";
import './table.css';


const Try = () => {

// Create an array of variable values
const disciplines = ["ARC", "ATH", "BDM","BK3","BKB","BKG","BMF","BMX","BOX","CLB","CRD","CSL","CSP","CTR","DIV","EQU","FBL","FEN" ,"GAR" ,"GLF" ,"GRY" ,"GTR", "HBL", "HOC", "JUD", "MPN", "MTB" ,"OWS" ,"ROW", "RU7", "SAL" ,"SHO" ,"SKB" ,"SRF" ,"SWA", "SWM", "TEN" ,"TKW" ,"TRI" ,"TTE", "VBV" ,"VVO" ,"WLF" ,"WPO" ,"WRE"];
const [fetchedData,setFetchedData] =useState([]);

const {date,compValue} =useParams();

const currentDate = new Date();
const formattedDate = date || currentDate.toISOString().split('T')[0];
const defaultCompValue = 'OG2024';
const compDefault = compValue || defaultCompValue;


useEffect(() => {
    const fetchData = async () => {

      const normalizedCompValue = compDefault.toLocaleLowerCase();

    const dataPromises = disciplines.map(async (discipline) => {
        const apiUrl = `${urlJO.split('OG2024')[0]}${normalizedCompValue}~disc=${discipline}~lang=ENG~date=${formattedDate}.json`;


        try {
          const response = await axios.get(apiUrl);
          return response;
        } catch (error) {
          console.error(error);
        }
      });

      const allData = await Promise.all(dataPromises);
      setFetchedData(allData.map((e)=> e.data));
    };

    fetchData();
  }, [date]);

  // console.log(fetchedData);


  // const processedData = fetchedData?.map((game,index)=>{
  //   game.schedules?.map((schedule) => {
  //     // 'disc-venue': concatenateDisciplineVenue(schedule.discipline?.code, GetAbbreviation(game.schedules[0]?.venue?.description)),
  //     // startHour: extractTimeFromDate(schedule.startDate),
  //     // endHour: extractTimeFromDate(schedule.endDate),
  //     // duration: calculateTimeDifference(schedule.startDate, game.schedules[0]?.endDate),
  //     // status: schedule.status?.code,
  //     for (let i = 0; i< (schedule.discipline?.code).length(); i++) {
  //       console.log(schedule.discipline?.startDate); 
  //     }
      
  //   });
  // })
 
  // useEffect(()=>{
  //   console.log(processedData);
  // },[processedData]);

    

  // const processedData = fetchedData.map((game) => ({
  //   'disc-venue': concatenateDisciplineVenue(game.schedules[0]?.discipline?.code, GetAbbreviation(game.schedules[0]?.venue?.description)),
  //   startHour: extractTimeFromDate(game.schedules[0]?.startDate),
  //   endHour: extractTimeFromDate(game.schedules[0]?.endDate),
  //   duration: calculateTimeDifference(game.schedules[0]?.startDate, game.schedules[0]?.endDate),
  //   status: game.schedules[0]?.status?.code,
  // }));


  //   console.log(`hereeeee processed data ${processedData}`);




  return (

    


<div className='container'>
        <div className="mt-3">
            <h3> fetching data from the api at date : {formattedDate} for competition : {compDefault}
            </h3>
        </div>
        <table className='table'>
            <thead>
                <tr >
                    <th>Discipline-Venue</th>
                    <th>Discipline Code</th>
                    <th>start time</th>
                    <th>end time</th>
                    <th>Duration</th>
                    <th>venue description</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
    {fetchedData?.map((game, index) => {
    return (
        <>
       
          <td>
            <div style={{backgroundColor : 'blue' , height:'30px'}}>

            </div>
          </td>

        {game.schedules?.map((schedule) =>{
          return (
            <tr>

          <td> {concatenateDisciplineVenue(schedule.discipline?.code, GetAbbreviation( schedule.venue?.description) ) }</td>
          <td>{schedule.discipline?.code }</td>
          <td>{ extractTimeFromDate (schedule?.startDate) }</td>
          

          <td>{extractTimeFromDate (schedule?.endDate )}</td>

          <td> the duration is {calculateTimeDifference(schedule?.startDate,schedule?.endDate)} min </td>
          <td>{
          GetAbbreviation( schedule.venue?.description) 
          }
          </td>
          <td style={{color: getStatusColor(schedule.status?.code) }}>
            {schedule.status?.code}  
          </td>
          
             </tr>
         
         )
      

        })}


        
</>
    );
    })}
        </tbody>
        </table>
      
    </div>

  )
}

export default Try
