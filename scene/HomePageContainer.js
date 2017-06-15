import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { connect, Provider } from 'react-redux';
import { doLogin, doLogout } from '../actions'

import HomePage from '../components/homePage'


class HomePageDetail extends React.Component {
    static navigationOptions = {
        title: 'Detail One',
    };

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
                        <Text>Hello, From HomePageDetail One from the Home Page</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomePageContainer = StackNavigator({
    HomePage: { screen: HomePage },
    HomePageDetail: { screen: HomePageDetail },
});

export default HomePageContainer