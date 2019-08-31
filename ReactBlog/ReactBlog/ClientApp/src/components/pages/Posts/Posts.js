import React from "react";
import { connect } from "react-redux"
import classnames from "classnames";
import { PostsWrapper } from "../../../common/styled/Posts/Posts.style";
import PropTypes from "prop-types";
import PostMinItem from "./PostMinItem";
import { getMainPosts } from "../../../actions/posts"
import PostSkeletonItem from "./PostSkeletonItem";
import InfiniteScroll from 'react-infinite-scroller';


export class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      posts:null,
      hasMoreItems:true,
      author:props.authorUserName?props.authorUserName:"",
      tagId:props.tagId?props.tagId:0
    }
  }

  componentDidMount(){
    this.loadingData(1);
  }
  loadingData=(page)=>{
    const { author,tagId }=this.state;
    this.fetchData(page,9,author,tagId);
  }

  fetchData=(page,countToTake,author,tagId)=>{
    getMainPosts(page,countToTake,author,tagId).then(res=>
      {
        const { posts }=this.state;
        const items=!!posts?posts.concat(res.items):res.items;
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
           {!!posts
                ? 
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadingData}
              hasMore={hasMoreItems}>
              <div className="items-wrap flex">
                {
                  posts.map(item => <PostMinItem key={item.postId} item={item} />)
                }
              </div>
            </InfiniteScroll>:
            loader
                            }
        </div>
      </PostsWrapper>
    );
  }
}

Posts.propTypes = {
  isFeatured: PropTypes.bool.isRequired,
  authorUserName: PropTypes.string,
  tagId: PropTypes.number,
};

export default connect(null, { })(Posts);
