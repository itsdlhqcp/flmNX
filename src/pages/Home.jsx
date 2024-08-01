import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import { URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
// import Loader from "../components/Loader"
import { UserContext } from "../context/UserContext"
import SkeletonCard from "../components/Skeletons/SkeletonCard";
// import TriNav from "../components/TriNav"



const Home = () => {

  const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)


// after all backend posts tests passed 
// frontend connection fetching done here
// const fetchPosts=async()=>{
//   setLoader(true)
//   try{
//     const res=await axios.get(URL+"/api/posts/"+search)
//     console.log(res.data)
//     setPosts(res.data)
//     if(res.data.length==0){
//       setNoResults(true)
//     }
//     else{
//       setNoResults(false)
//     }
//     setLoader(false)
//   }catch(err){
//     console.log(err)
//     setLoader(true)
//   }
// }



const fetchPosts = async () => {
  setLoader(true);
  try {
    const res = await axios.get(URL + "/api/posts/" + search);
    console.log(res.data);
    const sortedPosts = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setPosts(sortedPosts);
    if (res.data.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setLoader(false);
  } catch (err) {
    console.log(err);
    setLoader(true);
  }
};

useEffect(()=>{
  fetchPosts()
},[search])

  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-1 md:px-[200px] min-h-[80vh]"> 
        <br/>
        <br/>
        <br/>
        <br/>
        {loader?
        

        <div className="skeleton_emp">
          {
            [...Array(6)].map(() => {
              return (
                // theme dark :> default : light
                <SkeletonCard key={uuidv4()} />
              )
            })}
        </div>
        
        // <div className="h-[40vh] flex justify-center items-center"><Loader/></div>
        
        
        :!noResults?posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePost key={post._id} post={post}/>
          </Link>
          </>
         
        )):<h3 className="mt-32 font-bold text-center ">No posts available!</h3>}
        <br/>
        {/* <HomePost/>
        <HomePost/>
        <HomePost/> */}
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Home


