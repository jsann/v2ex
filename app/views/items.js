var React = require("react-native");

var Item = require("./common/item.js");
var Loading = require("./common/empty.js");

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
    }).done();
  },
  componentDidMount: function() {
    this.fetchList()
  },
  render: function() {
    return (
      <ScrollView style={styles.content}>
        {
          this.state.dataSource ? <Item dataSource={this.state.dataSource} navigator={this.props.navigator}></Item> : <Loading />
        }
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    paddingLeft: 5,
    paddingRight: 5
  }
})
