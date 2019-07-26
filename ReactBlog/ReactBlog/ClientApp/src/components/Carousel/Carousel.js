import React from "react";
import Flickity from "react-flickity-component";
import { CarouselWrapper } from "../../common/styled/Home/Carousel.style";
import test1image from "../../testImages/test1.jpg";
import test2image from "../../testImages/test2.jpg";
import test3image from "../../testImages/test3.jpg";
import CarouselItem from "../Carousel/CarouselItem";

const flickityOptions = {
  wrapAround: true,
  contain: true,
  adaptiveHeight: true,
  accessibility: false,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.025,
  friction: 0.3,
  dragThreshold: 5
};

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
    postLink: "superPost"
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
    postLink: "superPost2"
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
    postLink: "superPost2"
  }
];

export class Carousel extends React.Component {
  handleClick = () => {
    this.flkty.next();
  };
  render() {
    return (
      <div className="content" style={{"position":"relative"}}>
        <CarouselWrapper>
          <Flickity
            id="slider"
            className={"carousel section-scrollable"}
            options={flickityOptions}
            flickityRef={c => (this.flkty = c)}
          >
            {posts.map(item => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </Flickity>
          <div className="scrollable-nav">
            <span id="next" className="next" onClick={this.handleClick}></span>
          </div>
        </CarouselWrapper>
      </div>
    );
  }
}

export default Carousel;
