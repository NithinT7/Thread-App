import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Comments = ({id}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            setData(response.data)
        }
        fetchData();
    }, [])
    console.log(data);
    const comments = data.map((comment, index) =>
        <div key={index} className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{comment.name}</h6>
                <p className="card-text">{comment.body}</p>
            </div>
        </div>
    );
  return (
    <div class="comment-thread">{comments}</div>
  )
}

export default Comments