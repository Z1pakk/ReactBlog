import styled from "styled-components";

const TagsWrapper = styled.div`

.page-tags-wrap {
    max-width: calc(100% + 30px);
    margin: 0 -15px;
}
.page-tags-title {
    width: 100%;
}
.page-tags-title h4 {
    font-size: 13px;
    font-weight: 700;
    display: block;
    margin: 15px 10px 0 !important;
    padding: 4px 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}
.page-tag-wrap.top {
    min-height: 160px;
}
.page-tag-wrap {
    padding: 10px;
    flex: 1 auto;
}
.page-tag-wrap {
    position: relative;
    overflow: hidden;
    margin: 15px;
    transition: all .2s ease;
    border-radius: 26px;
}
.page-tag-wrap.is-image a, .page-tag-wrap.is-image p, .page-author-wrap.is-cover-image a, .page-author-wrap.is-cover-image p {
    color: #fff;
}
.page-tag-wrap.top h2 {
    font-size: 30px;
}
.page-tag-wrap h2 {
    margin: 0;
    padding: 15px 30px;
}
.page-tag-wrap p {
    max-width: 450px;
    padding: 0 60px 3vh 30px;
}
.page-tag-wrap.other h2 {
    font-size: 20px;
    text-align: center;
}
.page-tag-wrap.other {
    min-height: 30px;
}
h2.pending {
    margin: 15px 30px;
    padding: 0px;
    font-size: 20px !important;
}
@media (max-width: 479px)
{
    .section-page-tags {
        margin: 0 auto 10vh;
        padding: 0;
    }
    .page-tags-wrap {
        max-width: 100%;
        margin: 0 7.5px;
    }
}
`;

export default TagsWrapper;
