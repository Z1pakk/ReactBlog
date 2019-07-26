import styled from "styled-components";

const AuthorWrapper = styled.div`
    width: calc(100% - 85px - 85px);
    margin: 0 auto;
    text-align: center;

    .profile-wrap {
        box-sizing: border-box;
        padding: 5vh 5% 10vh;
    }
    .profile-wrap h1 {
        font-size: 50px;
        padding: 0 50px;
    }
    }
    .profile-wrap h2 {
        font-size: 25px;
        box-sizing: border-box;
        max-width: 750px;
        margin: 3vh auto 0;
        padding: 0 50px;
    }
    .profile-wrap.is-cover {
        position: relative;
        z-index: 0;
        margin-bottom: -10vh;
        padding: 10vh 5% 17vh;
        color: #fff;
    }
    .profile-wrap.is-cover, .profile-wrap.is-cover:before {
        border-radius: 5px;
        background: no-repeat center center;
        background-size: cover;
    }
    .profile-wrap.is-cover svg {
        fill: #fff;
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
    
    .author-image {
        width: 120px;
        height: 120px;
        margin: 0 auto 20px;
        border-radius: 26px;
        background: no-repeat center center;
        background-size: cover;
    }
    .author-social .location {
        display: inline-flex;
        padding: 0 15px 0 20px;
        align-items: center;
    }
    .author-social svg {
        width: 19px;
        height: 19px;
        transition: all .2s ease;
        fill: #161b3d;
    }
    .author-social .facebook svg, .author-social .location svg {
        width: 18px;
        height: 18px;
    }
    .author-social .location span {
        font-size: 10px;
        font-weight: 700;
        padding-left: 10px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
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
    @media(max-width:479px){
        .profile-wrap h1 {
            font-size: 30px;
            padding: 0 15px;
        }
        .profile-wrap h2 {
            font-size: 16px;
            padding: 0 20px;
        }
    }
`;

export default AuthorWrapper;
