import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
    componentDidMount() {
        fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
            .then(res => res.json())
            .then((result) => {
                this.props.dispatch({
                    type: 'SET_POST',
                    data: result,
                })
                console.log('This is your data', result);
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }    
    render() {
        return (
            <div className="mt-6">
                <span className="is-size-1">To-do List</span>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post} key={post.id} />}
                    </div>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);