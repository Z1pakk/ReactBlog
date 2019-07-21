import React from "react";
import Flickity from "react-flickity-component";
import { CarouselWrapper } from "../../common/styled/Home/Carousel.style";
import test1image from "../../testImages/test1.jpg";
import test2image from "../../testImages/test2.jpg";
import CarouselItem from "../Carousel/CarouselItem";

const flickityOptions = {
  draggable: true,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true
};

const posts = [
  {
    image: test1image,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authors: [
      {
        login: "Z1pakk",
        name: "Vlad Shumskiy"
      },
      {
        id: "cuandi236316@gmail.com",
        name: "Andriy Shumskiy"
      }
    ],
    datePost: "2019-04-17",
    postLink: "superPost"
  },
  {
    image: test2image,
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
    postLink: "superPost2"
  }
];

export class Carousel extends React.Component {
  render() {
    return (
      <div className="content">
        <CarouselWrapper>
          <Flickity
            id="slider"
            className={"carousel section-scrollable"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {posts.map(item => (
              <CarouselItem item={item} />
            ))}
          </Flickity>
        </CarouselWrapper>
      </div>
    );
  }
}

export default Carousel;
