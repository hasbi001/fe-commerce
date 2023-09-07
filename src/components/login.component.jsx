import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../services/auth.service';

class SignInComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            username: '',
            password: '',
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
    }

    // componentDidMount(){

    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         AuthService.view(this.state.id).then( (res) =>{
    //             let product = res.data;
    //             this.setState({
    //                 name: product.name,
    //                 sku: product.sku,
    //                 price : product.price,
    //                 stock : product.stock
    //             });
    //         });
    //     }        
    // }
    login = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, price: this.state.price};
        console.log('user => ' + JSON.stringify(user));

        AuthService.signin(user).then(res =>{
            this.props.history.push('/product/list');
        });
    }
    
    changeUsername= (event) => {
        this.setState({username: event.target.value});
    }

    changePassword= (event) => {
        this.setState({password: event.target.value});
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
                                <h3>LOGIN</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="Username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsername}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePassword}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.login}>LOGIN</button>
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

export default withRouter(SignInComponent)