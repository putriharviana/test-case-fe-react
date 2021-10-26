import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    // componentDidMount() {
    //     fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
    //         .then(res => res.json())
    //         .then((result) => {
    //             this.setState({
    //                 posts: result
    //             })
    //             console.log('This is your data', result);
    //         },
    //         (error) => {
    //             this.setState({
    //                 error
    //             });
    //         }
    //     )
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const purchasePrice = this.getPurchasePrice.value;
        const sellingPrice = this.getSellingPrice.value;
        const stock = this.getStock.value;
        const data = {
            createdAt: new Date(),
            name,
            purchasePrice,
            sellingPrice,
            stock,
            editing: false,
            id: Number(new Date()),
        }
        console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data,
        })
        this.getName.value = '';
        this.getPurchasePrice.value = '';
        this.getSellingPrice.value = '';
        this.getStock.value = '';
    }
    render() {
        return (
            <div>
                <span className="is-size-1">Add Data</span>
                <form className="form" onSubmit={this.handleSubmit} >
                    <span> Nama Barang </span>
                    <input className="input mb-2" type="text" ref={(input) => this.getName = input} placeholder="Masukkan Nama Barang" />
                    <span> Harga Beli </span>
                    <input className="input" type="tel" ref={(input) => this.getPurchasePrice = input} placeholder="Masukkan Harga Beli" />
                    <span> Harga Jual </span>
                    <input className="input" type="tel" ref={(input) => this.getSellingPrice = input} placeholder="Masukkan Harga Jual" />
                    <span> Stock </span>
                    <input className="input" type="tel" ref={(input) => this.getStock = input} placeholder="Masukkan Stock" />
                    {/* <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br /> */}
                    {/* <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br /> */}
                    <div className="mt-3 is-flex is-justify-content-center">
                        <button class="button is-info is-fullwidth">Add Data</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);