import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

 export const client = new ApolloClient({
    link: new HttpLink({
        uri:'/.netlify/functions/todos',
        fetch
    }),
    cache: new InMemoryCache()

})




// we have done before in normal apollo client 
// import React from 'react'
// import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'

// const client = new ApolloClient({
//   uri:"http://localhost:4000/",
//   cache: new InMemoryCache()
// });
