# Github Public Profile Viewer

Application consists of two main parts: server (for backend) and src (for frontend).

Server is served from `server/dist` folder because of `Typescript`.

Frontend is grouped by features with intuitive internals naming: each consists of `*.container.ts` `*.reducer.ts` `*.model.ts`, etc. Some components contain `test` folder with corresponding tests.


### API
**Github provides two types of API: REST API (v3) via https://api.github.com and GraphQL API (v4) via https://api.github.com/graphql. 
Application can work with both; corresponding toggle is located at the top-right corner of the page. 
Unfortunately, GraphQL API requires Authentication so any user who wants to use GraphQL API should generate corresponding `Personal access token` (see GraphQL section)**

### Install dependencies
```
npm i
```

### Run
```
npm start
```

or

```
npm run start:server
npm run start:client
```

### Using GraphQL API

1) Go to [GitHub Help Page](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and generate `Personal Access token`
2) Paste generated token value to `/server/config/token/personal-auth-token.ts`
3) Start server
4) Open main page and select checkbox `Use GraphQL API` at the top-right corner or the page
5) Excellent! You are now using `GraphQL API` for all data fetching!
* you can always return to http api simply unchecking `Use GraphQL API` from step 4. No server/client restarts required :D 


### Test
```
npm test
```

There are tests for `Repo` and `Suggestions` components. Both contain `reducer`, `component` and `action` tests.

### Tools used:

##### Server-side:
* nodejs + typescript
* express
* graphql-request

##### Frontend: 
*initially created from `create-react-app` with further adjustments*
* React + typescript
* Redux (redux-thunk, redux-logger, redux-actions, connected-react-router)
* React Router v4
* webpack 4
* lodash
* post-css
* **CSS grid** and CSS flex

##### Testing:
* bundled with `create-react-app` Jest + extra added Enzyme

##### Code style and formatting:
* ts-lint
* tsconfig
* prettier (as IDEA plugin)
 