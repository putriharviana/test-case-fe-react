import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    componentDidMount() {
        fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    posts: result
                });
                console.log('This is your data', result);
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const description = this.getMessage.value;
        const data = {
            createdAt: new Date(),
            title,
            description,
            editing: false,
            id: Number(new Date()),
            status: '1',
        }
        console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data,
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
        <div className="post-container">
            <h1 className="post_heading">Create Post</h1>
            <form className="form" onSubmit={this.handleSubmit} >
                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
                <button>Post</button>
            </form>
        </div>
        );
    }
}
export default connect()(PostForm);