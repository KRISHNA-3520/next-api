import { headers } from "next/dist/client/components/headers";
import { useDebugValue, useState } from "react";

function Comments() {
const[comments,setComments]=useState([])
const [comment,setComment]=useState('')


const fetchComments=async()=>{
  const response=await fetch('/api/comments')
  const data=await response.json()
  setComments(data)
}

const submitComment=async(context)=>{
  const response=await fetch('/api/comments',{
    method:'POST',
    body:JSON.stringify({comment}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const data=await response.json()
  console.log(data)
}

const deleteComment=async(commentId)=>{
  const response=await fetch(`/api/comments/${commentId}`,{
    method:'DELETE'
  })
  const data=response.json()
  fetchComments()
}

  return (
    <>
    <input type='text' value={comment} onChange={e=>setComment(e.target.value)}/>
    <button onClick={submitComment}>Submit Comment</button>
    <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {comment.id} {comment.text}
              <button onClick={()=>deleteComment(comment.id)}>Delete Comment</button>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
