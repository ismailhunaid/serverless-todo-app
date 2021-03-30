import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { DeleteTask } from './DeleteTodos'
import { UpdateTask } from './UpdateTask';


export const GET_TODOS = gql`
query{
  todos{
    id
    task
    status
    
  }
}
`;
export const GetTodos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <h2>Loading..</h2>;

  if (error) {
    console.log(error);
    return <h2>Error</h2>;
  }
  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      {data.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <div>
            <span>{todo.task}</span>

            </div>

            
            <div>
              <DeleteTask todos={todo} />
              <UpdateTask todos={todo} />

            </div>







          </li>
        )
      })}
    </div>




  )

}
