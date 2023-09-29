import QuotetService from '../services/quote.service';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductService from '../services/product.service';

class FormAddtocartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            productName: '',
            quantity: ''
        }
        this.changeProductName = this.changeProductName.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.saveCart = this.saveCart.bind(this);
    }

    // step 3
    componentDidMount(){

        ProductService.view(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({
                productName: product.name
            });
        });
    }
    saveCart = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('token');
        let data = {productId: this.state.id, productName: this.state.productName, quantity: this.state.quantity, token: token};
        console.log('quote => ' + JSON.stringify(data));

        QuotetService.addtocart(data).then(res =>{
            this.props.history.push('/product/list');
        });
    }
    
    changeProductName= (event) => {
        this.setState({productName: event.target.value});
    }

    changeQuantity= (event) => {
        this.setState({quantity: event.target.value});
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
                                Add To Cart
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductName}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantity}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCart}>Save</button>
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

export default withRouter(FormAddtocartComponent);