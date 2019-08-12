import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cutWords from "../../common/functions/cutWords";
import { getAuthorsAndOthers } from "../../common/functions/getAuthors";
import Moment from "react-moment";
import { themes } from "../../common/consts/themes";
import { isUrl } from "../../common/functions/isUrl";


export class PostMinItem extends React.Component {
  render() {
    const {
      image,
      authors,
      title,
      dateOfCreate,
      postId,
      tags,
      color,
      countLikes
    } = this.props.item;
    var resultImage=null;
    if(!!image){
      resultImage=(isUrl(image)?image:("api/files/PostHeaderImages/"+image));
    };
   
    var resultTitle = cutWords(title, 80);
    var authorsJSX = getAuthorsAndOthers(authors);
    return (
      <div
        className={classnames(
          "item-wrap flex post",
          !!resultImage && "is-image",
          !!themes[color] && themes[color]
        )}
      >
        <article>
          <Link to={`/post/${postId}`} className="item-link-overlay"></Link>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 51.997 51.997">
              <path xmlns="http://www.w3.org/2000/svg" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
            </svg>
            {countLikes}
          </p>
          {!!resultImage && (
            <div
              className="item-image"
              style={{ backgroundImage: " url(" + resultImage + ")" }}
            ></div>
          )}
          <h2>
            <Link to={`/post/${postId}`} className="white">
              {resultTitle}
            </Link>
          </h2>
          <div className="item-meta white is-primary-tag">
            <span>by </span>
            {authorsJSX}
            &nbsp;
            <Moment fromNow>{dateOfCreate}</Moment>
          </div>
          <div className="tags">
            {tags.map(item=>
              <Link className="primary-tag global-tag white" to={`/tag/${item.name}`}>
                {item.name}
              </Link>
            )}
          </div>
        </article>
      </div>
    );
  }
}

PostMinItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    authors:PropTypes.arrayOf(PropTypes.shape({
      userName:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    title:PropTypes.string.isRequired,
    datePost:PropTypes.string.isRequired,
    postLink:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    tags:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    color:PropTypes.string,
  }).isRequired,
  
};

export default PostMinItem;
