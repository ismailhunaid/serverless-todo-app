const { gql } = require('apollo-server-lambda')


const typeDefs = gql`
type Query{
    todos:[Todos!]
    posts:[Posts!]
    name:String!
    age:Int

}
type Todos {
    id:ID
    task:String
    status:Boolean
}
type Posts {
    id:ID
    title:String
    body:String
}
type Mutation {
    addTodos(input:AddTodosInput):Todos
    deleteTodos(input:DeleteTodosInput):Todos
    updateTodos(input:UpdateTodosInput):Todos
}
input AddTodosInput {
    task:String!
}
input DeleteTodosInput{
    id:ID!
}

input UpdateTodosInput{
    id:ID!
    task:String!
}





`
module.exports = {
    typeDefs
}