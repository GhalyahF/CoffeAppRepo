import React, { Component } from "react";
import { observer } from "mobx-react";
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

// Style
import styles from "./styles";

class CoffeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      shop: {}
    };
  }

  componentWillMount() {
    this.setState({
      orders: store.shopCart,
      shop: store.currentShop
    });
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
              {store.current.name + "\n"}
              <Text note>{store.current.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={store.current.image} />
          </Right>
        </ListItem>
        {store.shopCart.map((item, index) => this.renderItem(item, index))}
      </List>
    );
  }
}

export default observer(CoffeCart);
