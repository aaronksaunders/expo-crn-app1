import React from "react";
import { View, TextInput } from "react-native";
import { Container, Content, Card, Button, Form, Item, Input, Label, Text } from "native-base";

import { connect, Provider } from 'react-redux';

import { doLogin } from '../actions'


const mapStateToProps = (state) => {
    return { count: state.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => {
            dispatch(doLogin())
        }
    }
}

const SignIn = ({ navigation, onLogin }) => (
    <Container style={{ paddingVertical: 20, paddingHorizontal: 10 }} >
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry />
                </Item>
            </Form>
            <Button block
                style={{ marginTop: 30 }}
                onPress={() => {
                    onLogin()
                }}>
                <Text>SIGN IN</Text>
            </Button>
            <Button block
                style={{ marginTop: 20 }}
                onPress={() => navigation.navigate("SignUp")}>
                <Text>SIGN UP</Text>
            </Button>
        </Content>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)