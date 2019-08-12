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
    this.state={
      posts:[],
      hasMoreItems:true
    }
  }

  componentDidMount(){
    this.loadingData(1);
  }
  loadingData=(page)=>{
    this.fetchData(page,9);
  }

  fetchData=(page,countToTake)=>{
    getMainPosts(page,countToTake).then(res=>
      {
        const items=this.state.posts.concat(res.items);
        console.log(items);
        this.setState({
          posts:items,
          hasMoreItems:res.isHasNext
        })
    });
  }

  render() {
    const loader = <div className="items-wrap flex"><PostSkeletonItem /><PostSkeletonItem /><PostSkeletonItem/><PostSkeletonItem/><PostSkeletonItem /><PostSkeletonItem/></div>;
    const { posts,hasMoreItems } = this.state;
    return (
      <PostsWrapper>
        <div
          id="loop"
          className={classnames(
            "section-loop wrap",
            this.props.isFeatured && "is-featured"
          )}
        >
           {!!posts && posts.length !== 0
                ? 
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadingData}
              hasMore={hasMoreItems}>
              <div className="items-wrap flex">
                {
                  posts.map(item => <PostMinItem key={item.id} item={item} />)
                }
              </div>
            </InfiniteScroll>:
            loader
                            }
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
};

// function mapStateToProps(state, props) {
//   return {
//     posts: state.datas.posts
//   }
// }

export default connect(null, { })(Posts);
