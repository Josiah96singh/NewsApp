import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card } from "react-native-elements";
import moment from "moment";
import { withNavigation } from "react-navigation";

// import Web from "../layout/Web";

class CardTab extends Component {
  render(props) {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            containerStyle={styles.container}
            image={{
              uri: item.urlToImage != null ? item.urlToImage : undefined
            }}
            imageStyle={{
              width: null,
              height: 200,
              borderWidth: 10,
              borderColor: "#fff"
            }}
          >
            <Text
              onPress={() =>
                this.props.navigation.navigate(
                  "Web",
                  { urls: item.url, name: item.title },
                  (title = "WebView")
                )
              }
              style={styles.title}
            >
              {item.title}
            </Text>
            <View style={styles.meta}>
              <Text style={styles.publisher}>{item.source.name}</Text>
              <Text style={styles.timestamp}>
                {moment(item.publishedAt || moment.now()).fromNow()}
              </Text>
            </View>
          </Card>
        )}
      />
    );
  }
}

export default withNavigation(CardTab);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 0
  },
  description: {
    textAlign: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center"
  },
  meta: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  publisher: {
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "bold",
    left: 2
  },
  timestamp: {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 3
  }
});
