import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import './LocationCard.css';

const LocationCard = () => (
    <Card className="location-card">
        <CardHeader
            className="location-header"
            title="Craiova, RO"
            subtitle="Sun, 25 Mar 2018 9:00 AM"
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
);

export default LocationCard;
