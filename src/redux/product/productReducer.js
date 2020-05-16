import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
} from './productActionTypes';

const dogChain = {
    name: "Dog Chain",
    price: 45,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    rating: 4.5,
    image: "https://images-na.ssl-images-amazon.com/images/I/61RIKfwtBeL._AC_SL1100_.jpg",
    category: "accessory"
}

const dog = {
    name: "Rottweiler Dog",
    price: 45,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    rating: 44.2,
    category: "pet",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Rottweiler_standing_facing_left.jpg"
}

const cat = {
    name: "American long hair",
    price: 520,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    rating: 5,
    category: "pet",
    image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
}
const INITIAL_STATE = {
    products: [cat, dog, dogChain],
    loading: false,
    error: null,
};

const productReducer = function (state = INITIAL_STATE, action) {
    let updatedProducts = [];
    switch (action.type) {

        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
                error: null,
            };

        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };


        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_PRODUCT_SUCCESS:
            updatedProducts = state.products.map(function (product) {
                if (product._id === action.payload._id) {
                    const {name, price, image, description, rating} = action.payload;
                    return {
                        ...product,
                        ['name']: name,
                        ['price']: price,
                        ['description']: description,
                        ['image']: image,
                        'rating': rating,
                    };
                }
                return product;
            });

            return {
                ...state,
                loading: false,
                products: [...updatedProducts],
                error: null,
            };

        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };


        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            };

        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload,
            };


        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_PRODUCT_SUCCESS:

            updatedProducts = state.products.filter(function (product) {
                return product._id !== action.payload._id;
            });

            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
                error: null,
            };

        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload,
            };

        default:
            return state;
    }
};


export default productReducer;
