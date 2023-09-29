import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import QuoteService from '../services/quote.service';
import ProductService from '../services/product.service';


class ListQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                items:[],
                products: []
        }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.addtocart = this.addtocart.bind(this);
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

    async componentDidMount(){
        const token = sessionStorage.getItem('token');
        let data = {productId: this.state.id, productName: this.state.productName, quantity: this.state.quantity, token: token};
        await QuoteService.list(data).then((res) => {
            console.log('list item = '+res.data.items);
            this.setState({ items: res.items});
        });
    }

    create(){
        this.props.history.push('/product/create/_add');
    }

    addtocart(id){
        this.props.history.push(`/quote/addtocart/${id}`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Item List</h2>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map(
                                        item => 
                                        <tr key = {item.id}>
                                             <td> { item.product_name } </td>   
                                             <td> { item.quantity }</td>
                                             <td>{ item.price }
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

export default withRouter(ListQuoteComponent)