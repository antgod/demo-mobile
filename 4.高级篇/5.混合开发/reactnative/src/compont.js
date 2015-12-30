/**
 * Created by lihongji on 2015/8/23.
 */

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
            );
    }
});
React.render(
    <CommentBox />,
    document.getElementById('content')
);