import {GET_SHOPS_SUCCESS, GET_SHOPS_FAILURE, GET_SHOPS_REQUEST} from './shopActionTypes';

const shop = {
    name: 'Annubis',
    owner: {
        name: 'Stanley Hayford',
    },
    location: {
        address: '',
        country: '',
        city: '',
        state: '',
    },
    image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    products: [],
};

const INITIAL_STATE = {
    shops: [shop, shop, shop, shop, shop, shop, shop, shop],
    loading: false,
    error: null,
};

const shopReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SHOPS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_SHOPS_SUCCESS:
            return {
                ...state,
                loading: false,
                shops: action.payload,
                error: null,
            };

        case GET_SHOPS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                shops: [],
            };
        default:
            return state;
    }
};

export default shopReducer;
