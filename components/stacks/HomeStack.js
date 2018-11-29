import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import { Header, icon } from "react-native-elements";

import CardTab from "../layout/CardTab";

class HomeStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakingNews: []
    };
    this.getBreakingNews = this.getBreakingNews.bind(this);
  }

  componentDidMount() {
    this.getBreakingNews();
  }

  getBreakingNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge,espn,cnn,bloomberg,&apiKey=3f32147eb95a4e068e18ac93946e4380"
      )
      .then(responseJson => {
        this.setState({
          breakingNews: responseJson.data.articles
        });
        // console.log(this.state.breakingNews);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          style={styles.header}
          centerComponent={{
            text: "Home",
            style: {
              color: "black",
              fontSize: 30,
              fontWeight: "bold"
            }
          }}
          backgroundColor="white"
          outerContainerStyles={{ top: 25 }}
          innerContainerStyles={{ top: 10 }}
        />

        <View style={styles.cards}>
          <CardTab data={this.state.breakingNews} />
        </View>
      </View>
    );
  }
}

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cards: {
    top: 30
  }
});
