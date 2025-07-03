import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {commentsSliceActions} from "../redux/slices/commentsSlice.ts";
import {postsSliceActions} from "../redux/slices/postsSlice.ts";
import {usersSliceActions} from "../redux/slices/usersSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {UserComponent} from "../components/UserComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {CommentComponent} from "../components/CommentComponent.tsx";

export const ComplexPage = () => {
const  comments = useAppSelector(({commentsSlice}) =>commentsSlice.comments);
const {users} = useAppSelector(({usersSlice}) =>usersSlice);
const {posts} = useAppSelector(({postsSlice}) =>postsSlice);
const dispatch = useAppDispatch();
const {isLoadingComments} = useAppSelector(({commentsSlice}) =>commentsSlice);
const {isLoadingPosts} = useAppSelector(({postsSlice}) =>postsSlice);
    const {isLoadingUsers} = useAppSelector(({usersSlice}) =>usersSlice);

    const isLoading = isLoadingPosts || isLoadingComments || isLoadingUsers;
    useEffect(() => {
        if (comments.length==0)
        {
            dispatch(commentsSliceActions.loadComments())
        }
        if(posts.length==0)
            dispatch(postsSliceActions.loadPosts())
        if(users.length==0)
            dispatch(usersSliceActions.loadUsers())
    }, []);


    return (
       <div>
           {
               isLoading? <div>Loading...</div> :

                   <div>
                       <div className={'bg-indigo-600 rounded-md p-1 inline-block text-white'}>Users</div>
                       {
                           users&&users.map((user) =>
                               (
                                   <UserComponent
                                       name={user.name}
                                       username={user.username}
                                       email={user.email}
                                       address={user.address}
                                       company={user.company}
                                       phone={user.phone}
                                       website={user.website}
                                       key={user.id}

                                   />
                               )

                           )
                       }
                       <div className={'bg-indigo-600 rounded-md p-1 inline-block text-white'}>Posts</div>
                       <div className='grid grid-cols-3 gap-1'>{
                           posts&& posts.map((post) =>  <PostsComponent userId={post.userId} title={post.title} body={post.body}/>)
                       }
                       </div>
                       <div className={'bg-indigo-600 rounded-md p-1 inline-block text-white'}>Comments</div>
                       {
                           comments&& comments.map((comment) => <CommentComponent postId={comment.postId}
                                                                                  name={comment.name}
                                                                                  email={comment.email}
                                                                                  body={comment.body}/>)
                       }


                   </div>
           }
       </div>
    );
};