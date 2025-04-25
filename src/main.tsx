
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import Layout from "./layouts/Layout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path ={'/posts'} element={<PostsPage/>} />
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/products'} element={<ProductsPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>




)
