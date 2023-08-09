import React,{useEffect, useState} from 'react'

function ShowComments() {
    const [comments, setComments]= useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/announcements').then(res=>{
           return  res.json()
        }).then(data=>{
            // console.log(data)
            setComments(data)
        })
    },[])
  return (
    <div>
        <h4>Announcements </h4>
        <h6>This section is reserved for announcements only</h6>
        {comments?.map(comment =>{
            return (
                <h5 id={comment.id}>{comment.content}</h5>
                // <p>{comment.date}</p>
            )
        })}
    </div>
  )
}

export default ShowComments