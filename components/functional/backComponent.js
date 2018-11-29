import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const backComponent = props => {
  return (
    <Ionicons
      name="md-arrow-round-back"
      onPress={() => this.props.navigation.goBack(null)}
    />
  );
};
export default withNavigation(backComponent);
