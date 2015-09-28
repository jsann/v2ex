var React = require("react-native");

var Item = require("./common/item.js");

var {
  ScrollView,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  fetchList: function() {
    fetch(this.props.uri).then(data => data.json()).then(data => {
      this.setState({
        dataSource: data
      })
    })
  },
  componentDidMount: function() {
    this.fetchList()
  },
  render: function() {
    return (
      <ScrollView style={styles.content}>
        {
          this.state.dataSource ? <Item dataSource={this.state.dataSource}></Item> : <Text style={styles.loading}>Loading...</Text>
        }
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    paddingLeft: 5,
    paddingRight: 5
  },
  loading: {
    flex: 1,
    fontSize: 20,
    color: "#999",
    marginTop: 200,
    textAlign: "center"
  }
})
