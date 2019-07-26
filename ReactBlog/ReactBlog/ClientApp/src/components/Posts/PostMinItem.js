import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cutWords from "../../common/functions/cutWords";
import { getAuthorsAndOthers } from "../../common/functions/getAuthors";
import Moment from "react-moment";
import { themes } from "../../common/consts/themes"

export class PostMinItem extends React.Component {
  render() {
    const {
      image,
      authors,
      title,
      datePost,
      postLink,
      id,
      tag,
      color
    } = this.props.item;

    var resultTitle = cutWords(title, 80);
    var authorsJSX = getAuthorsAndOthers(authors);
    var number = Math.floor(Math.random() * 101);
    return (
      <div
        className={classnames(
          "item-wrap flex post",
          number < 10 && "tag-hash-large",
          !!image && "is-image",
          !!themes[color] && themes[color]
        )}
      >
        <article>
          <Link to={`/post/${postLink}`} className="item-link-overlay"></Link>
          {!!image && (
            <div
              className="item-image"
              style={{ backgroundImage: " url(" + image + ")" }}
            ></div>
          )}
          <h2>
            <Link to={`/post/${postLink}`} className="white">
              {resultTitle}
            </Link>
          </h2>
          <div className="item-meta white is-primary-tag">
            <span>by </span>
            {authorsJSX}
            &nbsp;
            <Moment fromNow>{datePost}</Moment>
          </div>
          <Link className="primary-tag global-tag white" to={`/tag/${tag}`}>
            {tag}
          </Link>
        </article>
      </div>
    );
  }
}

PostMinItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    authors:PropTypes.arrayOf(PropTypes.shape({
      login:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    title:PropTypes.string.isRequired,
    datePost:PropTypes.string.isRequired,
    postLink:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    tag:PropTypes.string.isRequired,
    color:PropTypes.string,
  }).isRequired,
};

export default PostMinItem;