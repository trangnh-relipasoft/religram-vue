import * as types from "../types";
import post_axios from '../../axios/axios-post'

const state = {
    posts: [],
    date: new Date()
};
const getters = {
    [types.POSTS]: state => {
        return state.posts
    },
};
const mutations = {
    setPosts(posts) {
        state.posts = posts
    }
};
const actions = {
    loadPosts({commit}, page) {
        // let headers = 'Bearer ' +store.getters.getToken;
        return post_axios.get('/post?page=' + page, {
            // headers: {
            //     Authorization: headers
            // }
        }).then((response) => {
            console.log(response)
            // if (response.status === 200) {
            //     console.log(response);
            //     commit('setPosts', response.data.list)
            // }
        }).catch(error => {
            console.log(error)
        })
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}
