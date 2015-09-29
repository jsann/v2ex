var React = require("react-native");

var {
  View,
  ScrollView,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  fetchNodes: function() {
    fetch(this.props.uri).then(data => data.json()).then(data => {
      this.setState({
        allNodes: data
      })
    }).done()
  },
  componentDidMount: function() {
    this.fetchNodes()
  },
  render: function() {
    return (
      <ScrollView style={styles.content}>
        <View style={styles.nodes}>
        {
          this.state.allNodes ? (
            this.state.allNodes.map(function(v, i) {
              return <Text style={styles.node} key={i}>{v.title}</Text>
            })
          ) : <Text style={styles.loading}>Loading...</Text>
        }
        </View>
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    padding: 5
  },
  loading: {
    flex: 1,
    fontSize: 20,
    color: "#999",
    marginTop: 200,
    textAlign: "center"
  },
  nodes: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  node: {
    color: "#999",
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 10
  },
})
