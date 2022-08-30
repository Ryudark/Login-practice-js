import React, { useEffect } from 'react'
import { video } from '../../services/Services'
import { log } from "../../redux/actions/actions";
import { useDispatch, useSelector } from 'react-redux';

export default function ContentCategory() {


    const info= useSelector(state=>state)
    const dispatch= useDispatch()

    console.log(info)

    useEffect(()=>{
        async function service(){
            let info=await video()
            dispatch(log(info as object))
        }
        service()
    },[])
    
    return (
        <div>
            <div>Categoria</div>
            
        </div>
    )
}
