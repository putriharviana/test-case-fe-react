import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrayArrowUpIcon from 'mdi-react/TrayArrowUpIcon';

class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl: this.props.post.image};
    }
    handleEdit = (e) => {
        e.preventDefault();
        
        const newImage = this.state.imagePreviewUrl;
        
        const newName = this.getName.value;
        const newPurchasePrice = this.getPurchasePrice.value;
        const newSellingPrice = this.getSellingPrice.value;
        const newStock = this.getStock.value;
        const data = {
            newImage,
            newName,
            newPurchasePrice,
            newSellingPrice,
            newStock
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if(file.size > 102400){
            alert("File size must under 100KB");
            return;
        } else{
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            }
        }

        reader.readAsDataURL(file)
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="imgSize imageCenter" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        console.log('new',this.state.imagePreviewUrl)
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <div className="previewComponent is-flex mb-3">
                        <div className="file is-boxed mt-1">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" onChange={(e)=>this._handleImageChange(e)} />
                                <span className="file-cta">
                                    <TrayArrowUpIcon size="2em"/>
                                    <span className="file-label">
                                        Masukkan gambar
                                    </span>
                                </span>
                            </label>
                        </div>
                        <div className="imgPreview ml-4">
                            {$imagePreview}
                        </div>
                    </div>
                    <span> Nama Barang </span>
                    <input className="input mb-2" type="text" ref={(input) => this.getName = input} defaultValue={this.props.post.name} placeholder="Masukkan Nama Barang" required/>
                    <span> Harga Beli </span>
                    <input className="input" type="tel" ref={(input) => this.getPurchasePrice = input} defaultValue={this.props.post.purchasePrice} placeholder="Masukkan Harga Beli" required onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}/>
                    <span> Harga Jual </span>
                    <input className="input" type="tel" ref={(input) => this.getSellingPrice = input} defaultValue={this.props.post.sellingPrice} placeholder="Masukkan Harga Jual" required onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}/>
                    <span> Stock </span>
                    <input className="input" type="tel" ref={(input) => this.getStock = input} defaultValue={this.props.post.stock} placeholder="Masukkan Stock" required onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}/>
                    <div className="mt-3 mb-5 is-flex is-justify-content-center">
                        <button class="button is-info is-fullwidth">Update Data</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);