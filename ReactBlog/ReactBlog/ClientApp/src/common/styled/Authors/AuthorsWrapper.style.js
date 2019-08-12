import styled from "styled-components";

const AuthorsWrapper = styled.div`
    .section-page-tags, .section-page-authors {
        margin: 0 auto 16vh;
        padding: 0 85px;
        animation: slide-top .7s cubic-bezier(.250,.460,.450,.940) both;
    }
    .page-authors-wrap {
        max-width: calc(100% + 30px);
        margin: 0 -15px;
    }
    .page-authors-title {
        width: 100%;
    }
    .page-tags-title h4, .page-authors-title h4 {
        font-size: 13px;
        font-weight: 700;
        display: block;
        margin: 15px 10px 0;
        padding: 4px 10px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
    .page-tag-wrap.no-image, .page-author-wrap.is-profile-image, .page-author-wrap.is-profile-image.is-cover-image, .page-author-wrap.no-profile-image, .page-author-wrap.no-cover-image {
        background-color: #eaedf6;
        background-image: linear-gradient(20deg,#e2e5ed,#f1f4f4);
    }
    
    .page-author-wrap {
        box-sizing: border-box;
        min-width: 277px;
        min-height: 250px;
        padding-bottom: 40px;
        flex: 1 0 25%;

        position: relative;
        overflow: hidden;
        margin: 15px;
        transition: all .2s ease;
        border-radius: 26px;
    }
    .page-author-profile-image {
        display: block;
        width: 100%;
        height: 250px;
        background: no-repeat center center;
        background-size: cover;
    }
    .page-author-wrap h2 {
        font-size: 30px;
        margin: 10px 0 0 0;
        padding: 15px 30px;
    }
    .page-author-wrap p {
        padding: 15px 30px;
    }
    .page-author-wrap.is-cover-image {
        background-color: transparent;
        background-image: initial;
    }
    @media (max-width: 479px)
    {
        .page-authors-wrap {
            max-width: 100%;
            margin: 0 7.5px;
        }
        .section-page-authors {
            margin: 0 auto 10vh;
            padding: 0;
        }
    }
    h2.pending{
        margin:15px 30px ;
        padding:0px ;
        font-size:30px;
    }
    p.pending{
        margin:6px 30px 3px 30px;
        padding:0px ;
        font-size:10px;
    }
`;

export default AuthorsWrapper;
