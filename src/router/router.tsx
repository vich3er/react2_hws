import {createBrowserRouter} from "react-router-dom";
import Menu from "../components/Menu.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <Menu/>, children: [
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: "posts", element: <PostsPage/>
            },
            {
                path: 'complex', element: <ComplexPage/>
            }
        ]
    },
])
