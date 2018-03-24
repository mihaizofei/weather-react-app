import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {white} from 'material-ui/styles/colors';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';

import './Header.css';

class Header extends Component {
    render() {
        const rightButtons = (
            <div className="icon-style">
                <IconButton onClick={this.handleRefresh.bind(this)}>
                    <NavigationRefresh color={white}/>
                </IconButton>
                <IconButton onClick={this.handleAdd.bind(this)}>
                    <ContentAdd color={white}/>
                </IconButton>
            </div>
        );

        return (
            <div>
                <AppBar className="bar-style"
                    title="WeatherZ"
                    showMenuIconButton={false}
                    iconElementRight={rightButtons}
                />
            </div>
        );
    }

    handleRefresh(){
        console.log('Refresh button clicked');
    }

    handleAdd(){
        console.log('Add button clicked');
    }
}

export default Header;
