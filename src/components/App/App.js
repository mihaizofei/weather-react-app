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
            <LocationCard />
          </Flexbox>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
