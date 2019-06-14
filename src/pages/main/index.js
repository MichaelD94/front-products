import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';


export default class Main extends Component{
    state = {
        products : [],
        productInfo: {},
        page: 1,
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const{ docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () =>{
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () =>{
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render(){
        const { products, page, productInfo } = this.state;

        return (
            // <div className='product-list'>
            //     {products.map(product => (
            //         <article key={product._id}>
            //             <strong>{product.title}</strong>
            //             <p>{product.description}</p>

            //             <Link to={`/products/${product._id}`}>Acessar</Link>
            //         </article>
            //     ))}
            //     <div className='actions'>
            //         <button disabled={page === 1} onClick={this.prevPage}>
            //             Anterior
            //         </button>
            //         <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            //             Próxima
            //         </button>
            //     </div>
            // </div>
            <div className="container conteudo">
                <div className='row'>
                    {products.map(product => (
                        <div className="col-md-4" key={product._id}>
                            <div className="card card-produtos">
                                <div className="img-hover-zoom">
                                    <img src="https://techcrunch.com/wp-content/uploads/2017/01/messaging-apps.jpg?w=730&crop=1" className="card-img-top" alt="Imagem App" />
                                </div>
                                <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link className={"btn btn-ity"} to={`/products/${product._id}`}>Acessar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className='actions col-12'>
                        {/* <button className="btn btn-primary" disabled={page === 1} onClick={this.prevPage}>
                            Anterior
                        </button>
                        <button className="btn btn-primary" disabled={page === productInfo.pages} onClick={this.nextPage}>
                            Próxima
                        </button> */}

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className={page === 1 ? 'disabled page-item' : 'page-item'}>
                                    <a className="page-link"
                                        href="#"
                                        disabled={page === 1}
                                        onClick={this.prevPage}
                                    >
                                        Anterior
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className={page === productInfo.pages ? 'disabled page-item' : 'page-item'}>
                                    <a
                                        className="page-link"
                                        href="#"
                                        disabled={page === productInfo.pages}
                                        onClick={this.nextPage}
                                    >
                                        Próxima
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}