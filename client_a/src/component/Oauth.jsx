import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"


export default function Oauth(){
    const [auth_code, _] = useSearchParams();
    useEffect(() => {
        axios.post({
            
        })
    })
    return (
        <h1>{auth_code.get("code")}</h1>
    )
}