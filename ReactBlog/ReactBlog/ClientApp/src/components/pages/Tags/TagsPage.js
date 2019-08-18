import React from "react";
import TagsWrapper from "../../../common/styled/Tags/TagsWrapper.style"
import { debounce } from 'lodash';
import classNames from "classnames";
import TagItem from "./TagItem";
import TagSkeletonItem from "./TagSkeletonItem";
import { getTopTags } from "../../../actions/tags";
import InfiniteScroll from 'react-infinite-scroller';

export class TagsPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:"",
            error:null,
            tags:[],
            hasMoreItems:false
        }
    }
    componentDidMount(){
        this.fetchData(1);
    }
    fetchData=(page)=>{
        const{ searchText }=this.state;
        getTopTags(searchText,page,36).then((res)=>{
            const items=this.state.tags.concat(res.items);
            this.setState({
                tags:items,
                hasMoreItems:res.isHasNext
            })
        })

    }
    handleChange = debounce((text) => {
        console.log(text);
        if(text.length<3){
            this.setState({
                searchText: "",
                tags: [],
                error: "Please enter at least 3 characters."
            })
        }
        else{
            this.setState({
                error: null,
                tags: [],
                searchText: text
            })
        }
        this.fetchData(1);
    },1000)
    render() {
        const loader = <div className="items-wrap flex"><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /><TagSkeletonItem /></div>;
        const {searchText,tags,error,hasMoreItems}=this.state;
        return (
           <TagsWrapper>
               <div className="section-page-tags wrap">
                   <div className="page-tags-wrap flex">
                        <input type="text" value={this.state.search} onChange={e=>this.handleChange(e.target.value)} className={classNames("search-input",error&&"error")} placeholder="Find an tag..." />
                        <div className="search-meta">
                            <span className={classNames("search-info-wrap",searchText.length>=3&&"hide")}>{!!!error?"Please enter at least 3 characters.":error}</span>
                            <span className={classNames("search-counter-wrap",!(searchText.length>=3)&&"hide")}>
                                <span className="counter-results">{tags&&tags.length}</span>
                                &nbsp;Results for your search</span>
                        </div>
                        {searchText.length<3&&
                            <div className="page-tags-title">
                                <h4>Our top tags</h4>
                            </div>
                        }
                        {!!tags && tags.length !== 0
                            ?
                            <InfiniteScroll
                                pageStart={1}
                                className="flex"
                                loadMore={this.fetchData}
                                hasMore={hasMoreItems}>
                                {
                                    tags.map(item => <TagItem key={item.userName} item={item} />)
                                }
                            </InfiniteScroll>
                            :
                            loader
                        }
                   </div>
               </div>
           </TagsWrapper>
        );
    }
}

export default TagsPage;
