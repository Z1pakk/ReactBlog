import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../../common/consts/defaultImage"
import classNames from "classnames";
import PropTypes from "prop-types";
import { isUrl } from "../../../common/functions/isUrl";


export class AuthorsItem extends React.Component {
    render() {
        const {
            image,
            userName,
            name,
            description,
        } = this.props.item;
        var resultImage=null;
        if (!!image) {
            resultImage = (isUrl(image) ? image : ("api/files/UsersImages/" + image));
        };
        return (
            <div className={classNames("page-author-wrap", !!resultImage ? "is-profile-image no-cover-image" : "no-profile-image is-cover-image")}>
                <Link to={`/author/${userName}`} className="item-link-overlay"></Link>
                {image ? <div className="page-author-profile-image" style={{ "backgroundImage": "url(" + resultImage + ")" }}></div> :
                    <div className="page-author-cover-image" style={{ "backgroundImage": "url(" + defaultImage + ")" }}></div>}
                <h2>
                    <Link to={`/author/${userName}`}>{name}</Link>
                </h2>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}

AuthorsItem.propTypes = {
    item: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired
};
export default AuthorsItem;