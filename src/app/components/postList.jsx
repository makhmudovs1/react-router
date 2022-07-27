import React from 'react';

const PostList = ({posts}) => {
    // console.log(posts);
    return <>
        {posts.map((post) => (<h3 key={post.id}>{post}</h3>))};
    </>
};

export default PostList;