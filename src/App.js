import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAQTY2FbbSuXVfj9hafKRufPvZruS9mxts",
            authDomain: "rn-auth-16605.firebaseapp.com",
            databaseURL: "https://rn-auth-16605.firebaseio.com",
            projectId: "rn-auth-16605",
            storageBucket: "rn-auth-16605.appspot.com",
            messagingSenderId: "454187809754"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
