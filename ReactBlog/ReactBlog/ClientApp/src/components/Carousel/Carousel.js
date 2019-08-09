import React from "react";
import Flickity from "react-flickity-component";
import { CarouselWrapper } from "../../common/styled/Home/Carousel.style";
import CarouselItem from "../Carousel/CarouselItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTopPosts } from "../../actions/posts"
import CarouselSkeletonItem from "./CarouselSkeletonItem";

const flickityOptions = {
  wrapAround: true,
  contain: true,
  adaptiveHeight: true,
  accessibility: false,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.025,
  friction: 0.3,
  dragThreshold: 5,
  draggable: true
};


export class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
  componentDidMount (){
    this.props.getTopPosts(5);
  }
  handleClick = () => {
    this.flkty.next();
  };
  render() {
    const { topPosts }=this.props;
    return (
      <div className="content" style={{"position":"relative"}}>
        
        <CarouselWrapper>
          <div>
          <Flickity
            id="slider"
            className={"carousel section-scrollable"}
            options={flickityOptions}
            flickityRef={c => (this.flkty = c)}
          >
            {topPosts.length!==0?topPosts.map(item => (
              <CarouselItem key={item.postId} item={item} />
            )):
            [
            <CarouselSkeletonItem key={1} />
            ]
            }
          </Flickity>
          <div className="scrollable-nav">
            <span id="next" className="next" onClick={this.handleClick}></span>
          </div>
          </div>

        </CarouselWrapper>
      </div>
    );
  }
}

Carousel.propTypes={
  getTopPosts:PropTypes.func.isRequired
}
function mapStateToProps(state,props) {
  return {
    topPosts: state.datas.topPosts
  }
}
export default connect(mapStateToProps,{ getTopPosts })(Carousel);
