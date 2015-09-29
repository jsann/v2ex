var React = require("react-native");

var {
  Text,
  StyleSheet
} = React;

class Loading extends React.Component {
  render() {
    return (
      <Text style={styles.empty}>{this.props.text || "Loading..."}</Text>
    )
  }
}

var styles = StyleSheet.create({
  empty: {
    flex: 1,
    fontSize: 20,
    color: "#999",
    marginVertical: 50,
    textAlign: "center"
  }
})

module.exports = Loading;
