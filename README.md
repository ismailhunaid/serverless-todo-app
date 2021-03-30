step continues ...

step 1
gatsby with netlify serverless functions
installation
npm install -g gatsby-cli
gatsby new [projectName] [url]
gatsby develop
then
signup to netlify
npm install -g yarn
npm install -g netlify-cli
then
netlify.toml file on the root we dont need toml file if we are using netlify dev only it works without toml file 
netlify login
netlify logout
netlify dev --live
netlify link
netlify unlink
netlify deploy --prod
netlify status
then CICD with github and netlify will do CICD for us . This is  automatic process of deploying
go to github ,
make a repo of you project connect this repo with netlfy dashboard then it will done CICD for us 
we can deploy react and gatsby both
but i am practicing here for gatsby only 
[build]
command="yarn build"
publish="build/"
publish="public/"
functions="functions/"

step 2 move forward to netlify serverless functions how we can add serverside code in single place 
1) create a folder and name it  as functions
2) in toml file type functions="functions/"
2) type command => netlify functions:create hello
3)  [build]
        command="yarn build"
        publish="build/"
        publish="public/"
        functions="functions/"
4) check this 
http://localhost:8888/.netlify/functions/hello

5) fetch data from client with useEffect to the server  

step 3 now add faunaDb to serverless functions
 refer to project 12  for faunadb with serverless crud APP only no graphQL 
here is the installation guide only


1) serverless + faunaDB CRUD Application
2) npm install faunadb  fauna db driver installation
3) const faunadb = require("faunadb") 
4) q = faunadb.query
5) const adminClient = new faunadb.Client ({ secret: "" })>
6) const serverClient = new faunadb.Client({ secret: "" })
7) use full links
8) npm init inside functions directory 
9) crud app using serverless and faunadb and gatsby.js 
10) first i have done hard coded crud for testing then using gatsby client for crud 
11) hard coded server side done 
12) moving toward dynamic way from client side 
13) crud operation from gatbsy client 
14) read done
15) addCountries done
16) delete 
17) update is pending 

https://github.com/panacloud-modern-global-apps/jamstack-serverless
link https://docs.fauna.com/fauna/current/tutorials/crud?lang=javascript
https://www.netlify.com/docs/functions/#the-handler-method
https://docs.fauna.com/fauna/current/drivers/javascript

 step 4 now add GraphQl + faunaDB + serverless + Gatsby 
  see panacloud repo step 23 and 23 for syntax of runtime query provider wrap root element
 step 4 is in project 13 

1)  repeat above steps to set project
2)  create netlify.toml file
3)  functions folder create
4)  faunadb and serverless functions are done 
5)  now add grapghQl to our serverless functions 
6)  we need apollo client and apollo server to use graphQl  on run time not build time here we can use graphQl on build time also 
6)  in gatsby , frontend , we have to do this
7)  npm install @apollo/client
8)  inside src folder make a folder named apollo 
9)  make two files client.js and wrap-root-element.js
10) configure these  two files  see  these two files for configuration
11) provide wrapRootElement  to Two files gatsby-ssr.js and gatbsy-browser.js
12) export {wrapRootElement} from './src/apollo/wrap-root-element' two places 
13) now move to serverless functions
14) we have to work on server side with three things apollo server lamda graphql , serverless, and faunadb so install all this 
15) netlify functions:create todo
16) select apollo-grapghQl from the options
17) it will create apollo-server-lamda template for us 
18) npm install apollo-server-lamda  and graphql
19) npm install faunadb
npm install dotenv 
20) npm init and npm install 
21) we have done with basic configuration and installtion 
22) move on to make a todo app 
23) first done serverside code with faunadb get create update and delete
24) then from client side query all todos , add todos , update and delete todos 
25) workd pending yet 


   




