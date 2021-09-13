import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div className="columns is-mobile">
                <div className="column">
                    <div className="is-flex">
                        <span className="mr-2 has-text-weight-semibold">{this.props.post.id}.</span>
                        <span className="has-text-weight-semibold"> Title : </span>
                        <span className="ml-2">{this.props.post.title}</span>
                    </div>
                    <div className="is-flex ml-5">
                        <span className="has-text-weight-semibold"> Description : </span>
                        <h2 className="ml-2">{this.props.post.description}</h2>
                    </div>
                    <div className="is-flex ml-5">
                        <span className="has-text-weight-semibold"> Status : </span>
                        <h2 className="ml-2">{this.props.post.status}</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="is-flex">
                        <button className="button edit is-info mr-2" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit</button>
                        <button className="button is-danger" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Delete</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
export default connect()(Post);