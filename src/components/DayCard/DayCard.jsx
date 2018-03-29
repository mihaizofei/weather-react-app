import React from 'react';
import Paper from 'material-ui/Paper';

import './DayCard.css';
import '../common/main.css';
import Helper from '../common/Helper';

const DayCard = (props) => {
    return (
        <Paper className='one-day'>
            <div className="date">{props.day}</div>
            <div className={"small-icon " + Helper.getConditionClassName(props.dayType)}></div>
            <div className="temp-high"><span className="value">{props.tempHigh}</span>° </div>
            <div className="temp-low"><span className="value">{props.tempLow}</span>°</div>
        </Paper>
    )
}

export default DayCard;