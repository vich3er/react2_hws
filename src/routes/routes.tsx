import {createBrowserRouter} from "react-router-dom";

import Layout from "../layouts/Layout.tsx";
import UsersJsonPage from "../pages/UsersJsonPage.tsx";
import PostsJsonPage from "../pages/PostsJsonPage.tsx";
import PostsDummyPage from "../pages/PostsDummyPage.tsx";
import CommentsJson from "../pages/CommentsJson.tsx";
import CommentsDummy from "../pages/CommentsDummy.tsx";
import UsersDummyPage from "../pages/UsersDummyPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:
            [
                {path: "users/jsonplaceholder", element: <UsersJsonPage/>},
                {path: "users/dummyjson", element: <UsersDummyPage/>},
                {path: "posts/jsonplaceholder", element: <PostsJsonPage/>},
                {path: "posts/dummyjson", element: <PostsDummyPage/>},
                {path: "comments/jsonplaceholder", element: <CommentsJson/>},
                {path: "comments/dummyjson", element: <CommentsDummy/>}

            ]
    }
])