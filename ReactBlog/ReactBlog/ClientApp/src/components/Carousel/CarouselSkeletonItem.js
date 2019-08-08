import React from "react";

const CarouselSkeletonItem=()=> {
       return <div className="section-featured is-featured-image" aria-hidden="true" >
        <div
          className="featured-image pending"
        ></div>
        <div className="featured-wrap flex">
          <article className="featured-content">
            <span className="global-tag pending">
                    _______________________
            </span>
            <h2 className="pending">
                    _________________
            </h2>
            <h2 className="pending">
                    _________________
            </h2>
            <h2 className="pending">
                    _________________
            </h2>
            <h2 className="pending">
                    _________________
            </h2>
            <div className="item-meta white pending">
                    ______________
            </div>
          </article>
        </div>
      </div>
}

export default CarouselSkeletonItem;
