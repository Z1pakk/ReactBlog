import api from "../api";


export const getTopTags = (searchText,page,countItems)  => {
    return new Promise((resolve, reject) => {
        api.tags.getTop(searchText,page,countItems).then(res=>{
            resolve(res);
        })
        .catch(err=>reject(new Error(err)))
    });
};