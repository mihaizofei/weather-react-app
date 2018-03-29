import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Flexbox from 'flexbox-react';

import DayCard from '../DayCard/DayCard.jsx';
import './LocationCard.css';
import '../common/main.css';

const NextDays = ({days}) => (
    <Flexbox style={{width: '100%'}} flexDirection="row" flexWrap="wrap" justifyContent="center">
      {days.map((day, index) => (
        <DayCard day={day.name} dayType={day.condition} tempHigh={day.high} tempLow={day.low} key={index}/>
      ))}
    </Flexbox>
  ); 

const LocationCard = (props) => (
    <Card className='location-card'>
        <CardHeader
            title={
                <div className='card-header-title'>{props.forecast.location}</div>
            }
            subtitle={
                <div className='card-header-subtitle'>
                    <div>{props.forecast.currentDate}</div>
                    <div>{props.forecast.currentCondition}</div>
                </div>
            }
            actAsExpander={true}
            showExpandableButton={true}
        />
        <div className='paper-container'>
            <Paper className='card-body-paper' zDepth={1}>
                <div className='icon cloudy-day'></div>
                <div className='current-conditions'>{props.forecast.currentDegrees}<span className='degrees'>°C</span></div>
            </Paper>
            <Paper className='card-body-paper' zDepth={1}>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Humidity: </span>
                    {props.forecast.currentHumidity}%
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Wind: </span>
                    {props.forecast.currentWind}km/h
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Sunrise: </span>
                    {props.forecast.currentSunrise}am
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Sunset: </span>
                    {props.forecast.currentSunset}pm
                </div>
            </Paper>
        </div>
        <CardText className='one-day-container' expandable={true}>
            <NextDays days={props.forecast.nextDays}/>
        </CardText>
    </Card>
);

export default LocationCard;