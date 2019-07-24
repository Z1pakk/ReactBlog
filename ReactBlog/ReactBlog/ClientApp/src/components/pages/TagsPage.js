import React from "react";
import TagsWrapper from "../../common/styled/Tags/TagsWrapper.style"

export class TagsPage extends React.Component {
    // constructor(props){
    //     super(props);
        
    // }
    render() {
        return (
           <TagsWrapper>
               <div className="section-page-tags wrap">
                   <div className="page-tags-wrap flex">
                        <div class="page-tags-title">
                            <h4>Our top tags</h4>
                        </div>
                        <div class="page-tag-wrap top is-image">
                            <a href="/tag/story/" class="item-link-overlay"></a>
                            <div class="page-tag-image" style="background-image: url(https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)"></div>
                            <h2><a href="/tag/story/">Story</a></h2>
                            <p>Enean malesuada imperdiet orci nec euismod. Vivamus posuere sapien ac congue posuere. Sed ut mattis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                   </div>
               </div>
           </TagsWrapper>
        );
    }
}

export default TagsPage;
