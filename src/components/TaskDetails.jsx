import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButton = () =>{
        history.goBack();
    };

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButton}>Voltar</Button>
            </div>
            <div className="task-datails-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium expedita quo in voluptatem magnam ducimus, quasi quibusdam! Cupiditate iusto consequatur quis laboriosam explicabo odio corporis perferendis excepturi inventore culpa?</p>
            </div>
        </>
     );
}
 
export default TaskDetails;