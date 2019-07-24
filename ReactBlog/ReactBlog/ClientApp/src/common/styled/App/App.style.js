import styled from "styled-components"

const GlobalWrapper = styled.div`
    flex: 1 0 auto;
`;
const FooterWrapper = styled.footer`
    flex-shrink: 0;

  
    .footer-wrap {
        box-sizing: border-box;
        max-width: 1024px;
        margin-top: 6vh;
        padding: 0 15px 15px;
        align-items: center;
        flex-wrap: nowrap;
    }
    .footer-logo {
        padding: 0 20px;
    }
    .footer-logo, .footer-social-links {
        box-sizing: border-box;
        flex: 0 0 26%;
    }
    .footer-logo .is-logo {
        line-height: 0;
    }
    .footer-logo .is-logo img {
        max-width: 100%;
        max-height: 35px;
    }
    .footer-nav {
        font-size: 15px;
        position: relative;
        letter-spacing: .9px;
        flex: 0 1 48%;
        justify-content: center;
    }
    .footer-nav .nav-list {
        display: block;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .footer-nav .nav-list-item {
        position: relative;
        display: inline-block;
        background-color: transparent;
    }
    .footer-nav .nav-link {
        line-height: 1.5;
        padding: 5px 10px;
    }
   
    .footer-copyright {
        color: #aeb5be;
    }
    .footer-copyright {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.3;
        max-width: 600px;
        margin: 0 auto;
        padding: 25px 30px;
        text-align: center;
        letter-spacing: .7px;
    }
    @media (min-width: 1024px)
    {
        .footer-nav .nav-dot {
            top: 4px;
        }
    }
    @media (max-width: 1023px)
    {
        .footer-copyright {
            padding: 20px 30px 15px;
        }
        .footer-nav {
            font-size: 13px;
            line-height: 10px;
            margin: 20px 0;
        }
        .footer-logo, .footer-social-links {
            max-width: 250px;
            padding: 0;
            text-align: center;
        }
        .footer-logo, .footer-nav, .footer-social-links {
            display: block;
        }
        .footer-wrap {
            flex-direction: column;
            max-width: 500px;
        }
        .footer-nav .nav-link {
            padding: 2px 10px;
        }
    }
`;


export {GlobalWrapper,FooterWrapper};