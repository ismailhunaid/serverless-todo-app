import React from 'react'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { GET_TODOS } from './GetTodos';


const UPDATE_TODOS = gql`
	mutation updateTodos($input:UpdateTodosInput) {
		updateTodos(input:$input) {
			id
			task
		}
	}
`;
export const UpdateTask=(props)=> {
    const [updateTodos] = useMutation(UPDATE_TODOS)
    const { id } = props.todos

    const updateTask = (id) => {
        var taskInput = prompt('Update Task');
        updateTodos({
            variables:{
                input:{
                    id:id,
                    task:taskInput
                }
            },refetchQueries:[{query:GET_TODOS}]
        }).then(data => { return console.log(data) })
        .catch(error => console.log(error));

    }
        

    
    return (
        <div>
            <span>
            <button onClick={() => updateTask(id)}> UPDATE </button>

            </span>
            

        </div>
    )
}


