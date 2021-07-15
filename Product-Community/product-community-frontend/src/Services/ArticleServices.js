import axios from "axios"
const API_URL = "http://localhost:7001/community";

class ArticleServices {

    addNewArticle(article) {
        return axios.post(API_URL + "/addArticle", article);
    }

    getAllArticles() {
        return axios.get(API_URL + "/allArticles")
    }

    getUserArticles(email) {
        return axios.get(API_URL + "/articles/" + email)
    }

    addNewComment(comment) {
        return axios.post(API_URL + "/addComment", comment)
    }

    getComments(artId) {
        return axios.get(API_URL + "/comments/" + artId)
    }

}

export default new ArticleServices();
