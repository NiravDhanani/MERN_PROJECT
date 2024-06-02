// import { createContext, useContext, useEffect, useState } from "react"


// const Logincontext = createContext()

// export const AuthProvider = ({children}) =>{
//     const [login,setLogin] = useState({
//         user : null,
//         token : null,
//     })
//     useEffect(()=>{
//         const data = JSON.parse(localStorage.getItem('Login'));
//         if(data){
//             setLogin({
//                 ...login,
//                 user : data.uselogin,
//                 token :data.token
//             })
//         }
//     },[])

//  return (
//     <>
//         <Logincontext.Provider value={[login,setLogin]}>
//             {children}
//         </Logincontext.Provider>
//     </>
//  )
// }

// export const useLoginAuth = () =>{
//     return useContext(Logincontext)
// }