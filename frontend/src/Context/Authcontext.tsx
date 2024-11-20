
import {createContext, useContext, useEffect, useState,ReactNode} from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-communication";
type User ={
    name:string;
    email:string;

};
type UserAuth ={
    isLoggedIn: boolean;
    user: User | null;
    login:(email: string,password:string)=> Promise<void>;
    signup: (name:string, email: string,password: string) =>Promise<void>;
    logout: ()=> Promise<void>;
};
const Authcontext =createContext<UserAuth | null>(null);
const AuthProvider =({children} : {children: ReactNode}) =>{
    const [user, setUser] =useState<User | null>(null);
    const[isLoggedIn, setLoggedIn]= useState(false);
    useEffect(() =>{
        async function checkStatus(){
            const data = await checkAuthStatus();
            if(data){
                setUser({email: data.eamil,name: data.name});
                setLoggedIn(true);
            }
        }
        checkStatus();

    
    },[]);
    const login = async (email: string,password:string)=> {
        const data = await loginUser(email, password);
        if(data){
            setUser({email: data.email,name: data.name});
            setLoggedIn(true);
        }
    };
    const signup = async (name:string, email: string,password: string)=> {};
    const logout= async () => {};
    const value : UserAuth ={
        user,
        isLoggedIn,
        login,
        logout,
        signup,

    };
    return( <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
    );

};
export const UseAuth = () => useContext(Authcontext);
export default AuthProvider;