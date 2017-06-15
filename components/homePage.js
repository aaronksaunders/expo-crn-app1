import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { connect, Provider } from 'react-redux';
import { doLogin, doLogout } from '../actions'


/**
 * 
 * @param {*} navigation - navigation object
 * @param {*} loggedIn - from store
 * @param {*} doLogout - for dispatching the logout action
 */
const HomePage = ({ navigation, loggedIn, doLogout }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
            <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>
            <View style={{ marginTop: 20 }}>
                <Button
                    onPress={() => navigation.navigate('HomePageDetail')}>
                    <Text>Click Me! </Text>
                </Button>
                <Button
                    onPress={() => (doLogout())}>
                    <Text>Logout</Text>
                </Button>
            </View>
        </Content>
    </Container>
    )
}

const mapStateToProps = ({ loggedIn }) => {
    return { loggedIn }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            dispatch(doLogout())
        }
    }
}

//
HomePage.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")} >
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right />
        </Header>
    )
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


