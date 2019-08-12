import api from "../api";


export const getTopAuthors = (searchText,page,countItems)  => {
    return new Promise((resolve, reject) => {
        api.authors.getTop(searchText,page,countItems).then(res=>{
            resolve(res);
        })
        .catch(err=>reject(new Error(err)))
    });
};
