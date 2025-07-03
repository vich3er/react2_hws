import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {postsSliceActions} from "../redux/slices/postsSlice.ts";
import {useEffect} from "react";
import {PostsComponent} from "../components/PostsComponent.tsx";

export const PostsPage = () => {
    const {posts} = useAppSelector(({postsSlice}) => postsSlice);
    console.log(posts);
    const dispatch = useAppDispatch();
    console.log(postsSliceActions);

    useEffect(() => {
      if(posts.length==0){
          dispatch(postsSliceActions.loadPosts())
      }
    }, [])

    return (
        <div className='grid grid-cols-3 gap-1'>{
            posts&& posts.map((post) =>  <PostsComponent userId={post.userId} title={post.title} body={post.body}/>)
        }
        </div>
    );
};