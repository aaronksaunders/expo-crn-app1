import React from 'react';
import { View } from "react-native";
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import HomePageContainer from "./scene/HomePageContainer";
import CalendarPageContainer from "./scene/CalendarPageContainer";
import CommunityPageContainer from "./scene/CommunityPageContainer";

import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"


import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import authReducer from './reducers'

const SignedIn = DrawerNavigator({
    Home: {
        screen: HomePageContainer,
    },
    Events: {
        screen: CalendarPageContainer,
    },
    Community: {
        screen: CommunityPageContainer,
    },
});

const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In"
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up"
        }
    },

});

const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        resolve(false)
    })
}

const BaseApp = connect( ({ loggedIn }) => ({ loggedIn })
)(
    ({ loggedIn, dispatch }) => (
        loggedIn ? <SignedIn /> : <SignedOut />
    )
    );

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentWillMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => {
                alert("An error occurred")
                console.log(err)
            });
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null;
        }
        return (
            <Provider store={createStore(authReducer)}>
                <BaseApp />
            </Provider>
        )
    }
}

