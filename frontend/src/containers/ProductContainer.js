import React from 'react'
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import {fetchProducts} from '../../src/actions/ProductInfoAction'
import PropTypes from 'prop-types';
import ProductComponent from '../../src/components/product/ProductComponent'

class ProductContainer extends React.Component {

  componentDidMount() {
    
    this.props.fetchProducts(1);
    // this.props.fetchGroups();
  }


  

  
  
  render() {

    return (
      <ProductComponent 
        products={this.props.products}
        is_fetching={this.props.is_fetching}
        is_loading={this.props.is_loading}
        count={this.props.count}
        next={this.props.next}
      />
    );
  }
  }



  ProductContainer.propTypes = {
    products: PropTypes.array.isRequired,
    is_fetching:PropTypes.bool.isRequired

  };
  const ProductList = reduxForm({
    form: "ProductContainer"
  })(ProductContainer);
  
  const mapStateToProps = state => ({
    products: state.products.products,
    is_fetching: state.products.is_fetching,
    is_loading: state.products.is_loading,
    count: state.products.count,
    next: state.products.next,
    get_products: state.products.get_products,

  
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts(  
    )),
      
  });

  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList);
