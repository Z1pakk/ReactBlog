import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import { isUrl } from "../../../common/functions/isUrl";


export class TagItem extends React.Component {
    render() {
        const {
            id,
            image,
            name
        } = this.props.item;
        var resultImage = null;
        if (!!image) {
            resultImage = (isUrl(image) ? image : ("api/files/UsersImages/" + image));
        };
        return (
            <div key={id} className="page-tag-wrap other top is-image">
                <Link to={`/tag/${name}`} className="item-link-overlay"></Link>
                <div className="page-tag-image" style={{ "backgroundImage": "url(" + resultImage + ")" }}></div>
                <h2> <Link to={`/tag/${name}`}>{name}</Link></h2>
            </div>
        )
    }
}

TagItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired
    }).isRequired
};
export default TagItem;