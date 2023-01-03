import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Singlepost(){
let {id}=useParams()
const [pages,setpages] =useState()
useEffect(()=>{
    fetch(`https://webeetec.com/itsharks24/blog/api/singlepost.php?id=${id}`)
    .then(res =>res.json())
    .then(res =>{
        console.log(res)
        setpages(res)
    })
},[id])




return(

<section className="container">
		<div className="wrapper clear">

{
        pages.map(page =>{
            return(
            <div className="contentLeft">
				<div className="singlePostMeta">
					<div className="singlePostTime">{page.date}</div>
					<h1>{page.title}</h1>
					<a href="#" className="singlePostCategory">{page.category}</a>
				</div>
				<div className="singlePostWrap">
					<div className="singlePostImg">
						<img src={`https://webeetec.com/itsharks24/blog/admin/${page.image}`} alt="Francoise img" />
				</div>
					<p>{page.description}.</p>
					
			</div>
				
				
				
				
				
			</div>
            )
        })
}
			


			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="https://blogpost89.netlify.app/images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				
					
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
)

}
export default Singlepost