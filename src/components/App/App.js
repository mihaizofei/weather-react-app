import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flexbox from 'flexbox-react';

import Search from '../Search/Search';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Flexbox flexDirection="row" flexWrap="wrap" justifyContent="center">
            <Search />
          </Flexbox>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
