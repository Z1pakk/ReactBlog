import React from "react";
import AuthorWrapper from "../../common/styled/Authors/AuthorWrapper.style";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";
import classNames from "classnames";
import defaultImage from "../../common/consts/defaultImage"
import { getAuthorInfo } from "../../actions/authors";

export class AuthorInfoPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            authorName:props.match.params.userName,
            author:{}
        }
        
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.fetchData(this.state.authorName);
    }

    fetchData=(userName)=>{
        getAuthorInfo(userName).then((res) => {
            this.setState({
                author: res
            });
        })
    }
    render() {
        const { author,authorName }=this.state;
        const attr = author.image ? {} : { style:{"backgroundImage": "url("+defaultImage+")"} }
        return (
            <div className="authorPage">
            <AuthorWrapper>
                <div {...attr} className={classNames("profile-wrap",!!!author.image&&"is-cover")}>
                    {!!author.image&&<div className="author-image" style={{"backgroundImage": "url("+author.image+")"}}></div>}
                    <h1>{author.name}</h1>
                    <div className="author-social">
                        <div className="location"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.8766378,6.99810543 L2.14413511,0.0872633906 C1.55352354,-0.116596257 0.922180138,0.0464914612 0.47412998,0.47459672 C0.0464457394,0.902701979 -0.116481591,1.55505285 0.0871775718,2.14624583 L6.99122318,22.8991579 C7.19488234,23.5311228 7.76512799,23.9592281 8.41683731,24 C8.45756915,24 8.49830098,24 8.53903281,24 C9.1500103,24 9.72025595,23.6534386 10.0053788,23.1030176 L13.3636849,13.3574387 L23.1006629,9.99484224 C23.6912745,9.70943874 24.0374951,9.07747383 23.9967632,8.42512296 C23.9356655,7.77277209 23.5079812,7.20196508 22.8766378,6.99810543 Z" transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)"></path></svg>
                        <span>{author.address}</span>
                    </div>
                    </div>
                    <h2>{author.description}</h2>
                </div>
            </AuthorWrapper>
            <Posts isFeatured={false} authorUserName={authorName} />
            </div>
        );
    }
}

AuthorInfoPage.PropTypes={
    match:PropTypes.shape({
        params:PropTypes.shape({
            userName:PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default AuthorInfoPage;
