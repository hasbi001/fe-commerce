import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    home(){
        this.props.history.push('/product/list');
    }

    signin(){
        this.props.history.push('/auth/signin');
    }
    signup(){
        this.props.history.push('/auth/signup');
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Ecommerce</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" onClick={this.home.bind(this)}>Home</a>
                                    </li>
                                </ul>
                                <ul className="d-flex">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" onClick={this.signin.bind(this)}>Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" onClick={this.signup.bind(this)}>Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent