import React, { Component } from 'react';
import ProductService from '../services/product.service';
import { withRouter } from 'react-router-dom';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(id){
        ProductService.delete(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    view(id){
        this.props.history.push(`/product/view/${id}`);
    }
    update(id){
        this.props.history.push(`/product/update/${id}`);
    }

    componentDidMount(){
        ProductService.list().then((res) => {
            this.setState({ products: res.data});
        });
    }

    create(){
        this.props.history.push('/product/create/_id');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">product List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.create}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> { product.name } </td>   
                                             <td> { product.price }</td>
                                             <td>
                                                 <button onClick={ () => this.update(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.delete(product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.view(product.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default withRouter(ListProductComponent)