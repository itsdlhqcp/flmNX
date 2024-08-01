/* eslint-disable react/prop-types */
// import { IF } from "../url"



// const HomePost = ({post}) => {
//   return (
//     <div className="flex w-full max-w-screen-xl mt-4 space-x-4 bg-gray-200 rounded-lg">
//        {/* left */}
//        <div className="w-[32%] h-auto flex justify-center items-center">
//        <img src={IF+post.photo} alt="" className="object-cover w-full h-full"/>
//        </div>
//         {/* right */}
//         <div className="flex flex-col w-[65%]">
//         <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">{post.title}</h1>
//         <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
//             <p>@{post.username}</p>
//             <div className="flex space-x-2">
//                 <p>{new Date(post.updatedAt).toString().slice(0,10)}</p>
//                 <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//             </div>
//         </div>
//         <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
//         </div>

//     </div>
//   )
// }

// export default HomePost



// /* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
  
    <div className="relative flex p-2 max-w-screen-xl w-full mt-2 space-x-3 bg-stone-100 rounded-t-lg  border-4 border-stone-200 border-x-stone-500 ...">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="object-cover w-full h-full"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex items-center justify-between mb-2 font-semibold text-gray-500 text-md md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm ">
       <p>{new Date(post.updatedAt).toString().slice(3,15)}</p>
       </div>
      </div>
      <p className="text-sm text-black md:text-lg">{post.desc.slice(0,210)+" ..."}</p>
      <div className="flex items-center mt-auto space-x-4 font-semibold">
             <div className="flex items-center justify-center space-x-2">
                  {post.categories?.map((c, i) => (
              <div key={i} className={`px-3 py-0 rounded-lg text-white ${c === "#buzz" ? "bg-green-700" : (c === "#rumor" ? "bg-red-700" : (c === "#official" ? "bg-blue-700" : "bg-gray-600"))}`}>
        {c}
      </div>
           ))}
            </div>
       </div>
    </div>

    </div>

  )
}

export default HomePosts