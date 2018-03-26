import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import './LocationCard.css';

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
            <Paper className='one-day'>
                <div className="date">Tue</div>
                <div class="small-icon partly-cloudy-day"></div>
                <div class="temp-high"><span class="value">22</span>° </div>
                <div class="temp-low"><span class="value">16</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Wed</div>
                <div class="small-icon clear-day"></div>
                <div class="temp-high"><span class="value">20</span>° </div>
                <div class="temp-low"><span class="value">15</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Thu</div>
                <div class="small-icon thunderstorm-day"></div>
                <div class="temp-high"><span class="value">9</span>° </div>
                <div class="temp-low"><span class="value">6</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Fri</div>
                <div class="small-icon rain-day"></div>
                <div class="temp-high"><span class="value">12</span>° </div>
                <div class="temp-low"><span class="value">5</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Sat</div>
                <div class="small-icon wind-day"></div>
                <div class="temp-high"><span class="value">18</span>° </div>
                <div class="temp-low"><span class="value">10</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Sun</div>
                <div class="small-icon clear-day"></div>
                <div class="temp-high"><span class="value">25</span>° </div>
                <div class="temp-low"><span class="value">12</span>°</div>
            </Paper>
            <Paper className='one-day'>
                <div className="date">Mon</div>
                <div class="small-icon partly-cloudy-day"></div>
                <div class="temp-high"><span class="value">23</span>° </div>
                <div class="temp-low"><span class="value">14</span>°</div>
            </Paper>
        </CardText>
    </Card>
);

export default LocationCard;