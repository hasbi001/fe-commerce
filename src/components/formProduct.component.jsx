import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductService from '../services/product.service';

class FormProductComponent extends Component {
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
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, password: this.state.password, price: this.state.price, stock: this.state.stock};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            ProductService.create(product).then(res =>{
                this.props.history.push('/product/list');
            });
        }else{
            ProductService.update(product, this.state.id).then( res => {
                this.props.history.push('/product/list');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeName}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SKU: </label>
                                            <input placeholder="SKU" name="sku" className="form-control" 
                                                value={this.state.sku} onChange={this.changeSku}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePrice}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Stock: </label>
                                            <input placeholder="Stock" name="stock" className="form-control" 
                                                value={this.state.stock} onChange={this.changeStock}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(FormProductComponent);