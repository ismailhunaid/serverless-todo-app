const { ApolloServer } = require('apollo-server-lambda')
const { typeDefs } = require('./schema')
const faunadb = require('faunadb'),
  q = faunadb.query;
console.log(q)
require('dotenv').config();

const posts = [
  { id: '1', title: "first post", body: "this is my first post" },
  { id: '2', title: "second post", body: "this is my second post" },
  { id: '3', title: "third post", body: "this is my third post" },
  { id: '4', title: "fourth post", body: "this is my fourth post" },
  { id: '5', title: "fifth post", body: "this is my fifth post" }
]



const resolvers = {
  Query: {
    name: () => {
      return "burhanuddin"
    },
    age: () => {
      return 500
    },
    posts: () => {
      return posts
    },
    todos: async (parents, args, ctx, info) => {
      try {
        // connectin to faunadb
        const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
        // getting todos from faunadb 
        const response = await adminClient.query(
          q.Map(q.Paginate(q.Match(q.Index('get_all_by_tasks'))), q.Lambda((x) => q.Get(x)))
        );
        const todos = response.data.map((res) => {
          return { id: res.ref.id, task: res.data.task, status: res.data.status }

        });
        return todos



      } catch (error) {
        console.log(error)
      }

    },


  },
  Mutation: {
    addTodos: async (parents, args, ctx, info) => {
      console.log("hello", args)
      try {
        const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET });
        console.log(args)
        //Create Task in FaunaDB
        const result = await adminClient.query(
          q.Create(
            q.Collection('todos'), { data: { task: args.input.task, status: true } }

          )
        );
        const data = {
          id: result.ref.id,
          ...result.data,
          // task: result.data.task,
          // status: result.data.status
        }
        return data

      } catch (error) {
        console.log(error);
      }
    },
    deleteTodos: async (parents, args, ctx, info) => {
      try {
        var adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET });
        //const findIndex = todos.findIndex((todos)=> todos.id ===args.input.id)
        //if (findIndex === -1) {
        //throw new Error('todos not found')
        //}
        const response = await adminClient.query(
          q.Delete(q.Ref(q.Collection('todos'), args.input.id)));

        const data = {
          id: response.ref.id,
          ...response.data,
        }
        return data

      } catch (error) {
        console.log(error);
      }
    },
    updateTodos: async (parents, args, ctx, info) => {
      try {
        var adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET });
        const response = await adminClient.query(
          q.Update(
            q.Ref(q.Collection('todos'), args.input.id), { data: { task: args.input.task } }
          )
        )
        const updatedtodos = {
          id: response.ref.id,
          ...response.data,
        }
        return updatedtodos

      } catch (error) {
        console.log(error);
      }
    }






  },
}



const server = new ApolloServer({
  typeDefs,
  resolvers,
})


const handler = server.createHandler()



module.exports = { handler }
