/**
 * Created by lihongji on 2015/8/23.
 */

var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello, world! I am a CommentBox."
            )
            );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);