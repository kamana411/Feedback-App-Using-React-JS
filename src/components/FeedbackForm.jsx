import Card from './shared/Card'
import {useState} from 'react'
import RatingSelect from './RatingSelect'
//import Button from './components/Button'

function FeedbackForm({handleAdd}) {
    
    const[text,setText]=useState('')
   
    const[rating,setRating]=useState('')

    const handleTextChange =(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }
    }    

  return ( 
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>Please do the rating of our service and write down the feedback below:</h2>
          <RatingSelect select={(rating)=>setRating(rating)}/>
          <div className="input-group">
              <input
              onChange={handleTextChange} 
              type='text'
              placeholder='write a review'
              value={text}/>
              <button type='submit'>send</button>
              </div>
              
      </form>
    </Card>
  )
  
}

export default FeedbackForm