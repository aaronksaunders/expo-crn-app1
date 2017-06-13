import React, { Component } from 'react';
import { Drawer, Container, Content, List, ListItem, Text, Header } from 'native-base';
export default class SideMenu extends Component {
    render() {
        return (<Container>
            <Header />
            <Content>
                <List>
                    <ListItem >
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
        )
    }

}