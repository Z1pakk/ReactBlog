import React from "react";
import AuthorsWrapper from "../../common/styled/Authors/AuthorsWrapper";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Loader from "../../common/Loader";
import { debounce } from 'lodash';
import defaultImage from "../../common/consts/defaultImage"

export class AuthorsPage extends React.Component {
    state = {
        searchText:"",
        error:null,
        authors:[],
        loading:false
        // authors: [
        //     {
        //         image: "https://nurui.fueko.net/content/images/2018/12/ao-275953-unsplash.jpg",
        //         name: "Vlad Shusmkiy",
        //         description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        //         link: "vlad"
        //     },
        //     {
        //         name: "Vlad Shusmkiy",
        //         description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        //         link: "vlad2"
        //     },
        //     {
        //         name: "Vlad Shusmkiy",
        //         description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        //         link: "vlad2"
        //     },
        //     {
        //         name: "Vlad Shusmkiy",
        //         description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        //         link: "vlad2"
        //     }
        // ]
    }
    componentDidMount(){
        this.fetchData("");
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
                authors:res,
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
        const { authors,searchText,error,loading } = this.state;
        return (
            <AuthorsWrapper>
                <div className="section-page-authors wrap">
                    <div className="page-authors-wrap flex">
                        <input type="text" value={this.state.search} onChange={e=>this.handleChange(e.target.value)} className={classNames("search-input",error&&"error")} placeholder="Find an author..." />
                        <div className="search-meta">
                            <span className={classNames("search-info-wrap",searchText.length>=3&&"hide")}>{!!!error?"Please enter at least 3 characters.":error}</span>
                            <span className={classNames("search-counter-wrap",!(searchText.length>=3)&&"hide")}>
                                <span className="counter-results">{authors&&authors.length}</span>
                                &nbsp;Results for your search</span>
                        </div>
                        {searchText.length<3&&
                        <div className="page-authors-title">
                            <h4>Our top authors</h4>
                        </div>
                        }
                        {!!loading?<Loader />:
                        authors&&authors.map(item =>
                            <div key={item.id} className={classNames("page-author-wrap", !!item.image ? "is-profile-image no-cover-image" : "no-profile-image is-cover-image")}>
                                <Link to={`/author/${item.link}`} className="item-link-overlay"></Link>
                                {item.image ? <div className="page-author-profile-image" style={{ "backgroundImage": "url(" + item.image + ")" }}></div> :
                                    <div className="page-author-cover-image" style={{ "backgroundImage": "url("+defaultImage+")" }}></div>}
                                <h2>
                                    <Link to={`/author/${item.link}`}>{item.name}</Link>
                                </h2>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </AuthorsWrapper>
        );
    }
}

export default AuthorsPage;
