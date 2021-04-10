import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';
import College from './college';

class App extends React.Component {
    render() {
        return (
        <>
            <Student name='Rick Rude' number='11111' enrolled='0,1'/>
            <Student name='Shawn Michaels' number='22222' enrolled='1'/>
            <Student name='Bret Hart' number='33333' enrolled='0,1,2'/>
            <College name='George Brown' location='Casa Loma'/>
        </>);
    }
}

export default App;
