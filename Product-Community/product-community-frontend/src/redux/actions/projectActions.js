import { GET_ARTICLES, GET_USER } from "./types"


export const getUserDetails = (user) => async dispath => {
    dispath({ type: GET_USER, payload: user })
}

export const getAllUserArticles = (articles) => async dispath => {
    dispath({ type: GET_ARTICLES, payload: articles })
}