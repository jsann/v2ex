var React = require("react-native");

var {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View>
      {
        this.props.dataSource.map(function(v, i){
          return (
            <View key={i} style={styles.item}>
              <Image style={styles.handle} source={{uri: "http:" + v.member.avatar_normal}}></Image>
              <View style={styles.text}>
                <TouchableHighlight style={styles.highlight} onPress={() => alert(1)}>
                  <Text>{v.title}</Text>
                </TouchableHighlight>
                <View style={styles.subInfos}>
                  <TouchableHighlight style={styles.highlight} onPress={() => alert(1)}>
                    <Text style={styles.subInfo}>{v.member.username}</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.highlight} onPress={() => alert(1)}>
                    <Text style={styles.subInfo}>{v.node.title}</Text>
                  </TouchableHighlight>
                  <Text style={styles.subInfo}>{v.created}</Text>
                </View>
              </View>
            </View>
          )
        })
      }
      </View>
    )
  }
})

var styles = StyleSheet.create({
  item: {
    borderTopWidth: 1,
    padding: 5,
    borderTopColor: "#ccc",
    flexDirection: "row"
  },
  handle: {
    width: 48,
    height: 48,
    flex: 1
  },
  text: {
    flex: 5,
    paddingLeft: 10
  },
  subInfos: {
    flexDirection: "row"
  },
  subInfo: {
    color: "#ccc",
    marginRight: 10
  },
  highlight: {
  }
})
