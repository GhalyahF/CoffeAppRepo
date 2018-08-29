import React, { Component } from "react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Tab,
  Tabs
} from "native-base";

// Images
import starbucks from "../../images/starbucks.png";
import starbucks2 from "../../images/starbucks.jpg";

// Style
import styles from "./styles";
//store
import store from "../store";

class CoffeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
      },
      drink: 0,
      option: 0
    };
  }

  ComponentWillMount(){
    this.setState({
      detail: store.CurrentShop
    })
  }

  handleCartAdd(){
    let addition= {
      drink: this.state.drink,
      option: this.state.option,
      quantity: 0
    }
  }

handleQuantity
  render() {
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {this.state.detail.name + "\n"}
              <Text note>{this.state.detail.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={this.state.detail.image} />
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <Text style={styles.middleText}>Choose Drink</Text>
          </Body>
        </ListItem>
        <Tabs
          initialPage={0}
          onChangeTab={({ i, ref, from }) => this.setState({ drink: i })}
        >
          <Tab heading="Espresso" />
          <Tab heading="Latte" />
        </Tabs>
        <ListItem>
          <Body>
            <Text style={styles.middleText}>Choose Option</Text>
          </Body>
        </ListItem>
        <Tabs
          initialPage={0}
          onChangeTab={({ i, ref, from }) => this.setState({ option: i })}
        >
          <Tab heading="Small" />
          <Tab heading="Large" />
        </Tabs>
        <Button full danger onPress={() => this.handleCartAdd()}>
          <Text>Add</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeDetail;
