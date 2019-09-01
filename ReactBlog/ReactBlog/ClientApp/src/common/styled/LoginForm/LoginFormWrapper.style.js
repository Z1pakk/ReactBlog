import styled from "styled-components";

const LoginFormWrapper = styled.div`
    position:relative;
    .login-img{
        border-radius: 5px;
        background-size: cover;
        background-position: 50% 50%;
    }
    .login-img,.content{
        flex: 1 0 50%
    }
    .content{
        padding:0px 5rem !important;
    }
    .content h2{
        font-size: 36px;
        line-height: 1.2;
        max-width: 700px;
        margin: 5px auto 20px;
        padding: 10px 0;
        letter-spacing: 1px;
    }
    .content h2,.content .ityped{
        text-align:center;
    }

    .ityped {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.3;
        max-width: 450px;
        margin: 0 auto;
        color:#161b3d;
        margin-bottom: 1.5rem;
    }
    .ityped-cursor {
        animation: blink .3s infinite;
        animation-direction: alternate;
        opacity: 1;
        color: #2821fc;
    }

    .extLogin{
        padding: .5em 2.5em;
        line-height: 1.71428571 !important;
        height:auto;
        span{
            text-transform: uppercase;
            letter-spacing: .5px;
            font-size: .75rem;
        }
    }
    .bg-facebook{
        background-color: #335397;
        border-color:#335397;
    }
    .bg-twitter{
        background-color:#00c7f7;
        border-color:#00c7f7;
    }
    .bg-google{
        background-color: #CF4231;
        border-color: #CF4231;
    }
    .additional-info{
        font-size: .75rem;
        margin-bottom: 0;
        line-height: 1.5rem;
        text-align:center;
        a{
            color: rgba(0,0,0,.87);
            text-decoration: underline;
        }
    }
    @keyframes blink {
        100% {
            opacity: 0;
        }
    }
    @media(max-width:767px){
        .content{
            padding:0px !important;
            flex: 1 0 100%;
        }
    }
`;

export default LoginFormWrapper;
