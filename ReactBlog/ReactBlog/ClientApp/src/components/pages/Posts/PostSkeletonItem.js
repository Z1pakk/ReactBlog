import React from "react";

const PostSkeletonItem=()=> {
       return <div className="item-wrap flex post">
       <article className="pending">
         <h2 className="pending">
           _______
         </h2>
         <h2 className="pending">
           _______
         </h2>
         <div className="item-meta white is-primary-tag pending">
           ____
         </div>
         <div className="global-tag pending">
           _________________________
          </div>
       </article>
     </div>
}

export default PostSkeletonItem;