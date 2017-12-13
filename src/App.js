/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './routes/Index'
import Login from './login/component/Index'
const Nav = StackNavigator({
    Login: {
      screen: Login,
        navigationOptions: {
            header: null
        }
        },
    Home: {
      screen: Home,
        navigationOptions: {
            header: null
        }
    }
})
export default class App extends Component {
    render() {
        return (
            <Nav />
        );
    }
}
