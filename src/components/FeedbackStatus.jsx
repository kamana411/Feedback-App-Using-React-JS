import React from 'react'

function FeedbackStatus({ feedback }) {
    let average=feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/feedback.length



    return (
      <div className='feedback-stats'>
         <h3>{ feedback.length }Reviews</h3>
         <h4> Average Rating:{average}</h4>
        </div>
    )    
}

export default FeedbackStatus;