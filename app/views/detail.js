var React = require("react-native");
var moment = require("moment");

var Api = require("../api/api.js");
var Loading = require("./common/loading.js");

var {
  View,
  ScrollView,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  fetchDetail: function() {
    fetch(`${Api.getItemDetail}?id=${this.props.id}`).then(data => data.json()).then(data => {
      this.setState({
        details: data
      })
    }).done();
  },
  componentDidMount: function() {
    this.fetchDetail();
  },
  render: function() {
    var details = this.state.details;
    if(details) details = details[0]
    return (
      <ScrollView style={styles.content}>
      {
        details ? (
          <View>
            <Text style={styles.title}>{details.title}</Text>
            <View style={styles.source}>
              <View style={styles.subInfos}>
                <Text style={styles.subInfo}>{details.node.title}</Text>
                <Text style={styles.subInfo}>{details.member.username}</Text>
              </View>
              <Text style={styles.date}>{moment(details.created).format("YYYY-MM-DD HH:mm:ss")}</Text>
            </View>
            <Text style={styles.detail}>{details.content}</Text>
          </View>
        ) : <Loading />
      }
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    padding: 5
  },
  title: {
    fontSize: 20,
  },
  source: {
    flexDirection: "row",
    paddingVertical: 10
  },
  subInfos: {
    flex: 2,
    flexDirection: "row"
  },
  subInfo: {
    fontSize: 10,
    color: "#999",
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  date: {
    fontSize: 10,
    color: "#999",
    alignSelf: "flex-end"
  },
  detail: {
    fontSize: 12
  }
})
