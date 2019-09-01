import React from "react";
import { PostWrapper } from "../../common/styled/Posts/Post.style"
import Moment from "react-moment";
import Snakke from 'react-snakke'
import { getAuthors } from "../../common/functions/getAuthors";
import PostSkeletonItem from "./PostSkeletonItem";
import { Link } from "react-router-dom";
import timeToRead from "../../common/functions/timeToRead";
import classnames from "classnames";
import PropTypes from "prop-types";
import { isUrl } from "../../common/functions/isUrl";
import mediumZoom from 'medium-zoom'
import { themesPosts, themes } from "../../common/consts/themes";
import {
    FacebookShareButton,
    TwitterShareButton,
} from 'react-share';
import Clipboard from 'react-clipboard.js';
import { getPost } from "../../actions/posts";

function createMarkup(text) {
    return { __html: text };
}
export class PostInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: props.match.params.id,
            post: null
        }

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchData(this.state.postId);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.match.params.id);
        if (prevProps.match.params.id !== this.props.match.params.id) {
            window.scrollTo(0, 0);
            this.setState({
                post: null
            })
            this.fetchData(this.props.match.params.id);
        }
    }

    fetchData = (id) => {
        getPost(id).then((res) => {
            this.setState({
                post: res
            });
            mediumZoom('.post-wrap img')
        })
    }
    render() {
        const { post } = this.state;
        var authorsJSX = !!post && getAuthors(post.authors);
        return (
            <div>
                <Snakke 
                    color="#2821fc"
                    shadow={true} 
                />
                {
                    !!!post ? <PostSkeletonItem /> :
                        <PostWrapper
                            className={classnames(!!themesPosts[post.color] && themesPosts[post.color], !!post.fullImage && "tag-hash-full-image")}>
                            <div className={classnames("section-featured ", !!post.image ? "is-featured-image" : "no-featured-image")}>
                                <div className="featured-image" 
                                     style={{ "backgroundImage": "url(" + (isUrl(post.image) ? post.image : ("api/files/PostHeaderImages/" + post.image)) + ")" }}>
                                </div>
                                <div className="featured-wrap flex">
                                    <div className="featured-content">
                                        <div className="tags-wrap">
                                            {
                                                post.isFeatured &&
                                                <span className="featured-label global-tag">
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.9712403,8.05987765 L16.2291373,8.05987765 L12.796794,0.459688839 C12.5516266,-0.153229613 11.4483734,-0.153229613 11.0806223,0.459688839 L7.64827899,8.05987765 L0.906176009,8.05987765 C0.538424938,8.05987765 0.170673866,8.30504503 0.0480901758,8.6727961 C-0.0744935148,9.04054717 0.0480901758,9.40829825 0.293257557,9.65346563 L5.31918887,14.3116459 L3.11268244,22.4021694 C2.99009875,22.7699205 3.11268244,23.1376716 3.48043351,23.382839 C3.72560089,23.6280063 4.21593565,23.6280063 4.46110303,23.5054227 L11.9387082,19.2149935 L19.4163133,23.5054227 C19.538897,23.6280063 19.6614807,23.6280063 19.906648,23.6280063 C20.1518154,23.6280063 20.2743991,23.5054227 20.5195665,23.382839 C20.7647339,23.1376716 20.8873176,22.7699205 20.8873176,22.4021694 L18.6808111,14.3116459 L23.7067424,9.65346563 C23.9519098,9.40829825 24.0744935,9.04054717 23.9519098,8.6727961 C23.7067424,8.30504503 23.3389914,8.05987765 22.9712403,8.05987765 Z">
                                                        </path>
                                                    </svg>
                                                    <span>Featured</span></span>
                                            }
                                            {post.tags.map(item =>
                                                <Link key={item.id} className="post-tag global-tag" to={`/tag/${item.id}`}>{item.name}</Link>)
                                            }
                                        </div>
                                        <h1 className="white">{post.title}</h1>
                                        <div className="item-meta white">
                                            <span>by </span>
                                            {authorsJSX}
                                            &nbsp;
                                 <Moment fromNow>{post.dateOfCreate}</Moment>
                                            <span className="reading-time">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.1907692,24 C4.5625628,24 0,19.4374372 0,13.8092308 C0,8.18102433 4.5625628,3.61846154 10.1907692,3.61846154 C15.8189757,3.61846154 20.3815385,8.18102433 20.3815385,13.8092308 C20.3815385,19.4374372 15.8189757,24 10.1907692,24 Z M10.1907692,22 C14.7144062,22 18.3815385,18.3328677 18.3815385,13.8092308 C18.3815385,9.28559383 14.7144062,5.61846154 10.1907692,5.61846154 C5.6671323,5.61846154 2,9.28559383 2,13.8092308 C2,18.3328677 5.6671323,22 10.1907692,22 Z" id="Oval"></path><path d="M7.53230769,2.32923077 C6.98002294,2.32923077 6.53230769,1.88151552 6.53230769,1.32923077 C6.53230769,0.776946019 6.98002294,0.329230769 7.53230769,0.329230769 L12.9225711,0.329230769 C13.4748559,0.329230769 13.9225711,0.776946019 13.9225711,1.32923077 C13.9225711,1.88151552 13.4748559,2.32923077 12.9225711,2.32923077 L7.53230769,2.32923077 Z" id="Line-2"></path><path d="M13.2928932,9.29289322 C13.6834175,8.90236893 14.3165825,8.90236893 14.7071068,9.29289322 C15.0976311,9.68341751 15.0976311,10.3165825 14.7071068,10.7071068 L10.897876,14.5163376 C10.5073517,14.9068618 9.87418674,14.9068618 9.48366245,14.5163376 C9.09313816,14.1258133 9.09313816,13.4926483 9.48366245,13.102124 L13.2928932,9.29289322 Z" id="Line"></path>
                                                </svg>
                                                &nbsp;
                                    {timeToRead(post.text)}&nbsp;min read
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-post wrap">
                                <div dangerouslySetInnerHTML={createMarkup(post.text)} className={classnames("post-wrap", !!!post.image && "no-image")}>
                                </div>
                                <div className={classnames("section-post-authors post-authors flex", post.authors.length === 1 && "post-author-single first", post.authors.length === 2 && "post-author-single post-author-double")}>
                                    <div className="author-label">
                                        <span>{post.authors.length > 1 ? "THIS POST WAS A COLLABORATION BETWEEN" : "Read more posts by this author"}</span>
                                    </div>
                                    {!!post && !!post.authors && post.authors.map(item =>
                                        <div key={item.userName} className="author-wrap flex">
                                            <Link to={`/author/${item.login}`} className="item-link-overlay"></Link>
                                            <div className="author-profile-image" style={{ "backgroundImage": "url(" + item.photo + ")" }}></div>
                                            <div className="author-content">
                                                <h4 className="is-bio no-profile-image"><a href="/author/janet/">{item.name}</a></h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="post-meta">
                                    <div className="post-share">
                                        <TwitterShareButton className="twitter" url={window.location.href}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
                                        </TwitterShareButton>
                                        <FacebookShareButton className="facebook" url={window.location.href}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>
                                        </FacebookShareButton>
                                        <Clipboard data-clipboard-target="#link-value" className="copy" id="copy" component="div">
                                            <svg role="img" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg"><path d="M27.3999996,13.4004128 L21.7999996,13.4004128 L21.7999996,19 L18.9999996,19 L18.9999996,13.4004128 L13.3999996,13.4004128 L13.3999996,10.6006192 L18.9999996,10.6006192 L18.9999996,5 L21.7999996,5 L21.7999996,10.6006192 L27.3999996,10.6006192 L27.3999996,13.4004128 Z M12,20.87 C7.101,20.87 3.13,16.898 3.13,12 C3.13,7.102 7.101,3.13 12,3.13 C12.091,3.13 12.181,3.139 12.272,3.142 C9.866,5.336 8.347,8.487 8.347,12 C8.347,15.512 9.866,18.662 12.271,20.857 C12.18,20.859 12.091,20.87 12,20.87 Z M20.347,0 C18.882,0 17.484,0.276 16.186,0.756 C14.882,0.271 13.473,0 12,0 C5.372,0 0,5.373 0,12 C0,18.628 5.372,24 12,24 C13.471,24 14.878,23.726 16.181,23.242 C17.481,23.724 18.88,24 20.347,24 C26.975,24 32.347,18.628 32.347,12 C32.347,5.373 26.975,0 20.347,0 Z"></path></svg>
                                        </Clipboard>
                                        <span className="copy-popup">The link has been copied!</span>
                                        <input type="text" value={window.location.href} id="link-value" readOnly></input>
                                    </div>
                                </div>
                            </div>
                            <aside className="section-prev-next">
                                <div className="prev-next-wrap">
                                    {!!post.prevPost &&
                                        <Link to={`/post/${post.prevPost.postId}`} className={classnames("prev-post post", !!post.prevPost.color && themes[post.prevPost.color], !!post.prevPost.image && "is-image")}>
                                            {!!post.prevPost.image && <div className="prev-next-image" style={{ "backgroundImage": "url(" + (isUrl(post.prevPost.image) ? post.prevPost.image : ("api/files/PostHeaderImages/" + post.prevPost.image)) + ")" }}></div>}
                                            <section className="prev-next-title">
                                                <h5>Newer Post</h5>
                                                <h3>{post.prevPost.title}</h3>
                                            </section>
                                        </Link>
                                    }
                                    {!!post.nextPost &&
                                        <Link to={`/post/${post.nextPost.postId}`} className={classnames("next-post post", !!post.nextPost.color && themes[post.nextPost.color], !!post.nextPost.image && "is-image")}>
                                            {!!post.nextPost.image && <div className="prev-next-image" style={{ "backgroundImage": "url(" + (isUrl(post.nextPost.image) ? post.nextPost.image : ("api/files/PostHeaderImages/" + post.nextPost.image)) + ")" }}></div>}
                                            <section className="prev-next-title">
                                                <h5>Older Post</h5>
                                                <h3>{post.nextPost.title}</h3>
                                            </section>
                                        </Link>
                                    }
                                </div>
                            </aside>
                        </PostWrapper>
                    }
            </div>
        );
    }
}

PostInfoPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default PostInfoPage;
