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

const doctor = {
    name: 'Dr Justice Arthur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg'
};

const facility = {
    name: 'Scanner',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg'
};

const service = {
    name: 'Grooming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg'
};

const galleryItem = {
    image: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
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

const clinic = {
    name: "MedVet",
    website: "https://www.medvet.org",
    doctors: [doctor, doctor, doctor, doctor, doctor],
    location: {
        address: 'Haatso Agbogba Street',
        country: 'Ghana',
        city: 'Accra',
        state: 'Greater Accra',
    },
    services: [service, service, service, service, service],
    gallery: [galleryItem, galleryItem, galleryItem, galleryItem, galleryItem],
    reviews: [review, review, review, review, review],
    facilities: [facility, facility, facility, facility, facility],
    image: "https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5,
    contact: "+233270048319",
    email: 'medvet@gmail.org'
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
