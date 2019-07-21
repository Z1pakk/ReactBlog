import styled from "styled-components";

const CarouselWrapper = styled.div`
  .flickity-enabled.is-draggable {
    tap-highlight-color: transparent;
    user-select: none;
  }
  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: grab;
  }
  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .section-scrollable .section-featured {
    width: 100%;
  }
  .section-featured {
    position: relative;
  }
  .featured-image {
    position: absolute;
    z-index: -3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 85px;
    overflow: hidden;
    width: calc(50% - 130px);
    border-radius: 5px;
    background: no-repeat center center;
    background-size: cover;
  }
  .featured-wrap {
    box-sizing: border-box;
    min-height: calc(100vh - 160px - 85px);
    padding: 0 12% 10vh 50%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .featured-wrap .featured-content {
    width: 100%;
    padding: 60px 0 60px 40px;
  }
  .featured-label {
    color: #fff;
    background-color: #161b3d;
  }
  .featured-label svg {
    width: 12px;
    height: 12px;
    margin: 0 2px -2px 0;
    fill: #fff;
  }

  .featured-wrap h1,
  .featured-wrap h2 {
    font-size: 54px;
    font-weight: 700;
    line-height: 1.2;
    padding-top: 20px;
  }

  .featured-wrap h2 a .featured-dot {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: 10px;
    margin-left: 5px;
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
    border-radius: 20px;
    background-color: transparent;
  }
  .featured-wrap h2 a {
    position: relative;
  }
  .nav-dot.nav-dot-current,
  .nav-link:active ~ .nav-dot,
  .featured-wrap h2 a:hover .featured-dot,
  .post-tag:hover,
  .load-more:hover,
  .subscribe-wrap button:hover,
  .subscribe-back-button:hover {
    background-color: #2821fc !important;
  }

  @media (max-width: 1199px) and (min-width: 1024px) {
    .featured-wrap h2 a .featured-dot {
      right: -14px;
      width: 10px;
      height: 10px;
      margin-top: 5px;
    }
  }
  @media (max-width: 1023px) {
    .is-featured-image .featured-wrap h1,
    .is-featured-image .featured-wrap h2,
    .is-featured-image .featured-wrap h2 a,
    .is-featured-image .featured-wrap .item-meta,
    .is-featured-image .featured-wrap .item-meta a {
      color: #fff;
    }
    .featured-wrap h2 a .featured-dot {
      display: none;
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    .featured-wrap h1,
    .featured-wrap h2 {
      font-size: 45px !important;
    }
  }
  @media (max-width: 479px) {
    .featured-wrap h1,
    .featured-wrap h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) and (min-width: 480px) {
    .featured-wrap h1,
    .featured-wrap h2 {
      font-size: 35px;
    }
    .featured-wrap .featured-content {
      padding: 60px 20% 60px 85px;
    }
  }
  @media (max-width: 1399px) and (min-width: 1200px) {
    .featured-wrap h1,
    .featured-wrap h2 {
      font-size: 45px !important;
    }
  }
  @media (max-width: 1399px) and (min-width: 1024px) {
    .featured-image {
      left: 0;
      width: calc(50% - 45px);
      border-radius: 0 5px 5px 0;
    }
  }
  @media (max-width: 1199px) and (min-width: 1024px) {
    .featured-wrap h1,
    .featured-wrap h2 {
      font-size: 35px !important;
    }
  }
  @media (max-width: 1023px) {
    .featured-image {
      left: 0;
      width: 100%;
      margin-bottom: 0;
      border-radius: 0;
    }
  }
  @media (max-width: 1023px) {
    .featured-wrap {
      padding: 0 0 10vh;
    }
    .featured-image::before {
      border-radius: 0;
    }
    .featured-image::before {
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      opacity: 0.4;
      background-color: #101213;
      background-image: linear-gradient(234deg, #394245 0%, #000 100%);
    }
    .is-featured-image .featured-label {
      color: #161b3d;
      background-color: #f4f4f4;
    }
    .is-featured-image .featured-label svg {
      fill: #161b3d;
    }
  }
  @media (max-width: 1023px) and (min-width: 480px) {
    .featured-wrap {
      min-height: calc(100vh - 160px);
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    .featured-wrap .featured-content {
      padding: 60px 20% 60px 123px;
    }
  }
  @media (min-width: 1024px) {
    .featured-wrap .item-meta {
      width: 90%;
    }
  }
`;

export { CarouselWrapper };
