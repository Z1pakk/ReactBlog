import styled from "styled-components";

const PostsWrapper = styled.div`
  .load-more, .section-load-more {
    width: 40px;
    height: 40px;
  }
  
  .section-load-more {
      margin: 20px auto 16vh;
  }
  .load-more {
    display: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .3s ease;
    border: 8px solid #dcdfe7;
    border-radius: 100px;
    outline: none;
    background: none;
}
  .page-posts-title {
    width: 100%;
  }
   .page-posts-title h4 {
    font-size: 13px;
    font-weight: 700;
    display: block;
    margin: 15px 10px 0;
    padding: 4px 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
.load-more:hover {
  transition: .3s cubic-bezier(.39, .07, .68, 1.7);
  transform: scale(.65);
}
  @media (max-width: 479px)
  {
    .section-load-more {
        margin-bottom: 7vh;
    }
  }
  @media (max-width: 1023px) and (min-width: 768px)
  {
    .section-load-more {
        margin-bottom: 10vh;
    }
  }

  .section-loop.is-featured {
    margin-top: -10vh;
  }
  .section-loop {
    position: relative;
    margin-top: 0;
  }
  .items-wrap {
    margin: 0 -15px;
    animation: slide-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .item-wrap {
    min-width: 350px;
    -webkit-box-flex: 999;
    -ms-flex: 999 0 33.333%;
    flex: 999 0 33.333%;
  }

  .item-wrap article {
    position: relative;
    z-index: 0;
    overflow: hidden;
    box-sizing: border-box;
    width: calc(100% - 30px);
    min-height: 370px;
    margin: 15px 0 15px 15px;
    padding: 40px 38px 45px;
    transition: all 0.2s ease;
    border-radius: 26px;
    background-color: #eaedf6;
    background-image: linear-gradient(20deg, #e2e5ed, #f1f4f4);
  }
  .item-link-overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26px;
  }
  .item-wrap article:hover {
    transform: translateY(-4px);
  }
  .item-wrap h2 {
    font-size: 33px;
    font-weight: 700;
    line-height: 1.35;
    margin-right: 10%;
  }
  .is-primary-tag {
    margin-bottom: 60px;
  }
  .item-wrap.tag-hash-large {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 66.666%;
    flex: 1 0 66.666%;
  }
  .primary-tag {
    position: relative;
    z-index: 2;
    padding: 4px 8px;
    background-color: transparent;
  }
  .tags{   
    position: absolute;
    bottom: 40px;
    margin-left: -8px;
}
  .primary-tag:hover {
    color: #161b3d !important;
    background-color: #fff;
  }
  .item-image {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center center;
    background-size: cover;
  }
  .item-image::before {
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.4;
    background-color: #394245;
    background-image: linear-gradient(234deg, #394245 0%, #000 100%);
  }
  .item-wrap.is-image article {
    background-color: transparent;
    background-image: initial;
  }

  @media (max-width: 479px) {
    .item-wrap h2 {
      font-size: 25px;
      margin-right: 0;
    }
    .wrap {
      width: 100%;
      margin: 0;
    }
    .items-wrap {
      margin: 0;
    }
    .item-wrap {
      min-width: 280px;
    }
    .item-wrap article {
      min-height: 200px;
      margin: 0 15px 15px;
      padding: 30px 30px 40px;
    }
  }
  @media (max-width: 767px) and (min-width: 480px) {
    .item-wrap article {
      min-height: 270px;
    }
  }
`;

export { PostsWrapper };
