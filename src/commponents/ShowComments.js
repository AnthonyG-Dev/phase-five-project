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
        <h3>Announcements </h3>
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
