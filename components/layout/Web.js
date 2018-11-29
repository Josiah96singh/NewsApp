import React, { Component } from "react";
import { View, StyleSheet, WebView, ActivityIndicator } from "react-native";
import { Header } from "react-native-elements";

import MyCustomLeftComponent from "../functional/backComponent";

class Web extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const urlName = params.urls;
    return (
      <View style={styles.container}>
        {/* <Header
           leftComponent={<MyCustomLeftComponent />}
          centerComponent={{
            text: "Article"
          }}
          backgroundColor="white"
           outerContainerStyles={{ top: 25 }}
          innerContainerStyles={{ top: 10 }}
        /> */}
        <WebView
          style={{ backgroundColor: "white" }}
          source={{ uri: params.urls }}
        />
      </View>
    );
  }
}

export default Web;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
