import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {white} from 'material-ui/styles/colors';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './Header.css';

class Header extends Component {
    render() {
        const rightButtons = (
            <div className="icon-style">
                <NavigationRefresh color={white}/>
                <ContentAdd color={white} />
            </div>
        );

        return (<div>
            <AppBar className="bar-style"
                title="WeatherZ"
                showMenuIconButton={false}
                iconElementRight={rightButtons}
            />
        </div>);
    }
}

export default Header;
