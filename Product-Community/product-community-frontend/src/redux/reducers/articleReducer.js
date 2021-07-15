import { GET_ARTICLES } from "../actions/types";

const initialState = {
    articles: localStorage.getItem('allArticles')
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}