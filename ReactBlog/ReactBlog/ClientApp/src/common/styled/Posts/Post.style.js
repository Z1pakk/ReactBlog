import styled from "styled-components";

const PostWrapper = styled.article`
    .section-featured {
        position: relative;
    }
    .section-post {
        position: relative;
        margin: calc(-10vh + 15px) auto 0;
        border-radius: 26px;
        background-color: #fff;
    }
    .post-wrap {
        font-size: 19px;
        overflow: visible;
        max-width: 700px;
        margin: 0 auto;
        padding: 60px 85px 120px;
    }
    .item-wrap svg {
        width: 12px;
        height: 12px;
        margin: 0 2px -2px 0;
        fill: #fff;
    }
    .post-wrap.no-image {
        padding-top: 0;
    }
    .post-wrap ul {
        list-style: disc outside;
    }
    .post-wrap ul, .post-wrap ol {
        margin-left: 1em;
    }
    .post-wrap a {
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        border-bottom: 2px solid #dde0e0;
    }
    .section-post-authors {
        margin: -50px auto 150px;
        align-items: flex-start;
        justify-content: center;
    }
    .post-authors .author-label {
        width: 100%;
        margin: 19px 15px 20px;
    }
    .post-authors .author-label span {
        font-size: 13px;
        font-weight: 700;
        display: block;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        opacity: .8;
    }
    .post-authors .author-wrap {
        position: relative;
        z-index: 1;
        overflow: hidden;
        box-sizing: border-box;
        max-width: 220px;
        min-height: 125px;
        margin: 8px;
        transition: all .2s ease;
        transform: translateY(0);
        border-radius: 26px;
        background-color: #f7f7f7;
        flex: 1 0 180px;
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
    .post-authors .author-profile-image {
        width: 100%;
        height: 90px;
        background: no-repeat center center;
        background-size: cover;
    }
    .post-author-single .author-profile-image {
        height: auto;
        flex: 0 0 110px;
        align-self: stretch;
    }
    .post-authors h4.is-bio {
        margin-top: 10px;
    }
    .post-authors h4 {
        font-size: 18px;
        line-height: 1.3;
        margin: 0;
        padding: 8px 20px;
    }
    .post-authors h4 a {
        border-bottom: none;
    }
    .post-authors p {
        font-size: 13px;
        line-height: 1.4;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 95%;
        margin: 0;
        padding: 0 20px 20px;
    }
    .post-author-single {
        max-width: 720px;
    }
    .post-author-single .author-wrap {
        min-width: 250px;
        max-width: 100%;
        margin: 0;
        border: 8px solid #fff;
        align-items: center;
        flex: 1 0 auto;
    }
    .post-author-single .author-profile-image {
        height: auto;
        flex: 0 0 110px;
        align-self: stretch;
    }
    .post-author-single .author-content {
        flex: 1 0 calc(100% - 110px);
    }
    .post-meta {
        position: relative;
        max-width: 263px;
        margin: 0 auto;
    }
    .post-share {
        position: absolute;
        z-index: 99;
        bottom: -30px;
        display: inline-flex;
        margin: 50px auto 0;
        padding: 11px 13px;
        border-radius: 26px;
        background-color: #fff;
        align-items: center;
    }
    .post-share div{
        line-height: 0;
        padding: 11px 30px 9px;
        cursor: pointer;
        border: none;
        outline:0;
    }
    .post-share div:focus{
        outline:0;
    }
    .post-share svg {
        width: 18px;
        height: 18px;
        transition: all .2s ease;
        fill: #161b3d;
    }
    .post-authors .author-wrap:hover {
        transform: translateY(-2px);
    }
    .section-prev-next {
        overflow: hidden;
        width: calc(100% - 85px - 85px);
        margin: 0 auto -5px;
        border-radius: 5px;
    }
    .prev-next-wrap {
        display: flex;
        align-items: stretch;
    }
    .prev-next-wrap a {
        position: relative;
        display: flex;
        overflow: hidden;
        min-width: 50%;
        background-color: #f1f4f4;
        background-image: linear-gradient(20deg,#e2e5ed,#f1f4f4);
        flex-grow: 1;
    }
    .prev-post section {
        padding: 65px 15% 65px 70px;
        text-align: left;
    }
    .prev-next-wrap h5 {
        font-size: 10px;
        margin: 0;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
    .prev-next-wrap h3 {
        font-size: 25px;
        margin-bottom: 8px;
    }
    .prev-next-wrap .is-image {
        background-color: transparent!important;
        background-image: none!important;
    }
    .prev-next-image {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: no-repeat center center;
        background-size: cover;
    }
    .prev-next-image, .prev-next-image::before {
        width: 100%;
        height: 100%;
    }
    .prev-next-image::before {
        display: block;
        content: '';
        opacity: .4;
        background-color: #394245;
        background-image: linear-gradient(234deg,#394245 0%,#000 100%);
    }
    .next-post section {
        padding: 65px 70px 65px 15%;
        text-align: right;
    }
    .prev-next-wrap section {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-height: 255px;
        transition: all .15s ease;
        letter-spacing: 1px;
    }
    .post-share .copy-popup {
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        top: -22px;
        left: -17px;
        width: 300px;
        margin-bottom: 50px;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        opacity: 0;
      }
      .post-share .copy:not(:active) ~ .copy-popup {
        transition: opacity 2s step-end;
      }
      .post-share input {
        position: absolute;
        top: -24px;
        display: block;
        cursor: default;
        opacity: 0;
        color: transparent;
        border: none;
        outline: none;
        background: transparent;
    }
    .post-share .copy:active ~ .copy-popup {
        opacity: .8;
    }
    .prev-next-wrap section:hover {
        background-color: rgba(0, 0, 15, .12);
    }
    @media (min-width:600px) and (max-width:1023px) {
        .prev-next-wrap section {
            min-height: 200px;
        }
    }
    @media (min-width: 768px)
    {
        .post-author-double {
            max-width: 900px;
            justify-content: center;
        }
        .post-author-double .author-wrap {
            flex: 1 0 300px;
            align-self: stretch;
        }
    }
    @media (max-width: 599px) and (min-width: 480px)
    {
        .prev-post section {
            padding: 80px 85px 55px;
        }
    }
    @media (max-width: 599px)
     {
         .prev-next-wrap {
            display: block;
        }
        .prev-next-wrap section {
            min-height: 100px;
            text-align: center;
        }
        .post-authors .author-content {
            flex: 1 0 calc(100% - 70px);
        }
        .post-authors .author-profile-image {
            height: auto;
            flex: 0 0 70px;
            align-self: stretch;
        }
    }
    @media (max-width: 767px) and (min-width: 480px)
    {
        .post-wrap {
            padding: 60px 70px 120px !important;
          }
            p img {
            width: 100%;
            margin: 35px 0;
          }
        .section-post-authors {
            padding: 0 64px;
        }
    }
    @media (max-width: 767px)
    {
        .section-post {
            width: calc(100% - 15px - 15px);
        }
        .prev-next-wrap h3 {
            font-size: 20px;
        }
        .section-prev-next {
            width: 100%;
            border-radius: 0;
        }
        .post-authors .author-wrap {
            max-width: 100%;
            margin: 0;
            border: 8px solid #fff;
            align-items: center;
            flex: 1 0 auto;
        }
    }
    @media(max-width:1023px){
        .is-featured-image .reading-time svg {
            fill: #fff !important;
        }
    }
    @media (min-width: 1024px)
    {

        .no-featured-image .featured-wrap{
            max-width: 700px;
            min-height: calc(70vh - 160px - 85px);
            margin: 0 auto;
            padding: 0 0 10vh;
        }
        .no-featured-image .featured-content{
            padding-left: 0;
        }
    }

`;

export { PostWrapper };
