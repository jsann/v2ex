var React = require("react-native");

var {
  Text,
  StyleSheet
} = React;

class Loading extends React.Component {
  render() {
    return (
      <Text style={styles.loading}>Loading...</Text>
    )
  }
}

var styles = StyleSheet.create({
  loading: {
    flex: 1,
    fontSize: 20,
    color: "#999",
    marginTop: 200,
    textAlign: "center"
  }
})

module.exports = Loading;
