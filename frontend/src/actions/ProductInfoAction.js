import { PRODUCT_INFO_URL } from "../constants/api";
import { SearchURLGenerate } from '../constants/CustomMethod'
import {
    FETCH_PRODUCTS,
    LOADING_PRODUCTS,
    NOT_FOUND_PRODUCT,
} from './types';

import { toast, } from 'react-toastify'
import axios from 'axios';
  

export const fetchProducts = (pageNumber, parameters = {}) => (dispatch, getState) => {
    dispatch({ type: LOADING_PRODUCTS });
    let headers = { 
        "Content-Type": "application/json" 
};
    // let { token } = getState().auth;
    // if (token) {
    //     headers["Authorization"] = `Token ${token}`;
    // }

    let search_key = ["code", "name"]

    var search_url = SearchURLGenerate(parameters, search_key);
    if ((search_url !== '' && search_url !== null) || pageNumber !== '') {
        var url = PRODUCT_INFO_URL
        if (search_url !== '' && search_url !== null) {
            url = url + "?" + search_url;
        } else if (pageNumber) {
            url = url + '?page=' + pageNumber
        }
        axios.get(url, {headers})
            .then(response => {
                
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: response.data.results ? response.data.results : response.data,
                    count: response.data.count,
                    next: response.data.next
                })
            })
    } else {
        toast.warning("Not Found!!!");
        dispatch({ type: NOT_FOUND_PRODUCT });

    }
};
export const searchProducts = (value) => (dispatch, getState) => {
    dispatch({ type: LOADING_PRODUCTS });
    let headers = { "Content-Type": "application/json" };
    // let { token } = getState().auth;
    // if (token) {
    //     headers["Authorization"] = `Token ${token}`;
    // }
    axios.get(PRODUCT_INFO_URL + '?search=' + value, { headers, })
        .then(response => {
            // alert(JSON.stringify(response))
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response.data.results ? response.data.results : response.data,
                count: response.data.count,
                next: response.data.next
            })
        })

};
