import React, { Component } from 'react';
import api from '../../services/api';
import Dropzone from 'react-dropzone';
import QRCode from 'qrcode.react'

import {MdInsertDriveFile} from 'react-icons/md'

import './styles.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    };

    handleUpload = (files) => {
        files.forEach(file => {
          const data = new FormData();
          const { id } = this.props.match.params;
    
          data.append('file', file);
    
          api.post(`products/${id}/files`, data);
        });
      };
    
    render(){
        const { product }= this.state;


        return(
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>

                <Dropzone onDropAccepted={this.handleUpload}>
                {({ getRootProps, getInputProps}) => (
                    <div className="upload" {...getRootProps()}>
                    <input {...getInputProps()} />

                    <p>Arraste arquivos ou clique aqui</p>
                </div>
                )}
                </ Dropzone>

                <ul>
                    {product.files && 
                    product.files.map(file => (
                        <li key={file._id}>
                            <a className="fileInfo" href={file.url} target="_blank">
                                <MdInsertDriveFile size={24} color="#A5Cfff"/>
                                <strong>{file.title}</strong>
                            </a>
                            <QRCode value={file.url} />
                        </li>
                    ))}          
                </ul>
                
        </div>
        )
    }
}