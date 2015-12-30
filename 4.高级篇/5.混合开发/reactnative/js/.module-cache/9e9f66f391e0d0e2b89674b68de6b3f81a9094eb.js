/**
 * Created by lihongji on 2015/8/23.
 */



var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.props.data}), 
                React.createElement(CommentForm, null)
            )
            );
    }
});

React.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('content')
);