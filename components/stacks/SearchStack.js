import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { SearchBar } from "react-native-elements";
import axios from "axios";
import CardTab from "../layout/CardTab";

class SearchStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNews: []
    };
    this.getUserNews = this.getUserNews.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getUserNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.input +
          "&language=en&sortBy=popularity&apiKey=3f32147eb95a4e068e18ac93946e4380"
      )
      .then(response => {
        let newsList = response.data.articles;
        this.setState({
          inputNews: newsList
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.form}>
            <SearchBar
              inputStyle={{ backgroundColor: "white" }}
              onChangeText={input => {
                this.input = input;
                clearTimeout(this.timeout); // clears the old timer
                this.timeout = setTimeout(() => this.getUserNews(input), 3000);
              }}
              onClearText={() => this.setState({ inputNews: [] })}
              clearIcon={true}
              // onClearText={() => this.setState({ input: "" })}
              icon={{ type: "font-awesome", name: "search" }}
              placeholder="Search"
              // showLoadingIcon={this.state.spinner ? false : true}
              containerStyle={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderRadius: 10,
                width: "90%"
              }}
              platform="android"
            />
            <CardTab data={this.state.inputNews} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SearchStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  form: {
    top: 50,
    alignItems: "center"
  }
});
