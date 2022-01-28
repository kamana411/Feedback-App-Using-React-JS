import { v4 as uuidv4} from 'uuid'
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStatus from './components/FeedbackStatus'
//import Card from "./components/shared/Card"
import FeedbackForm from "./components/FeedbackForm"
//import Button from "./components/Button"
function App() {
  
  const [feedback, setFeedback] = useState(FeedbackData)
  //const [ newFeedback]=useState('')
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])

  }

  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to clear this feedback")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        
        <FeedbackStatus feedback={feedback}/>
        <FeedbackList feedback={feedback}
         handleDelete={deleteFeedback} 
        />
      </div>
    </>
  )
}

export default App