import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import stevoTheme from 'material-ui/styles/baseThemes/stevoTheme';
import './App.css';

class App extends Component {

  render() {
    return (
    	<MuiThemeProvider muiTheme={getMuiTheme(stevoTheme)}>
	    	<div className="App">
	    		<Paper className="container" zDepth={4}>
	        	<img className="stevo_banner" src={require("./images/Stevo_Banner_No_BG.png")} />
	        	<br />
	        	<a href="https://m.me/OldMateStevo" target="_blank">
	        		<RaisedButton className="stevo_message_button" primary={true} label="Message me on Facebook!" labelStyle={"text-transform: lowercase"} />
	        	</a>
	        </Paper>
	      </div>
    	</MuiThemeProvider>
    );
  }
}

export default App;
