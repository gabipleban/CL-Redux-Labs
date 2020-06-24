
const ADD_ARTICLE = 'ADD_ARTICLE';
const ADD_USER = 'ADD_USER';

const addUser = (name) => {
    // console.log('Akction creator add User', name);
    return ({
        type: ADD_USER,
        payload: name
    })
}

const addArticle = (article) => ({
    type: ADD_ARTICLE,
    payload: {
        title: article.title,
        userId: article.userId
    }
})

export { ADD_ARTICLE, ADD_USER, addArticle, addUser };
