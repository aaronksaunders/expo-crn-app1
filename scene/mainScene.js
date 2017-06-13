import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Drawer, Header, Button, Icon, Title, Body, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';

const MainScene = ({ navigation }) => {
    return (<Container>
        <Content contentContainerStyle={styles.container}>
            <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <View style={{ marginTop: 20 }}>
                <Button
                    onPress={() => navigation.navigate('Detail1')}>
                    <Text>Click Me! </Text>
                </Button>
            </View>


        </Content>
    </Container>
    )
}


MainScene.navigationOptions = ({ navigation }) => ({
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

class Detail1 extends React.Component {
    static navigationOptions = {
        title: 'Detail One',
    };

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
                        <Text>Hello, From Detail One from the Home Page</Text>
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

const MainSceneContainer = StackNavigator({
    Home: { screen: MainScene },
    Detail1: { screen: Detail1 },
});

export default MainSceneContainer