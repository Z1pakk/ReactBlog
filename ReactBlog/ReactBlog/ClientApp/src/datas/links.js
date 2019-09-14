const links=[
    {
        url:"/",
        title:"Home",
        attr:{
            exact:true
        }
    },
    {
        url:"/authors",
        title:"Authors",
    },
    {
        url:"/tags",
        title:"Tags"
    },
    {
        url:"/login",
        title:"Sign In",
        isGuest:true
    },
    {
        url:"/signup",
        title:"Sign Up",
        isGuest:true
    },
    {
        url:"/profile",
        title:"My Profile",
        isAuthorize:true
    },
    
]

export default links;