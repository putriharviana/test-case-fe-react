import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    {/* <input required type="text" ref={(input) => this.getTitle = input}
                    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                    defaultValue={this.props.post.description} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button> */}
                    <span> Title </span>
                    <input className="input mb-2" type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter Title" />
                    <span> Description </span>
                    <input className="input" type="text" ref={(input) => this.getMessage = input} defaultValue={this.props.post.description} placeholder="Enter Description" />
                    <div className="mt-3 mb-5 is-flex is-justify-content-center">
                        <button class="button is-info is-fullwidth">Update Data</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);