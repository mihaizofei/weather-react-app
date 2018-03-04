import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
  };

const Search = () => (
    <div>
        <TextField hintText="Full width"/>
        <RaisedButton label="Search" primary style={style} />
    </div>
);

export default Search;
