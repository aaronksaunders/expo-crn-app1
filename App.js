import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainScene from "./scene/mainScene";
import NextScene from "./scene/nextScene";

const MyApp = DrawerNavigator({
    Home: {
        screen: MainScene,
    },
    Next: {
        screen: NextScene,
    },

});


export default class App extends React.Component {


    render() {
        return (
            <MyApp/>
        );
    }
}

