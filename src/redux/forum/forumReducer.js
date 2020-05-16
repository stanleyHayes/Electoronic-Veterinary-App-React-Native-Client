import {
    GET_INTERESTED_TOPICS_SUCCESS,
    GET_INTERESTED_TOPICS_FAILURE,
    GET_INTERESTED_TOPICS_REQUEST,
    GET_TOPICS_SUCCESS,
    GET_TOPICS_REQUEST,
    GET_TOPICS_FAILURE,
    GET_RECENT_TOPICS_SUCCESS,
    GET_RECENT_TOPICS_REQUEST,
    GET_RECENT_TOPICS_FAILURE,
    GET_MY_TOPICS_SUCCESS,
    GET_MY_TOPICS_REQUEST,
    GET_MY_TOPICS_FAILURE,
} from './forumActionTypes';


const INITIAL_STATE = {
    interestedTopics: [],
    interestedTopicsLoading: false,
    interestedTopicsError: null,
    myTopics: [
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        }
    ],
    myTopicsLoading: false,
    myTopicsError: null,
    topics: [
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        },
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        },
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        }
    ],
    topicsLoading: false,
    topicsError: null,
    recentTopics: [
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        },
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        },
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        },
        {
            author: {
                name: "Stanley Hayford",
                id: "123456"
            },
            subject: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: ["123456"],
            createdAt: "2020-03-04",
            favorites: [1, 2, 3]
        }
    ],
    recentTopicsLoading: false,
    recentTopicsError: null
}

const forumReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_MY_TOPICS_REQUEST:
            return {
                ...state,
                myTopicsLoading: true
            }

        case GET_MY_TOPICS_SUCCESS:
            return {
                ...state,
                myTopicsLoading: false,
                myTopics: action.payload,
                myTopicsError: null
            }

        case GET_MY_TOPICS_FAILURE:
            return {
                ...state,
                myTopicsLoading: false,
                myTopicsError: action.payload,
                myTopics: []
            }

        case GET_RECENT_TOPICS_REQUEST:
            return {
                ...state,
                recentTopicsLoading: true
            }

        case GET_RECENT_TOPICS_SUCCESS:
            return {
                ...state,
                recentTopicsLoading: false,
                recentTopics: action.payload,
                recentTopicsError: null
            }

        case GET_RECENT_TOPICS_FAILURE:
            return {
                ...state,
                recentTopics: [],
                myTopicsError: action.payload,
                recentTopicsLoading: false
            }


        case GET_INTERESTED_TOPICS_REQUEST:
            return {
                ...state,
                interestedTopicsLoading: true
            }

        case GET_INTERESTED_TOPICS_SUCCESS:
            return {
                ...state,
                interestedTopicsLoading: false,
                interestedTopics: action.payload,
                interestedTopicsError: null
            }

        case GET_INTERESTED_TOPICS_FAILURE:
            return {
                ...state,
                interestedTopicsLoading: false,
                interestedTopicsError: action.payload,
                interestedTopics: []
            }


        case GET_TOPICS_REQUEST:
            return {
                ...state,
                topicsLoading: true
            }

        case GET_TOPICS_SUCCESS:
            return {
                ...state,
                myTopicsLoading: false,
                myTopics: action.payload,
                myTopicsError: null
            }

        case GET_TOPICS_FAILURE:
            return {
                ...state,
                myTopicsLoading: false,
                myTopicsError: action.payload,
                myTopics: []
            }

        default:
            return state;
    }
}


export default forumReducer;
