const React = require("react-native");

const {
  View,
  Text,
  Image,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {
    var comment = this.props.comment;
    return (
      <View>
        <Image source={{uri: `http:${comment.member.avatar_normal}`}}></Image>
        <Text>{comment.member.username}</Text>
        <Text>{comment.created}</Text>
        <Text>{comment.thanks}</Text>
        <Text>{comment.content}</Text>
        <Text>{this.props.index}</Text>
      </View>
    )
  }
})

const styles = StyleSheet.create({
})
