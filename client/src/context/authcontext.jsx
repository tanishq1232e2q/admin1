import { Children, createContext, useContext,useState } from "react";
import { useEffect } from "react";
export const authcontext=createContext()


export const Authprovider=({children})=>{
    const [token, settoken] = useState(localStorage.getItem("token"))
const [user, setuser] = useState("")

const authtoken=`Bearer ${token}`
    const storetoken=(servtoken)=>{
        settoken(servtoken)
        return localStorage.setItem("token",servtoken)
    }

    let isloggedin=!!token//if token is true then isloggedin true otherwise false

    const Logoutuser=()=>{
        settoken("")
        localStorage.removeItem("token");
        
    }

    const userauthentication=async()=>{
        try {
            const response=await fetch("http://localhost:8000/api/auth/user",{
                method:"GET",
                headers:{
                    authorization:authtoken
                },
                // body: JSON.stringify(user)
            });
            console.log(response);

            const data=await response.json();
            // return response.json(data)
            console.log("user data",data);
            setuser(data)
            if(response.ok){
            }
        } catch (error) {
            console.log(error);
        }
    };

    
    
    
    useEffect(() => {
      userauthentication();
    
      
    }, [])

    return( 
    <authcontext.Provider value={{storetoken,isloggedin,Logoutuser,user,authtoken}}>
        {children}
    </authcontext.Provider>)
}

export const useauth=()=>{
    return useContext(authcontext)
}