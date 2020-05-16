import {combineReducers} from "redux";

import appointmentReducer from './appointment/appointmentReducer';
import forumReducer from './forum/forumReducer';
import clinicReducer from './clinic/clinicReducer';
import shopReducer from './shop/shopReducer';
import productReducer from './product/productReducer';

const rootReducer = combineReducers({
    appointment: appointmentReducer,
    forum: forumReducer,
    clinic: clinicReducer,
    shop: shopReducer,
    product: productReducer
})

export default rootReducer;
