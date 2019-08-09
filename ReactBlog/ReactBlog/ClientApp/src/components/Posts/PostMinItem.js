import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cutWords from "../../common/functions/cutWords";
import { getAuthorsAndOthers } from "../../common/functions/getAuthors";
import Moment from "react-moment";
import { themes } from "../../common/consts/themes"

function isUrl(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
}
export class PostMinItem extends React.Component {
  render() {
    const {
      image,
      authors,
      title,
      dateOfCreate,
      postId,
      tags,
      color
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
