/**
 * Created by lihongji on 2015/8/23.
 */



var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.datax}/>
                <CommentForm />
            </div>
            );
    }
});

React.render(
    <CommentBox datax={data1}/>,
    document.getElementById('content')
);