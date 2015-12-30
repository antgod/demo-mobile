/**
 * Created by lihongji on 2015/8/23.
 */

var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement("div", {author: "Pete Hunt"}, "This is one comment"), 
                React.createElement("div", {author: "Jordan Walke"}, "This is *another* comment")
            )
            );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
            "Hello, world! I am a CommentForm."
            )
            );
    }
});