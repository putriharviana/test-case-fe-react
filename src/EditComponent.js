import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newPurchasePrice = this.getPurchasePrice.value;
        const newSeliingPurchase = this.getSellingPrice.value;
        const newStock = this.getStock.value;
        const data = {
            newName,
            newPurchasePrice,
            newSeliingPurchase,
            newStock
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
                    <span> Nama Barang </span>
                    <input className="input mb-2" type="text" ref={(input) => this.getName = input} defaultValue={this.props.post.name} placeholder="Masukkan Nama Barang" />
                    <span> Harga Beli </span>
                    <input className="input" type="tel" ref={(input) => this.getPurchasePrice = input} defaultValue={this.props.post.purchasePrice} placeholder="Masukkan Harga Beli" />
                    <span> Harga Jual </span>
                    <input className="input" type="tel" ref={(input) => this.getSellingPrice = input} defaultValue={this.props.post.sellingPrice} placeholder="Masukkan Harga Jual" />
                    <span> Stock </span>
                    <input className="input" type="tel" ref={(input) => this.getStock = input} defaultValue={this.props.post.stock} placeholder="Masukkan Stock" />
                    <div className="mt-3 mb-5 is-flex is-justify-content-center">
                        <button class="button is-info is-fullwidth">Update Data</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);