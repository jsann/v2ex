var React = require("react-native");
var moment = require("moment");

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
              <Image style={styles.handle} source={{uri: `http:${v.member.avatar_normal}`}}></Image>
              <View style={styles.text}>
                <Text style={styles.content} onPress={() => alert(1)}>{v.title}</Text>
                <View style={styles.subInfos}>
                  <View style={styles.subInfos}>
                  <Text style={styles.subInfo}>{v.member.username}</Text>
                  <Text style={styles.subInfo}>{v.node.title}</Text>
                  </View>
                  <Text style={styles.date}>{moment(v.created).format("YYYY-MM-DD HH:mm:ss")}</Text>
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
    borderTopColor: "rgba(0, 0, 0, .1)",
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
  content: {
    fontSize: 12,
    height: 30
  },
  subInfos: {
    flexDirection: "row",
    flex: 3
  },
  subInfo: {
    color: "#999",
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 10
  },
  date: {
    fontSize: 10,
    paddingVertical: 3,
    color: "#999",
    // alignSelf: "flex-end",
    // alignItems: "flex-end",
    flex: 2
  }
})
