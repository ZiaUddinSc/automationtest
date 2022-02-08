import { combineReducers } from 'redux';
import {getproductsInfo} from '../reducers/PorductInfoReducer'

const rootReducer = combineReducers({
    products:getproductsInfo
});

export default rootReducer;
