import axios from "axios";
import { ingresa } from "../redux/actions/actions";

const KEY:string = "4dc69ce8a337429c8e9bb7b7d14a8e0f"
export async function video() {
    let video =await axios.get(`https://api.rawg.io/api/games?key=${KEY}`)
    try {
        return video

    } catch (error) {
        console.log(error)
    }
}

export async function loguin(user:object){
    try {
        return await ingresa(user)
    } catch (error) {
        console.log(error)
    }
}

export async function detail(params:string) {
    console.log(params)
    let detail= await axios.get(`https://api.rawg.io/api/games/${params}?&key=${KEY}`)
    try {
        return detail

    } catch (error) {
        console.log(error)
    }
}