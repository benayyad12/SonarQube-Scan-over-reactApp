import React from 'react';
import './tableStyle.css'; // Import your CSS file for styling

const YourTableComponent = () => {

  // Each minute corresponds to 1 pixels
  const calculateDurationInPixels = (duration) => {
    const [hours, minutes] = duration.split(':');
    const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    if (totalMinutes > 60 ){
      return `${totalMinutes - Math.trunc((totalMinutes/60)*100)/100}px`
    }
    else{
      return `${totalMinutes }px`; 
    }

  };


  const hours = Array.from({ length: 19 }, (_, i) => i+5).concat(['0'], Array.from({ length: 3 }, (_, i) => i + 1));; // Array from 05 to 00 representing hours + 3h other day 
  const activities = [
    { name: 'ARC-INV', intervals: [{ start: '10:00', duration: '00:30' , end :'10:30' }], status:'finished' },{ intervals: [{ start: '15:00', duration: '05:15' , end :'20:15' }],status :'ongoing'},
    { name: 'BDM-CPL', intervals: [{ start: '11:00', duration: '01:00' , end : '12' }] , status:'ongoing'},
    { name: 'BKB-LIL', intervals: [{ start: '10:00', duration: '03:00'  , end :'13:00'}] , status:'scheduled'},
    // Add more activities as needed
  ];

  //leading zero before hours <10  9=> 09:00
  const renderTimeRow = () => {
    return hours.map((hour) => (
      <th key={`time-${hour}`}>{hour < 10  ? `0${hour}:00` : `${hour}:00`}</th>
    ));
  };


  



  const renderActivityRows = () => {
    return activities.map((activity, index) => (
      <tr key={`activity-${index}`}>
        <td>{activity.name}</td>
        {hours.map((hour) => {
          const timeKey = `time-${hour}`;
          const interval = activity.intervals.find((int) => int.start.split(':')[0] === `${hour}`);
  
          if (interval) {
            const durationInPixels = calculateDurationInPixels(interval.duration);
            const startHour = parseInt(interval.start.split(':')[0], 10);
  
            // Mapping of status to color
            const statusColorMap = {
              finished: '#ff0000', // Red
              ongoing: '#00ff00', // Green
              scheduled: '#ffff00' // Yellow
            };
  
            const activityColor = statusColorMap[activity.status];
  
            return (
              <td key={timeKey} style={{ position: 'relative' }}>
                <div
                  className="activity-bar"
                  style={{
                    width: durationInPixels,
                    // left: `${calculateLeftPosition(startHour)}`,
                    backgroundColor: activityColor

                  }}
                ></div>
              </td>
            );
          } else {
            return <td key={timeKey}></td>;
          }
        })}
      </tr>
    ));
  };

  return (
    <table className="activity-table">
      <thead>
        <tr>
          <th>Discipline-Venue</th>
          {renderTimeRow()}
        </tr>
      </thead>
      <tbody>
        {renderActivityRows()}
      </tbody>
    </table>
  );
};

export default YourTableComponent;