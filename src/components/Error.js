import { useRouteError } from "react-router-dom";
const Error=()=>{
    console.log(useRouteError())
    return (
        <div>
            404 Not Found
        </div>
    )
}

export default Error;