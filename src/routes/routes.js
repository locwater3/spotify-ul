import Home from "~/pages/Home/Home";
import Search from "~/pages/Search/Search";

// Public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/search', component: Search}
]

// Private routes


export {publicRoutes}