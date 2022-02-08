import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';



import Dashboard from "./components/dashboard";
import Notfound from "./components/notfound";
import ProductContainer from './containers/ProductContainer';
import Layout from "./hoc/Layout/layout";
import { isPristine } from 'redux-form';

class App extends Component {

   
    PrivateRoute = ({ component: ChildComponent, ...rest }) => {
        return <Route {...rest} render={props => {
           
                return <ChildComponent {...props} />
            
        }} />
    };

    render() {
        let { PrivateRoute } = this;
        return (
            <div>
                <Switch>

                   
                    <Layout>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute  path="/product-list" component={ProductContainer} />
                    </Layout>
                    <Route component={Notfound} />
                </Switch>
            </div>
        );
    }
}


export default App;


