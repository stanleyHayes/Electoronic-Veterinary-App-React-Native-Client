import {GET_SHOPS_SUCCESS, GET_SHOPS_FAILURE, GET_SHOPS_REQUEST} from './shopActionTypes';

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

const review = {
    author: {
        name: 'Zeus Jupiter Ra',
        image: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg'
    },
    review: 'This is one beautiful shop with beautiful products and staff. I love you.',
    rating: 5,
    createdAt: "2020-08-29"
};

const shop = {
    name: 'Annubis',
    owner: {
        name: 'Stanley Hayford',
        email: 'hayfordstanley@gmail.com',
        contact: '+233270048319'
    },
    location: {
        address: 'Haatso Agbogba Street',
        country: 'Ghana',
        city: 'Accra',
        state: 'Greater Accra',
    },
    image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    products: [dogChain, dog, cat],
    website: 'www.annubis-vet.org',
    reviews: [review, review, review, review, review]
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
