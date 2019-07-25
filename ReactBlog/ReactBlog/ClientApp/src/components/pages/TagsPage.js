import React from "react";
import TagsWrapper from "../../common/styled/Tags/TagsWrapper.style"
import { debounce } from 'lodash';
import { Link } from "react-router-dom";
import classNames from "classnames";
import Loader from "../../common/Loader";

export class TagsPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:"",
            error:null,
            loading:false,
            topTags:[
                {
                    id:1,
                    name:"Nature",
                    image:"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ",
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                },
                {
                    id:2,
                    name:"Sport",
                    image:"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ",
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                },
                {
                    id:3,
                    name:"Animals",
                    image:"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ",
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                },
                {
                    id:4,
                    name:"Animals",
                    image:"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ",
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                },
                {
                    id:5,
                    name:"Animals",
                    image:"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ",
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
                }
            ],
            searchTags:undefined,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    }
    fetchData(name){
        this.setState({
            loading:true
        })
        fetch("https://my.api.mockaroo.com/topauthors.json?key=20141000").then((res)=>{
            return res.json();
            })
        .then((res)=> {
            this.setState({
                searchTags:res,
                loading:false
            });
        })
    }
    handleChange = debounce((text) => {
        console.log(text);
        if(text.length<3){
            this.setState({
                error:"Please enter at least 3 characters."
            })
        }
        else{
            this.fetchData(text);
            this.setState({
                error:null
            })
        }
        this.setState({
            searchText:text
        })
    },1000)
    render() {
        const {searchText,topTags,error,loading,searchTags}=this.state;
        const tags=searchTags&&searchText.length>=3?searchTags:topTags;
        return (
           <TagsWrapper>
               <div className="section-page-tags wrap">
                   <div className="page-tags-wrap flex">
                        <input type="text" value={this.state.search} onChange={e=>this.handleChange(e.target.value)} className={classNames("search-input",error&&"error")} placeholder="Find an tag..." />
                        <div className="search-meta">
                            <span className={classNames("search-info-wrap",searchText.length>=3&&"hide")}>{!!!error?"Please enter at least 3 characters.":error}</span>
                            <span className={classNames("search-counter-wrap",!(searchText.length>=3)&&"hide")}>
                                <span className="counter-results">{searchTags&&searchTags.length}</span>
                                &nbsp;Results for your search</span>
                        </div>
                        {searchText.length<3&&
                            <div className="page-tags-title">
                                <h4>Our top tags</h4>
                            </div>
                        }
                        {!!loading?<Loader />:
                        tags.map(item=>
                        <div key={item.id} className="page-tag-wrap top is-image">
                            <Link to={`/tag/${item.name}`} className="item-link-overlay"></Link>
                            <div className="page-tag-image" style={{ "backgroundImage": "url(" + item.image + ")" }}></div>
                            <h2> <Link to={`/tag/${item.name}`}>{item.name}</Link></h2>
                            <p>{item.description}</p>
                        </div>
                        )}
                        {/* <div className="page-tags-title">
                            <h4>You might also like</h4>
                        </div>
                        <div className="page-tag-wrap other is-image">
                            <a href="/tag/story/" className="item-link-overlay"></a>
                            <div className="page-tag-image" style={{"backgroundImage": "url(https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)"}}></div>
                            <h2><a href="/tag/story/">Story</a></h2>
                        </div> */}
                   </div>
               </div>
           </TagsWrapper>
        );
    }
}

export default TagsPage;
