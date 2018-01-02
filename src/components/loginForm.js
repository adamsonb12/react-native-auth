import React, { Component } from 'react';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', loading: false, error: '' });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                        placeholder="user@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Password:"
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle: {
        height: 20,
        width: 100
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
