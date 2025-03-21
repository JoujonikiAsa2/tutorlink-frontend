/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const registerUser = async(userData: FieldValues, role:string) =>{
    console.log(role)
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register/${role}`, {
            method: 'POST',
            headers:{
                'Content-Type': "application/json",
            },
            body: JSON.stringify(userData)
        })
    
        return res.json()
    }
    catch(error: any){
        Error(error)
    }
}

export const loginUser = async(userData: FieldValues) =>{
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                'Content-Type': "application/json",
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json()
        if(result.success){
            (await cookies()).set("accessToken", result.data.accessToken)
        }
        return result
    }
    catch(error: any){
        Error(error)
    }
}

export const getCurrentUser = async() =>{
    const accessToken = (await cookies()).get("accessToken")?.value
    let decodedData = null
    if(accessToken){
        decodedData = await jwtDecode(accessToken)
        console.log("decoded data",decodedData)
    }
    return decodedData
}
export const logout = async() =>{
    (await cookies()).delete('accessToken')
}