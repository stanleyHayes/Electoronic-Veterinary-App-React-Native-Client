import {GET_APPOINTMENTS_REQUEST, GET_APPOINTMENTS_SUCCESS, GET_APPOINTMENTS_FAILURE} from "./appointmentActionTypes";

const INITIAL_STATE = {
    appointments: [
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            createdAt: "2020-08-29",
            author: {
                name: "Stanley Hayford",
                username: "sahayford"
            },
            clinic: {
                name: "Apenkwa Veterinary Services",
                location: "Haatso Abgogba Street",
                image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/71/1d/711d1974-476a-43c2-a766-9985d96b6479/inclinic-abortion.jpg__1200x1200_q65_subsampling-2.jpg'
            },
            appointmentDate: "2020-08-29",
            appointmentTime: "10:30",
            pet: {
                name: "Buddy",
                image: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg"
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ],
    error: null,
    loading: false
}

 const appointmentReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                appointments: action.payload,
                loading: false,
                error: null
            }

        case GET_APPOINTMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_APPOINTMENTS_FAILURE:
            return {
                ...state,
                appointments: [],
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default appointmentReducer;
