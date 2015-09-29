var React = require("react-native");
var Api = require("../api/api.js");

var Items = require("./items.js");
var Nodes = require("./nodes.js");
var UserInfo = require("./userInfo.js");

var {
  View,
  TabBarIOS,
  NavigatorIOS,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "index"
    }
  },
  render: function() {
    return (
      <TabBarIOS style={styles.menubar}>
        <TabBarIOS.Item title="最新主题" selected={this.state.selectedTab == "index"} icon={require("image!eye")} onPress={() => {
          this.setState({
            selectedTab: "index"
          })
        }}>
          <NavigatorIOS style={styles.container} initialRoute={{
            title: "最新主题",
            component: Items,
            passProps: {
              uri: Api.getNew
            }
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="最热主题" selected={this.state.selectedTab == "hot"} icon={require("image!bookmark")} onPress={() => {
          this.setState({
            selectedTab: "hot"
          })
        }}>
          <NavigatorIOS style={styles.container} initialRoute={{
            title: "最热主题",
            component: Items,
            passProps: {
              uri: Api.getHot
            }
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="所有节点" selected={this.state.selectedTab == "node"} icon={require("image!pin")} onPress={() => {
          this.setState({
            selectedTab: "node"
          })
        }}>
          <NavigatorIOS style={styles.container} initialRoute={{
            title: "所有节点",
            component: Nodes,
            passProps: {
              uri: Api.getAllNodes
            }
          }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我的资料" selected={this.state.selectedTab == "me"} icon={require("image!home")} onPress={() => {
          this.setState({
            selectedTab: "me"
          })
        }}>
          <NavigatorIOS style={styles.container} initialRoute={{
            title: "我的资料",
            component: UserInfo,
            passProps: {
              uri: Api.getUserInfos
            }
          }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
