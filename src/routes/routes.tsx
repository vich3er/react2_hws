import {createBrowserRouter} from "react-router-dom";
import ProductsPage from "../pages/ProductsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import Layout from "../layouts/Layout.tsx";

 export const routes = createBrowserRouter([
    {path: '/', element : <Layout/>,
    children: [
        {path: 'users', element: <UsersPage/>}, {path: 'comments', element: <CommentsPage/>},
        {path: "products", element: <ProductsPage/> }, {
        path: "posts", element: <PostsPage/>
        }

    ]},
    ]
)