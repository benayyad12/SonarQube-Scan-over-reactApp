import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { urlJO ,urlPG } from '../constants/url'

const FetchData = () => {
  


//   Thank you for clarifying. It seems like you want to create a schedule table with horizontal bars representing the duration of activities within specific time intervals. The provided code looks good, and I understand that you want help in ensuring the horizontal bars are pixel-perfect and correctly positioned.

// Here are a few suggestions:

// 1. **CSS Adjustments:**
//    - Set the `height` of the `.activity-bar` class to `100%` instead of using pixels. This ensures that the bar always fills the entire height of the cell.

//    ```css
//    .activity-bar {
//      background-color: #4caf50; /* Green color, customize as needed */
//      height: 100%;
//    }
//    ```

// 2. **JSX Adjustments:**
//    - Adjust the `renderTimeRow` function to include half-hour intervals if needed. You can modify the `hours` array accordingly.

//    ```javascript
//    const hours = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`) + ':00');
//    ```

// 3. **CSS for Time Labels:**
//    - Consider adding styles to highlight specific times in the `th` elements (e.g., 4:30 pm).

//    ```css
//    .activity-table th.highlight {
//      background-color: #f0f0f0; /* Customize as needed */
//    }
//    ```

// 4. **Time Formatting:**
//    - Ensure that the time labels are formatted consistently (e.g., `14:00` instead of `2pm`). You can adjust the rendering of time in the `renderTimeRow` function.

// These adjustments should help you create a pixel-perfect representation of activities in the schedule table. If you have any specific concerns or questions about a particular aspect, feel free to let me know!

        // fetchedData.forEach((data, index) => {
        //     console.log(`Data for discipline ${disciplines[index]}:`, data);
        //   });

        //   console.log(` ---------------------  ${fetchDataForAllDisciplines(urlJO,disciplines)}  ------- ${fetchedData}`);

  return (
    <div className='container'>
        <div className="mt-3">
            <h3> fetching data from the api
            </h3>
        </div>
        <table className='table'>
            <thead>
                <tr >
                    <th>Discipline</th>
                    <th>start date</th>
                    <th>end date</th>
                    <th>venue description</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
    {fetchedData.map((game, index) => {
    return (
        <tr key={index}>
        {/* <td>{game.schedules.discipline ? game.schedules.discipline.code : 'N/A'}</td>
        <td>{game.schedules.session ? game.schedules.session.startDate : 'N/A'}</td>
        <td>{game.schedules.session ? game.schedules.session.endDate : 'N/A'}</td>
        <td>{game.schedules.venue ? game.schedules.venue.description : 'N/A'}</td>
        <td>{game.schedules.status ? game.schedules.status.code : 'N/A'}</td> */}
        <td>{game.discipline}</td>
        <td>{game.session }</td>
        <td>{game.session }</td>
        <td>{game.venue }</td>
        <td>{game.status }</td>


        </tr>
    );
    })}
        </tbody>
        </table>
      
    </div>
  )
        };

export default FetchData
