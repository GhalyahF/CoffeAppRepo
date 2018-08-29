import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { withRouter, Link } from "react-router-native";
import { observer } from "mobx-react";
import store from "../store";

// Style
import styles from "./styles";

class MyHeader extends Component {
  render() {
    console.log(store.quantity);
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon style={styles.backicon} name="arrow-back" />
          </Button>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          <Link to="/CoffeCart" component={Button} transparent>
            <Text style={styles.text}>
              {store.quantity} <Icon name="beer" style={styles.icon} />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(observer(MyHeader));
