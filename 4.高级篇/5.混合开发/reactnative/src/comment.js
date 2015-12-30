/**
 * Created by lihongji on 2015/8/23.
 */

var data1 = [
    {author: "lhj", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var converter = new Showdown.converter();
var Comment = React.createClass({
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
            );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
          {comment.text}
                </Comment>
                );
        });
        return (
            <div className="commentList">
        {commentNodes}
            </div>
            );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
            Hello, world! I am a CommentForm.
            </div>
            );
    }
});