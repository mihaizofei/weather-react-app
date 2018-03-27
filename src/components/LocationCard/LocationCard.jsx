import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import DayCard from '../DayCard/DayCard.jsx';
import './LocationCard.css';
import '../common/main.css';

const LocationCard = () => (
    <Card className='location-card'>
        <CardHeader
            title={
                <div className='card-header-title'>Craiova, RO</div>
            }
            subtitle={
                <div className='card-header-subtitle'>
                    <div>Sun, 25 Mar 2018 9:00 AM</div>
                    <div>Cloudy</div>
                </div>
            }
            actAsExpander={true}
            showExpandableButton={true}
        />
        <div className='paper-container'>
            <Paper className='card-body-paper' zDepth={1}>
                <div className='icon cloudy-day'></div>
                <div className='current-conditions'>11<span className='degrees'>°C</span></div>
            </Paper>
            <Paper className='card-body-paper' zDepth={1}>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Humidity: </span>
                    55%
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Wind: </span>
                    14km/h
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Sunrise: </span>
                    6:55am
                </div>
                <div className='current-conditions-details'>
                    <span className='current-conditions-details-prefix'>Sunset: </span>
                    07:15pm
                </div>
            </Paper>
        </div>
        <CardText className='one-day-container' expandable={true}>
            <DayCard day="Tue" dayType="partly-cloudy-day" tempHigh="22" tempLow="16"/>
            <DayCard day="Wed" dayType="clear-day" tempHigh="20" tempLow="15"/>
            <DayCard day="Thu" dayType="thunderstorm-day" tempHigh="9" tempLow="6"/>
            <DayCard day="Fri" dayType="rain-day" tempHigh="12" tempLow="5"/>
            <DayCard day="Sat" dayType="wind-day" tempHigh="18" tempLow="10"/>
            <DayCard day="Sun" dayType="clear-day" tempHigh="24" tempLow="12"/>
            <DayCard day="Mon" dayType="partly-cloudy-day" tempHigh="23" tempLow="1r"/>
        </CardText>
    </Card>
);

export default LocationCard;