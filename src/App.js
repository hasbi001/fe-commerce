import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProductComponent from './components/product.component';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';
import FormProductComponent from './components/formProduct.component';
import ViewProductComponent from './components/viewProduct.component';
import SignInComponents from './components/login.component';
import SignUpComponents from './components/signup.component';
import FormAddtocartComponent from './components/addtocart.component';
import ListQuoteComponent from './components/listQuote.component';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/product/list" component = {ListProductComponent}></Route>
                          <Route path = "/product/create/:id" component = {FormProductComponent}></Route>
                          <Route path = "/product/update/:id" component = {FormProductComponent}></Route>
                          <Route path = "/product/view/:id" component = {ViewProductComponent}></Route>
                          <Route path = "/product/delete/:id" ></Route>
                          <Route path = "/auth/signin" component = {SignInComponents}></Route>
                          <Route path = "/auth/signup" component = {SignUpComponents}></Route>
                          <Route path = "/quote/addtocart/:id" component = {FormAddtocartComponent}></Route>
                          <Route path = "/quote/list" component = {ListQuoteComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;