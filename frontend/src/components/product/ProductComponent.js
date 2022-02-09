import React, { Component } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactPaginate from 'react-paginate';
import { Modal, Button } from "react-bootstrap";
import moment from 'moment'
import Swal from 'sweetalert2'

import DatePicker from "react-datepicker";
import {rental_fee_calculation} from '../../constants/CustomMethod'

import "react-datepicker/dist/react-datepicker.css";

const renderField = ({
input,
label,
type,
meta: { touched, error, warning },
required = false,
}) => {
const className = `form-control ${error && touched ? "is-invalid" : ""}`;
return (
    <div className="form-group">
    <label className="text-sm">{label}</label>
    {required ? <span className="requiredField">*</span> : ""}
    <div>
        <input
        {...input}
        placeholder={label}
        type={type}
        className={className}
        />
        {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
    </div>
);
};



class ProductComponent extends Component {
constructor() {
    super();
}





state = {
    // search: " ",
    book_product_id: "",
    return_product_id:"",
    show: false,
    retrunshow:false,
    need_reapir:false,
    mileage:0,
    search:""
    
    

};




handleClose() {
    this.setState({ show: false });
}
handleModalShow() {
   this.setState({ show: true });
}

handleReturnClose() {
    this.setState({ retrunshow: false });
}
handleReturnModalShow() {

    this.setState({ retrunshow: true });
}
handleDateChange(value, e) {
    this.setState({ from_date: value });
}
handleToDateChange(value, e) {
    this.setState({ to_date: value });
}
onSubmit = e => {
    e.preventDefault();
  
    if(this.state.search!=''){
        // alert(this.state.search)
        this.props.searchProducts(this.state.search)
}

};
onChange = e => this.setState({ [e.target.name]: e.target.value });
onChangeReturn = (e) => {
    let value=e.target.value
    
    let result = this.props.products.find(product => product.id ===parseInt(value));
    this.setState({return_product_id:value,need_reapir:result.needing_repair,mileage:result.mileage})
}
onPressReturn(){
    let result = this.props.products.find(product => product.id ===parseInt(this.state.return_product_id));
    this.openreturnsweetalert({'price':result.price,'repair':result.needing_repair})
    this.setState({retrunshow:false}) 
}
onChangeBook = (e) => {
    this.setState({book_product_id:e.target.value})
}


componentDidUpdate(prevProps, prevState){
    if (prevProps.products !== this.props.products){
        if(this.props.products.length>0){
        this.setState({book_product_id:this.props.products[0].id,return_product_id:this.props.products[0].id,need_reapir:this.props.products[0].needing_repair,mileage:this.props.products[0].mileage})
        }
    }
   
}



getBookData(){
    let from_date=this.state.from_date
    let to_date=this.state.to_date
    let result = this.props.products.find(product => product.id ===parseInt(this.state.book_product_id));
    let price=rental_fee_calculation(from_date,to_date,result)
    this.opensweetalert({'price':price})
    this.setState({show:false})
}

opensweetalert(data) {

    Swal.fire({
        title: 'Book a product',
        html: "Your Estimated Price "+data.price+'<br/> '+' Do you want to procedure',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            if (data.price>0) {
              //  this.props.deleteProduct(data.id)
                //alert(JSON.stringify(result))
                Swal.fire(
                    'Yes!',
                    'Thank You',
                    'success'
                )
            }else if(data.price==0){
                 Swal.fire(
                    'Not Book',
                    'Thank You',
                    'warn'
                )
            }else{
                Swal.fire(
                   'Cancel',
                   'Thank You',
                   'warn'
               )
           }
        }
    })
}

openreturnsweetalert(data) {

    Swal.fire({
        title: 'Return a product',
        html: "Your Estimated Price "+data.price+'<br/> '+' Do you want to procedure',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            if (data.repair) {
              //  this.props.deleteProduct(data.id)
                //alert(JSON.stringify(result))
                Swal.fire(
                    'Yes!',
                    'You are able to Repair',
                    'success'
                )
            }else{
                Swal.fire(
                    'No!',
                    'You are not able to Repair',
                    'success'
                )
            }
        }
    })
}


















