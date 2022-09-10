import { Outlet } from "react-router-dom"

function Event(){
    return(
        <div>
            <div>오늘의 이벤트</div>
            <Outlet></Outlet>
        </div>

    )
}

export default Event