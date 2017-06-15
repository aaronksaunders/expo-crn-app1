import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';


import { StackNavigator } from 'react-navigation';


///////////////////////////////////////////////////////
// MAIN SCREEN
///////////////////////////////////////////////////////
const CalendarPage = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
            <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>

            <View style={{ marginTop: 20 }}>
                <Button
                    onPress={() => navigation.navigate('Detail')}>
                    <Text>Next Screen</Text>
                </Button>
            </View>

        </Content>
    </Container>
    )
}

CalendarPage.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Events</Title>
            </Body>
            <Right />
        </Header>
    )
});

///////////////////////////////////////////////////////
// DETAIL SCREEN
///////////////////////////////////////////////////////
const CalendarDetailPage = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
        </Content>
    </Container>
    )
}


CalendarDetailPage.navigationOptions = ({ navigation }) => ({
    title: 'Details'
});


const CalendarPageContainer = StackNavigator({
    CalendarPage: { screen: CalendarPage },
    Detail: { screen: CalendarDetailPage, title: 'Details' },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CalendarPageContainer