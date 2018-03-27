import React from 'react';
import Paper from 'material-ui/Paper';

import './DayCard.css';
import '../common/main.css';

const DayCard = (props) => {
    return (
        <Paper className='one-day'>
            <div className="date">{props.day}</div>
            <div className={"small-icon " + props.dayType}></div>
            <div className="temp-high"><span class="value">{props.tempHigh}</span>° </div>
            <div className="temp-low"><span class="value">{props.tempLow}</span>°</div>
        </Paper>
    )
}

export default DayCard;