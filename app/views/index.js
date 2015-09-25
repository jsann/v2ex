var React = require("react-native");
var Item = require("./common/item.js");
var Api = require("../api/api.js");

var {
  View,
  ScrollView,
  TabBarIOS,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  fetchList: function(){
    fetch(Api.getAll).then(data => data.json()).then(data => {
      this.setState({
        dataSource: data
      })
    })
  },
  componentDidMount: function(){
    this.fetchList()
  },
  render: function() {
    return (
      <TabBarIOS style={styles.menubar}>
        <TabBarIOS.Item title="INDEX" selected={true} onPress={() => {
          this.setState({
            selectedTab: "index"
          })
        }}>
          <ScrollView style={styles.content}>
            {
              this.state.dataSource ? <Item dataSource={this.state.dataSource}></Item> : <Text style={styles.loading}>Loading...</Text>
            }
          </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="HOT" onPress={() => {
          this.setState({
            selectedTab: "hot"
          })
        }}></TabBarIOS.Item>
        <TabBarIOS.Item title="NODE" onPress={() => {
          this.setState({
            selectedTab: "node"
          })
        }}></TabBarIOS.Item>
        <TabBarIOS.Item title="ME" onPress={() => {
          this.setState({
            selectedTab: "me"
          })
        }}></TabBarIOS.Item>
      </TabBarIOS>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10
  },
  loading: {
    flex: 1,
    fontSize: 20,
    color: "#999",
    marginTop: 200,
    textAlign: "center"
  },
  menubar: {
  }
})
