import { useEffect, useState } from "react"
import { useParams ,Link} from "react-router-dom"

function Getpostbycatagory(){
    let {category}=useParams()

const [items ,setitems] = useState([])

useEffect(()=>{
    fetch(`https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=${category}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setitems(res)
    })
},[category])


const[recents,setrecents]=useState([])
useEffect(()=>{
    fetch("https://webeetec.com/itsharks24/blog/api/getrecentpost.php")
    .then(res =>res.json())
    .then(res =>{
        console.log(res)
        setrecents(res)

},)
},[])


    return(
        
	<section class="container">
    <div class="wrapper clear">



{

items.map(item=>{

    return(  <div class="contentLeft">
    <div class="archivePageTitle"><span>{item.category}</span></div>
    <div class="archivePostWrap">



        <div class="archivePostItem">
            <div class="archivePostTime">{item.date}</div>
            <h3 class="archivePostTitle"><Link to={"single/" + item.id}>{item.title}</Link></h3>
            <a href="single.html" class="archivePostCategory">{item.category}</a>
            <a href="single.html" class="archivePostImg">
                <img src={`https://webeetec.com/itsharks24/blog/admin/${item.image}`} alt="Francoise img" />
            </a>
            <p>{item.description}</p>
            <div class="archivePostItemMeta">
                <a href="#" class="archivePostItemComments">124 Comments</a>
                <div class="archivePostItemShareLinks">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                </div>
                <a href="single.html" class="archivePostReadMore">Read More</a>
            </div>
        </div>

        
    </div>
    <div class="postPagination">
        <ul class="clear">
            <li class="newPosts"><a href="#">New posts</a></li>
            <li class="olderPosts"><a href="#">Older posts</a></li>
        </ul>
    </div>
</div>
        



    )
})

}

      
        <div class="sidebarRight">
            <div class="sidebar-widget">
                <h3>About us</h3>
                <div class="aboutMeWidget">
                    <img src="https://blogpost89.netlify.app/images/ourlogo.png" alt="Francoise img" />
                    <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                </div>
            </div>
            <div class="sidebar-widget">
                <h3>follow me</h3>
                <div class="followMeSocialLinks">
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <span></span>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <span></span>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <span></span>
                    <a href="#"><i class="fa fa-heart"></i></a>
                    <span></span>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                    <span></span>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                </div>
            </div>
            
            <div className="sidebar-widget">
					<h3>Recent post</h3>
					{
            recents.map(recent =>{
                return(

					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src={`https://webeetec.com/itsharks24/blog/admin/${recent.image}`} alt="Francoise img" /></a>
							<time dateTime="2015-05-15">{recent.date}</time>
							<h4><a href="#">{recent.title}</a></h4>
						</div>
						
					</div>
                )
            })
}
				</div>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>

    )
}


export default Getpostbycatagory