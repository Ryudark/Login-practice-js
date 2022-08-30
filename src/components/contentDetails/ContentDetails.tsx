import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detailVideo } from "../../redux/actions/actions"
import { detail } from "../../services/Services"
import { Data } from "../Types/Types"
// import { getAllGames } from "../../redux/actions/actions"

export default function ContentDetails() {

    const info= useSelector(state=>state)
    const dispatch= useDispatch()

    const data= info as Data
    
    console.log(info as Data)

    useEffect(()=>{
        async function service(){
            let info=await detail("5679")
            dispatch(detailVideo(info as object))
        }
        service()
    },[])

    return (
        <div>
            <h2>Title</h2>
            <img src="../../images/1.jpg" alt="video" />
            {/* <video width="320" height="240">
                <source src="../../../images/video.mp4" type="video/mp4" />
                su navegador no soporta mp4
            </video> */}
            <p>resumen</p>
            {/* <button onClick={click}>click</button> */}

        </div>
    )
}
