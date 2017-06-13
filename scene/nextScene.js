import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';


import { StackNavigator } from 'react-navigation';


///////////////////////////////////////////////////////
// MAIN SCREEN
///////////////////////////////////////////////////////
const NextSceneMain = ({ navigation }) => {
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

NextSceneMain.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Profile</Title>
            </Body>
            <Right />
        </Header>
    )
});

///////////////////////////////////////////////////////
// DETAIL SCREEN
///////////////////////////////////////////////////////
const DetailScreen = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
        </Content>
    </Container>
    )
}


DetailScreen.navigationOptions = ({ navigation }) => ({
    title: 'Details'
});


const NextScene = StackNavigator({
    NextSceneMain: { screen: NextSceneMain },
    Detail: { screen: DetailScreen, title: 'Details' },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NextScene