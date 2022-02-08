
import {
    FETCH_PRODUCTS,
    LOADING_PRODUCTS,
    NOT_FOUND_PRODUCT,
  } from '../actions/types';
  


const productInitiate={
    is_fetching: false, 
    products: [],
    count: null,
    next: null,
    is_loading: false 

}

export const getproductsInfo = (state =productInitiate , action) => {
    switch (action.type) {
       
        case LOADING_PRODUCTS:
            return {
                ...state,
                products:[],
                is_fetching: true
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                count: action.count,
                get_products: true,
                next: action.next,
                is_loading: false,
                is_fetching: true
            };
        case NOT_FOUND_PRODUCT:
            return {
                ...state,
                products: [],
                count: 0,
                next: 0,
                is_loading: false
            };
        default:
            return state;
    }
}



