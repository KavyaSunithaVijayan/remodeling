import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

export const RouteNavigation={
    home: "/",
    service:"/service"
}
const GenericRoute=()=>{
return(
    <Routes>
    <Route path={RouteNavigation.home} element={<HomePage />} />
    <Route path={RouteNavigation.service} element={<Services />} />
  </Routes>
)
}
export default GenericRoute