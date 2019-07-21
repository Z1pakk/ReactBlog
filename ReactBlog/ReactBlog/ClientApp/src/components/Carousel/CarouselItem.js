import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export class CarouselItem extends React.Component {
  render() {
    const { image, authors, title, datePost, postLink } = this.props.item;
    var resultTitle = title;
    if (title.length > 90) {
      var resultTitle = title.substr(0, 75);
      resultTitle =
        title.substr(
          0,
          Math.min(resultTitle.length, resultTitle.lastIndexOf(" "))
        ) + " ...";
    }

    return (
      <div class="section-featured is-featured-image" aria-hidden="true">
        <div
          class="featured-image"
          style={{ "background-image": "url(" + image + ")" }}
        ></div>
        <div class="featured-wrap flex">
          <article class="featured-content">
            <span class="featured-label global-tag">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.9712403,8.05987765 L16.2291373,8.05987765 L12.796794,0.459688839 C12.5516266,-0.153229613 11.4483734,-0.153229613 11.0806223,0.459688839 L7.64827899,8.05987765 L0.906176009,8.05987765 C0.538424938,8.05987765 0.170673866,8.30504503 0.0480901758,8.6727961 C-0.0744935148,9.04054717 0.0480901758,9.40829825 0.293257557,9.65346563 L5.31918887,14.3116459 L3.11268244,22.4021694 C2.99009875,22.7699205 3.11268244,23.1376716 3.48043351,23.382839 C3.72560089,23.6280063 4.21593565,23.6280063 4.46110303,23.5054227 L11.9387082,19.2149935 L19.4163133,23.5054227 C19.538897,23.6280063 19.6614807,23.6280063 19.906648,23.6280063 C20.1518154,23.6280063 20.2743991,23.5054227 20.5195665,23.382839 C20.7647339,23.1376716 20.8873176,22.7699205 20.8873176,22.4021694 L18.6808111,14.3116459 L23.7067424,9.65346563 C23.9519098,9.40829825 24.0744935,9.04054717 23.9519098,8.6727961 C23.7067424,8.30504503 23.3389914,8.05987765 22.9712403,8.05987765 Z"></path>
              </svg>{" "}
              Featured
            </span>
            <h2>
              <Link to={`/posts/${postLink}`}>
                {resultTitle}
                <span class="featured-dot"></span>
              </Link>
            </h2>
            <div class="item-meta white">
              <span>by </span>
              {authors.map(item => (
                <Link to={`/author/${item.id}`}>{item.name}&nbsp;</Link>
              ))}
              {/* <a href="/author/marcos/">Marcos Duran</a>, <a href="/author/janet/">Janet Robertson</a>, <a href="/author/james/">James Bryant</a> */}
              &nbsp;
              <Moment fromNow>{datePost}</Moment>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default CarouselItem;
