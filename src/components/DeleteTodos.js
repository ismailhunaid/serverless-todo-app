import React from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { GET_TODOS } from './GetTodos';

const DELETE_TODOS = gql`

mutation deleteTodos($input:DeleteTodosInput){
    deleteTodos(input:$input){
        id 
        task
        status
    }
}


`;


export const DeleteTask = (props) => {
    // console.log(props.todos.id)
    const { id } = props.todos
    console.log(id)


    const [deleteTodos] = useMutation(DELETE_TODOS)

    const deleteTask = (id) => {
        console.log(id)
        deleteTodos({
            variables: {
                input: {
                    id
                }
            },
            refetchQueries: [{ query: GET_TODOS }]
        })
    }
    return (
        <div>

            <button onClick={() => deleteTask(id)}> DELETE</button>

        </div>
    )
}