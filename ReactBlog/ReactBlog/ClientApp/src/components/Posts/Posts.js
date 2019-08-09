import React from "react";
import { connect } from "react-redux"
import classnames from "classnames";
import { PostsWrapper } from "../../common/styled/Posts/Posts.style";
import PropTypes from "prop-types";
import PostMinItem from "./PostMinItem";
import { getMainPosts } from "../../actions/posts"
import PostSkeletonItem from "./PostSkeletonItem";
import InfiniteScroll from 'react-infinite-scroller';

// const posts = [
//   {
//     id: 1,
//     image: test1image,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     authors: [
//       {
//         login: "Z1pakk",
//         name: "Vlad Shumskiy"
//       },
//       {
//         login: "cuandi236316@gmail.com",
//         name: "Andriy Shumskiy"
//       }
//     ],
//     datePost: "2019-04-17",
//     postLink: "superPost",
//     tag: "Story",
//     color: "orange"
//   }
// ];

export class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMainPosts(8);
  }
  render() {
    const loader = <div className="loader">Loading ...</div>;
    const { posts } = this.props;
    return (
      <PostsWrapper>
        <div
          id="loop"
          className={classnames(
            "section-loop wrap",
            this.props.isFeatured && "is-featured"
          )}
        >
          <div className="items-wrap flex">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadItems.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={loader}>

              <div className="tracks">
                {!!posts && posts.length !== 0
                  ? posts.map(item => <PostMinItem key={item.id} item={item} />)
                  : [<PostSkeletonItem key={1} />, <PostSkeletonItem key={2} />, <PostSkeletonItem key={3} />, <PostSkeletonItem key={4} />, <PostSkeletonItem key={5} />, <PostSkeletonItem key={6} />]
                }
              </div>
            </InfiniteScroll>
          </div>
        </div>
        <div className="section-load-more">
          <div className="load-more" style={{ "display": "inline-block" }}>
          </div>
        </div>
      </PostsWrapper>
    );
  }
}

Posts.propTypes = {
  isFeatured: PropTypes.bool.isRequired,
  authorId: PropTypes.number,
  tagId: PropTypes.number,
  getMainPosts: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {
    posts: state.datas.posts
  }
}

export default connect(mapStateToProps, { getMainPosts })(Posts);
