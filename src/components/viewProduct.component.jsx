import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductService from '../services/product.service';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            sku: '',
            price: 0,
            stock: 0
        }
        this.changeName = this.changeName.bind(this);
        this.changeSku = this.changeSku.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeStock = this.changeStock.bind(this);
    }

    // step 3
    componentDidMount(){

        ProductService.view(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({
                name: product.name,
                sku: product.sku,
                price : product.price,
                stock : product.stock
            });
        });
    }
    
    changeName= (event) => {
        this.setState({name: event.target.value});
    }

    changeSku= (event) => {
        this.setState({sku: event.target.value});
    }

    changePrice= (event) => {
        this.setState({price: event.target.value});
    }
    
    changeStock= (event) => {
        this.setState({stock: event.target.value});
    }

    cancel(){
        this.props.history.push('/product/list');
    }

   
    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                <h4>{this.state.name}</h4>
                                <div className = "card-body">
                                    <table>
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td>{this.state.name}</td>
                                        </tr>
                                        <tr>
                                            <td>SKU</td>
                                            <td>:</td>
                                            <td>{this.state.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>:</td>
                                            <td>{this.state.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Stock</td>
                                            <td>:</td>
                                            <td>{this.state.stock}</td>
                                        </tr>
                                    </table>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewProductComponent);