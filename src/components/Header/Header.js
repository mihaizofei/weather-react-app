import React from 'react';

import AppBar from 'material-ui/AppBar';

const style = {
    height: 50,
    backgroundColor: '#3F51B5',
    paddingBottom: 60
  };

const Header = () => (
    <div>
        <AppBar style={style}
            title="WeatherZ"
            showMenuIconButton={false}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    </div>
);

export default Header;
