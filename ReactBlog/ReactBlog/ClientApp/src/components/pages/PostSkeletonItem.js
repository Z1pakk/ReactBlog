import React from "react";
import { PostWrapper } from "../../common/styled/Posts/Post.style"

const PostSkeletonItem=()=> {
       return <PostWrapper className="tag-hash-full-image">
       <div className="section-featured no-featured-image">
           <div className="featured-image pending"></div>
           <div className="featured-wrap flex">
               <div className="featured-content">
                   <div className="tags-wrap pending">
                        <span className="global-tag pending">
                        _______________________
                        </span>
                   </div>
                   <h1 className="white pending">______ </h1>
                   <div className="item-meta white pending">
                     ______________
                   </div>
               </div>
           </div>
       </div>
       <div className="section-post wrap">
           <div  className="post-wrap">
               <h2 className="pending">
                __________________
               </h2>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
               <p className="pending">
                __________________
               </p>
           </div>
       </div>
   </PostWrapper>
}
export default PostSkeletonItem;