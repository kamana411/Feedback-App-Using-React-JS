import PropTypes from 'prop-types'
import Card from './shared/Card'

function Feedbackitems({ item ,handleDelete}) {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div>
                <button onClick={()=> handleDelete(item.id)}
                 className='close'>
                    <atcolor>delete</atcolor>
                </button>    
            </div>
            <div className='text-display'>{item.text}</div>
        </Card>


    )
}

export default Feedbackitems