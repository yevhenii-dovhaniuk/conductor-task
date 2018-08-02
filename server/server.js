const express =  require('express');
const req = require('request');

const app = express();
const port = 3001;

const GITHUB_API_URL = 'https://api.github.com';

app.get('/users/:typedUserName', (request, response) => {
    req(`${GITHUB_API_URL}/users/${request.params.typedUserName}`, {
    headers: {
        'User-Agent': 'Github-accounts-viewer'
    }
}).pipe(response);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});