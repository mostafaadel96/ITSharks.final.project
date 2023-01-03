import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Home(){

const [posts , setposts] =useState([])

useEffect(()=>{
    fetch("https://webeetec.com/itsharks24/blog/api/getposts.php")
    .then(res => res.json())
    .then(res => {console.log(res)
    setposts(res)})
},[])

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
        <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
				
 {
                posts.map(post =>{
                    return(
                        <div className="blogPostListItem clear">
						<a href="single.html" className="blogPostListImg">
							<img src={`https://webeetec.com/itsharks24/blog/admin/${post.image}`} alt="Francoise img" />
						</a>
						<div className="blogPostListText">
							<div className="blogPostListTime">{post.date}</div>
							<h3><Link to={"single/" + post.id}>{post.title}</Link></h3>
							<p>{post.description}</p>
						</div>
					</div>


                    )
                })
 }

					
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="https://blogpost89.netlify.app/images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-google-plus"></i></a>
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
export default Home