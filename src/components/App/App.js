import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flexbox from 'flexbox-react';

import Search from '../Search/Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Flexbox flexDirection="row" flexWrap="wrap" justifyContent="center">
          <Search />
        </Flexbox>
      </MuiThemeProvider>
    );
  }
}

export default App;
