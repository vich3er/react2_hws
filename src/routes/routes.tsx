import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../pages/Layout.tsx";

import {PostsPage} from "../pages/PostsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";


export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>,
        children: [
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>}
        ]
    }
])

