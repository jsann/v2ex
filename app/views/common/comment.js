const React = require("react-native");
const _ = require("lodash");

const Api = require("../../api/api.js");
const CommentItem = require("./commentItem.js");
const Loading = require("./empty.js");

const {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  fetchComment: function() {
    fetch(`${Api.getCommentList}?topic_id=${this.props.itemId}`).then(data => data.json()).then(data => {
      this.setState({
        commentList: data
      })
    }).done();
  },
  componentDidMount: function() {
    this.fetchComment();
  },
  render: function() {
    var list = this.state.commentList;
    return list ? _.isEmpty(list) ? <Loading text="暂无评论..." /> : list.map((v, i) => <CommentItem comment={v} key={i}></CommentItem>) : <Loading />
  }
})

var styles = StyleSheet.create({
  content: {}
})
