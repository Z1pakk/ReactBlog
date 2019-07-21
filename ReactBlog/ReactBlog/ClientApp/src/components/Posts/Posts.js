import React from "react";
import classnames from "classnames";
import { PostsWrapper } from "../../common/styled/Posts/Posts.style";
import PropTypes from "prop-types";
import PostMinItem from "./PostMinItem";
import test1image from "../../testImages/test1.jpg";
import test2image from "../../testImages/test2.jpg";
import test3image from "../../testImages/test3.jpg";

const posts = [
  {
    id: 1,
    image: test1image,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authors: [
      {
        login: "Z1pakk",
        name: "Vlad Shumskiy"
      },
      {
        login: "cuandi236316@gmail.com",
        name: "Andriy Shumskiy"
      }
    ],
    datePost: "2019-04-17",
    postLink: "superPost",
    tag: "Story",
    color: "orange"
  },
  {
    id: 2,
    image: test2image,
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    authors: [
      {
        login: "Zipakk23213",
        name: "Vlad Shumskiy123213"
      },
      {
        login: "cuandi236213123316@gmail.com",
        name: "Andriy Shumskiy12321"
      }
    ],
    datePost: "2019-05-17",
    postLink: "superPost2",
    tag: "Natural",
    color: undefined
  },
  {
    id: 3,
    image: test3image,
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    authors: [
      {
        login: "Zipakk23213",
        name: "Vlad Shumskiy123213"
      },
      {
        login: "cuandi236213123316@gmail.com",
        name: "Andriy Shumskiy12321"
      }
    ],
    datePost: "2019-05-17",
    postLink: "superPost2",
    tag: "Site",
    color: "purple"
  },
  {
    id: 4,
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    authors: [
      {
        login: "Zipakk23213",
        name: "Vlad Shumskiy123213"
      },
      {
        id: "cuandi236213123316@gmail.com",
        name: "Andriy Shumskiy12321"
      }
    ],
    datePost: "2019-05-17",
    postLink: "superPost2",
    tag: "Template",
    color: "green"
  }
];

export class Posts extends React.Component {
  // state={
  //   data:null
  // }
  // componentDidMount(){
  //   fetch("https://my.api.mockaroo.com/blog.json?key=20141000").then((res)=>{
  //     return res.json();
  //   })
  //   .then((res)=> {
  //     this.setState({data:res});
  //   })
  // }
  render() {
    // const{data}=this.state;
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
            {!!posts &&
              posts.map(item => <PostMinItem key={item.id} item={item} />)}
          </div>
        </div>
      </PostsWrapper>
    );
  }
}

Posts.propTypes = {
  isFeatured: PropTypes.bool.isRequired
};

export default Posts;
