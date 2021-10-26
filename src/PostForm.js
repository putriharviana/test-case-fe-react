import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const purchasePrice = this.getPurchasePrice.value;
        const sellingPrice = this.getSellingPrice.value;
        const stock = this.getStock.value;

        const image = this.state.imagePreviewUrl;

        const data = {
            createdAt: new Date(),
            name,
            purchasePrice,
            sellingPrice,
            stock,
            editing: false,
            id: Number(new Date()),
            image
        }
        console.log('cek', data)
        this.props.dispatch({
            type: 'ADD_POST',
            data,
        })
        this.getName.value = '';
        this.getPurchasePrice.value = '';
        this.getSellingPrice.value = '';
        this.getStock.value = '';
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        });
    }

        reader.readAsDataURL(file)
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        console.log(this.state.imagePreviewUrl)
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
                    
                    <div className="previewComponent">
                        <input className="fileInput" 
                            type="file" 
                            onChange={(e)=>this._handleImageChange(e)} 
                        />
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                    </div>
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