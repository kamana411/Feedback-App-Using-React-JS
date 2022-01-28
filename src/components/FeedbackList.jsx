import React from 'react'
import PropTypes from 'prop-types'
import Feedbackitems from './Feedbackitems'


function FeedbackList({feedback , handleDelete}) {
    if (!feedback|| feedback.length===0){
        return <p>no feedback yet</p>
    }

  return (
     <div className='feedback-list'>
        {feedback.map((item)=>(
          <Feedbackitems 
          key={item.id}
          item={item}
          handleDelete ={handleDelete}/>
        ))}
     </div>
    )   
}
export default FeedbackList;