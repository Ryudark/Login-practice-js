import axios from "axios"
import { GET, GET_DETAIL, LOGIN } from "../../components/constants/Constants"
import data from '../../components/constants/user.json' ;



export function ingresa(payload:object){
    console.log(data)
    // let info = data.find(f=>f.user as string==="Steven")
    // console.log(info)
    
    const user=payload
    console.log(user)
    return{
        type:LOGIN,
        payload:payload
    }
}
export function log(payload:object){
    return {
        type:GET,
        payload:payload
    }
}

export function detailVideo(payload:object){
    return {
        type:GET_DETAIL,
        payload:payload
    }
}
