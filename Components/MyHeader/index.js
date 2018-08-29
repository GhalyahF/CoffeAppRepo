
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Link } from 'react-router-native'
import {observer} from 'mobx-react';
import store from '../store';

// Style
import styles from "./styles";

// babel

class MyHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        
               <Left>
            <Link to='/' component={Button} transparent>
                <Icon style={styles.backicon} name='arrow-back' />
            </Link>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          <Link to='/cart' component={Button} transparent>
                <Text style={styles.text}>{store.cart.length}{" "}
                <Icon name='beer' style={styles.icon} />
                </Text>
            </Link>
        </Right>
      </Header>
    );
  }
}

export default observer(MyHeader);
