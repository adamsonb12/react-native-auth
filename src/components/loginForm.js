import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email:'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                        placeholder='user@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label='Password:'
                        secureTextEntry={true}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle: {
        height: 20,
        width: 100
    }
}

export default LoginForm;
