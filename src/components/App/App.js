import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flexbox from 'flexbox-react';

import LocationCard from '../LocationCard/LocationCard.jsx';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Flexbox flexDirection="row" flexWrap="wrap" justifyContent="center">
            <LocationCard forecast={forecastData}/>
          </Flexbox>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

const forecastData = {
  location: "Craiova, RO",
  currentDate: "Sun, 25 Mar 2018 9:00 AM",
  currentCondition: "cloudy",
  currentDegrees: "11",
  currentHumidity: "55",
  currentWind: "14",
  currentSunrise: "06:55",
  currentSunset: "07:15",
  nextDays: [
    {
      name: "Tue",
      condition: "partlyCloudy",
      high: "22",
      low: "16"
    },
    {
      name: "Wed",
      condition: "clear",
      high: "20",
      low: "15",
    },
    {
      name: "Thu",
      condition: "thunderstorm",
      high: "9",
      low: "6",
    },
    {
      name: "Fri",
      condition: "rain",
      high: "12",
      low: "5",
    },
    {
      name: "Sat",
      condition: "wind",
      high: "18",
      low: "10",
    },
    {
      name: "Sun",
      condition: "clear",
      high: "24",
      low: "12",
    },
    {
      name: "Mon",
      condition: "partlyCloudy",
      high: "23",
      low: "11"
    }
  ]
}