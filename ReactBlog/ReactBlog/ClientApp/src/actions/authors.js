import api from "../api";


export const getTopAuthors = (searchText,page,countItems)  => {
    return new Promise((resolve, reject) => {
        api.authors.getTop(searchText,page,countItems).then(res=>{
            resolve(res);
        })
        .catch(err=>reject(new Error(err)))
    });
};

export const getAuthorInfo = (userName)  => {
    return new Promise((resolve, reject) => {
        api.authors.getAuthorInfo(userName).then(res=>{
            resolve(res.data);
        })
        .catch(err=>reject(new Error(err)))
    });
};

