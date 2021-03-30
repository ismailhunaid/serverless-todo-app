import React from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { GET_TODOS } from './GetTodos';



const ADD_TODOS = gql`
	mutation addTodos($input: AddTodosInput) {
		addTodos(input: $input) {
            id
            task
            status
            
		}
	}
`;



export const AddTodos = () => {
    let task;
    const [addTodos] = useMutation(ADD_TODOS);

    const addTask = () => {
        console.log(task.value)
        addTodos({
            variables: {
                input: {
                    task: task.value
                }
            },
            refetchQueries: [{ query: GET_TODOS }]
        })
            .then(data => { return console.log(data) })
            .catch(error => console.log(error));
        task.value = ""

    };


    return (
        <div>
            <h2>ADD TODOS FORM</h2>

            <input type="text" ref={node => task = node} />

            <button className="add_button" onClick={addTask}>Add Task</button>
        </div>


    )
}


