import React, { Component } from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import shared from "./SharedStyles";
import Button from "react-native-button";

export default class ComponentWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = { showed: true };
  }

  componentDidMount() {
    this.getShowed();
  }

  getShowed = async () => {
    try {
      const value = await AsyncStorage.getItem("@ComponentWelcome:showed");
      if (value === null) {
        this.setState({ showed: false });
      }
    } catch (e) {}
  };

  render() {
    if (this.state.showed) return <View />;
    return (
      <View style={shared.container}>
        <Text style={shared.accountHeader}>
          Welcome to rawtx lightning wallet!
        </Text>
        <Text>
          You can currently send and receive testnet bitcoins on this app.
        </Text>
        <Text>
          It will take about 10-15 minutes to sync with the blockchain, you can
          do other stuff and it will keep syncing even if it's in the
          background. Once the sync is finished, you will be able to use all the
          functionality, until then, most operations below won't work!
        </Text>
        <Text>
          Let the app run in the background and check back in 10-15 minutes.
        </Text>
        <Text>
          If you run into problem, you can find us on twitter or reddit under
          rawtxapp usernames.
        </Text>
        <Text>
          Please show what lightning is capable of to your friends and family
          and leave us a review on the app store!
        </Text>
        <Button
          style={[shared.inCardButton]}
          onPress={() => {
            this.setState({ showed: true });
            try {
              AsyncStorage.setItem("@ComponentWelcome:showed", "showed");
            } catch (e) {}
          }}
        >
          Will do!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});