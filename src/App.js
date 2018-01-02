import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {

    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAQTY2FbbSuXVfj9hafKRufPvZruS9mxts",
            authDomain: "rn-auth-16605.firebaseapp.com",
            databaseURL: "https://rn-auth-16605.firebaseio.com",
            projectId: "rn-auth-16605",
            storageBucket: "rn-auth-16605.appspot.com",
            messagingSenderId: "454187809754"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <View>{this.renderContent()}</View>
            </View>
        );
    }
}

export default App;
