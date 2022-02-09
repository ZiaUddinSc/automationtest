import React from 'react'
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import {fetchProducts,searchProducts} from '../../src/actions/ProductInfoAction'
import PropTypes from 'prop-types';
import ProductComponent from '../../src/components/product/ProductComponent'
class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.searchProducts= this.searchProducts.bind(this);

  }


componentDidMount() {
// let obj={
// availability: false,
// code: "p1",
// durability: 3000,
// id: 1,
// max_durability: 3000,
// mileage: 1000,
// minimum_rent_period: 1,
// name: "Air Compressor 12 GAS",
// needing_repair: false,
// price: 4500,
// type: 2
// }
// rental_fee_calculation("02/09/2022",'02/10/2022',obj)
    this.props.fetchProducts(1);
    // this.props.fetchGroups();
  }

handlePageClick = (data) => {
    var pageNo = Number(data.selected) + 1
     if(pageNo>1){
      pageNo=pageNo+'&offset=10'
     }
    this.props.fetchProducts(pageNo)
}
searchProducts(data){
 this.props.searchProducts(data)
}  

  
  
  render() {

    return (
      <ProductComponent
        products={this.props.products}
        is_fetching={this.props.is_fetching}
        is_loading={this.props.is_loading}
        count={this.props.count}
        next={this.props.next}
        searchProducts={this.searchProducts}
        handlePageClick={()=>this.handlePageClick}
      />
    );
  }
  }



  ProductContainer.propTypes = {
    products: PropTypes.array.isRequired,
    is_fetching:PropTypes.bool.isRequired,
    searchProducts:PropTypes.func.isRequired

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
    fetchProducts: (page) => dispatch(fetchProducts(page  
    )),
    searchProducts: (value) => dispatch(searchProducts(  
      value)),
    
  });

  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList);
