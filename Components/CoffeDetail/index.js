import React, { Component } from "react";
import { observer } from "mobx-react";
// Style
import styles from "./styles";
//store
import store from "../store";
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

class CoffeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        drink: 0,
        option: ""
      }
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    console.log(store.currentShop);
    this.setState({
      detail: store.currentShop
    });
  }

  handleAdd() {
    store.handleOrder();
  }

  handleDelete() {
    store.handleRemove();
  }

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
        <Button full danger onPress={() => this.handleAdd()}>
          <Text>Add</Text>
        </Button>

        <Button full onPress={() => this.handleDelete()}>
          <Text>Remove</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeDetail);
