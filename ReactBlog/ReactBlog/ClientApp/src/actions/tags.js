import api from "../api";


export const getTopTags = (searchText,page,countItems)  => {
    return new Promise((resolve, reject) => {
        api.tags.getTop(searchText,page,countItems).then(res=>{
            resolve(res);
        })
        .catch(err=>reject(new Error(err)))
    });
};

export const getTagInfo = (tagName)  => {
    return new Promise((resolve, reject) => {
        api.tags.getTagInfo(tagName).then(res=>{
            resolve(res.data);
        })
        .catch(err=>reject(new Error(err)))
    });
};