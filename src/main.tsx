import {createRoot} from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import CommentsJsonPlaceholderPage from "./pages/CommentsJsonPlaceholderPage.tsx";
import UsersJsonplaceholderPage from "./pages/UsersJsonplaceholderPage.tsx";
import UsersDummyJsonPage from "./pages/UsersDummyJsonPage.tsx";
import PostsJsonPlaceholderPage from "./pages/PostsJsonPlaceholderPage.tsx";
import PostsDummyPage from "./pages/PostsDummyPage.tsx";

const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>,
        children: [
            {path: "users/jsonplaceholder", element: <UsersJsonplaceholderPage/>},
            {path: "users/dummyjson", element: <UsersDummyJsonPage/>},
            {
                path: 'posts/jsonplaceholder', element: <PostsJsonPlaceholderPage/>,
            },
            {
                path: "posts/dummyjson", element: <PostsDummyPage/>,
            }
            ,
            {
                path: "comments/jsonplaceholder", element: <CommentsJsonPlaceholderPage/>
            }

        ]

    },
])
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
