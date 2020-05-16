import {
    GET_CLINICS_FAILURE,
    GET_CLINICS_SUCCESS,
    GET_CLINICS_REQUEST,
    GET_POPULAR_CLINICS_SUCCESS,
    GET_POPULAR_CLINICS_REQUEST,
    GET_POPULAR_CLINICS_FAILURE,
    GET_NEARBY_CLINICS_SUCCESS,
    GET_NEARBY_CLINICS_REQUEST,
} from './clinicActionTypes';

const clinic = {
    name: "MedVet",
    website: "https://www.medvet.org",
    doctors: [],
    locations: [],
    services: [],
    gallery: [],
    image: "https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5
};

const INITIAL_STATE = {
    clinics: [clinic, clinic, clinic, clinic],
    error: null,
    loading: false,
};

const clinicReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CLINICS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_CLINICS_SUCCESS:
            return {
                ...state,
                loading: false,
                clinics: action.payload,
            };

        case GET_CLINICS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                clinics: [],
            };
        default:
            return state;
    }
};

export default clinicReducer;
