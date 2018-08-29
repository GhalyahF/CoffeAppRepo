import React, { Component } from "react";
import {observer} from 'mobx-react'
//store
import store from "../store";
// NativeBase Components
import {
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

// Images
import starbucks from "../../images/starbucks.png";
import starbucks2 from "../../images/starbucks.jpg";

// Style
import styles from "./styles";

class CoffeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          drink: 0,
          option: 0,
          quantity: 0
        },
           
      ],
      shop: {}
    };
  }

  ComponentWillMount(){
    this.setState = {
      orders: store.cart,
      shop: store.CurrentShop


    }

  }

  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text>
            {item.drink === 0 ? "Espresso" : "Latte"}
            {"\n"}
            {item.option === 0 ? "Small" : "Large"}
          </Text>
        </Left>
        <Body>
          <Text>{item.quantity}</Text>
        </Body>
      </ListItem>
    );
  }
  render() {
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {this.state.shop.name + "\n"}
              <Text note>{this.state.shop.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={this.state.shop.image} />
          </Right>
        </ListItem>
        {this.state.orders.map((item, index) => this.renderItem(item, index))}
      </List>
    );
  }
}

export default CoffeCart;
