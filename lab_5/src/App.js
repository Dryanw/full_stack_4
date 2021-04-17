import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Student from './components/Student';
import customHistory from './components/History';
import Redirect from './components/Redirect';
import './App.css';

const NewRoute = () => {
    return (
        <div>
            <p>NewRoute</p>
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={customHistory}>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/student/:studentname/:studentno?' component={Student} />
                        <Route path='/redirect' component={Redirect} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
