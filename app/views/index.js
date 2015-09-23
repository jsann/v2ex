var React = require("react-native");
var Api = require("../api/api.js");

var {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      dataSource: []
    }
  },
  fetchList: function(){
    fetch(Api.getAll()).then(data => data.json()).then(data => {
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
      <ScrollView>
        {
          this.state.dataSource && this.state.dataSource.map(function(v, i){
            return (
              <View key={i} style={styles.item}>
                <Image style={styles.handle} source={{uri: "http:" + v.member.avatar_normal}}></Image>
                <Text style={styles.text}>{v.title}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  item: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    flexDirection: "row"
  },
  handle: {
    width: 48,
    height: 48,
    flex: 1
  },
  text: {
    flex: 3,
    paddingLeft: 10
  }
})
