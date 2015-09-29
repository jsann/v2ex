var React = require("react-native");

var Loading = require("./common/loading.js");

var {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  fetchUserInfo: function() {
    fetch(this.props.uri + `?id=${this.props.id || 1}`).then(data => data.json()).then(data => {
      this.setState({
        userInfo: data
      })
    }).done();
  },
  componentDidMount: function() {
    this.fetchUserInfo();
  },
  render: function() {
    var info = this.state.userInfo;
    return (
      <ScrollView style={styles.content}>
        <Image style={styles.avatar} source={{uri: (info ? `http:${info.avatar_large}` : "http://img5.duitang.com/uploads/item/201411/26/20141126194857_B5RW4.thumb.700_0.jpeg")}}></Image>
        {
          info ? (
            <View>
              <Text >{info.username}</Text>
              <Text >website: {info.website}</Text>
              <Text >twitter: {info.twitter}</Text>
              <Text >psn: {info.psn}</Text>
              <Text >github: {info.github}</Text>
              <Text >location: {info.location}</Text>
              <Text >tag: {info.tagline}</Text>
              <Text >bio: {info.bio}</Text>
            </View>
          ) : <Loading />
        }
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  content: {
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
})
