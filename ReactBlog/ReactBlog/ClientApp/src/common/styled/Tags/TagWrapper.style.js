import styled from "styled-components";

const TagWrapper = styled.div`
    width: calc(100% - 85px - 85px);
    margin: 0 auto;
    text-align: center;

    .profile-wrap.is-cover {
        position: relative;
        z-index: 0;
        margin-bottom: -10vh;
        padding: 10vh 5% 17vh;
        color: #fff;
    }
    .profile-wrap {
        box-sizing: border-box;
        padding: 5vh 5% 10vh;
    }
    .profile-wrap.is-cover, .profile-wrap.is-cover:before {
        border-radius: 5px;
        background: no-repeat center center;
        background-size: cover;
    }
    .profile-wrap.is-cover::before {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        content: '';
        opacity: .4;
        background-color: #101213;
        background-image: linear-gradient(234deg,#394245 0%,#000 100%);
    }
    

    .profile-wrap h1 {
        font-size: 50px;
        padding: 0 50px;
    }

    .posts-number {
        display: inline-flex;
        align-items: center;
    }
    .profile-wrap.is-cover svg {
        fill: #fff;
    }
    .posts-number svg {
        width: 22px;
        height: 22px;
        fill: #161b3d;
    }
    .posts-number span {
        font-size: 13px;
        font-weight: 700;
        padding-left: 5px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .profile-wrap h2 {
        font-size: 25px;
        box-sizing: border-box;
        max-width: 750px;
        margin: 3vh auto 0;
        padding: 0 50px;
    }
    @media (max-width: 1399px)
    {

        width: 100%;

        .profile-wrap.is-cover, .profile-wrap.is-cover::before {
            border-radius: 0;
        }
    }
    @media (max-width: 1023px) and (min-width: 480px)
    {
        .profile-wrap h1 {
            font-size: 45px;
        }
    }
`;

export default TagWrapper;
