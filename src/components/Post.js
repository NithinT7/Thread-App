import React, { useEffect, useState } from 'react'
import Comments from './Comments'
import axios from 'axios'
const Post = () => {
    const [data, setData] = useState([])
    const [comments, setComments] = useState({});
    const [commentData, setCommentData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        }
        fetchData()
        setLoading(false);
    }, [])

    const handleClick = (id) => {
        setComments((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setCommentData(<Comments id={id} />);
    };
    const posts = data.map((post, index) =>
        <div key={index} className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{post.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
                <p className="card-text">{post.body}</p>
                {!comments[post.id] && (
                    <button className='btn comment-btn' onClick={() => handleClick(post.id)}>
                        Comments
                    </button>
                )}
                {comments[post.id] && (
                    <button className='btn comment-btn' onClick={() => handleClick(post.id)}>
                        Hide Comments
                    </button>
                )}
                {comments[post.id] && <div className="comments">{commentData}</div>}
            </div>
        </div>
    )
    return (
        <div className='Post'>
            <div className="posts">
                <h4>Posts</h4>
                {!loading && <div className='posts'>{posts}</div>}
                {loading && <div>Loading...</div>}
            </div>

        </div>

    )
}

export default Post