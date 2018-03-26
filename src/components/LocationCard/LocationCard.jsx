import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import './LocationCard.css';

const LocationCard = () => (
    <Card className='location-card'>
        <CardHeader
            title={
                <div className='card-header-title'>Craiova, RO</div>
            }
            subtitle= {
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
                <div className='icon cloudy'></div>
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
        <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
);

export default LocationCard;