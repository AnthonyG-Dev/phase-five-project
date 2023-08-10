import React, {useState} from 'react'
import ShowComments from './ShowComments'

function NewComment({sendComment}) {

    const [comment, setComment] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        const  obj= {'content':comment, "course_id":24}
        sendComment(obj)

    }
    const handleChange =(e)=>{
        // console.log(e.target.value)
        setComment(e.target.value)
    } 
  return (<>
    <div >
    <ShowComments/>
        <form onSubmit={handleSubmit}>

        <input  type='text' value={comment} onChange={handleChange}/>
      <button type='submit'>Submit</button>
        </form>
    </div>
    
    <div>




    </div>
  </>

  )
}


export default NewComment

