import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';


import { StackNavigator } from 'react-navigation';


///////////////////////////////////////////////////////
// MAIN SCREEN
///////////////////////////////////////////////////////
const CommunityPage = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
            <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>

            <View style={{ marginTop: 20 }}>
                <Button
                    onPress={() => navigation.navigate('CommunityDetailPage')}>
                    <Text>Next Screen</Text>
                </Button>
            </View>

        </Content>
    </Container>
    )
}

CommunityPage.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Community</Title>
            </Body>
            <Right />
        </Header>
    )
});

///////////////////////////////////////////////////////
// COMMUNITY DETAIL SCREEN
///////////////////////////////////////////////////////
const CommunityDetailPage = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
            <Text>Community Detail Page</Text>
        </Content>
    </Container>
    )
}


CommunityDetailPage.navigationOptions = ({ navigation }) => ({
    title: 'Details'
});


const CommunityPageContainer = StackNavigator({
    CommunityPage: { screen: CommunityPage },
    CommunityDetailPage: { screen: CommunityDetailPage, title: 'Details' },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CommunityPageContainer