import { useContext } from "react";
import videoDispatchContext from "../Context/VideoDispatchContext";


function useVideoDispatch(){

    const dispatch= useContext(videoDispatchContext)
    return dispatch;
}
export default useVideoDispatch;
