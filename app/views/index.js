var React = require("react-native");
var Item = require("./common/item.js");
var Api = require("../api/api.js");

var {
  View,
  ScrollView,
  TabBarIOS,
  NavigatorIOS,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: "index"
    }
  },
  render: function() {
    return (
      <TabBarIOS style={styles.menubar}>
        <TabBarIOS.Item title="INDEX" selected={this.state.selectedTab == "index"} icon={require("image!eye")} onPress={() => {
          this.setState({
            selectedTab: "index"
          })
        }}>
          <NavigatorIOS style={styles.container} initialRoute={{
            title: "Index",
            component: IndexItem
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="HOT" selected={this.state.selectedTab == "hot"} icon={require("image!bookmark")} onPress={() => {
          this.setState({
            selectedTab: "hot"
          })
        }}>
          <NavigatorIOS initialRoute={{
            title: "Hot",
            component: IndexItem
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="NODE" selected={this.state.selectedTab == "node"} icon={require("image!pin")} onPress={() => {
          this.setState({
            selectedTab: "node"
          })
        }}>
          <NavigatorIOS initialRoute={{
            title: "Node",
            component: IndexItem
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="ME" selected={this.state.selectedTab == "me"} icon={require("image!home")} onPress={() => {
          this.setState({
            selectedTab: "me"
          })
        }}>
          <NavigatorIOS initialRoute={{
            title: "Me",
            component: IndexItem
          }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
})

var IndexItem = React.createClass({
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
  render: function(){
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
  container: {
    flex: 2
  },
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