render() {
    const {permissions,products,is_loading,is_is_loading} = this.props
    const { show, retrunshow } = this.state;

    const page = Math.ceil(this.props.count / 10)





    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Product List </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link className="text-info" to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Product list</li>
                            </ol>
                        </div>
                    </div>
                </div>

            </section>

            <div className="row">



                <div className="col-12">
                    <div className="card">

                        <div className="card-header">
                            <h3 className="card-title">Product List</h3>

                            
                        </div>


                        <div style={{ margin: "15px" }} className="card-tools">
                            <div className="float-left">
                                <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                                    {/* <input className="form-control mr-sm-3" name="product_name" type="text"
                                        onChange={this.onChange} placeholder="Product Name"
                                        aria-label="Search" /> */}
                                    
                                    <input className="form-control mr-sm-3" name="search" type="text"
                                            placeholder="Search" onChange={this.onChange}
                                        aria-label="Search" />
                                    <button onClick={this.onSubmit} className="btn btn-outline-info my-4 my-sm-0 float-right"
                                        type="submit"><i className="fas fa-search"></i> Search
                                    </button>
                                    
                                </form>
                            </div>


                        </div>
                        
                        
                        
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        
                                        <th>Code</th>
                                        <th>Product Name</th>
                                        <th>Availability</th>
                                        <th>Need to Repair</th>
                                        <th>Durability</th>
                                        <th>Mileage</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {is_loading ?
                                        <tr className="text-center">
                                            <td>
                                                <CircularProgress />
                                            </td>
                                        </tr>
                                        : products.length >0 && products.length != undefined && products.map((product, index) => (
                                            <tr key={index}>

                                                
                                                
                                                <td>{product.code} </td>
                                                <td>{product.name}</td>
                                                <td>{product.availability?'True':'False'}</td>
                                                <td>{product.needing_repair?'True':'False'}</td>
                                                <td>{product.durability+"/"+product.max_durability}</td>
                                                <td>{product.mileage}</td>                                                    
                                                
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                           
                            {products.length>0?

                            <div className="text-align:right">
                                <button type="button" onClick={()=>this.handleModalShow()} className="btn btn-primary">Book</button>
                                <button type="button"  onClick={()=>this.handleReturnModalShow()} className="btn btn-success">Return</button>
                            </div>
                            :null
                            }
                        </div>
                        
                        <div className="card-footer clearfix">

                            {/*<span className="page-link" onClick={() => this.props.fetchstaffs(this.props.next)}>&laquo;</span>*/}
                            {page > 1 ? (
                                <ul className="pagination pagination-sm m-0 float-right">
                                    <ReactPaginate
                                        previousLabel={'previous'}
                                        nextLabel={'next'}
                                        breakLabel={'...'}
                                        breakClassName={'break-me'}
                                        pageCount={page}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={this.props.handlePageClick(page)}
                                        containerClassName={'pagination'}
                                        subContainerClassName={'pages pagination'}
                                        activeClassName={'active'}
                                    />
                                </ul>
                            ) : null
                            }

                        </div>
                        
                        <Modal
                            show={retrunshow}
                            onHide={()=>this.handleReturnClose()}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Return a Product</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="col-md-6">
                       
                        <select name="discount_type" onChange={this.onChangeReturn} component="select"  className="form-control">
                        {products.length>0 && products.map((product, index) => (
                            <>
                                <option key={index}  value={product.id}>{product.name+'/'+product.code}</option>
                            </>
                        ))}    
                        </select>
                        </div>
                        <div className="col-md-6">
                        <label>{this.state.need_reapir?'Needed repair':'Not Needed to repair'}</label>

                        </div>
                        <div className="col-md-6">
                        <label>{this.state.mileage>0 ? 'Used Mileage':'Unused Mileage'}</label>

                        </div>
                        

                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=>this.handleReturnClose()}>
                                    No
                                </Button>
                                <Button variant="primary" onClick={()=>this.onPressReturn()}>
                                   Yes
                                </Button>
                            </Modal.Footer>

                        </Modal>

                        <Modal
                            show={show}
                            onHide={()=>this.handleClose()}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Book a Product</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="col-md-6">
                       
                        <select name="product_type" onChange={this.onChangeBook} component="select"  className="form-control">
                        {products.length>0 && products.map((product, index) => (
                            <>
                                <option key={index}  value={product.id}>{product.name+'/'+product.code}</option>
                            </>
                        ))}    
                        </select>
                        </div>

                    <div className="col-md-6">
                    <label className="text-sm">From Date</label>
                   
                    <DatePicker
                        selected={this.state.from_date}
                        onChange={(value, e) => this.handleDateChange(value, e)}
                        format="DD-MM-YYYY"
                        time={false}
                        className="form-control"
                        name="from_date"
                        // value={ this.state.discount_from_date}
                        placeholder="Discount From Date"
                        
                    />    
                    </div>
                    <div className="col-md-6">
                    <label className="text-sm">To Date</label>   
                    <DatePicker
                        onChange={(value, e) => this.handleToDateChange(value, e)}
                        format="DD-MM-YYYY"
                        time={false}
                        className="form-control"
                        selected={this.state.to_date}
                        name="to_date"
                        // value={ this.state.discount_from_date}
                        placeholder="To Date"
                    />   
                    </div> 
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=>this.handleClose()}>
                                    No
                                </Button>
                                <Button variant="primary" onClick={()=>this.getBookData()}>
                                   Yes
                                </Button>
                            </Modal.Footer>

                        </Modal>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}
}

export default ProductComponent;
