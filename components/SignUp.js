import React from "react";
import { View } from "react-native";
import { NavigationActions } from 'react-navigation';
import { Container, Content, Card, Button, Form, Item, Input, Label, Text } from "native-base";

//import { onSignIn } from "../auth";

import { connect, Provider } from 'react-redux';

import { doLogin } from '../actions'

const onSignIn = () => {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}
export default ({ navigation }) => (

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
                <Item floatingLabel last>
                    <Label>Confirm Password</Label>
                    <Input secureTextEntry />
                </Item>

            </Form>
            <Button block
                style={{ marginTop: 30 }}
                onPress={() => {
                    onSignIn().then(() => navigation.navigate("SignedIn"));
                }}>
                <Text>SIGN UP</Text>
            </Button>
            <Button block danger
                style={{ marginTop: 20 }}
                textStyle={{ color: "#bcbec1" }}
                onPress={() => navigation.dispatch(NavigationActions.back())}>
                <Text>CANCEL</Text>
            </Button>
        </Content>
    </Container>
);