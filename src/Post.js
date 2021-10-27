import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    state = {
        isModal: false
    };
    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };

    render() {
        const active = this.state.isModal ? "is-active" : "";
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Foto Barang</th>
                        <th scope="col">Nama Barang</th>
                        <th scope="col">Harga Beli</th>
                        <th scope="col">Harga Jual</th>
                        <th scope="col">Stok</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={this.props.post.id}>
                        <td scope="row"> 
                            <img className="imgPreview" src={this.props.post.image} /> 
                        </td>
                        <td scope="row"> {this.props.post.name} </td>
                        <td scope="row"> {this.props.post.purchasePrice} </td>
                        <td scope="row"> {this.props.post.sellingPrice} </td>
                        <td scope="row"> {this.props.post.stock} </td>
                        <td scope="row"> 
                            <div className="is-flex">
                                <button className="button edit is-info mr-2" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit</button>

                                <div className={`modal ${active}`}>
                                    <div className="modal-background" />
                                        <div className="modal-card">
                                            <header className="modal-card-head">
                                                <p className="modal-card-title has-text-centered">Apakah anda yakin menghapus data ini ?</p>
                                            </header>
                                            <section class="modal-card-body">
                                                <div className="is-flex">
                                                    <button onClick={this.handleClick} className="button is-fullwidth mr-2">
                                                        Cancel
                                                    </button>
                                                    <button className="button is-danger is-fullwidth ml-2" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Hapus</button>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    <button onClick={this.handleClick} className="button is-danger">
                                        Delete
                                    </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            // <div className="columns is-mobile">
            //     <div className="column">
            //         <div className="is-flex">
            //             <span className="mr-2 has-text-weight-semibold">{this.props.post.id}.</span>
            //             <span className="has-text-weight-semibold"> Title : </span>
            //             <span className="ml-2">{this.props.post.title}</span>
            //         </div>
            //         <div className="is-flex ml-5">
            //             <span className="has-text-weight-semibold"> Description : </span>
            //             <h2 className="ml-2">{this.props.post.description}</h2>
            //         </div>
            //         <div className="is-flex ml-5">
            //             <span className="has-text-weight-semibold"> Status : </span>
            //             <h2 className="ml-2">{this.props.post.status}</h2>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="is-flex">
            //             <button className="button edit is-info mr-2" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit</button>
            //             <button className="button is-danger" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Delete</button>
            //         </div>
            //     </div>
            //     <hr />
            // </div>
        );
    }
}
export default connect()(Post);