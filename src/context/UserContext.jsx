/* eslint-disable react/prop-types */


import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext=createContext({})
export function UserContextProvider({children}){
  const [user,setUser]=useState(null)

  useEffect(()=>{
     getUser()
  },[])

  const getUser=async()=>{
    try{
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
      //  console.log(res)
        setUser(res.data);
        localStorage.setItem("token", res.data.token);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
  <UserContext.Provider value={{user,setUser}}>
     {children}
  </UserContext.Provider>
  )
}




/* eslint-disable react/prop-types */
// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { URL } from "../url";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // If token exists, fetch user data using the token
//       getUser(token);
//     }
//   }, []);

//   const getUser = async (token) => {
//     try {
//       // Set the token in axios headers
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       const res = await axios.get(URL + "/api/auth/refetch", { withCredentials: true });
//       setUser(res.data);
//       // Store the token in local storage
//       localStorage.setItem("token", token);
//     } catch (err) {
//       console.log(err);
//       // Clear user and token if there's an error
//       setUser(null);
//       localStorage.removeItem("token");
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }





// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { URL } from "../url";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       getUser(token);
//     }
//   }, []);

//   const getUser = async (token) => {
//     try {
//       const res = await axios.get(URL + "/api/auth/refetch", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         withCredentials: true,
//       });
//       setUser(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const setToken = (token) => {
//     localStorage.setItem("token", token);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, setToken }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
