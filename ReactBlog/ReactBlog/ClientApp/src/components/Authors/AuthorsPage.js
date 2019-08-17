import React from "react";
import AuthorsWrapper from "../../common/styled/Authors/AuthorsWrapper.style";
import classNames from "classnames";
import { debounce } from 'lodash';
import AuthorsItem from "./AuthorsItem";
import AuthorsSkeletonItem from "./AuthorsSkeletonItem";
import { getTopAuthors } from "../../actions/authors"
import InfiniteScroll from 'react-infinite-scroller';


export class AuthorsPage extends React.Component {
    state = {
        searchText: "",
        error: null,
        authors: [],
        hasMoreItems: true
    }
    componentDidMount() {
        this.fetchData(1);
    }
    fetchData = (page) => {
        console.log(page);
        const { searchText }=this.state;
        getTopAuthors(searchText,page, 6).then((res) => {
            const items = this.state.authors.concat(res.items);
            this.setState({
                authors: items,
                hasMoreItems: res.isHasNext
            })
        })
    }
    handleChange = debounce((text) => {
        console.log(text);
        if (text.length < 3) {
            this.setState({
                searchText: "",
                authors: [],
                error: "Please enter at least 3 characters."
            })
        }
        else {
            this.setState({
                error: null,
                authors: [],
                searchText: text
            })
            
        }
        this.fetchData(1);
      
    }, 1000)
    render() {
        const loader = <div className="items-wrap flex"><AuthorsSkeletonItem /><AuthorsSkeletonItem /><AuthorsSkeletonItem /><AuthorsSkeletonItem /><AuthorsSkeletonItem /><AuthorsSkeletonItem /></div>;
        const { authors, searchText, error, hasMoreItems } = this.state;
        return (
            <AuthorsWrapper>
                <div className="section-page-authors wrap">
                    <div className="page-authors-wrap flex">
                        <input type="text" value={this.state.search} onChange={e => this.handleChange(e.target.value)} className={classNames("search-input", error && "error")} placeholder="Find an author..." />
                        <div className="search-meta">
                            <span className={classNames("search-info-wrap", searchText.length >= 3 && "hide")}>{!!!error ? "Please enter at least 3 characters." : error}</span>
                            <span className={classNames("search-counter-wrap", !(searchText.length >= 3) && "hide")}>
                                <span className="counter-results">{authors && authors.length}</span>
                                &nbsp;Results for your search</span>
                        </div>
                        {searchText.length < 3 &&
                            <div className="page-authors-title">
                                <h4>Our top authors</h4>
                            </div>
                        }
                        {!!authors && authors.length !== 0
                            ?
                            <InfiniteScroll
                                pageStart={1}
                                className="flex"
                                loadMore={this.fetchData}
                                hasMore={hasMoreItems}>
                                {
                                    authors.map(item => <AuthorsItem key={item.userName} item={item} />)
                                }
                            </InfiniteScroll>
                            :
                            loader
                        }
                    </div>
                </div>
            </AuthorsWrapper>
        );
    }
}

export default AuthorsPage;
