import {combineReducers} from "redux";

import appointmentReducer from './appointment/appointmentReducer';
import forumReducer from './forum/forumReducer';
import clinicReducer from './clinic/clinicReducer';
import shopReducer from './shop/shopReducer';


const rootReducer = combineReducers({
    appointment: appointmentReducer,
    forum: forumReducer,
    clinic: clinicReducer,
    shop: shopReducer
})

export default rootReducer;
